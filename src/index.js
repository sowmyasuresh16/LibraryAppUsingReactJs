import React from 'react'
import ReactDom from 'react-dom'
// Importing Library component
import Library from './Library'

// Array of books data
let bookList = [
  {
    title: 'The Deception Point',
    author: 'Dan Brown',
    noOfPages: '420'
  },
  {
    title: 'The Famous Five',
    author: 'Enid Bliton',
    noOfPages: '210'
  },
  {
    title: 'A walk to remember',
    author: 'Nicholas Sparks',
    noOfPages: '520'
  }
]

// Rendering Library component 
ReactDom.render(
  <Library books={bookList} />,
  document.getElementById('root')
)

