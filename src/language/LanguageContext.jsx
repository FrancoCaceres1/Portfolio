/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';
import PropTypes from "prop-types";
import i18n from './i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  LanguageProvider.propTypes = {
    children: PropTypes.object.isRequired,
  };

  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}