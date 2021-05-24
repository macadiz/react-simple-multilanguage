import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import { DictionaryContext } from './Context/DictionaryContext';

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("selectedLanguage") ?? "en");

  const { dictionary, refreshLanguage } = useContext(DictionaryContext);

  const changeLanguage = (evt) => {
    setSelectedLanguage(evt.target.value);
    localStorage.setItem('selectedLanguage', evt.target.value);
    refreshLanguage();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{dictionary.WELCOME_LABEL}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{dictionary.DESCRIPTION_LABEL}</p>
        <select value={selectedLanguage} onChange={changeLanguage}>
          <option value="es">🇪🇸 Español</option>
          <option value="en">🇺🇸 English</option>
        </select>
      </header>
    </div>
  );
}

export default App;
