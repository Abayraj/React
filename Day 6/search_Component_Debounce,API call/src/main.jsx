import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { NamePassProvider } from './context/NamePass.jsx'
import { TestContextprovider } from './context/TestContext.jsx'
import {AnotherMessageProvider} from './context/anotherMessage.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>



<TestContextprovider>
    <NamePassProvider>
<AuthProvider>
  <AnotherMessageProvider>
    <App/>  
    </AnotherMessageProvider>
</AuthProvider>
</NamePassProvider>
    </TestContextprovider>

  

  </React.StrictMode>,
)
