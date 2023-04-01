import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './user/Users';
import User from './user/User';
import Pokemon from './pokemon/Pokemon';

function App() {
  return (
    <Routes>
      <Route path="/">
        {/*Home aponta para o arquivo Home.js*/}
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Route>

      <Route path='/user'>
        <Route index element={<Users/>}/>
        <Route path=':userId' element={<User/>}/>
      </Route>

      <Route path='/pokemon'>
        <Route index element={<Pokemon/>}/>
        <Route path=':pokemonId' element={<Pokemon/>}/>
      </Route>
    </Routes>
  );
}

export default App;
