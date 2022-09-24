import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import { PUBLIC_ROUTES } from './routes';

function App() {
    return (
        <div className="App">
            <Routes>
                {PUBLIC_ROUTES.map((route, id) => {
                    const Page = route.component;

                    return (
                        <Route
                            key={id}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
