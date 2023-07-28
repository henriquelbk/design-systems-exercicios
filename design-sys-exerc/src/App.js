import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import FollowButtonWithShadow from './components/Button';
import SocialProfile from './components/Card';


function App() {
  return (
    <ChakraProvider >
      <SocialProfile />
    </ChakraProvider>
  );
}

export default App;