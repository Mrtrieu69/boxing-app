import { createContext, Fragment, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes';
import { Loader } from './components';

export const LoginContext = createContext();

const config = {
    apiKey: 'AIzaSyBhAg4y0q3AR1zgJs2UVlMPDfzjbrCFp7w',
    authDomain: 'boxapp-17db5.firebaseapp.com',
};
firebase.initializeApp(config);

function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const ROUTES = isSignedIn ? PRIVATE_ROUTES : PUBLIC_ROUTES;
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <LoginContext.Provider value={{ isSignedIn, setIsSignedIn }}>
            <div className="App">
                <Routes>
                    {ROUTES.map((route, id) => {
                        const Page = route.component || Navigate;
                        const Layout = route.layout || Fragment;

                        return (
                            <Route
                                key={id}
                                path={route.path}
                                element={
                                    <Layout>{route.component ? <Page /> : <Page to={route.redirect} replace />}</Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </LoginContext.Provider>
    );
}

export default App;
