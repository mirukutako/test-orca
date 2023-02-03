import Checkbox from 'components/UI/Checkbox/Checkbox'
import IPAddress from 'components/UI/IPAddress/IPAddress'
import CopyButton from 'components/UI/CopyButton/CopyButton'
import TextOverflow from 'components/UI/TextOverflow/TextOverflow'

export const UIComponents = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Checkbox>Show additional items</Checkbox>
          </li>
          <li>
            <IPAddress>
              <TextOverflow>38.21.46.43/5</TextOverflow>
              <CopyButton dataCopy="38.21.46.43/5" />
            </IPAddress>
          </li>
        </ul>
      </div>
    </div>
  )
}
