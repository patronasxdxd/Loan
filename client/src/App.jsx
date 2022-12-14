import { Navbar, Welcome ,House} from "./components";
import { CryptoCards, Button ,Select} from '@web3uikit/core';


const App = () => (
  
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
  
      {/* <Navbar /> */}
      <House/>
      <Welcome />
    <div className="flex">
    {/* <Propose /> */}
    {/* <Vote /> */}
    {/* <Excecute /> */}
    </div>
    {/* <Box /> */}
    </div>

  </div>
);

export default App;
