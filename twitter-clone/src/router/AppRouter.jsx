import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import { Chat, Home, Profile, Notification } from "../pages";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.NOTIFICATION} element={<Notification />} />
        <Route path={routes.CHAT} element={<Chat />} />
        <Route path={routes.PROFILE} element={<Profile />} />
      </Routes>
    </HashRouter>
  );
};
