import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import Hero from '../Hero/Hero'

const Header = () => {
  return (
    <>
        <header>
            <NavigationBar/>
            <Hero/>
        </header>
    </>
  )
}

export default Header