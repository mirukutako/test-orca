import { useState } from 'react'

import { Wrapper } from './ViewNav.styles'

import ViewNavItem from './ViewNavItem'
import { IcTable, IcCard } from '../Icons/Icons'

const ViewNav = () => {
  const [acitveItem, setActiveItem] = useState('table')
  const items = [
    { type: 'table', icon: <IcTable /> },
    { type: 'card', icon: <IcCard /> },
  ]

  const changeActiveItem = type => {
    setActiveItem(type)
  }
  return (
    <Wrapper>
      {items.map(item => {
        return (
          <ViewNavItem
            key={item.type}
            active={acitveItem === item.type}
            type={item.type}
            handleClick={changeActiveItem}
          >
            {item.icon}
          </ViewNavItem>
        )
      })}
    </Wrapper>
  )
}

export default ViewNav
