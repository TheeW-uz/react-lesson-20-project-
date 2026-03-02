import React from 'react'
import './People.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'

const People = () => {
  return (
    <div className='people-container'>
      <Sidebar/>


      <div className="people-main">
        <Header />
      </div>
    </div>
  )
}

export default People
