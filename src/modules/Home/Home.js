import { useState } from 'react'
import Catalog from 'components/Catalog/Catalog'
import Container from 'components/Container/Container'
import Header from 'components/Header/Header'
import { IcTable, IcCard } from 'components/UI/Icons/Icons'

const Home = () => {
  const items = [
    { type: 'table', icon: <IcTable /> },
    { type: 'card', icon: <IcCard /> },
  ]

  const [view, setView] = useState('table')

  const changeView = view => {
    setView(view)
  }

  return (
    <div>
      <Container>
        <Header viewNav={items} viewActive={view} viewHandleClick={changeView} />
        <Catalog viewActive={view} />
      </Container>
    </div>
  )
}

export default Home
