import logo from './logo.svg';
import { Flex, Heading } from 'rebass'

function App() {
  window.location.replace("https://polyweave.notion.site/Polyweave-0c385b22a30a41a0a9568d6f8c6f46a7");
  return (
    <Flex sx={{
        height: '100vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Heading sx={{
            fontFamily: 'Montserrat'
        }}>
            Polyweave
        </Heading>
    </Flex>
  );
}

export default App;
