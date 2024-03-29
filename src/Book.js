import * as React from 'react';

const Book = ({author, title, backgroundurl, id, shelf, moveBook}) => {
console.log(shelf);
  return (

    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${backgroundurl}")`}}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={(event) => moveBook(id, shelf, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>

)
}

export default Book;
