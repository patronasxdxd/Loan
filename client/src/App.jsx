import { Navbar, Welcome ,House,CreateLendContract,Fund} from "./components";
import { CryptoCards, Button ,Select} from '@web3uikit/core';


const App = () => (
  
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
  
      {/* <Navbar /> */}
      <House/>
      <Welcome />
    <div className="flex justify-end gap-10">

      <CreateLendContract/>
      <Fund/>
      

    {/* <Propose /> */}
    {/* <Vote /> */}
    {/* <Excecute /> */}
    </div>
    {/* <Box /> */}
    </div>

  </div>
);

export default App;
