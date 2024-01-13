import React from 'react';

class Book extends React.Component {

    render() {
        return <div>
            <h2>{this.props.book.title}</h2>
            <h4>{this.props.book.author}</h4>
        </div>
    }
}

export default Book;

<div class="col-lg-4 col-sm-6 mb-4">
{/* <!-- Portfolio item 1--> */}
<div class="portfolio-item">
    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
        </div>
        <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
    </a>
    <div class="portfolio-caption">
        <div class="portfolio-caption-heading">Threads</div>
        <div class="portfolio-caption-subheading text-muted">Illustration</div>
    </div>
</div>
</div>