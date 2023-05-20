import { createBrowserRouter } from "react-router-dom";
import { Company, User, Hello, Hr } from "./pages";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/p",
    element: (
      <Layout>
        <User />
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
        <User />
      </Layout>
    ),
  },
]);

export default router;
