import { Wrapper } from './CatalogItem.styles'

import IPAddress from 'components/UI/IPAddress/IPAddress'
import ScanLink from 'components/UI/ScanLink/ScanLink'
import TextOverflow from 'components/UI/TextOverflow/TextOverflow'
import { IcHigh, IcMedium, Iclow } from 'components/UI/Icons/Icons'
import Button from 'components/UI/Button/Button'

const CatalogItem = ({ item, viewActive }) => {
  return (
    <Wrapper className="catalog-item" data-view={viewActive}>
      <div className="catalog-item__cell catalog-item__status">
        <span className="catalog-item__caption caption">Risk level:</span>
        <span className="catalog-item__value">{item.status}</span>
      </div>
      <div className="catalog-item__cell catalog-item__name">
        <span className="catalog-item__caption caption">Name:</span>
        <span className="catalog-item__value">
          <TextOverflow>{item.file.name}</TextOverflow>
        </span>
      </div>
      <div className="catalog-item__cell catalog-item__file">
        <span className="catalog-item__caption caption">File name:</span>
        <span className="catalog-item__value">
          <TextOverflow>{item.file.attach}</TextOverflow>
          &nbsp;
          <span className="caption">({item.file.size})</span>
        </span>
      </div>
      <div className="catalog-item__cell catalog-item__ip-v4">
        <span className="catalog-item__caption caption">IP Address v4:</span>
        <span className="catalog-item__value">
          <IPAddress>{item.ip.v4}</IPAddress>
        </span>
      </div>
      <div className="catalog-item__cell catalog-item__ip-v6">
        <span className="catalog-item__caption caption">IP Address v6:</span>
        <span className="catalog-item__value">
          <IPAddress>{item.ip.v6}</IPAddress>
        </span>
      </div>
      <div className="catalog-item__cell catalog-item__source">
        <span className="catalog-item__caption caption">Scan source:</span>
        <span className="catalog-item__value">
          <ScanLink>{item.source}</ScanLink>
        </span>
      </div>
      <div className="catalog-item__cell catalog-item__additional">
        <span className="catalog-item__caption"></span>
        <span className="catalog-item__value">
          <Button>Show additional info</Button>
        </span>
      </div>
    </Wrapper>
  )
}

export default CatalogItem
