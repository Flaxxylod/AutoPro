import { createRoot } from 'react-dom/client'
import Landing from './Routes/Landing/Landing.jsx'
import { Provider } from 'react-redux'

import { store } from './store/index.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </Provider>,
)
