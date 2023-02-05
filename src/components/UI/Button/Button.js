import { Wrapper } from './Button.styles'

const Button = ({ children, handleModalVisible, sendData, primary }) => {
  const btnClick = () => {
    if (handleModalVisible) {
      handleModalVisible(true, {
        status: sendData && sendData.status,
        name: sendData && sendData.file.name,
        additional: sendData && sendData.additional,
      })
    }
  }
  return (
    <Wrapper onClick={btnClick} primary={primary}>
      {children}
    </Wrapper>
  )
}

export default Button
