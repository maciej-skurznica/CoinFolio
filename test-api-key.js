#!/usr/bin/env node
/**
 * Test script to verify CoinGecko API key is working
 * Run with: node test-api-key.js
 */

require('dotenv').config();
const https = require('https');

const apiKey = process.env.REACT_APP_COINGECKO_API_KEY;

console.log('🔍 Testing CoinGecko API Configuration\n');
console.log('API Key Status:', apiKey && apiKey !== 'your_api_key_here' ? '✅ Set' : '❌ Not set or placeholder');

if (apiKey && apiKey !== 'your_api_key_here') {
  console.log('API Key (first 10 chars):', apiKey.substring(0, 10) + '...');
  console.log('\n📡 Testing API call with your key...\n');

  const options = {
    hostname: 'api.coingecko.com',
    path: '/api/v3/ping',
    method: 'GET',
    headers: {
      'x-cg-demo-api-key': apiKey
    }
  };

  const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('Status:', res.statusCode);
      console.log('Response:', data);

      if (res.statusCode === 200) {
        console.log('\n✅ SUCCESS! Your API key is working correctly.');
      } else {
        console.log('\n❌ API call failed. Check your API key.');
      }
    });
  });

  req.on('error', (error) => {
    console.error('❌ Error:', error.message);
  });

  req.end();
} else {
  console.log('\n⚠️  Please update .env file with your actual API key:');
  console.log('   REACT_APP_COINGECKO_API_KEY=CG-your-actual-key-here\n');
}
