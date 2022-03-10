import { createContext, useState } from 'react'
import Avatar from '../assets/user.png'

const UserContext = createContext(null)

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    id: '',
    url: Avatar,
    token: ''
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
