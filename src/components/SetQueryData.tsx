import React from 'react'

export const SetQueryData: React.FC<unknown> = () => {
    return (
        //TODO: Add the JSX for the SetQueryData component
        <details>
            <summary>
                The <mark>select</mark> config option
            </summary>
            <p>The select configuration option in React Query allows you to
                transform or select specific parts of the data returned by the query.
            </p>
            <div className='img_section'>
                <ul>

                    <li>
                        React Query can be used to selectively update a single object in an
                        array of objects without refetching the entire array.
                        This can be achieved using the setQueryData method in conjunction
                        with useMutation to update the cache with the new object data. <br />
                        <img src='' alt="select-image" />
                        <br />
                        <img src='' alt="select-image" />
                    </li>

                </ul>



            </div>



        </details>

    )
}