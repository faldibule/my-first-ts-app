import { FC } from 'react';
// import Container from './views/container'
// import User from './views/user/User';
import AllApp from './views/freecodecamp'
import './index.css'

const App: FC = () => {
  return (
    <div className='App' style={{ backgroundColor: '#eee', height: '100vh', overflowX: 'hidden' }}>
      <AllApp />
    </div>
  );
}

export default App;
