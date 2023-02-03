import { Wrapper } from './Checkbox.styles'
const Checkbox = ({ children }) => (
  <Wrapper>
    <input type="checkbox" />
    {children}
  </Wrapper>
)

export default Checkbox
