import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Friends from "../components/Friends/Friends"
import FriendDetails from "../components/Friends/FriendDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Friends />
      },
      {
        path: "friends/:id",
        element: <FriendDetails />
      }
    ]
  }
])

export default router