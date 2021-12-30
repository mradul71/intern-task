import React from 'react'
import ParcelList from './ParcelList'
import ParcelListDemo from './ParcelListDemo'

function Home({logout, user}) {
    return (
        <div>
            <div>
                <h1>Logged in</h1>
                <ParcelList user={user}/>
                <button onClick={() => logout()}> Sign Out </button>
            </div>
        </div>
    )
}

export default Home
