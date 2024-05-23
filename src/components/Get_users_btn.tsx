import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Notification } from 'rsuite';


type userObject = {
    id: string,
    firstName: string,
    lastName: string,
    fullName: string,
    age: number,
}

const getUsers = () => axios.get('http://localhost:3003/initialUser')


//BASIC DATA FETCHING WITH REACT QUERY
export const Get_users_btn: React.FC<unknown> = () => {

    // Destructuring only needed values from the useQuery hook

  
    const { data, isLoading, refetch } = useQuery('onClick', getUsers,{
        //cacheTime: 5000, //default is 5 minutes: clear cache after 5 seconds

        //During this period(10s), React Query will not refetch the data even if the component that uses the data is re-rendered or remounted
        //staleTime: 10000, //default is 0: refetch data after 10 seconds

        //The value 'always' can be used to always. It overrides other settings

        refetchOnMount: true, //default is true: refetch data when the component is mounted

        //default is true: enable or disable the query. If false, the query will not execute
        enabled: false, // Make the 'refetch' method to manually fetch data.

        //Also use to keep data in sync with the server.
        refetchOnWindowFocus: false, //default is false: refetch data when the window is focused.

        //Polling is a technique used to keep data in sync with the server. 
        //Is paused when component is not visible or the browser tab is not active
        refetchInterval: 0, //default is 0: refetch data every # seconds
        refetchIntervalInBackground: false, //default is false: refetch data every # seconds when the browser tab(only) is not active
    })

    if (isLoading) {
        return <div><h2>Loading...</h2></div>
    }

    return (
        <section className='main_section'>
            <p>Only get users on button click, NOT when component mounts. Here the useQuery is disabled and makes use of the "refetch" method to manually fetch data</p>
            <br />
            <button onClick={() => refetch()}>Get Users</button>
            <section className='normal_users_section'>

                {data?.data.map((user: userObject) => {
                    return (
                        <Notification key={user.id} className='user_card_main'>
                            <b>Full name:</b> {user.fullName}<br />
                            <b>First name:</b> {user.firstName}<br />
                            <b>Last name</b>: {user.lastName}<br />
                            <b>Age:</b> {user.age}
                        </Notification>
                    )
                })}
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