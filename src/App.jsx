import './App.scss';
import Illustration from './components/illustration/illustration';
import Navbar from './components/navbar/navbar';
import TextContainer from './components/textContainer/textContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='w-full desktop:h-[80vh] h-fit flex desktop:flex-row flex-col items-center justify-between'>
        <TextContainer/>
        <Illustration />
      </div>
    </div>
  );
}

export default App;
