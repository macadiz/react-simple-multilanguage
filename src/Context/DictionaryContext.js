import React, { createContext, useState } from 'react';
import dictionaries from '../Dictionaries';

const DictionaryContext = createContext();

const resolveDictionary = () => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
       return dictionaries[selectedLanguage] ?? dictionaries.en;
    } else if (window.navigator.language) {
        const ISOLanguage = window.navigator.language.split('-')[0]; //Language using ISO 639-1 codes, you may change it to follow BCP-47 language tag
        return dictionaries[ISOLanguage] ?? dictionaries.en;
    } else {
        return dictionaries.en;
    }
};

const DictionaryContextProvider = ({ children }) => {
    const [dictionary, setDictionary] = useState(resolveDictionary());

    const refreshLanguage = () => {
        setDictionary(resolveDictionary());
    }

    return <DictionaryContext.Provider value={{ dictionary, refreshLanguage }}>
        {children}
    </DictionaryContext.Provider>
}

export { DictionaryContext, DictionaryContextProvider };