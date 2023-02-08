import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  background: #ffffff;
  border-radius: 2px;
  position: absolute;
  z-index: 6;
  box-sizing: border-box;
  width: 100%;
  min-width: max-content;
  position: absolute;
  ${props => {
    return props.dir === 'right' ? 'right: 0;' : 'left: 0;'
  }}
  ${props => {
    switch (props.position) {
      case 'top':
        return css`
          bottom: 100%;
          margin-bottom: 4px;
          transform: translateY(2px);
        `
      default:
        return css`
          top: 100%;
          margin-top: 4px;
          transform: translateY(-2px);
        `
    }
  }}
    ${props => {
    switch (props.flow) {
      case 'row':
        return css`
          display: flex;
          flex-flow: row wrap;
          padding: 4px;
          box-shadow: 0px -2px 16px 2px rgba(0, 0, 0, 0.12);
        `
      default:
        return css`
          padding: 4px 0;
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        `
    }
  }}
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0s 0.2s, visibility 0s 0.2s;

  li {
    padding: 4px 16px;
    transition: color 0.2s ease, background-color 0.2s ease;
    &:hover {
      background: var(--accent-ligth-color);
      color: var(--accent-color);
      cursor: pointer;
    }
  }

  [data-open='true'] & {
    pointer-events: all;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: visibility 0s 0s, opacity 0.2s 0.1s ease, transform 0.2s 0.1s ease;
  }
`
