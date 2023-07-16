import * as React from "react";
import {Button} from "./ui/button";
import {
    Book,
    BookIcon, CalendarDaysIcon, FileIcon,
    FileQuestion,
    FileQuestionIcon, FileTextIcon,
    Gauge,
    GaugeIcon, GraduationCapIcon, PaperclipIcon, School2Icon,
    SettingsIcon, Sprout,
    SproutIcon, Trophy,
    TrophyIcon, WrenchIcon
} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";
import {Tabs, TabsList, TabsTrigger} from "./ui/tabs";
import {Avatar, AvatarFallback} from "./ui/avatar";

const Header = () => (
    <div className="shadow px-6 py-4 flex">
        <h3 className="scroll-m-20 border-b-2 border-green-400 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-green-400">grademonkey</h3>
    </div>
)

const NavLinks = [
    {
        label: "Dashboard",
        icon: GaugeIcon,
        active: true,
    },
    {
        label: "Subjects",
        icon: BookIcon
    },
    {
        label: "Assessments",
        icon: FileTextIcon
    },
    {
        label: "Goals",
        icon: TrophyIcon
    },
    {
        label: "Study Planner",
        icon: SproutIcon
    },
    {
        label: "What-if Analysis",
        icon: FileQuestionIcon
    },
    {
        label: "Configuration",
        icon: WrenchIcon
    }
]
const Navbar = () => (
    <div className="shadow px-2 py-4 flex flex-col justify-between">
        <ul className="flex flex-col gap-2">
            {NavLinks.map((link) => (
                <li className={`px-3 rounded py-1 flex items-center gap-2 font-medium cursor-pointer ${link.active ? "bg-green-200" : ""}`}><link.icon size={18} />{link.label}</li>
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
)

const ContentCards = [
    {
        name: "Current WAM",
        description: "Weighted Average Mark",
        value: "73.5%",
        grow: 1
    },
    {
        name: "Current GPA",
        description: "Grade Point Average",
        value: "5.5",
        grow: 1,
    },
    {
        name: "Best Subject",
        description: "COMP1005 - Programming Fundamentals",
        value: "94.4% (WAM)",
        grow: 2,
    },
    {
        name: "Worst Subject",
        description: "MATH1006 - Discrete Mathematics",
        value: "50.2% (WAM)",
        grow: 2,
    }
]

const Content = () => (
    <div className="grow p-12">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Dashboard</h1>
        <div className="flex py-5 gap-8">
            {ContentCards.map((card) => <Card className={`grow-[${card.grow}]`}>
                <CardHeader>
                    <CardTitle>{card.name}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{card.value}</h2>
                </CardContent>
            </Card>)}
        </div>
        <h2 className="py-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Subject Overview</h2>
    </div>
)
export const App = () => {
    return <div className="flex flex-col h-screen w-screen">
        <Header />
        <div className="flex grow">
                <Navbar />
                <Content />
        </div>
    </div>
}