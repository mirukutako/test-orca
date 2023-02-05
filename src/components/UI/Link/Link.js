import { Wrapper } from './Link.styles'
import { IcLink } from '../Icons/Icons'
import TextOverflow from '../TextOverflow/TextOverflow'

const Link = ({ children }) => (
  <Wrapper href={children} title={children}>
    <TextOverflow>{children}</TextOverflow>
    <IcLink />
  </Wrapper>
)

export default Link
