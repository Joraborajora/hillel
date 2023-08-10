import './App.css';
import Header from './components/header';
import CenterContainer from './components/block';
import LeftSidebar from './components/aside';


function App() {
  return (
    <div className="App">
      <Header />
      <div className = 'content'>
        <LeftSidebar />
        <CenterContainer />
      </div>
    </div>
  );
}

export default App;
