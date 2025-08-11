import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About'

const newLocal = '/profile';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  
]);

export default router;
