import styled from 'styled-components'

export const Wrapper = styled.a`
  color: var(--main-color);
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover {
    cursor: pointer;
    color: var(--accent-color);
  }
  & > svg,
  .text-overflow svg {
    flex-shrink: 0;
    vertical-align: middle;
  }
`
