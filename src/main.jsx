import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './Router/Router'
import SkilloraProvidor from './Context/SkilloraProvidor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <SkilloraProvidor>
    <RouterProvider router={router}/>
   </SkilloraProvidor>
  </StrictMode>,
)
