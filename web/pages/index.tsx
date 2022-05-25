import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import MenuBar from '../components/MenuBar'

const Home: NextPage = () => {
  const [ listings, setListings ] = useState([
    {
      id: 0
    }
  ]);

  useEffect(() => {
    const addListing = [...listings, {
      id: 1
    }];
    setListings(addListing);
  }, [])

  return (
    <div className="w-screen h-screen bg-site-neutral">
      <div className="w-full h-[15%]">
        <MenuBar />
      </div>
      <div className="w-full h-[85%]">
        <div className="w-full h-1/6 SPACING-DONT-TOUCH" />
        <div className="w-full h-1/6 flex justify-center items-center">
          <h1 className="text-black text-7xl font-indie">Live Listings</h1>
        </div>
        <div className="w-full h-4/6 bg-black">
          {listings.map((listi) => {
            return (
              <h1 className="text-white">{listi.id}</h1>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
