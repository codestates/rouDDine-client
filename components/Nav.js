import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const NavContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: column;
`;

const Linked = styled.a`
  margin: 30px;
  color: white;
  cursor: pointer;
`;


export default function Nav() {
  return (
    <NavContainer>
      <Link href="/">
      <Linked>Home로 이동</Linked>
      </Link>
      <Link href="/routine">
      <Linked>RoutinePage로 이동</Linked>
      </Link>
      <Link href="/workout">
      <Linked>workoutPage로 이동</Linked>
      </Link>
    </NavContainer>
  )
}
