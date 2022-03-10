import logo from './logo.svg';
import { Flex, Heading } from 'rebass'

function App() {
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
