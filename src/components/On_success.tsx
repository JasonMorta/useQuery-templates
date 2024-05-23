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

let amount: number = 5
let stopQuery: boolean = true

// if '?count=amount' is invalid, the API will respond with the default amount of 10 users
const req = () => axios.get('http://localhost:3003/initialUser?count=' + amount)//change url

//BASIC DATA FETCHING WITH REACT QUERY
export const On_success: React.FC<unknown> = () => {

    

    const onError = (err: Error) => {
        console.log('err🚨')
        stopQuery = false // stop polling and requests if there is an error
    }

    const onSuccess = (data: object) => {
        console.log('data', data)
        //random number between 1 and 10

        if ((data as { status: number }).status === 200) {
            const random = Math.floor(Math.random() * 10) + 1
            amount = random
        }
    }

    const { data, isError, isLoading, error } = useQuery('success-req', req, {
        refetchOnWindowFocus: false, //default is true: refetch data when the window is focused.
        onError,
        onSuccess,
        refetchInterval: 2000, //Poll every 2 seconds
        enabled: stopQuery

    })

    if (isLoading) {
        return <div><h2>Loading...</h2></div>
    }

    if (isError) {
        return <div><h2>{(error as Error).message}</h2></div>
    }

    return (
        <section className='main_section'>
            <p>Do something when query successfully fetches data</p>
            <p>Using Polling(<mark>refetchInterval</mark>), the first time the request was successful, it re-fetches the request every 2 seconds and return a random amount of user objects</p>
            <section className='normal_users_section'>

                {(data as { data: [] }).data.map((user: userObject) => {
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