import DashboardIcon from "./Assets/DashboardIcon.svg"
import DashboardIconActive from "./Assets/DashboardIconActive.svg"

import CalenderIcon from "./Assets/calender.svg"
import CalenderIconActive from "./Assets/calenderActvive.svg"

import SettingIcon from "./Assets/SettingsIcon.svg"
import SettingIconActive from "./Assets/SettingsIconActive.svg"

import SignOutIcon from "./Assets/SignOutIcon.svg"
import SignOutIconActive from "./Assets/SignOutIcon.svg"

import HomeScreen from "./Screens/HomeScreen"
import DayScreen from "./Screens/DayScreen"

const routes = [
    {
        label: "Dashboard",
        path: "/",
        icon: DashboardIcon,
        activeIcon: DashboardIconActive,
        component: HomeScreen,
    },
    {
        label: "Monday",
        path: "/monday",
        icon: CalenderIcon,
        activeIcon: CalenderIconActive,
        component: DayScreen,
    },
    {
        label: "Tuesday",
        path: "/tuesday",
        icon: CalenderIcon,
        activeIcon: CalenderIconActive,
        component: DayScreen,
    },
    {
        label: "Wednesday",
        path: "/wednesday",
        icon: CalenderIcon,
        activeIcon: CalenderIconActive,
        component: DayScreen,
    },
    {
        label: "Thursday",
        path: "/thursday",
        icon: CalenderIcon,
        activeIcon: CalenderIconActive,
        component: DayScreen,
    },
    {
        label: "Friday",
        path: "/friday",
        icon: CalenderIcon,
        activeIcon: CalenderIconActive,
        component: DayScreen,
    },
    {
        label: "Saturday",
        path: "/saturday",
        icon: CalenderIcon,
        activeIcon: CalenderIconActive,
        component: DayScreen,
    },
    {
        label: "Sunday",
        path: "/sunday",
        icon: CalenderIcon,
        activeIcon: CalenderIconActive,
        component: DayScreen,
    },
    {
        label: "Sign Out",
        path: "/sign-out",
        icon: SignOutIcon,
        activeIcon: SignOutIcon,
    },
]

export default routes