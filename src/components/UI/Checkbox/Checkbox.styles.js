import styled from 'styled-components'

export const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  input {
    appearance: none;
    position: relative;
    width: 12px;
    height: 12px;
    position: relative;
    margin: 0;
    margin-right: var(--space);
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border: 1px solid var(--gray-color);
      border-radius: 2px;
      position: absolute;
      left: 0;
      top: 0;
      box-sizing: border-box;
      transition: background-color 0.2s ease, border-color 0.2s;
    }
    &::after {
      content: '';
      display: block;
      width: 8px;
      height: 6px;
      position: absolute;
      left: calc(50% - 4px);
      top: calc(50% - 3px);
      opacity: 0;
      transform: translateY(-2px);
      transition: opacity 0.2s ease, transform 0s 0.2s;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOCA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNzQ3NDcgMC4yMDA3MjJDNi44ODQ2MyAwLjA3MjYwNzIgNy4wNjk3OSAwLjAwMDUwNDcyNCA3LjI2MjkyIDIuNjM5NzZlLTA2QzcuNDU2MDUgLTAuMDAwNDk5NDQ1IDcuNjQxNjMgMC4wNzA2MzkyIDcuNzc5NTQgMC4xOTgwMzlDNy45MTc0NSAwLjMyNTQzOSA3Ljk5NjYgMC40OTg4NjMgNy45OTk4OSAwLjY4MDgxOEM4LjAwMzE4IDAuODYyNzczIDcuOTMwMzUgMS4wMzg2NCA3Ljc5NzEzIDEuMTcwMzlMMy44ODQ3IDUuNzc4NjNDMy44MTc0NiA1Ljg0Njg4IDMuNzM2MyA1LjkwMTY0IDMuNjQ2MDggNS45Mzk2NkMzLjU1NTg3IDUuOTc3NjcgMy40NTg0NCA1Ljk5ODE2IDMuMzU5NjMgNS45OTk4OEMzLjI2MDgyIDYuMDAxNjEgMy4xNjI2NSA1Ljk4NDU0IDMuMDcxMDEgNS45NDk2OUMyLjk3OTM2IDUuOTE0ODUgMi44OTYxIDUuODYyOTUgMi44MjYyMyA1Ljc5NzFMMC4yMzM5NSAzLjM1MzUzQzAuMTYxNzMyIDMuMjkwMTMgMC4xMDM4MDggMy4yMTM2NiAwLjA2MzYzMzMgMy4xMjg3QzAuMDIzNDU4NCAzLjA0Mzc0IDAuMDAxODU1NzYgMi45NTIwMiAwLjAwMDExNDM5MyAyLjg1OTAyQy0wLjAwMTYyNjk3IDIuNzY2MDMgMC4wMTY1Mjg2IDIuNjczNjUgMC4wNTM0OTc4IDIuNTg3NDFDMC4wOTA0NjY5IDIuNTAxMTYgMC4xNDU0OTIgMi40MjI4MiAwLjIxNTI5MSAyLjM1NzA1QzAuMjg1MDkxIDIuMjkxMjggMC4zNjgyMzMgMi4yMzk0MyAwLjQ1OTc2IDIuMjA0NTlDMC41NTEyODcgMi4xNjk3NiAwLjY0OTMyMiAyLjE1MjY1IDAuNzQ4MDE3IDIuMTU0MjlDMC44NDY3MTMgMi4xNTU5MyAwLjk0NDA0NyAyLjE3NjI5IDEuMDM0MjEgMi4yMTQxNEMxLjEyNDM4IDIuMjUyIDEuMjA1NTMgMi4zMDY1OCAxLjI3MjgyIDIuMzc0NjNMMy4zMjUwOCA0LjMwNzUxTDYuNzI4ODUgMC4yMjEwMzlDNi43MzQ5MyAwLjIxMzg4NiA2Ljc0MTQ3IDAuMjA3MDk5IDYuNzQ4NDUgMC4yMDA3MjJINi43NDc0N1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=');
    }
    &:checked {
      &::before {
        --gray-color: var(--accent-color);
        background-color: var(--accent-color);
      }
      &::after {
        opacity: 1;
        transform: translate(0);
        transition: opacity 0.2s 0.1s ease, transform 0.2s 0.1s ease;
      }
    }
  }
  &:hover {
    cursor: pointer;
    input {
      &::before {
        --gray-color: var(--accent-color);
      }
    }
  }
`
