import mongoose from 'mongoose';
import authorModel from './models/author.js';

const authors = [{
  id: '21',
  name: 'JK Rowling',
  age: 50,
  books: ['Harry Potter and the Goblet of Fire', 'Harry Potter and the Prisoner of Azkaban']
}, {
  id: '34',
  name: 'George RR Martin',
  age: 70,
  books: ['GOT - Song of Ice and Fire', 'GOT - A Dance with Dragons']
}, {
  id: '12',
  name: 'Stephen King',
  age: 60,
  books: ['The Green Mile', 'Carrie']
}];

const resolvers = {
  Query: {
    authors: (root, {age}) => authorModel.find({age: age}),
    author: (root, {id}) => authorModel.findOne({id: id})
  },
  Mutation: {
    addAuthor: (root, {name, age, books}) => {
      const author = new authorModel({
        age: age,
        name: name,
        books: books
      });
      return author.save();
    },
    deleteAuthor: (root, {id}) => authorModel.findOneAndRemove({id: id}),
    updateAuthor: (root, {id, name}) => authorModel.findOneAndUpdate({id: id}, {name: name})
  }
};

export default resolvers;
