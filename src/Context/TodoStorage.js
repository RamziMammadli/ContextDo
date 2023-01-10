import {useState, createContext, useEffect, useContext} from 'react';
import todoStorage from '../helper/Helper'

export const todoContext = createContext(null);

export const TodoProvider = ({children}) => {
  
  const [titles, settitles] = useState([]);


  
  const values = {
    titles,
    settitles,
  };
  
  // useEffect(() => {
    //   todoStorage.get()
    //   .then(data => {
      //     settitle(data);
      //   });
      // }, []);
      
  return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};
