import { createContext } from "react";

export const languageContexte = createContext();

export const LanguageProvider = ({ children }) => {
  const state = {
    languages: [
      { id: 1, value: "javascript", xp: 3 },
      { id: 2, value: "Css", xp: 3 },
      { id: 3, value: "Php", xp: 3 },
      { id: 5, value: "sql", xp: 3 },
    ],
    frameworks: [
      { id: 1, value: "ReactJS", xp: 2 },
      { id: 2, value: "Bootstarp", xp: 3 },
      { id: 3, value: "Codeigniter", xp: 2 },
      { id: 4, value: "Sass", xp: 3 },
    ],
  };
  return (
    <languageContexte.Provider value={state}>
      {children}
    </languageContexte.Provider>
  );
};
