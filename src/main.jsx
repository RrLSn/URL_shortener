import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShortenUrlProvider } from 'react-shorten-url'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ShortenUrlProvider config={{accessToken: 'bitly_access_token'}}> */}
    <App />
    {/* </ShortenUrlProvider> */}
  </React.StrictMode>,
)
