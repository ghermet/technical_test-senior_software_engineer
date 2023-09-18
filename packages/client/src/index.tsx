import { ApolloProvider } from '@apollo/client'
import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import client from './graphql/client'
import './styles/globals.generated.css'

const App = React.lazy(() => import('./components/App'))

const root = createRoot(document.getElementById('root'))

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </ApolloProvider>
)
