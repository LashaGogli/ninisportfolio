import './App.css';
import FooterComponent from './components/footer/FooterComponent';
import HeaderComponent from './components/header/HeaderComponent';
import HomeMain from './components/main/pages/home/HomeMain';


function App() {
  return (
    <div className='out-div'>
      <div className="App">
        <div className="inside-app">
          <HeaderComponent></HeaderComponent>
          <HomeMain></HomeMain>
        </div>       
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
