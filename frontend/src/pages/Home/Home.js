import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>
            <img src={logo} alt="My Logo" className="logo" />
            </div>

            <h1 className="description">A Yoga AI Trainer</h1>
            <div className="home-main">
                <div className="btn-section">
                    <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                    <Link to='/tutorials'>
                        <button
                            className="btn start-btn"
                        >Tutorials</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
