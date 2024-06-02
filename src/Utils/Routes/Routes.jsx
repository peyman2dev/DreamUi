import Components from "../../Pages/Components/Components";
import Docs from "../../Pages/Docs/Docs";
import Home from "../../Pages/Home";

const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/docs/*",
    element: <Docs />,
  },
  {
    path: "/components/*",
    element: <Components />,
  },
];

export default routes;
