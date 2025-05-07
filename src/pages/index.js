import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Communication from "./Communication";

const router = [
  { path: "/", component: Dashboard }, // Acts as root layout
  { path: "/dashboard", component: Dashboard }, // Acts as root layout
  { path: "/settings", component: Settings },
  { path: "/profile", component: Profile },
  { path: "/communication", component: Communication },
  { path: "*", component: NotFound }, // Catch-all 404 route
];

export default router;
