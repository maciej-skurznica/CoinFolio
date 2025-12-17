# CoinFolio

> A modern cryptocurrency portfolio and market tracking web application

CoinFolio is a feature-rich React application that provides real-time cryptocurrency market data, detailed coin analytics, portfolio management, and interactive charts. Track prices, analyze trends, and manage your crypto investments all in one place.

## Features

- **Real-time Market Data** - Live cryptocurrency prices, market cap, and trading volume
- **Coin Discovery** - Browse trending coins, top gainers, and losers
- **Detailed Analytics** - Individual coin pages with comprehensive market data and historical charts
- **Portfolio Tracking** - Manage and monitor your cryptocurrency investments
- **Currency Converter** - Convert between different cryptocurrencies and fiat currencies
- **Dark/Light Theme** - Customizable theme support for better viewing experience
- **Infinite Scroll** - Seamless browsing through extensive coin listings
- **Responsive Design** - Optimized for desktop and mobile devices

## Screenshots

![CoinFolio Home](docs/screenshot-home.png)
![Coin Details](docs/screenshot-coin.png)
![Portfolio](docs/screenshot-portfolio.png)

## Tech Stack

### Frontend

- **React** 18.2.0 - UI framework
- **TypeScript** 4.8.4 - Type-safe JavaScript
- **Redux Toolkit** 1.8.6 - State management
- **RTK Query** - Data fetching and caching
- **React Router DOM** 5.3.3 - Client-side routing
- **Styled Components** 5.3.5 - CSS-in-JS styling

### UI & Visualization

- **Chart.js** 3.9.1 with react-chartjs-2 - Interactive charts
- **React Icons** & **Heroicons** - Icon libraries
- **React Loading Skeleton** - Loading states
- **React Toastify** - Notifications

### Data Persistence

- **Redux Persist** 6.0.0 - Persistent state storage
- **localStorage** - Client-side data persistence

### API

- **CoinGecko API** - Cryptocurrency market data
- **Axios** 1.13.2 - HTTP client

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/coinfolio.git
cd coinfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file (optional):

```bash
cp .env.example .env
```

### Development

Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build

Create a production build:

```bash
npm run build
```

The optimized build will be in the `/build` directory.

### Testing

Run the test suite:

```bash
npm test
```

## Project Structure

```plaintext
CoinFolio/
├── public/                     # Static assets
│   ├── index.html             # HTML template
│   └── manifest.json          # PWA manifest
├── src/
│   ├── index.tsx              # React entry point
│   ├── App.tsx                # Main app component
│   ├── components/            # Reusable React components
│   │   ├── Navbar/           # Navigation components
│   │   ├── Table/            # Cryptocurrency table
│   │   ├── Charts/           # Chart components
│   │   ├── SearchBar/        # Search functionality
│   │   ├── CoinConverter/    # Currency converter
│   │   └── ...               # 30+ components
│   ├── pages/                # Page-level components
│   │   ├── Home/             # Main coins listing
│   │   ├── Coin/             # Coin detail page
│   │   ├── Portfolio/        # Portfolio management
│   │   └── NotFound/         # 404 page
│   ├── store/                # Redux state management
│   │   ├── index.ts          # Store configuration
│   │   ├── appSlice.ts       # App settings
│   │   ├── chartsSlice.ts    # Chart state
│   │   ├── tableSlice.ts     # Table state
│   │   └── coinGeckoApiSlice.ts  # API endpoints
│   ├── hooks/                # Custom React hooks
│   │   ├── useFetch.ts       # Data fetching
│   │   ├── useLocalStorageAndState.ts
│   │   └── useOutsideClick.ts
│   ├── types/                # TypeScript definitions
│   ├── utils/                # Utility functions
│   ├── styles/               # Global styles & themes
│   └── ui/                   # Styled UI components
├── package.json
├── tsconfig.json
└── README.md
```

## Usage

### Browsing Cryptocurrencies

Navigate to the home page to view a list of cryptocurrencies sorted by market cap. Use the search bar to find specific coins or filter by various criteria.

### Viewing Coin Details

Click on any cryptocurrency to view detailed information including:

- Current price and price changes
- Market capitalization and volume
- Historical price charts (24h, 7d, 30d, 1y)
- Supply information
- Additional market data

### Managing Portfolio

Add cryptocurrencies to your portfolio to track your investments. The portfolio page shows:

- Total portfolio value
- Individual coin holdings
- Profit/loss calculations
- Performance metrics

### Currency Conversion

Use the built-in converter to quickly calculate conversions between different cryptocurrencies and fiat currencies.

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_BASE_URL=https://api.coingecko.com/api/v3
REACT_APP_DEFAULT_CURRENCY=usd
```

### Theme Customization

Themes are defined in [src/styles/themes.ts](src/styles/themes.ts). You can customize colors, fonts, and other design tokens.

## API Integration

CoinFolio uses the CoinGecko API for cryptocurrency data. The integration is handled through RTK Query in [src/store/coinGeckoApiSlice.ts](src/store/coinGeckoApiSlice.ts).

### Key Endpoints

- `/coins/markets` - List of coins with market data
- `/coins/{id}` - Detailed coin information
- `/global` - Global cryptocurrency market data
- `/coins/{id}/market_chart` - Historical chart data

## State Management

The application uses Redux Toolkit for state management with the following slices:

- **appSlice** - App-wide settings (theme, preferences)
- **chartsSlice** - Chart display configuration
- **tableSlice** - Table sorting and filtering
- **searchBarSlice** - Search functionality
- **coinConverterSlice** - Currency converter state
- **coinGeckoApiSlice** - API data and caching

State is persisted to localStorage using Redux Persist.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code structure and naming conventions
- Use TypeScript for all new code
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [CoinGecko](https://www.coingecko.com/) for providing the cryptocurrency API
- [Create React App](https://create-react-app.dev/) for the build configuration
- All the open-source libraries that make this project possible

## Contact

For questions or feedback, please open an issue on GitHub.

---

Built with ❤️ using React and TypeScript
kjk
jhgjhg
gjhgj
