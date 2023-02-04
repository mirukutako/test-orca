import { useState } from 'react'
import { Wrapper } from './Dropdown.styles'
import DropdownTrigger from './DropdownTrigger'
import DropdownList from './DropdownList'

const Dropdown = ({ children, type, list }) => {
  const [isOpen, chageOpen] = useState(false)
  const toggleDropdownState = () => {
    chageOpen(!isOpen)
  }
  return (
    <Wrapper data-open={isOpen}>
      <DropdownTrigger type={type} handleClick={toggleDropdownState}>
        {children}
      </DropdownTrigger>
      <DropdownList list={list} />
    </Wrapper>
  )
}

export default Dropdown
