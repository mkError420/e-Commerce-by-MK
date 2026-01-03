import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import React from 'react'

const Home = () => {
  return (
    <Container className='bg-shop-light-pink'>
      <h2 className='text-xl font-semibold'>Home</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex suscipit cupiditate nisi ipsum enim, iure labore animi nam laboriosam reiciendis quis voluptas nesciunt itaque exercitationem voluptatum consequatur! Fugit expedita hic sint. Voluptate nisi earum temporibus, quisquam animi atque natus hic sed, in totam ab. Iste quidem laborum quibusdam odit?
      </p>
      <Button size="lg">Check out</Button>
    </Container>
  )
}

export default Home; 
