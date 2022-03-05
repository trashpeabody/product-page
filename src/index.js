import ReactDOM from 'react-dom'
import App from './App'
import './style.scss'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000'
  })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
