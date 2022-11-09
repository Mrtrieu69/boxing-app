import { createContext, Fragment, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { ToastContainer } from 'react-toastify';
import 'firebase/compat/auth';
import 'react-toastify/dist/ReactToastify.css';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes';
import { Loader } from './components';

export const LoginContext = createContext();

const config = {
    apiKey: 'AIzaSyBFmN7uz2tCkKM3XRtDQpyk22gEIJvp9cc',
    authDomain: 'boxapp-10bf7.firebaseapp.com',
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
        setTimeout(() => setIsLoading(false), 1000);
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
                <ToastContainer />
            </div>
        </LoginContext.Provider>
    );
}

export default App;
