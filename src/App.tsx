
import { BrowserRouter } from 'react-router-dom';
import RootRouter from '../src/Routes/RootRouter';

function App (){
  const base="/"
  return (
     <BrowserRouter basename={base}>
            <RootRouter />
          </BrowserRouter>
  );
};

export default App;
