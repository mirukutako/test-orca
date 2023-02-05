import { Wrapper } from './Header.styles'

import { IcLogo, IcGroup, IcSort } from 'components/UI/Icons/Icons'
import Checkbox from 'components/UI/Checkbox/Checkbox'
import Dropdown from 'components/UI/Dropdown/Dropdown'
import ViewNav from 'components/UI/ViewNav/ViewNav'

const Header = ({ viewNav, viewActive, viewHandleClick }) => {
  return (
    <Wrapper className="header">
      <a className="header__logo" href="/">
        <IcLogo />
      </a>
      <div className="header__nav">
        <Checkbox>Show additional items</Checkbox>
        <Dropdown list={['Name', 'File name', 'IP Address v4', 'IP Address v6', 'Scan source']}>
          <IcGroup />
          Group by
        </Dropdown>
        <Dropdown list={['Name', 'File name', 'IP Address v4', 'IP Address v6', 'Scan source']}>
          <IcSort />
          Sort by
        </Dropdown>
        <ViewNav items={viewNav} active={viewActive} handleClick={viewHandleClick} />
      </div>
    </Wrapper>
  )
}

export default Header
