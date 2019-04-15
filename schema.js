import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers.js';

// const typeDefs = `type Person {
//   age: Int
//   name: String
//   gender: String
// }`;

const typeDefs = `type Author {
  age: Int
  name: String
  books: [String]
}
  type Query {
    author: [Author]
  }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});
// addMockFunctionsToSchema({schema});

export default schema;
