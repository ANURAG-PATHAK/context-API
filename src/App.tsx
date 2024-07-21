import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
export default function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider >
  )
}
