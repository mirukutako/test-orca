import { Wrapper } from './IPAddress.styles'

import TextOverflow from '../TextOverflow/TextOverflow'
import CopyButton from '../CopyButton/CopyButton'

const IPAddress = ({ children }) => (
  <Wrapper>
    <TextOverflow>{children}</TextOverflow>
    <CopyButton dataCopy={children} />
  </Wrapper>
)

export default IPAddress
