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
export const Basic_req: React.FC<unknown> = () => {

    // Destructuring only needed values from the useQuery hook


    const { data, isLoading, isFetching } = useQuery('extraUsers', getUsers, {
        //cacheTime: 5000, //default is 5 minutes: clear cache after 5 seconds

        //During this period(10s), React Query will not refetch the data even if the component that uses the data is re-rendered or remounted
        //staleTime: 10000, //default is 0: refetch data after 10 seconds

        //The value 'always' can be used to always. It overrides other settings

        refetchOnMount: true, //default is true: refetch data when the component is mounted

        //Also use to keep data in sync with the server.
        refetchOnWindowFocus: true, //default is true: refetch data when the window is focused.

        //Polling is a technique used to keep data in sync with the server. 
        //Is paused when component is not visible or the browser tab is not active
        refetchInterval: 0, //default is 0: refetch data every # seconds
        refetchIntervalInBackground: false, //default is false: refetch data every # seconds when the browser tab(only) is not active
    })

    if (isLoading || isFetching) {
        return <div><h2>Loading...</h2></div>
    }

    return (
        <section className='main_section'>
            <p> This is a basic example of fetching data with useQuery.</p>
            <p> Notice how the date is re-fetched when the window is <mark>focused</mark>.
                This is caused by a default enabled config called <mark>refetchOnMount</mark>
            </p>
            <p> Also, by default, fetched data is cached for 5 minutes. This can be changed by setting the <mark>cacheTime</mark> config</p>

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


/* // Importing useQuery hook from react-query library
const {
    data = null,                        // The fetched data, initially null
    dataUpdatedAt = 0,                  // Timestamp of the last data update, initially 0
    error = null,                       // Error object if an error occurred, initially null
    errorUpdateCount = 0,               // Number of times the error was updated, initially 0
    errorUpdatedAt = 0,                 // Timestamp of the last error update, initially 0
    failureCount = 0,                   // Number of failed fetch attempts, initially 0
    failureReason = null,               // Reason for fetch failure, initially null
    fetchStatus = '',                   // Current fetch status, initially an empty string
    isError = false,                    // Boolean indicating if there's an error, initially false
    isFetched = false,                  // Boolean indicating if data has been fetched, initially false
    isFetchedAfterMount = false,        // Boolean indicating if data was fetched after component mounted, initially false
    isFetching = false,                 // Boolean indicating if data is currently being fetched, initially false
    isInitialLoading = false,           // Boolean indicating if it's the initial loading, initially false
    isLoading = false,                  // Boolean indicating if data is currently loading, initially false
    isLoadingError = false,             // Boolean indicating if there was an error during loading, initially false
    isPaused = false,                   // Boolean indicating if fetching is paused, initially false
    isPlaceholderData = false,          // Boolean indicating if placeholder data is being used, initially false
    isPreviousData = false,             // Boolean indicating if the data is from a previous query, initially false
    isRefetchError = false,             // Boolean indicating if there was an error during refetch, initially false
    isRefetching = false,               // Boolean indicating if data is currently being refetched, initially false
    isStale = true,                     // Boolean indicating if the data is stale, initially true
    isSuccess = false,                  // Boolean indicating if the query was successful, initially false
    refetch = () => {},                 // Function to refetch the data, initially a no-op
    remove = () => {},                  // Function to remove the query data from the cache, initially a no-op
    status = 'idle',                    // Current status of the query, initially 'idle'
  } = useQuery({
    queryKey,                           // Unique key for the query
    queryFn,                            // Function to fetch the data
    cacheTime = 300000,                 // Cache time in milliseconds, default is 5 minutes
    enabled = true,                     // Boolean indicating if the query should be enabled, default is true
    networkMode = 'online',             // Network mode, default is 'online'
    initialData = null,                 // Initial data, default is null
    initialDataUpdatedAt = 0,           // Timestamp for initial data, default is 0
    keepPreviousData = false,           // Boolean to keep previous data, default is false
    meta = {},                          // Metadata for the query, default is an empty object
    notifyOnChangeProps = 'tracked',    // Properties to notify on change, default is 'tracked'
    onError = null,                     // Callback for error, default is null
    onSettled = null,                   // Callback for settled state, default is null
    onSuccess = null,                   // Callback for success, default is null
    placeholderData = null,             // Placeholder data, default is null
    queryKeyHashFn = null,              // Function to hash the query key, default is null
    refetchInterval = false,            // Interval for automatic refetch, default is false
    refetchIntervalInBackground = false,// Boolean to refetch in background, default is false
    refetchOnMount = true,              // Boolean to refetch on mount, default is true
    refetchOnReconnect = true,          // Boolean to refetch on reconnect, default is true
    refetchOnWindowFocus = true,        // Boolean to refetch on window focus, default is true
    retry = 3,                          // Number of retry attempts, default is 3
    retryOnMount = true,                // Boolean to retry on mount, default is true
    retryDelay = 1000,                  // Delay between retries in milliseconds, default is 1 second
    select = null,                      // Function to select a part of the data, default is null
    staleTime = 0,                      // Time before data is considered stale, default is 0
    structuralSharing = true,           // Boolean for structural sharing, default is true
    suspense = false,                   // Boolean to use suspense, default is false
    useErrorBoundary = false,           // Boolean to use error boundary, default is false
  });
   */