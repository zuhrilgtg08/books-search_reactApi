import React, {useRef, useEffect} from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../App.js';
import "./FormSearch.css";

const FormSearch = () => {
    const {setSearchTerm, setResultTitle} = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    useEffect(() => searchText.current.focus(), []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempSearchTerm = searchText.current.value.trim();
        if (tempSearchTerm.replace(/[^\w\s]/gi,"").length === 0) {
            setSearchTerm("Atomic Habits");
            setResultTitle("Masukkan judul buku ...");
        } else {
            setSearchTerm(searchText.current.value);
        }

        navigate("/book");
    }

    return (
        <div className="search-form">
            <div className="container">
                <div className="search-form-content">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className="search-form-element flex flex-sb bg-white">
                            <input type="text" className='form-control' placeholder='Cari Buku...' ref={searchText}/>
                            <button type='submit' className='flex flex-c' onClick={handleSubmit}>
                                <FaSearch className='text-purple' size={32} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormSearch;