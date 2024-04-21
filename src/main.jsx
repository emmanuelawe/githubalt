import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ErrorBoundary } from "react-error-boundary";
import ErrorUI from '../components/ErrorUI.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ErrorBoundary FallbackComponent={ErrorUI}>
    <App />
  </ErrorBoundary>
  </React.StrictMode>,
)
