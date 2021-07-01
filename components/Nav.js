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
        <Linked>Home</Linked>
      </Link>
      <Link href="/routine/1">
        <Linked>Routine</Linked>
      </Link>
      <Link href="/workout/1">
        <Linked>workout</Linked>
      </Link>
      <Link href="/add">
        <Linked>addPage</Linked>
      </Link>
      <Link href="/Mypage">
        <Linked>Mypage</Linked>
      </Link>
      <Link href="/timerpage">
        <Linked>timer</Linked>
      </Link>
      <Link href="/statistics">
        <Linked>statistics</Linked>
      </Link>
      <Link href="/login">
        <Linked>login</Linked>
      </Link>
      <Link href="/signup">
        <Linked>signup</Linked>
      </Link>
    </NavContainer>
  )
}
