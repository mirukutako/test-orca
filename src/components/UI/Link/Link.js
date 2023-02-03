import { Wrapper } from './Link.styles'
import { IcLink } from '../Icons/Icons'

const Link = ({ children }) => (
  <Wrapper href={children}>
    {children}
    <IcLink />
  </Wrapper>
)

export default Link
