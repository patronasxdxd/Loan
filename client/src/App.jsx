import { Navbar, Welcome ,House,CreateLendContract,Fund,TakeLoan} from "./components";


const App = () => (
  
  <div className="min-h-screen">
    <div className="">
  
      <Navbar />
      <House/>
      <Welcome />
    <div className="flex justify-end gap-2 ">
      <CreateLendContract/>
      <Fund/>
      <TakeLoan/>
    </div>
    </div>
  </div>
);

export default App;
