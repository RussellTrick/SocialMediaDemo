import "./styles/App.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import TopNavBar from "./components/navbar/TopNavbar";
import Profiles from "./pages/Profiles";
import Awards from "./pages/Awards";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";
import Gems from "./pages/Gems";
import Messenger from "./pages/Messenger";
import Tags from "./pages/Tags";
import Clips from "./pages/Clips";
import Cart from "./pages/Cart";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/gems" element={<Gems />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/clips" element={<Clips />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <TopNavBar />
      <Outlet />
    </>
  );
};

export default App;
