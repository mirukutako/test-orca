import { Wrapper } from './ViewNavItem.styles'

const ViewNavItem = ({ children, active, type, handleClick }) => (
  <Wrapper
    data-active={active}
    onClick={() => {
      handleClick(type)
    }}
  >
    {children}
  </Wrapper>
)

export default ViewNavItem
