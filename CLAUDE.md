# CoinFolio - Cryptocurrency Portfolio & Market Tracking Application

## Project Overview

CoinFolio is a modern cryptocurrency portfolio and market tracking web application built with React and TypeScript. It allows users to track cryptocurrency prices, view detailed coin information, analyze market charts, and manage their crypto portfolio.

**Key Features:**
- Real-time cryptocurrency price tracking
- Individual coin detail pages with charts and market data
- Portfolio management functionality
- Currency converter
- Dark/Light theme support
- Infinite scroll for coin listings
- Responsive design with skeleton loading states

## Technology Stack

### Core Technologies
- **Framework:** React 18.2.0
- **Language:** TypeScript 4.8.4 (recently migrated from JavaScript)
- **Build Tool:** Create React App with react-scripts 5.0.1
- **State Management:** Redux Toolkit 1.8.6 with Redux Persist 6.0.0
- **API Layer:** RTK Query (built into Redux Toolkit)
- **Routing:** React Router DOM 5.3.3

### Key Libraries
- **Styling:** Styled Components 5.3.5
- **HTTP Client:** Axios 0.27.2
- **Charts:** Chart.js 3.9.1 with react-chartjs-2
- **Notifications:** React Toastify 9.0.8
- **UI Components:** React Icons, Heroicons, React Loading Skeleton
- **Testing:** Jest, React Testing Library

### External API
- **CoinGecko API:** `https://api.coingecko.com/api/v3/`

## Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm start
```
Runs the app at **http://localhost:3000**

### Build for Production
```bash
npm run build
```
Creates optimized production build in `/build` directory

### Run Tests
```bash
npm test
```
Launches Jest test runner in interactive watch mode

**Note:** Testing infrastructure is configured but test files are not yet implemented.

## Project Structure

```
/home/user/CoinFolio/
├── public/                    # Static assets
│   ├── index.html            # HTML template
│   └── manifest.json         # PWA manifest
├── src/
│   ├── index.tsx             # React entry point (Redux Provider setup)
│   ├── App.tsx               # Main app component (routing & theming)
│   ├── components/           # 30+ reusable React components
│   │   ├── Navbar/           # Top, Middle, Bottom navbar sections
│   │   ├── Table/            # Cryptocurrency table display
│   │   ├── Charts/           # Chart visualization components
│   │   ├── SearchBar/
│   │   ├── CoinConverter/
│   │   └── ...               # 25+ more components
│   ├── pages/                # Page-level components
│   │   ├── Home/             # Main coins listing page
│   │   ├── Coin/             # Individual coin detail page
│   │   ├── Portfolio/        # Portfolio tracking page
│   │   └── NotFound/         # 404 page
│   ├── store/                # Redux state management
│   │   ├── index.ts          # Store configuration with persistence
│   │   ├── appSlice.ts       # App settings (dark mode, etc.)
│   │   ├── chartsSlice.ts    # Chart state
│   │   ├── tableSlice.ts     # Table sorting/filtering
│   │   ├── coinGeckoApiSlice.ts  # RTK Query API endpoints
│   │   └── hooks.ts          # Typed Redux hooks
│   ├── hooks/                # Custom React hooks
│   │   ├── useFetch.ts       # Generic data fetching with Axios
│   │   ├── useLocalStorageAndState.ts
│   │   └── useOutsideClick.ts
│   ├── styles/               # Global styles and themes
│   │   ├── global.ts         # Global styled components
│   │   └── themes.ts         # Dark/Light theme configurations
│   ├── types/                # TypeScript type definitions
│   │   ├── AppState.ts
│   │   ├── Coin.ts
│   │   └── TableCoinProps.ts
│   ├── utils/                # Utility functions
│   │   ├── bigNumberConvertor.ts
│   │   ├── displayBigNumber.ts
│   │   ├── currencySymbol.ts
│   │   └── ...               # Number formatting & localStorage utils
│   └── ui/                   # Styled UI components
│       └── Div.ts
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
└── rcci.config.js            # Component generator config
```

## Application Architecture

### Entry Point Flow
1. **public/index.html** - HTML template with `<div id="root">`
2. **src/index.tsx** - Mounts React app with Redux Provider and PersistGate
3. **src/App.tsx** - Configures routing, theme provider, and notifications

### Routes
- `/` or `/coins` → Home page (cryptocurrency listing)
- `/coins/:coin` → Coin details page
- `/portfolio` → Portfolio management
- `*` → 404 Not Found

### State Management

**Redux Slices:**
- `appSlice` - App-wide settings (dark mode toggle)
- `chartsSlice` - Chart display state and timeframe
- `tableSlice` - Table sorting and filtering
- `searchBarSlice` - Search functionality
- `coinConverterSlice` - Currency converter state
- `coinGeckoApiSlice` - RTK Query API endpoints

**Persistence:**
- Redux Persist stores state in browser `localStorage`
- Persisted slices: `app`, `charts.activeButton`

### Component Pattern

Components follow a consistent structure:
```
ComponentName/
├── ComponentName.tsx         # Component logic
├── ComponentName.styles.ts   # Styled components
└── index.ts                  # Named export
```

## API Integration

### RTK Query Endpoints
Defined in `src/store/coinGeckoApiSlice.ts`:
- `getGlobalData()` - Fetch global market data
- `getCoinData(coinId)` - Fetch specific coin details

### Custom Hooks
- `useFetch(url)` - Generic data fetching hook using Axios
- Handles loading states and error notifications via React Toastify

## Development Guidelines

### TypeScript
- Project recently converted to TypeScript (commits CF-11)
- Types defined in `src/types/` directory
- Use typed Redux hooks from `src/store/hooks.ts`:
  - `useStoreSelector` instead of `useSelector`
  - `useAppDispatch` instead of `useDispatch`

### Styling
- Use Styled Components for all styling
- Theme variables defined in `src/styles/themes.ts`
- Global styles in `src/styles/global.ts`
- Support both dark and light themes

### State Management
- Use Redux Toolkit for state management
- Create slices for feature-specific state
- Use RTK Query for API calls when possible
- Prefer `useFetch` hook for supplementary API calls

### Code Generation
Component scaffolding tool available:
```bash
npx reactcci
```
Configuration in `rcci.config.js`

## Important Notes

### Environment Variables
- `.env` file exists but is currently empty
- Add API keys or configuration here as needed
- Use `REACT_APP_` prefix for custom environment variables

### Browser Support
- **Production:** Modern browsers (>0.2% usage, not dead)
- **Development:** Latest Chrome, Firefox, Safari

### Git Workflow
- Branch naming: `CF-{ticket-number}-description`
- Recent work: TypeScript conversion (CF-11)
- Main branch for production releases

## Common Tasks

### Adding a New Component
1. Create folder in `src/components/ComponentName/`
2. Add `ComponentName.tsx` (component logic)
3. Add `ComponentName.styles.ts` (styled components)
4. Add `index.ts` (export)
5. Import and use in parent component

### Adding a New Page
1. Create folder in `src/pages/PageName/`
2. Follow component pattern above
3. Add route in `src/App.tsx`
4. Add navigation link in appropriate Navbar component

### Adding Redux State
1. Create slice in `src/store/sliceName.ts`
2. Add to store configuration in `src/store/index.ts`
3. Add to persistence config if needed
4. Use typed hooks in components

### Adding a New API Endpoint
1. Add endpoint to `src/store/coinGeckoApiSlice.ts` using RTK Query
2. Or use `useFetch` hook for simpler GET requests

## Troubleshooting

### Port Already in Use
If port 3000 is busy:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm start
```

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Clear CRA cache: `rm -rf node_modules/.cache`

### TypeScript Errors
- Check `tsconfig.json` for compiler options
- Ensure types are imported correctly
- Use `any` sparingly (project is actively being typed)

## Project Metrics

- **Version:** 0.1.0 (pre-release)
- **Total Code:** ~3,665 lines of TypeScript
- **Components:** 30+ functional components
- **Pages:** 4 main pages
- **Repository:** Private

## Resources

- [React Documentation](https://react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Styled Components Documentation](https://styled-components.com/)
- [CoinGecko API Documentation](https://www.coingecko.com/en/api/documentation)
- [Create React App Documentation](https://create-react-app.dev/)
