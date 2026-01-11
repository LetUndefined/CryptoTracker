# CryptoTracker - Cryptocurrency Price Tracker

A real-time cryptocurrency price tracker built with Vue 3 and TypeScript. Track the top cryptocurrencies and monitor market statistics.

## Features

- **Live Price Tracking**: Real-time prices for top 12 cryptocurrencies
- **Market Statistics**: Total market cap, 24h volume, BTC dominance, and active cryptos
- **Price Changes**: 24-hour percentage changes with visual indicators
- **Manual Refresh**: Update prices on demand

## Tech Stack

- **Vue 3** (Composition API with `<script setup>`)
- **TypeScript** (Strict mode enabled)
- **CoinGecko API** (Free, no API key required)
- **Vanilla CSS** with custom properties
- **Vite** for development and building

## Project Structure

```
crypto-tracker/
├── src/
│   ├── components/
│   │   ├── base/                    # Reusable base components
│   │   │   ├── StatsCard.vue        # Stat display card (used 4×)
│   │   │   ├── LoadingSpinner.vue   # Loading state
│   │   │   └── BaseButton.vue       # Button with variants
│   │   ├── CryptoCard.vue           # Individual crypto card
│   │   └── MarketView.vue           # Market page view
│   ├── composables/
│   │   ├── useCryptoApi.ts          # API service layer
│   │   └── useFormatters.ts         # Number formatting utilities
│   ├── types/
│   │   └── crypto.ts                # TypeScript interfaces
│   ├── assets/
│   │   └── styles.css               # Global styles
│   ├── App.vue                      # Root component
│   └── main.ts                      # App entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build for Production

```bash
npm run build
```

The build will type-check with `vue-tsc` before building.

## How to Use

1. Open the app in your browser
2. View the top 12 cryptocurrencies by market cap
3. See global market statistics at the top
4. Click **Refresh** to update prices manually

## Key Technical Features

### TypeScript Implementation
- **Strict Type Safety**: Full TypeScript with strict mode
- **Interface Definitions**: Comprehensive type definitions for API responses
- **Composables**: Reusable logic with proper typing
- **Component Props/Emits**: Strongly typed component interfaces

### Architecture Patterns
- **Component-Based Design**:
  - 3 reusable base components (StatsCard, BaseButton, LoadingSpinner)
  - Feature components compose base components
  - No code duplication
- **Separation of Concerns**:
  - Components handle UI only
  - Composables handle business logic
  - Types define data structures
- **Composables Pattern**: Reusable `useCryptoApi` and `useFormatters`
- **Computed Properties**: Reactive calculations for market stats
- **Props Down**: Clean component interfaces with typed props
- **Type-Safe Everything**: Typed props and composable returns

### Code Organization
```typescript
// Type definitions
interface Cryptocurrency { ... }
interface GlobalData { ... }

// Composables for reusable logic
export function useCryptoApi() { ... }
export function useFormatters() { ... }

// Components with typed props
interface Props { crypto: Cryptocurrency }
```

## API Used

This project uses the [CoinGecko API](https://www.coingecko.com/en/api) (free tier):
- No API key required
- Rate limit: ~10-50 calls/minute (free tier)

## What This Demonstrates (For Employers)

### Technical Skills
1. **TypeScript Proficiency**: Strict typing, interfaces, generics
2. **Vue 3 Composition API**: Modern Vue patterns with `<script setup>`
3. **API Integration**: RESTful API calls with proper error handling
4. **State Management**: Component state management with refs
5. **Reactive Programming**: Computed properties and reactive data
6. **Code Organization**: Clean architecture with separation of concerns
7. **Type Safety**: End-to-end type safety from API to UI

### Business Logic
- Real-time data fetching
- Data formatting and presentation
- User experience (loading states, error handling)

### Best Practices
- ✅ TypeScript strict mode
- ✅ Component-based architecture (DRY principle)
- ✅ Reusable base components
- ✅ Composables for reusable logic
- ✅ Proper error handling
- ✅ Responsive design
- ✅ Clean component structure
- ✅ Type-safe props and events
- ✅ No `any` types
- ✅ Modular CSS with custom properties
- ✅ Unidirectional data flow

## Design

The UI features a dark theme inspired by modern fintech applications:
- Dark navy background (#0e162a)
- Card-based layout with rounded corners (20px)
- Smooth hover effects and transitions
- Monospace fonts for numbers (JetBrains Mono)
- Clean, professional aesthetic
- Matches your portfolio style

## Browser Support

Works in all modern browsers that support:
- ES2020
- CSS custom properties
- CSS Grid and Flexbox

## Future Enhancements

Potential features to add:
- Price charts with Chart.js
- Search and filter functionality
- Portfolio tracking
- Price alerts
- More detailed coin information
- Watchlist functionality
- Dark/light mode toggle
- Auto-refresh prices

## License

Free to use for portfolio and learning purposes.
# CryptoTracker
