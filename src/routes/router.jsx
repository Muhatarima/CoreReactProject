import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home/Home'
import Timeline from '../pages/Timeline/Timeline'
import Stats from '../pages/Stats/Stats'
import NotFound from '../pages/NotFound/NotFound'
import FriendDetails from '../components/Friends/FriendDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'friends/:id',
        element: <FriendDetails />,
      },
      {
        path: 'timeline',
        element: <Timeline />,
      },
      {
        path: 'stats',
        element: <Stats />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router