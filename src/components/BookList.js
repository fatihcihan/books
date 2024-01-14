import React from 'react';
import './BookList.css';
import Book from './Book';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends React.Component {
    // We will use BookContext here
    // static contextType = BookContext;
    render() {

        // console.log(this.context, 'context');
        // const books = this.context;

        return (
            <ThemeContext.Consumer>{
                (contextTheme) => (
                    <BookContext.Consumer>                        
                        {
                            value => {
                                console.log(value)
                                return (
                                    < section className="page-section bg-light" id="portfolio" >
                                        <div className="container">
                                            <div className="text-center">
                                                <h2 className="section-heading text-uppercase">Book App</h2>
                                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                            </div>
                                            <div className="row">
                                                {value.books.map((book, i) => {
                                                    return <Book book={book}
                                                        key={i} />
                                                })}
                                            </div>
                                        </div>
                                    </section>
                                )
                            }
                        }
                    </BookContext.Consumer >
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default BookList;

/* 
<section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Book App</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {books.map((book, i) => {
                            return <Book book={book}
                                key={i} />
                        })}
                    </div>
                </div>
            </section>
  */