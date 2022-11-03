import { HomePage, Login, CoursePage, Practice } from '../pages';
import Layout from '../Layout';

const PRIVATE_ROUTES = [
    { path: '/', component: HomePage, layout: Layout },
    { path: '/courses/:courseId', component: CoursePage, layout: Layout },
    { path: '/courses/:courseId/practice/:practiceId', component: Practice, layout: Layout },
    { path: '*', component: null, layout: null, redirect: '/' },
];

const PUBLIC_ROUTES = [
    { path: '/login', component: Login, layout: null },
    { path: '*', component: null, layout: null, redirect: '/login' },
];

export { PUBLIC_ROUTES, PRIVATE_ROUTES };
