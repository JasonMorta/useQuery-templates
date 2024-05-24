import axios from 'axios'
import React from 'react'
import { useQuery, useQueries } from 'react-query'
import { Notification } from 'rsuite';
import { Table, Button, } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

type userObject = {
    id: string,
    firstName: string,
    lastName: string,
    fullName: string,
    age: number,
}

// const reqOne = () => axios.get(`http://localhost:3003/`) //hardUsers`)
// const reqTwo = () => axios.get(`http://localhost:3003/`) //initialUser?count=${12000}`)

const fetchUsers =  (urlParams: string) => {
    return axios.get(`http://localhost:3003/${urlParams}`)
}


//BASIC DATA FETCHING WITH REACT QUERY
export const ParallelQueries: React.FC<unknown> = ({urlParams}) => {

    // Destructuring only needed values from the useQuery hook


    // const queryOne = useQuery('reqOne', reqOne, { enabled: false })
    // const { data: queryTwo, isLoading: queryTwoIsLoading, refetch: queryTwoRefetch } = useQuery('reqTwo', reqTwo, { enabled: false })// Using aliasing to rename the destructured values


    const parallelQueries = useQueries(
       
        urlParams.map((param: string) => {
            return {
                queryKey: ['users', param],
                queryFn: () => fetchUsers(param),
                enabled: false
            }
        })
    )
    console.log('parallelQueries', parallelQueries)

    // if (queryOne.isLoading || queryTwoIsLoading) {
        return <div><h2>Loading...</h2></div>
    // }


    // return (
    //     <section className='main_section'>
    //         <p>Only get users on button click, NOT when component mounts. Here the useQuery is disabled and makes use of the "refetch" method to manually fetch data</p>
    //         <br />
    //         <Button color="cyan" appearance="subtle" onClick={() => {
    //             queryOne.refetch()
    //             queryTwoRefetch()
    //             console.log('queryTwo?.data', queryTwo?.data)
    //         }}
    //         >Get Users</Button>
    //         <section className='normal_users_section'>

    //             {queryOne.data?.data.map((user: userObject) => {
    //                 return (
    //                     <Notification key={user.id} className='user_card_main'>

    //                         <b>First name:</b> {user.firstName}<br />
    //                         <b>Last name</b>: {user.lastName}<br />
    //                         <b>Age:</b> {user.age}
    //                     </Notification>
    //                 )
    //             })}
    //             <div className='divider'></div>


    //         </section>
    //         <Table
    //             virtualized={true}
    //             height={300}
    //             width={1000}
    //             loadAnimation
    //             cellBordered
    //             data={queryTwo?.data}>

    //             <Column width={130}>
    //                 <HeaderCell>{queryTwo?.data.length}</HeaderCell>
    //                 <Cell dataKey="id" />
    //             </Column>

    //             <Column width={130}>
    //                 <HeaderCell>First Name</HeaderCell>
    //                 <Cell dataKey="firstName" />
    //             </Column>

    //             <Column width={130}>
    //                 <HeaderCell>Last Name</HeaderCell>
    //                 <Cell dataKey="lastName" />
    //             </Column>

    //             <Column width={100}>
    //                 <HeaderCell>Full name</HeaderCell>
    //                 <Cell dataKey="fullName" />
    //             </Column>

    //             <Column width={100}>
    //                 <HeaderCell>Age</HeaderCell>
    //                 <Cell dataKey="age" />
    //             </Column>
    //         </Table>
    //     </section >
    // )
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