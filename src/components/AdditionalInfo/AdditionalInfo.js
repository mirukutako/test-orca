import { Wrapper } from './AdditionalInfo.styles'

const AdditionalInfo = ({ children, view, expand }) => {
  return (
    <Wrapper className="additional-info-wrap" data-view={view} data-expand={expand}>
      <div className="additional-info">
        <div className="additional-info__title">
          <div className="caption">Additional info</div>
        </div>
        {children}
      </div>
    </Wrapper>
  )
}

export default AdditionalInfo
