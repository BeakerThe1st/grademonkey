import * as React from "react";
import {BookIcon, FileQuestionIcon, FileTextIcon, GaugeIcon, SproutIcon, TrophyIcon, WrenchIcon} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";
import {Avatar, AvatarFallback} from "./ui/avatar";
import {ReactNode} from "react";
import {NavLink, Outlet} from "react-router-dom";
import {Heading} from "./Heading";

const Header = () => (
    <div className="shadow px-6 py-4 flex">
        <h3 className="scroll-m-20 border-b-2 border-green-400 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-green-400">grademonkey</h3>
    </div>
);

const NavLinks = [
    {
        label: "Dashboard",
        icon: GaugeIcon,
        route: "/"
    },
    {
        label: "Subjects",
        icon: BookIcon,
        route: "/subjects"
    },
    {
        label: "Assessments",
        icon: FileTextIcon,
        route: "/assessments"
    },
    {
        label: "What-if Analysis",
        icon: FileQuestionIcon,
        route: "/what-if"
    },
    {
        label: "Configuration",
        icon: WrenchIcon,
        route: "/configuration"
    },
];
const Navbar = () => (
    <div className="shadow px-2 py-4 flex flex-col justify-between">
        <ul className="flex flex-col gap-2">
            {NavLinks.map(({label, route, ...link}) => (
                <NavLink key={label} to={route} className={({isActive, isPending}) => `px-3 rounded py-1 flex items-center gap-2 font-medium cursor-pointer ${isActive ? "bg-green-200": ""}`}>
                    <link.icon size={18} />
                    {label}
                </NavLink>
            ))}
        </ul>
        <div className="flex items-center justify-center gap-2">
            <Avatar>
                <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-medium">Adam Beaker</p>
                <p className="text-muted-foreground text-sm">Not you? <u className="cursor-pointer">Logout</u></p>
            </div>
        </div>
    </div>
);



interface ContentWrapperProps {
    children?: ReactNode
}
const ContentWrapper = ({children}: ContentWrapperProps) => (
    <div className="grow p-12">
        {children}
    </div>
)
interface AppProps {
    children?: ReactNode
}
export const App = ({children}: AppProps) => {
    return <div className="flex flex-col h-screen w-screen">
        <Header/>
        <div className="flex grow">
            <Navbar/>
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
        </div>
    </div>;
};