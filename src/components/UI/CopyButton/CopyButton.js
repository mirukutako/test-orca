import { Wrapper } from './CopyButton.styles'
import { IcCopy } from '../Icons/Icons'

const CopyButton = ({ dataCopy }) => (
  <Wrapper data-copy={dataCopy}>
    <IcCopy />
  </Wrapper>
)

export default CopyButton
