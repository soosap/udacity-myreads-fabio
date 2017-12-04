import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from '../src/Book.js'
import BookShelf from '../src/BookShelf.js'

const books = [
  {
    "id":"HarperMockingbird",
    "title":"To Kill a Mockingbird",
    "author":"Harper Lee",
    "backgroundurl":"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
  },
  {
    "id":"EnderCard",
    "title":"Orson Scott Card",
    "author":"Ender's Game",
    "backgroundurl":"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
  },
  {
    "id":"David1776",
    "title":"1776",
    "author":"David McCullough",
    "backgroundurl":"http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
  },
  {
    "id":"J.K.Stone",
    "title":"Harry Potter and the Sorcerer's Stone",
    "author":"J.K. Rowling",
    "backgroundurl":"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
  },
  {
    "id":"J.R.R.Hobbit",
    "title":"The Hobbit",
    "author":"J.R.R. Tolkien",
    "backgroundurl":"http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
  },
  {
    "id":"SeussGo",
    "title":"Oh, the Places You'll Go!",
    "author":"Seuss",
    "backgroundurl":"http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
  },
  {
    "id":"MarkSawyer",
    "title":"The Adventures of Tom Sawyer",
    "author":"Mark Twain",
    "backgroundurl":"http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
  }
]

class BooksApp extends React.Component {
  state = {

    currentlyReading: ["HarperMockingbird","EnderCard"],
    wantToRead: ["David1776","J.K.Stone"],
    read: ["J.R.R.Hobbit","SeussGo","MarkSawyer"],


    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

moveBook = (id, from, to) => {
  const index = this.state[from].indexOf(id);
  const updatedFrom = this.state[from].splice(index, 1);
  const updatedTo = this.state[to].push(id);
  this.setState((state) =>({ [from]: updatedFrom, [to]: updatedTo }))


}

render() {

const currentlyReadingObjects = books.filter(book => this.state.currentlyReading.includes(book.id))
console.log(currentlyReadingObjects);
const wantToReadObjects = books.filter(book => this.state.wantToRead.includes(book.id))
const readObjects = books.filter(book => this.state.read.includes(book.id))

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelfTitle="Currently Reading" shelfId="currentlyReading">
                  {currentlyReadingObjects.map(book => <Book key={book.id} author={book.author} title={book.title} backgroundurl={book.backgroundurl} shelf="currentlyReading" moveBook={this.moveBook}/>)}
                </BookShelf>
                <BookShelf shelfTitle="Want to Read" shelfId="wantToRead">
                  {wantToReadObjects.map(book => <Book key={book.id} author={book.author} title={book.title} backgroundurl={book.backgroundurl} shelf="wantToRead" moveBook={this.moveBook}/>)}
                </BookShelf>
                <BookShelf shelfTitle="Read" shelfId="read">
                  {readObjects.map(book => <Book key={book.id} author={book.author} title={book.title} backgroundurl={book.backgroundurl} shelf="read" moveBook={this.moveBook}/>)}
                </BookShelf>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
