import React from 'react'
import Header from '../components/header'
import Post from '../components/post'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
        <main>
            <Header/>
            <div className='pt-[8rem]'>
              <Post/>
            </div>
            <Post/>
            <div className='pb-[8rem]'>
              <Post/>
            </div>
            <Footer/>
        </main>
    </>
  )
}

export default Home