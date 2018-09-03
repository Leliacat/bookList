import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Booklist extends Component{

    renderList(){
        return this.props.books.map((book) => {
            return(
                <li 
                    onClick = {() => this.props.selectBook(book)}
                    key = {book.title} 
                    className = "list-group-item list-group-item-action"
                >{book.title}
                </li>
            )
        })
    }

    render(){
        return(
            <ul className="list-group col-sm-5 list-group-flush">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned will show up as props inside of Booklist
    return{
        books: state.books
    }
}

//anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //whenever select book is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}


//Promote BookList from a component to a container. It needs to know about this new dispatch method, selectBook.
//Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);