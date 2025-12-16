# CoinFolio AI Coding Instructions

## Project Context

CoinFolio is a cryptocurrency portfolio tracker built with **React 18**, **TypeScript**, **Redux Toolkit**, and **Styled Components**. It uses **CoinGecko API** for real-time data.

## Architecture & Patterns

### State Management (Redux Toolkit)

- **Store**: Located in `src/store/index.ts`. Uses `redux-persist` for `app`, `portfolio`, and `charts` slices.
- **Slices**: Defined in `src/store/*Slice.ts`.
- **API**: Uses **RTK Query** defined in `src/store/coinGeckoApiSlice.ts`.
  - **Pattern**: Use `useGetGlobalDataQuery`, `useGetCoinDataQuery` hooks in components.
- **Hooks**: Always use typed hooks `useStoreSelector` and `useAppDispatch` from `store/hooks.ts` instead of standard Redux hooks.

### Component Structure

- **Location**: `src/components/`
- **Pattern**: Folder-per-component structure:
  ```
  src/components/MyComponent/
  ├── index.ts           # Exports the component
  ├── MyComponent.tsx    # Logic and JSX
  └── MyComponent.styles.ts # Styled-components definitions
  ```
- **Styling**: Use `styled-components`. Define styles in `*.styles.ts` and import them in the component.
  - Access theme variables via `${({ theme }) => theme.variable}`.
  - Themes are defined in `src/styles/themes.ts`.

### Routing

- **Library**: `react-router-dom` (v5).
- **Definition**: Routes are defined in `src/App.tsx` using `<Switch>` and `<Route>`.

### Data Fetching

- **Primary**: RTK Query (`coinGeckoApiSlice.ts`).
- **Configuration**: Base URL is `https://api.coingecko.com/api/v3/`.
- **API Key**: Handled in `prepareHeaders` via `process.env.REACT_APP_COINGECKO_API_KEY`.

## Conventions

### Imports

- **Absolute Imports**: Configured with `baseUrl: "./src"`.
  - ✅ `import { Navbar } from "components";`
  - ✅ `import { useStoreSelector } from "store/hooks";`
  - ❌ `import { Navbar } from "../../components";`

### Naming

- **Components**: PascalCase (e.g., `BitcoinChart`).
- **Slices/Hooks**: camelCase (e.g., `portfolioSlice`, `useLocalStorageAndState`).
- **Styles**: PascalCase for styled components (e.g., `Container`, `Text`).

### UI/UX Patterns

- **Loading States**: Use `react-loading-skeleton` for loading placeholders.
  - Example: `<Skeleton width={60} />` inside components.
- **Theming**: App supports Dark/Light modes. `App.tsx` handles theme switching and passes it to `ThemeProvider` and `SkeletonTheme`.
- **Numbers**: Use `utils/roundToTwoDecimal.ts` for price formatting.
- **Currency**: Use `ValueWithCurrencySymbol` component for displaying monetary values.

## Development Workflow

- **Start**: `npm start` (Runs on port 3000).
- **Test**: `npm test`.
- **Build**: `npm run build`.

## Testing

- **Requirement**: Every component must have a corresponding test file.
- **Location**: Co-located with the component (e.g., `src/components/MyComponent/MyComponent.test.tsx`).
- **Tools**: Use `jest` and `@testing-library/react`.
- **Focus**: Test component rendering, user interactions, and state changes. Mock external dependencies like API calls and Redux store where appropriate.

## Code Quality

- **Standards**: Adhere to industry best practices for clean, maintainable, and efficient code.
- **TypeScript**: Enforce strict typing; avoid `any`. Use interfaces/types defined in `src/types/` or locally.
- **Structure**: Keep components small and focused (Single Responsibility Principle).
- **Performance**: Optimize for rendering performance (use `useMemo`, `useCallback` appropriately).
