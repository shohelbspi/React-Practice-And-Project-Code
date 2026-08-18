import { createContext, useContext, useState } from "react";
import api from "../config/axios";

const NewsContext = createContext()

function NewsContextProvider({ children }) {
    const[loading,setLoading] = useState(false)
    const [news, setNews] = useState([])

    const value = {
        news,
        setNews,
        fetchNews,
        loading
    }

    async function fetchNews(url ='everything?q=bangladesh') {
        setLoading(true)
        const response = await api.get(`${url}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
        setLoading(false)
        return response.data
    }

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

const useNewsContext = () => {
    return useContext(NewsContext)
}

export { NewsContextProvider, useNewsContext }