import { Wrapper } from './DropdownList.styles'

const DropdownList = ({ list, options = {} }) => {
  const { flow = '', dir = '', position = '' } = options
  return (
    <Wrapper flow={flow} dir={dir} position={position}>
      {list.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </Wrapper>
  )
}

export default DropdownList
