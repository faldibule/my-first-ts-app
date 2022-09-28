import { FC, useReducer } from 'react';
// import Container from './views/container'
// import User from './views/user/User';
import AllApp from './views/freecodecamp'
import './index.css'
import { TodosContext } from './context/TodosContext';
import TodosReducer from './reducer/TodosReducer';
import { init } from './reducer/InitValue';


const App: FC = () => {
  const [state, dispatch] = useReducer(TodosReducer, init)
  return (
    <div className='App' style={{ backgroundColor: '#eee', height: '100vh', overflowX: 'hidden' }}>
      <TodosContext.Provider value={{ state, dispatch }}>
        <AllApp />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
