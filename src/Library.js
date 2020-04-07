import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Importing Books, Hiring and Not hiring Component functions
import { Books } from './Books'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

// Library Component
class Library extends Component {
    // Initializing state variables
    state = {
        open: true,
        freeBookMark: true,
        hiring: true,
        data: [],
        loading: false
    }

    // Lifecycle method : Executed once Library component is added to the DOM
    componentDidMount() {
        this.setState({ loading: true })
        // Using browser function fetch() to get data from API.
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({ data, loading: false }))
    }

    // Function to toggle open state variable
    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    // Render Function
    render() {
        const { books } = this.props
        return (
            <div>
                {/* Rendering Hiring , NotHiring component according to hiring state variable value */}
                {this.state.hiring ? <Hiring /> : <NotHiring />}

                {/* Rendering data from API */}
                {this.state.loading ? "loading..." :
                    <div>
                        {this.state.data.map((product) => {
                            return (
                                <div key={product.id}>
                                    <h3>Library product of the week!</h3>
                                    <h4>{product.name}</h4>
                                    <img alt={product.name} src={product.image} height={100} />
                                </div>
                            )
                        })}
                    </div>
                }

                {/* Displaying message according to open state variable value */}
                <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {/* MApping data from bookList array */}
                {
                    books.map(
                        (book, i) => <Books key={i}
                            title={book.title}
                            author={book.author}
                            noOfPages={book.noOfPages}
                            freeBookMark={this.state.freeBookMark} />
                    )
                }
            </div >
        )
    }
}

// Using propTypes to check if the objects are of mentioned data types. 
// If not an error would appear on the console
Library.propTypes = {
    books: PropTypes.array
}

Books.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    noOfPages: PropTypes.number,
    freeBookMark: PropTypes.bool
}

// Exporing Library component
export default Library