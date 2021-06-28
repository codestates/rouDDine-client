import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const MainContainaer = styled.div`
  margin: 5px;
  height: 100px;
  width: 100px;
  background-color: black;
`;

export default function Home() {
  return (
    <MainContainaer>
    </MainContainaer>
  )
}
