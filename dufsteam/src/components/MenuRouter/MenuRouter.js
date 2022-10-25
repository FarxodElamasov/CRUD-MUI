import Home from "../Home/Home";
import Product from "../Product/Product";
import About from "../About/About"
import Icons from "./routersicon"


const MainRoutes = [{
  title: "Home",
  path: "/home",
  element: <Home />,
},
{
  title: "Mahsulot",
  path: "/product",
  element: <Product />,
},
{
  title: "About",
  path: "/about",
  element: <About />,
},
].map((el) => {
  return {
    ...el,
    icon: Icons(el.path),
  };
});

export default MainRoutes;
