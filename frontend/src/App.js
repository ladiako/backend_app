
import {React, useState, Suspense, useEffect} from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from './histore'
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';
import useUserAuthentication from './hooks/useUserAuthentication';

function App() {
  const { isLoggedIn } = useUserAuthentication();
  return (
    <>
      {
        isLoggedIn === false ?
          (<Suspense >
            <Unauthenticated /></Suspense>
          )
          :
          (<Suspense >
            <Authenticated /></Suspense>
          )
      }
    </>
  );
}

export default App;