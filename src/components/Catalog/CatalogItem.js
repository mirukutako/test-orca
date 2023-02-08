import { useState } from 'react'

import { Wrapper } from './CatalogItem.styles'

import IPAddress from 'components/UI/IPAddress/IPAddress'
import ScanLink from 'components/UI/ScanLink/ScanLink'
import TextOverflow from 'components/UI/TextOverflow/TextOverflow'
import Button from 'components/UI/Button/Button'
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo'
import StatusIcon from 'components/UI/Icons/StatusIcon'
import Dropdown from 'components/UI/Dropdown/Dropdown'
import { IcDownload } from 'components/UI/Icons/Icons'

const CatalogItem = ({ item, viewActive, handleModalVisible }) => {
  const [expand, setExpand] = useState(false)
  return (
    <>
      <Wrapper
        className="catalog-item"
        data-view={viewActive}
        onClick={() => {
          if (viewActive === 'table') setExpand(!expand)
        }}
        data-expand={expand}
      >
        <div className="catalog-item__cell catalog-item__status">
          <span className="catalog-item__caption caption">Risk level:</span>
          <span className="catalog-item__value">
            <div className="item-status">
              <div className="item-status__icon" data-color={`${item.status}`.toLowerCase()}>
                <StatusIcon status={item.status} />
              </div>
              <div className="item-status__name">{item.status}</div>
            </div>
          </span>
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
            <Button handleModalVisible={handleModalVisible} sendData={item}>
              Show additional info
            </Button>
          </span>
        </div>
      </Wrapper>
      <AdditionalInfo view={viewActive} expand={expand}>
        <div className="additional-info__body"> {item.additional}</div>
        <div className="additional-info__footer">
          <Button>Download</Button>
          <Dropdown
            options={{
              type: 'button',
              flow: 'row',
              dir: 'right',
              position: 'top',
            }}
            list={['Name', 'File name', 'IP Address v4', 'IP Address v6', 'Scan source']}
          >
            <IcDownload />
            Download as
          </Dropdown>
        </div>
      </AdditionalInfo>
    </>
  )
}

export default CatalogItem
