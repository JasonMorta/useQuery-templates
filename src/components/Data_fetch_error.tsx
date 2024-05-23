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

const req = () => axios.get('http://localhost:3003/initialUse')//changed url


//BASIC DATA FETCHING WITH REACT QUERY
export const Data_fetch_error: React.FC<unknown> = () => {

    // Destructuring only needed values from the useQuery hook

    const { data, isError, isLoading, error } = useQuery('error-req', req)

    if (isLoading) {
        return <section className='main_section'><h2>Loading...</h2></section>
    }

    if (isError) {
        return <section className='main_section'><h2>{(error as Error).message}</h2></section>
    }

    return (
        <section className='main_section'>
            <p>BASIC DATA FETCHING WITH REACT QUERY</p>
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
        </section>
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