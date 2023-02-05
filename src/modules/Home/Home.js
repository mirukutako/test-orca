import { useState } from 'react'
import Catalog from 'components/Catalog/Catalog'
import Container from 'components/Container/Container'
import Header from 'components/Header/Header'
import { IcTable, IcCard } from 'components/UI/Icons/Icons'
import Modal from 'components/Modal/Modal'

const Home = () => {
  const items = [
    { type: 'table', icon: <IcTable /> },
    { type: 'card', icon: <IcCard /> },
  ]

  //view
  const [view, setView] = useState('table')

  const changeView = view => {
    setView(view)
  }

  //modal
  const [modalVisible, setModalVisible] = useState(false)
  const [modalData, setModalData] = useState({})
  const modalVisibleToggle = (state, data) => {
    if (state) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    setModalVisible(state)
    data && setModalData(data)
  }

  return (
    <div>
      <Container>
        <Header viewNav={items} viewActive={view} viewHandleClick={changeView} />
        <Catalog viewActive={view} handleModalVisible={modalVisibleToggle} />
      </Container>

      <Modal visible={modalVisible} data={modalData} handleModalVisible={modalVisibleToggle} />
    </div>
  )
}

export default Home
