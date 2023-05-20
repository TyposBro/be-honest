import { createBrowserRouter } from "react-router-dom";
import { Company, Profile, Hello, Hr } from "./pages";
import { Layout} from "./pages/Layout";


export const router = createBrowserRouter([
  {
    path: "/p",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/hr",
    element: (
      <Layout>
        <Hr />
      </Layout>
    ),
  },
  {
    path: "/c",
    element: (
      <Layout>
        <Company />
      </Layout>
    ),
  },
  {
    path: "/hello",
    element: (
      <Layout>
        <Hello />
      </Layout>
    ),
  },

  {
    path: "/",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
]);

export default router;
