import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Roouter.jsx';
import AuthProvider from './Provider/AuthProvider';
import { SearchContextProvider } from './Provider/searchContext';
// import AuthProvider from './Provider/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
   <AuthProvider>
  <SearchContextProvider>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  </QueryClientProvider>
  </SearchContextProvider>
   </AuthProvider>


  </React.StrictMode>,
)
