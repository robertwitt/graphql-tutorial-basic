import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

// const typeDefs = `type Person {
//   age: Int
//   name: String
//   gender: String
// }`;

const typeDefs = `type Author {
  age: Int
  name: String
  Books: [String]
}
  type Query {
    author: [Author]
  }
`;

const schema = makeExecutableSchema({typeDefs});
addMockFunctionsToSchema({schema});

export default schema;
