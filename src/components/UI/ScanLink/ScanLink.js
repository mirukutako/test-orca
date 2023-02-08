import { Wrapper } from './ScanLink.styles'
import { IcScan } from '../Icons/Icons'
import Link from '../Link/Link'

const ScanLink = ({ children }) => (
  <Wrapper className="scan-link">
    <i className="scan-link__icon">
      <IcScan />
    </i>
    <Link>{children}</Link>
  </Wrapper>
)

export default ScanLink
