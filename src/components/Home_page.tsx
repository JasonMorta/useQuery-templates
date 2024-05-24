import React from 'react'
import queryImg from '../assets/images/queryObject.png'

export const Home_page: React.FC<{}> = () => {
    return (
        <div className='home_section'>
          <img src={queryImg} alt="query image" />
        </div>
    )
}