import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import CoverImg from "../../images/cover_404.jpg";
import "./DetailBooks.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const DetailsBook = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        async function getBookDetails() {
            try {
                // tangkap response
                const response = await fetch(`${URL}${id}.json`);
                const data = await response.json();
                console.log(data);

                if(data) {
                    const {description, title, covers, subject_places, subject_times, subjects} = data;
                    const newBook = {
                        description: description ? description.value : "Sory, description not found",
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : CoverImg,
                        subject_places: subject_places ? subject_places.join(", ") : "Subject places not found",
                        subject_times: subject_times ? subject_times.join(", ") : "Subject times is not found",
                        subjects: subjects ? subjects.join(", ") : "Subjects is not found"
                    };
                    setBook(newBook);
                } else {
                    setBook(null);
                }

                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        }
        getBookDetails();
    }, [id]);

    if(loading) return <Loading />

    return (
        <section className='book-details'>
            <div className="container">
                <button className="flex flex-c back-btn" type='button' onClick={() => navigate("/book")}>
                    <FaArrowLeft size={22} />
                    <span className='fs-18 fw-6'>Back</span>
                </button>

                <div className="book-details-content grid">
                    <div className="book-details-img">
                        <img src={book?.cover_img} alt="cover books" />
                    </div>
                    <div className="book-details-info">
                        <div className="book-details-item title">
                            <span className="fw-6 fs-24">{book?.title}</span>
                        </div>
                        <div className="book-details-item description">
                            <span>{book?.description}</span>
                        </div>
                        <div className="book-details-item">
                            <span className="fw-6">Subject Places: </span>
                            <span className="text-italic">{book?.subject_places}</span>
                        </div>
                        <div className="book-details-item">
                            <span className="fw-6">Subject Times: </span>
                            <span className="text-italic">{book?.subject_times}</span>
                        </div>
                        <div className="book-details-item">
                            <span className="fw-6">Subjects: </span>
                            <span>{book?.subjects}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailsBook;