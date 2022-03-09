import ReactDOM from 'react-dom'
import App from './App'
import './style.scss'
import { createUploadLink } from 'apollo-upload-client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: 'http://localhost:4000/graphql' })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
