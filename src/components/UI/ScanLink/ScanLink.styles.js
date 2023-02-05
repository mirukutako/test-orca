import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: calc(var(--space) / 2);
  max-width: 100%;
  & > svg {
    flex-shrink: 0;
    color: var(--gray-color);
  }
  a {
    width: 70%;
    flex-grow: 1;
  }
`
