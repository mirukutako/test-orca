import { Wrapper } from './CopyButton.styles'
import { IcCopy } from '../Icons/Icons'

const CopyButton = ({ dataCopy }) => (
  <Wrapper className="copy-bttn" data-copy={dataCopy}>
    <IcCopy />
  </Wrapper>
)

export default CopyButton
