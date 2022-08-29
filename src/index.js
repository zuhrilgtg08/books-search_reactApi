import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppProvider} from './App.js';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import DetailsBook from './components/DetailsBook/DetailsBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Home/>}>
                    <Route path='about' element = {<About/>} />
                    <Route path='book' element = {<BookList/>} />
                    <Route path='/book/:id' element = {<DetailsBook/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </AppProvider>
);