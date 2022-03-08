import './App.css';
import Cover from './components/cover/Cover';
import Tokenprovider, { useToken } from './providers/tokenProvider';
import Unregistedprovider from './providers/unRegistedProvider';

function App() {

  // const [token, setToken] = useToken()

  return (
    <div className="App">
      <Tokenprovider>
        <Unregistedprovider>
          <Cover/>
        </Unregistedprovider>
      </Tokenprovider>
      
    </div>
  );
}

export default App;
