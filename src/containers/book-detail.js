import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
    render(){
        if(!this.props.book){
            return <div className='book_details'><h4>Select a book to get started</h4></div>
        }
        return(
            <div className='book_details'>
                <h6>Details for:</h6>
                <div><h3>{this.props.book.title}</h3>({this.props.book.date})</div>
                <div>Pages: {this.props.book.pages}</div>
                <div>Author: {this.props.book.author}</div>
                <img className='book_img' src={this.props.book.img} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);