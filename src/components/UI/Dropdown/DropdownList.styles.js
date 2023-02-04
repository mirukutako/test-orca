import styled from 'styled-components'

export const Wrapper = styled.ul`
  list-style: none;
  padding: 4px 0;
  margin: 0;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  min-width: max-content;
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 4px;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-2px);
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
