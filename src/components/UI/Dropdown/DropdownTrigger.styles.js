/* eslint-disable no-undef */
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space);
  padding: 6px 8px;
  box-sizing: border-box;
  border-radius: 4px;
  height: 30px;
  svg {
    color: var(--gray-color);
  }

  .trigger-arrow {
    font-size: 0px;
    transition: transform 0.2s ease;
  }

  ${props => {
    switch (props.type) {
      case 'button':
        return css`
          color: #fff;
          background-color: var(--accent-color);
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
          svg {
            color: white;
          }
        `
      default:
        return css`
          background-color: white;
          border: 1px solid var(--gray-color);
          transition: border-color 0.2s ease;
          &:hover,
          [data-open='true'] & {
            border-color: var(--accent-color);
            cursor: pointer;
            svg {
              color: var(--accent-color);
            }
          }
          svg {
            transition: color 0.2s ease;
            color: var(--gray-color);
          }
        `
    }
  }}

  [data-open="true"] & {
    .trigger-arrow {
      transform: rotate(180deg);
      transform: scaleY(-1);
    }
  }
`
