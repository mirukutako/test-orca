import { Wrapper } from './Link.styles'
import { IcLink } from '../Icons/Icons'
import TextOverflow from '../TextOverflow/TextOverflow'

const Link = ({ children }) => (
  <Wrapper className="link" href={children} title={children}>
    <TextOverflow>
      {children} <IcLink />
    </TextOverflow>
  </Wrapper>
)

export default Link
