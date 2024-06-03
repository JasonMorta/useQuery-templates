import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Notification } from 'rsuite';


type userObject = {
    id: string,
    firstName: string,
    lastName: string,
    fullName: string,
    age: number,
}

export const Default_fetching: React.FC<object> = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<userObject[]>([])

    //triggers twice and updates the state
    useEffect(() => {
        // axios.get('http://localhost:3003/initialUser').then((res) => {
        async function fetchData() {
           await fetch("13.60.31.199:3003/initialUser")
           .then((response) => response.json())
           .then((result) => console.log(result))
           .catch((error) => console.error(error));
        }

        fetchData()
    }, [])


    if (isLoading) {
        return <div><h3>Loading...</h3></div>
    }


    return (
        <section className='main_section'>
            <p>In React the default way of fetching data is using the useEffect hook. In the case, it seems like the component(useEffect) is making two requests to the server.</p>
            <section className='normal_users_section'>
                {data?.map((user: userObject) => {
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