import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import "./common.css"
import { store } from './store/index.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Routes/Root.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </Provider>,
)
