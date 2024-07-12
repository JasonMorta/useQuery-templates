import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

type heroObject = {
    name: string,
    powers: Array<string> // Specify the type argument for the Array type
}

// const reqOne = () => axios.get(`http://localhost:3003/`) //hardUsers`)
// const reqTwo = () => axios.get(`http://localhost:3003/`) //initialUser?count=${12000}`)

const fetchHeroes =  () => {
    return axios.get(`http://localhost:3008/superheroes`)
}

const fetchVillains =  () => {
    return axios.get(`http://localhost:3008/superVillains`)
}


//BASIC DATA FETCHING WITH REACT QUERY
export const ParallelQueries: React.FC = () => {

    // Destructuring only needed values from the useQuery hook


    // const queryOne = useQuery('reqOne', reqOne, { enabled: false })
   const {data: heroes} = useQuery('superheroes', fetchHeroes, {refetchOnWindowFocus: false})
  
  
   const {data: villains} = useQuery('superVillains', fetchVillains,{refetchOnWindowFocus: false})

   console.log('heroes', heroes?.data)
   console.log('villains', villains?.data)




    // if (queryOne.isLoading || queryTwoIsLoading) {
       
    // }


    return (
        <section className='main_section'>
            <h2> Fetch data in parallel from two endpoints </h2>

     
               <section className='super_section_main'>
                    <section className='hero_section'>
                        <h3>Heroes</h3>
                        {heroes?.data ? heroes?.data.map((hero: heroObject) => 
                        <p key={hero.name}>{hero?.name} | </p>)
                        : <>no heroes</>}
                    </section>
                    <section className='hero_section'>
                        <h3>Villains</h3>
                        {villains?.data ? villains?.data.map((villain: heroObject) => 
                        <p key={villain.name}>{villain?.name} | </p>)
                        : <>no villains</>}
                    </section>
               </section>
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