import type { NextPage } from 'next'
import Head from 'next/head'
import MenuBar from '../components/MenuBar'

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-site-neutral">
      <div className="w-full h-[15%]">
        <MenuBar />
      </div>
    </div>
  )
}

export default Home
