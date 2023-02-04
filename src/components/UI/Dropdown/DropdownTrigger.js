import { IcArrow } from '../Icons/Icons'
import { Wrapper } from './DropdownTrigger.styles'

const DropdownTrigger = ({ children, type, handleClick }) => (
  <Wrapper type={type} onClick={handleClick}>
    {children}
    <i className="trigger-arrow">
      <IcArrow />
    </i>
  </Wrapper>
)

export default DropdownTrigger
