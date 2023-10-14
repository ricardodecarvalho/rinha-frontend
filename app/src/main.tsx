import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import App from './App.tsx'
import ErrorFallback from './components/ErrorFallback/ErrorFallback.tsx'
import { GlobalStyle } from './styles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GlobalStyle />
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
