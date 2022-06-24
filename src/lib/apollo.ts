import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rl8pw416mr01yx6j87fjyo/master',
  cache: new InMemoryCache()
})



// https://api-sa-east-1.graphcms.com/v2/cl4nzw15v07l401z35qdbe68i/master - funciona