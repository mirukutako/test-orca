import styled from 'styled-components'

export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space);
  border: none;
  background-color: var(--accent-color);
  color: #fff;
  padding: 6px var(--space);
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
    box-shadow: 0px 0px 0px 2px #e1eefd;
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
