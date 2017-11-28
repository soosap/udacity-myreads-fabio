import * as React from 'react';
import Book from '../src/Book.js'

const BookShelf = ({shelfTitle, children}) => {
  return (


    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {children}
        </ol>
      </div>
    </div>


  )
  }

  export default BookShelf;
