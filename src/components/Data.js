import React, { useEffect, useState } from "react";
import axios from 'axios';
import UserData from './UserData';
import LoadingGalleryData from './LoadingGalleryData';

function Data() {

    const DataLoading =  LoadingGalleryData(UserData);
  
    const [appState, setAppState] = useState(
      {
        loading: false,
        gallery: null,
      }
    )
  
   useEffect(() => {
      setAppState({loading: true})
      const apiUrl = 'https://test-front.framework.team/paintings';
      axios.get(apiUrl).then((resp) => {
        const allGallery = resp.data;
        setAppState({
        loading: false,
        gallery: allGallery
         });
      });
    }, [setAppState]);
  
  
    return (
      <div className="app">
          <DataLoading isLoading={appState.loading} gallery={appState.gallery} />
      </div>
    );
  }
  
  export default Data;