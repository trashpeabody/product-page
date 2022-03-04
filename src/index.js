import ReactDOM from 'react-dom'
import App from './App'
import './style.scss'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, gql } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000'
  })
})

const query = gql`
  query {
    allProducts {
      name
      description
      price {
        basePrice
        hasDiscount
        discount
      }
      id
    }
  }
`

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
