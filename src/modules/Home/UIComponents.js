import Checkbox from 'components/UI/Checkbox/Checkbox'
import IPAddress from 'components/UI/IPAddress/IPAddress'
import CopyButton from 'components/UI/CopyButton/CopyButton'
import TextOverflow from 'components/UI/TextOverflow/TextOverflow'
import Link from 'components/UI/Link/Link'
import ScanLink from 'components/UI/ScanLink/ScanLink'
import Button from 'components/UI/Button/Button'
import { IcDownload, IcArrow, IcGroup } from 'components/UI/Icons/Icons'
import Dropdown from 'components/UI/Dropdown/Dropdown'
import ViewNav from 'components/UI/ViewNav/ViewNav'

export const UIComponents = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Button>
              <IcDownload />
              Download as
              <IcArrow />
            </Button>
          </li>
          <li>
            <Checkbox>Show additional items</Checkbox>
          </li>
          <li>
            <TextOverflow>38.21.46.43/5</TextOverflow>
            <CopyButton dataCopy="38.21.46.43/5" />
            <IPAddress>38.21.46.43/5</IPAddress>
          </li>
          <li>
            <Link>https://ow.ly/curae.aspx</Link>
            <ScanLink>https://ow.ly/curae.aspx</ScanLink>
          </li>
          <li>
            <Dropdown list={['Name', 'File name', 'IP Address v4', 'IP Address v6', 'Scan source']}>
              <IcGroup />
              Group by
            </Dropdown>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Dropdown
              type="button"
              list={['Name', 'File name', 'IP Address v4', 'IP Address v6', 'Scan source']}
            >
              <IcDownload />
              Download as
            </Dropdown>
          </li>
          <li>
            <ViewNav />
          </li>
        </ul>
      </div>
    </div>
  )
}
