import { Wrapper } from './DropdownList.styles'

const DropdownList = ({ list }) => (
  <Wrapper>
    {list.map((item, index) => {
      return <li key={index}>{item}</li>
    })}
  </Wrapper>
)

export default DropdownList
