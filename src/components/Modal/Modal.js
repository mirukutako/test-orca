import { Wrapper } from './Modal.styles'

import { IcClose, IcDownload } from 'components/UI/Icons/Icons'
import StatusIcon from 'components/UI/Icons/StatusIcon'
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo'
import Button from 'components/UI/Button/Button'
import Dropdown from 'components/UI/Dropdown/Dropdown'

const Modal = ({ visible, data, handleModalVisible }) => {
  return (
    <Wrapper className="modal-wrapper" data-visible={visible}>
      <div className="modal">
        <div className="modal__header">
          <div className="item-status">
            <div className="item-status__icon" data-color={`${data.status}`.toLowerCase()}>
              <StatusIcon status={data.status} />
            </div>
            <div className="item-status__name">{data.name}</div>
          </div>

          <button
            className="modal__close"
            onClick={() => {
              handleModalVisible(false)
            }}
          >
            <IcClose />
          </button>
        </div>
        <div className="modal__body">
          <AdditionalInfo view="modal" expand="true">
            <div className="additional-info__body"> {data.additional}</div>
          </AdditionalInfo>
        </div>
        <div className="modal__footer">
          <Button>Download</Button>
          <Dropdown
            options={{
              type: 'button',
            }}
            list={['Name', 'File name', 'IP Address v4', 'IP Address v6', 'Scan source']}
          >
            <IcDownload />
            Download as
          </Dropdown>
          <Button primary>Cancel</Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Modal
