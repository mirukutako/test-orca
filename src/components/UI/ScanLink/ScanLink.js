import { Wrapper } from './ScanLink.styles'
import { IcScan } from '../Icons/Icons'

const ScanLink = ({ children }) => (
  <Wrapper>
    <IcScan />
    {children}
  </Wrapper>
)

export default ScanLink
