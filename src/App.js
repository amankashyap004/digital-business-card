// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import ButtonBox from "./components/ButtonBox";
import Information from "./components/Information";
import Footer from "./components/Footer";

function App() {
   return (
      <div className="App">
        <div className="main-container">
        <Header />
         <ButtonBox />
         <Information />
         <Footer />
        </div>
      </div>
   );
}

export default App;
