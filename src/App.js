import { createGlobalStyle } from 'styled-components'
import Home from 'modules/Home/Home'
import { UIComponents } from 'modules/Home/UIComponents'

const GlobalyStyles = createGlobalStyle`
  html {
    --space: 8px;
    --main-color: #10111D;
    --gray-color: #CACFDB;
    --caption-color: #70707B;
    --accent-color: #0080FF;
    --accent-ligth-color: #E1EEFD;;
    --high-color: #E2005E;
    --medium-color: #FE7B1F;
    --low-color: #F8CD39;

    color: var(--main-color);
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    line-height: 1.29;
  }
`

const App = () => (
  <>
    <GlobalyStyles />
    <UIComponents />
    <Home />
  </>
)

export default App
