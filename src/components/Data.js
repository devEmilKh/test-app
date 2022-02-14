import React, { useEffect, useState } from "react";
import axios from 'axios';
import UserData from './UserData';
import LoadingPersonsData from './LoadingPersonsData';

function Data() {

    const DataLoading =  LoadingPersonsData(UserData);
  
    const [appState, setAppState] = useState(
      {
        loading: false,
        persons: null,
      }
    )
  
   useEffect(() => {
      setAppState({loading: true})
      const apiUrl = 'http://https://test-front.framework.team/paintings';
      axios.get(apiUrl).then((resp) => {
        const allPersons = resp.data;
        setAppState({
        loading: false,
        persons: allPersons
         });
      });
    }, [setAppState]);
  
  
    return (
      <div className="app">
          <DataLoading isLoading={appState.loading} persons={appState.persons} />
      </div>
    );
  }
  
  export default Data;