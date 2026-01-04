
import React from 'react'
import { Title } from './ui/text'

const HomeBanner = () => {
  return (
    <div className='py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between'>
      <div>
        <Title>
          Welcome to Mk Online Shop <br />
          Selected 50% off😉
        </Title>
      </div>
      <div></div>
    </div>
  )
}

export default HomeBanner
