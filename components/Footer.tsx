import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container>
          <FooterTop/>
          <div>
            <div>
              <Logo/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt quis eum asperiores, voluptatibus nam!</p>
              <SocialMedia className='text-darkColor/60' iconClassName='border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green'
              tooltipClassName='bg-darkColor text-white'
              />
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
      </Container> 
    </footer>
  )
}

export default Footer
