import Dashboard from "views/admin/Dashboard.js";
import Login from "views/auth/Login.js";
import Profile from "views/admin/Profile.js";
import Register from "views/auth/Register.js";
import Tables from "views/admin/Tables.js";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FlashOn from "@material-ui/icons/FlashOn";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import Person from "@material-ui/icons/Person";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";
import AdminDashboard from "./views/admin/SchoolDashboard/AdminDashboard";
import {
    AddTwoTone,
    Grain,
    GroupAddTwoTone,
    LocalAtmTwoTone,
    LocalLibraryTwoTone,
    SchoolTwoTone,
    TvTwoTone
} from "@material-ui/icons";
import Icons from "./views/admin/Icons";
import StudentTables from "./views/admin/SchoolDashboard/StudentTables";
import Library from "./views/admin/SchoolDashboard/Library";
import Admission from "./views/admin/SchoolDashboard/Admission";
import FinanceDashboard from "./views/admin/SchoolDashboard/Finance";
import AllSchools from "./views/admin/SchoolDashboard/AllSchools";
import AddNewSchool from "./views/admin/SchoolDashboard/AddNewSchool";

const routes = [
    {
        path: "/index",
        name: "Dashboard",
        icon: Tv,
        iconColor: "Primary",
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: "/admin dashboard",
        name: "School Dashboard",
        icon: TvTwoTone,
        iconColor: "Primary",
        component: AdminDashboard,
        layout: "/admin",
    },
    {
        path: "/new school",
        name: "New School",
        icon: AddTwoTone,
        iconColor: "Error",
        component: AddNewSchool,
        layout: "/admin",
    },
    {
        path: "/all schools",
        name: "All Schools",
        icon: TvTwoTone,
        iconColor: "Primary",
        component: AllSchools,
        layout: "/admin",
    },
    {
        path: "/finance dashboard",
        name: "Finance Dashboard",
        icon: LocalAtmTwoTone,
        iconColor: "WarningLight",
        component: FinanceDashboard,
        layout: "/admin",
    },
    {
        path: "/student nominal roll",
        name: "Students",
        icon: SchoolTwoTone,
        iconColor: "Primary",
        component: StudentTables,
        layout: "/admin",
    },
    {
        path: "/library",
        name: "Library",
        icon: LocalLibraryTwoTone,
        iconColor: "Error",
        component: Library,
        layout: "/admin",
    },
    {
        path: "/admission",
        name: "Admission",
        icon: GroupAddTwoTone,
        iconColor: "Info",
        component: Admission,
        layout: "/admin",
    },
    {
        path: "/user-profile",
        name: "User Profile",
        icon: Person,
        iconColor: "WarningLight",
        component: Profile,
        layout: "/admin",
    },
    {
        path: "/login",
        name: "Login",
        icon: VpnKey,
        iconColor: "Info",
        component: Login,
        layout: "/auth",
    },
    {
        path: "/register",
        name: "Register",
        icon: AccountCircle,
        iconColor: "ErrorLight",
        component: Register,
        layout: "/auth",
    },



    //resources
    {
        divider: true,
    },
    {
        title: "Documentation",
    },
    {
        href:
            "https://www.google.com/",
        name: "Getting started",
        icon: FlashOn,
    },
    {
        path: "/tables",
        name: "Tables",
        icon: FormatListBulleted,
        iconColor: "Error",
        component: Tables,
        layout: "/admin",
    },
    {
        path: "/icons",
        name: "Icons",
        icon: Grain,
        iconColor: "Primary",
        component: Icons,
        layout: "/admin",
    },


];
export default routes;
