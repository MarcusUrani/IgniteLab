import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oov6h40jlz01xxhe9j54a3/master',
  cache: new InMemoryCache(),
})