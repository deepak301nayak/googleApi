import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {useResultContext} from '../contexts/ResultContextProvide'
import Loading from './Loading'

const Results = () => {
    const {results, loading, getResults, searchTerm} = useResultContext()
    const location = useLocation()
    useEffect(()=>{
        if(searchTerm){
            getResults(`?q=${searchTerm}$num=40`)
        }
    },[searchTerm])
    if(loading) return <Loading />
    switch (location.pathname) {
        case '/search':
           return (
            <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                {results?.results?.map(({url,title}, index) =>(
                    <div key={index} className='md:w-2/5 w-full'>
                           <a href={url} target='_blank' rel='noreferrer'>
                            <p className='text-sm'>
                                {url.length>30 ? url.substring(0,30) : url}
                            </p>
                            <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                {title}
                            </p>
                           </a>
                    </div>
                ))}
            </div>
           )
    
        default:
            return 'Error'
    }

  return (
    <div>

    </div>
  )
}

export default Results