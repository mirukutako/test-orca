import { createGlobalStyle } from 'styled-components'
import Home from 'modules/Home/Home'

const GlobalyStyles = createGlobalStyle`
  html {
    --space: 8px;
    --main-color: #10111D;
    --gray-color: #CACFDB;
    --caption-color: #70707B;
    --accent-color: #0080FF;
    --high-color: #E2005E;
    --medium-color: #FE7B1F;
    --low-color: #F8CD39;

    color: var(--main-color);
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    line-height: 18px;
  }
`

const App = () => (
  <>
    <GlobalyStyles />
    Hello <Home />
  </>
)

export default App
