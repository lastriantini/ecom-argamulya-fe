import { useState } from 'react'
import AdminRoutes from './routes/AdminRoutes';
import CustomerRoutes from './routes/CustomerRoutes';
import GuestRoutes from './routes/GuestRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GuestRoutes/>
      <CustomerRoutes/>
      <AdminRoutes/>
    </>
  )
}

export default App
