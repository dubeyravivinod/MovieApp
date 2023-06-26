import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import React from 'react';
import axios from 'axios';

const API_URL = "https://www.omdbapi.com/"
const API_KEY = "4dd67c93"

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [searchIteam, setSearchItem] = useState('')
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(`${API_URL}?s=${searchIteam}&apikey=${API_KEY}`);
                console.log("Response:: ", response.data);
                setMovieData(response.data.Search)
            }
            catch (error) {
                console.log("Error while fetching data:: ", error)
            }
        }
        fetchData();

        return () => {};
    }, [searchIteam]);

    const searchHandler = (searchItem) => {
        console.log("Search Key:: ", searchItem);
        setSearchItem(searchItem);
    }
    // console.log(movieData);
    const context = {
        searchHandler,
        movieData
    }
    
    return <DataContext.Provider value={context}>{children}</DataContext.Provider>
}

export const useMovieData = () => useContext(DataContext);

export default DataProvider;
