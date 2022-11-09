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
    const [resize, setResize] = useState(() => window.innerWidth);

    const ROUTES = isSignedIn ? PRIVATE_ROUTES : PUBLIC_ROUTES;
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
            setIsSignedIn(!!user);
        });

        return () => unregisterAuthObserver();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setResize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        setTimeout(() => setIsLoading(false), 1000);

        return () => window.removeEventListener('resize', handleResize);
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
            {resize <= 764 && (
                <div className="notion">
                    <div className="notion-text-left">Скачивай удобное приложение для своего телефона</div>
                    <div className="notion-text-right">И продолжай обучение вдали от компьютера</div>
                    <img src="/images/notion/mobile.png" className="mobile" alt="" />
                    <div className="notion-btns">
                        <a href="/#!" className="notion-btn">
                            <img src="/images/notion/apple.png" alt="" />
                        </a>
                        <a href="/#!" className="notion-btn">
                            <img src="/images/notion/google.png" alt="" />
                        </a>
                    </div>
                </div>
            )}
        </LoginContext.Provider>
    );
}

export default App;
