import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-top: calc(var(--space) * 4);

  &[data-view='table'] {
    overflow-x: auto;
  }

  .catalog {
    &[data-view='table'] {
      min-width: 1000px;
    }
    &[data-view='card'] {
      display: flex;
      flex-flow: row wrap;
      gap: calc(var(--space) * 4);
    }
  }

  .catalog-header {
    display: flex;
    align-items: flex-end;
    padding: 0 11px 8px;
    min-width: 1000px;
    &[data-view='card'] {
      display: none;
    }
    &__cell {
      box-sizing: border-box;
      padding: 0px 16px 0 21px;
    }
    &__status {
      width: 66px;
    }
    &__name {
      width: 13%;
    }
    &__file {
      width: 18%;
    }
    &__ip-v4 {
      width: 17%;
    }
    &__ip-v6 {
      width: 20%;
    }
    &__source {
      width: 20%;
      flex-grow: 1;
    }
  }
`
