import React from 'react'

// Books Component Function
export const Books = ({ title = "No Title provided", author = "Not Available", noOfPages = 0, freeBookMark }) => {
    return (
        // Returning attributes of books as JSX
        <section>
            <h1>{title}</h1>
            <p>by: {author}</p>
            <p>Pages: {noOfPages} pages</p>
            <p>Free Bookmark today: {freeBookMark ? 'yes!' : 'no'}</p>
        </section>
    )
}