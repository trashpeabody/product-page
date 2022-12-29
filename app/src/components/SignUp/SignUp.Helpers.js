import { gql, useMutation } from '@apollo/client'
import UserContext from '../../context/UserContext'
import { useContext } from 'react'

export const useUser = () => {
  const ADD_USER = gql`
    mutation createUser($name: String!, $password: String!, $url: String) {
      addUser(
        name: $name, 
        password: $password,
        url: $url
      ) {
        name
        id
        url
        token
      }
    }
  `

  const { setUser } = useContext(UserContext)

  const [createUser] = useMutation(ADD_USER, {
    onCompleted: ({ addUser }) => {
      window.localStorage.setItem(
        'token', JSON.stringify(addUser.token))
      setUser(addUser)
    }
  })

  return createUser
}

export const updateClasses = (target) => {
  if (target.value === '') {
    target.classList.remove('filled')
    target.nextElementSibling.classList.remove('filled')
  } else {
    target.classList.add('filled')
    target.nextElementSibling.classList.add('filled')
  }
}
