import React from 'react'

import Header from './Header'
import Footer from './Footer'
import SideMenu from './SideMenu'
import MainSection from './MainSection'
import NavBar from './NavBar'

class App extends React.Component {
  
  render(){
    return (
      <>
        <NavBar />
        <Header />
        <div className="columns">
          <SideMenu />
          <MainSection />
        </div>
        <Footer />
      </>
    )
  }
}


export default App
