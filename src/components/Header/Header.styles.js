import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  padding-bottom: calc(var(--space) * 2);
  border-bottom: 1px solid var(--gray-color);
  gap: calc(var(--space) * 2);

  .header__logo {
    font-size: 0;
    margin-right: auto;
  }

  .header__nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space) calc(var(--space) * 2);
  }
`
