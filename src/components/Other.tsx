import React from 'react'

import select_img1 from '../assets/images/config-select.png'
import select_img2 from '../assets/images/config-select-res.png'
import { SetQueryData } from './SetQueryData'

export const Other: React.FC<unknown> = () => {




    return (
        <section className='main_section'>
            <h1>Query config</h1>
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
                            In the select option, we provide a function that takes the full API response
                            (data) as input and returns an object containing only the name and email fields.
                            This ensures that <b>only the selected fields</b> are available in the data object returned.
                            <br />
                            <img src={select_img1} alt="select-image" />
                            <br />
                            <img src={select_img2} alt="select-image" />
                        </li>
                    </ul>
                </div>
            </details>
            <SetQueryData />


        </section>
    )
}