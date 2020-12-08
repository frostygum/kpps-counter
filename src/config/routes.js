import {
  Home,
  Info
} from '../pages';

const routes = [
  // This is main page
  { exact: true, path: '/', component: Home },

  { path: '/settings', component: Info },
];

export default routes;
  