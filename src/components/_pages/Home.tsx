import { Container, Heading } from '@chakra-ui/react'
import FuseSearch from 'components/FuseSearch'
import React, { FC } from 'react'
import { HomePageTypes } from 'types/Pages'

const HomePage: FC<HomePageTypes> = ({ data }) => {
  const { sketches } = data

  return (
    <Container pt={4} maxW="container.lg">
      <Heading pb={4}>p5 Playground</Heading>
      <FuseSearch sketches={sketches} />
    </Container>
  )
}

export default HomePage
