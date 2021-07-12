import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const SideBarMenu = styled.div`
  height: 800px;
  width: 300px;
  /* background-color: ; */
  /* background: ${(props) => (props.isOpen ? "red": "blue")}; */
`;

const Toggle = styled.button`

`;
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);
  }

  return (
    <div>
      <SideBarMenu isOpen={isOpen}></SideBarMenu>
    </div>
  )
}

export default Sidebar
