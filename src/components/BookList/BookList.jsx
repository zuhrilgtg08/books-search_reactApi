import React from "react";
import { useGlobalContext } from "../../App.js";
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import CoverImg from "../../images/cover_404.jpg";
import "./BookList.css";

const BookList = () => {
    const {books, loading, resultTitle} = useGlobalContext();
    const bookWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            // remove dari alamat /works ke get by id buku
            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : CoverImg
        }
    });

    if (loading) return <Loading />

    return (
        <section className="booklist">
            <div className="container">
                <div className="section-title">
                    <h2>{resultTitle}</h2>
                </div>
                <div className="booklist-content grid">
                    {
                        //pecah dari i ke 0 - 30 lalu mapping
                        bookWithCovers.slice(0, 30).map((item, index) => {
                            return (
                                <Book key = {index} {...item} />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default BookList;