import { Wrapper } from './ScanLink.styles'
import { IcScan } from '../Icons/Icons'
import Link from '../Link/Link'

const ScanLink = ({ children }) => (
  <Wrapper className="scan-link">
    <IcScan />
    <Link>{children}</Link>
  </Wrapper>
)

export default ScanLink
