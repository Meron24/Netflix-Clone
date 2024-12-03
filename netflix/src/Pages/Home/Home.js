import React from 'react'
import Header from '../../Componentes/Header/Header'
import Footer from '../../Componentes/Footer/Footer'
import Banner from '../../Componentes/Banner/Banner'
import RowList from '../../Componentes/Rows/Row/RowList/RowList'
const Home = () => {
  return (
    <>
        <Header />
        <Banner/>
        <RowList/>
        <Footer />
    </>
  )
}

export default Home