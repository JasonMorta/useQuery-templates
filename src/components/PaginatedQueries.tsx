import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'


type heroObject = {
    name: string,
    powers: Array<string> // Specify the type argument for the Array type
}

const getHeroes = (page: number) => {
    console.log('page', page)

    return axios.get(`http://localhost:3003/paginated?page=${page}&limit=${5}`)
}


//BASIC DATA FETCHING WITH REACT QUERY
export const PaginatedQueries: React.FC = () => {

    // Destructuring only needed values from the useQuery hook
    const [pageNumber, setPageNumber] = useState(1)

    const { data, isLoading, refetch, isFetching } = useQuery(
        'paginate',
        () => {
            console.log('pageNumber', pageNumber)
            return getHeroes(pageNumber)
        },

        {

            keepPreviousData: true, //default is false: keep previous data when fetching new data

            //cacheTime: 5000, //default is 5 minutes: clear cache after 5 seconds

            //During this period(10s), React Query will not refetch the data even if the component that uses the data is re-rendered or remounted
            //staleTime: 10000, //default is 0: refetch data after 10 seconds

            //The value 'always' can be used to always. It overrides other settings

            refetchOnMount: true, //default is true: refetch data when the component is mounted


            //Also use to keep data in sync with the server.
            refetchOnWindowFocus: false, //default is true: refetch data when the window is focused.

            //Polling is a technique used to keep data in sync with the server. 
            //Is paused when component is not visible or the browser tab is not active

        })

        useEffect(() => {
            refetch()
        }, [pageNumber, refetch])
    


    console.log('data', data)
    if (isLoading) {
        return <div><h2>Loading...</h2></div>
    }

    return (
        <section className='main_section'>
            <p>Add pagination. Request more heroes when clicking next</p>
            <p><b>keepPreviousData</b> When enabled, keepPreviousData allows React Query to keep displaying the 
            current data while fetching new data in the background, instead of immediately switching to a loading state. 
            This can help prevent flickers or jarring changes in the UI.</p>
            <br />

            <section className='normal_users_section'>

                <ul>
                    {data?.data.data.map((hero: heroObject) =>
                        <li key={hero.name}>{hero.name} </li>)}
                </ul>
            </section>
            <button onClick={() => { //e: React.MouseEvent<HTMLButtonElement>
                // e.currentTarget.textContent = isFetching ? "Loading..." : "Next"
                setPageNumber((prev) => prev + 1)
                
            }}
                disabled={pageNumber === data?.data.totalPages || isFetching}>Next</button>
            <br />
            <button onClick={() => {
                //  e.currentTarget.innerHTML = isFetching ? "Loading..." : "Previous"
                setPageNumber((prev) => prev - 1)
            
            }}
                disabled={pageNumber === 1 || isFetching}
            >Previous</button>
        </section >
    )
}


/* Default response object of useQuery hook:
    data: Object
    dataUpdatedAt : 1716463033910
    error : null
    errorUpdateCount : 0
    errorUpdatedAt : 0
    failureCount : 0
    isError : false
    isFetched : true
    isFetchedAfterMount : false
    isFetching : true
    isIdle : false
    isLoading : false
    isLoadingError : false
    isPlaceholderData : false
    isPreviousData : false
    isRefetchError : false
    isRefetching : true
    isStale : true
    isSuccess : true
    refetch : ƒ ()
    remove : ƒ ()
    status : "success"
    */