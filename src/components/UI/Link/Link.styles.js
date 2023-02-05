import styled from 'styled-components'

export const Wrapper = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--main-color);
  text-decoration: none;
  transition: color 0.2s ease;
  gap: calc(var(--space) / 2);
  &:hover {
    cursor: pointer;
    color: var(--accent-color);
  }
  svg {
    flex-shrink: 0;
  }
`
