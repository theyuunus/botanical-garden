import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '@/layout/footer/footer'
import HomeHeader from './home'
import Navbar from '@/layout/navbar/navbar'

const Home = () => {
  console.clear()
  return (
    <>
      <Helmet>
        <title>Botanical Garden</title>
        <link rel="icon" href="/logo.png" />
      </Helmet>

      <main>
        <nav>
          <Navbar />
        </nav>

        <header>
          <HomeHeader />
        </header>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  )
}

export default Home
