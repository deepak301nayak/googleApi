import React, {createContext, useContext, useState} from 'react'

const ResultContext = createContext()
const baseUrl = 'https://google-web-search1.p.rapidapi.com/'


const ResultContextProvide = ({children}) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('adani');
  
    const getResults = async (type) =>{
        setLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                // 'content-type': 'application/octet-stream',
                // 'X-RapidAPI-Key': '0560f78ff5msh175978aa050546ep1eb4b5jsn92820bc11f51',
                // 'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
                'X-RapidAPI-Key': '0560f78ff5msh175978aa050546ep1eb4b5jsn92820bc11f51',
		        'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        })
        const data = await response.json()
        setResults(data)
        setLoading(false)
        // console.log(data) 

    } 
    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, loading}}>
            {children}
        </ResultContext.Provider>
    )
}

export default ResultContextProvide
export const useResultContext = () => useContext(ResultContext)