import React, {useState, useContext, useEffect} from 'react';
import {useCallback} from 'react';
const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [search, setSearch] = useState("Atomic Habits");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);

        try {
            const response = await fetch(`${URL}${search}`);
            const data = await response.json();
            const {result} = data;

            if(result) {
                const newBooks = result.slice(0, 20).map((book) => {
                    const {key, author_name, cover_id, edition_count, publish_year, title} = book;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_id,
                        edition_count: edition_count,
                        first_publish_year: publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length > 1) {
                    setResultTitle("Your book were search for has been found");
                } else {
                    setResultTitle("Sory, book is NOT FOUND!");
                }
            } else {
                setBooks([]);
                setResultTitle("Sory, book is NOT FOUND!");
            }
            setLoading(false);
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
    }, [search]);

    useEffect(() => {
        fetchBooks();
    }, [search, fetchBooks]);

    return (
        <AppContext.Provider value = {{ 
            loading, books, setSearch, resultTitle, setResultTitle
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}