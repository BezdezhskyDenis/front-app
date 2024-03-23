import "./style/style.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { useAlert } from "./contexts/alert.context";
import { useUser } from "./contexts/user.context";

import Home from "./components/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import PageAlert from "./components/common/alert";
import SideNavBar from "./components/sideNavbar";
import Dashboard from "./components/dashboard";

import UserConnection from "./components/userConnection";

function App() {
  const { alert, alertType } = useAlert();
  const { userConnectionVisible } = useUser();
  return (
    <div className="App">
      <header className="pb-3 sticky-top">
        <NavBar />
        <SideNavBar />
        {alert && <PageAlert />}
      </header>
      {userConnectionVisible && <UserConnection />}

      <main className="main flex-fill container mt-3 ps-5">
        <Routes>
          <Route path="/" element={<Home headTitle="Welcome" />} />
          <Route
            path="/dashboard"
            element={<Dashboard headTitle="Dashboard" />}
          />
          {/* <Route path="/about" element={<About headTitle="About"/>} />
            <Route path="/sign-in" element={<SignIn redirect="/" headTitle="SignIn"/>} />
            <Route path="/sign-out" element={<SignOut  redirect="/" />} />
            <Route path="/my-cards/edit/:id" element={<CardManage  headTitle="Card Manage" redirect="/my-cards"/>}/>
            <Route path="/card/:id" element={<BusinessCardPage redirect="/"/>}/>
            <Route path="/my-cards/delete/:id/:bizNumber" element={<CardDelete/>}/>
            <Route path="/new-card" element={<CardCreate  headTitle="Make New Card" redirect="/my-cards"/>}/>
            <Route path="/my-cards" element={<MyCards headTitle="My Cards"/>} />
            <Route path="/fav-cards" element={<FavCards headTitle="Favorites Cards"/>} /> */}
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
