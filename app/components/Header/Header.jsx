import React from 'react'
import Logo from './Logo'
import Container from '../Container'
import Links from './Links'
import Search from './Search'

const Header = () => {
  return (
    <div className='fixed w-full bg-white z-20 shadow-sm py-0 '>
        <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Links />
            <Search />
        </div>
        </Container>
    </div>
  )
}

export default Header