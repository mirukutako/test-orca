import styled from 'styled-components'

export const Wrapper = styled.button`
  height: 30px;
  display: inline-flex;
  align-items: center;
  gap: var(--space);
  border: none;
  background-color: ${props => (props.primary ? 'white' : 'var(--accent-color)')};
  color: ${props => (props.primary ? 'var(--main-color)' : 'white')};
  padding: 6px var(--space);
  border: ${props => (props.primary ? '1px solid var(--gray-color)' : 'none')};
  border-radius: 4px;
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    border-radius: 4px;
    box-shadow: 0px 0px 0px 2px ${props => (props.primary ? 'var(--accent-color)' : '#e1eefd')};
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  &:hover {
    cursor: pointer;
    &::before {
      opacity: 1;
    }
  }
`
