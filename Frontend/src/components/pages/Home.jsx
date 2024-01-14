import React from 'react'

import dollar from '../../assets/dollar.gif'

import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (

    <div className='home-container'>

        <div className='wrapper'>
            <p>
              PIONEER IN FOREIGN EXCHANGE BUSINESS
              </p>
              <div className='home-wrapper-btn'>
                <Link to='/addRecord'>
                    <img src={dollar} alt='img'/>
                    Sale
                </Link>

                <Link to='/Rates'>
                     Rates
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Home