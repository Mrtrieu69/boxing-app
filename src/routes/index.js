import { HomePage, Login, CoursePage, Practice, NotFound } from '../pages';
import Layout from '../Layout';

const PRIVATE_ROUTES = [
    { path: '/', component: HomePage, layout: Layout },
    { path: '/courses/:courseId/trainings/:trainingId', component: CoursePage, layout: Layout },
    { path: '/courses/:courseId/trainings/:trainingId/practice', component: Practice, layout: Layout },
    { path: '*', component: NotFound, layout: null },
];

const PUBLIC_ROUTES = [
    { path: '/login', component: Login, layout: null },
    { path: '*', component: null, layout: null, redirect: '/login' },
];

export { PUBLIC_ROUTES, PRIVATE_ROUTES };
