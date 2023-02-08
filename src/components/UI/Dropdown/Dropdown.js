import { useState } from 'react'
import { Wrapper } from './Dropdown.styles'
import DropdownTrigger from './DropdownTrigger'
import DropdownList from './DropdownList'

const Dropdown = ({ children, list, options }) => {
  const [isOpen, chageOpen] = useState(false)
  const toggleDropdownState = () => {
    chageOpen(!isOpen)
  }
  return (
    <Wrapper data-open={isOpen}>
      <DropdownTrigger type={options ? options.type : ''} handleClick={toggleDropdownState}>
        {children}
      </DropdownTrigger>
      <DropdownList list={list} options={options} />
    </Wrapper>
  )
}

export default Dropdown
