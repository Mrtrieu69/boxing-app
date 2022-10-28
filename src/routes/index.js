import { HomePage, TrainerPage, Login, CoursePage } from '../pages';
import Layout from '../Layout';

const PRIVATE_ROUTES = [
    { path: '/', component: HomePage, layout: Layout },
    { path: '/trainer', component: TrainerPage, layout: Layout },
    { path: '/courses/:idCourse', component: CoursePage, layout: Layout },
    { path: '*', component: null, layout: null, redirect: '/' },
];

const PUBLIC_ROUTES = [
    { path: '/login', component: Login, layout: null },
    { path: '*', component: null, layout: null, redirect: '/login' },
];

export { PUBLIC_ROUTES, PRIVATE_ROUTES };
