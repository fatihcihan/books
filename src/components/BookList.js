import React from 'react';
import Book from './Book';

class BookList extends React.Component {

    render() {
        const bookList = this.props.books.map((book, i) => {
            return <Book book={book}
                key={i} />
        });
        return <div>{bookList}</div>

    }
}

export default BookList;


// <!-- Portfolio Grid-->
<section class="page-section bg-light" id="portfolio">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                
            </div>
        </div>
    </div>
</section>