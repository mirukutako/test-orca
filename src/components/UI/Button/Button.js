import PropTypes from 'prop-types'
import { Wrapper } from 'components/UI/Button/Button.styles'

const Button = ({ children }) => <Wrapper>{children}</Wrapper>

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  children: null,
}

export default Button
