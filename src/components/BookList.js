import React from 'react';

class BookList extends React.Component {

    render() {        
        console.log(this.props.books);
        return <div>BookList</div>
    }

}

export default BookList;