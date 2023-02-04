import { Wrapper } from './ScanLink.styles'
import { IcScan } from '../Icons/Icons'
import Link from '../Link/Link'

const ScanLink = ({ children }) => (
  <Wrapper>
    <IcScan />
    <Link>{children}</Link>
  </Wrapper>
)

export default ScanLink
