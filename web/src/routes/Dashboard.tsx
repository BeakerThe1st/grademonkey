import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../components/ui/card";
import {Heading} from "../components";

const ContentCards = [
    {
        name: "Your WAM",
        description: "Weighted Average Mark",
        value: "73.5%",
        grow: 1,
    },
    {
        name: "Your GPA",
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
        value: "56% (WAM)",
        grow: 2,
    },
];

export const Dashboard = () => (
    <>
        <Heading level="1">Dashboard</Heading>
        {<div className="flex py-5 gap-8">
            {ContentCards.map((card) => <Card className={`grow-[${card.grow}]`}>
                <CardHeader>
                    <CardTitle>{card.name}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{card.value}</h2>
                </CardContent>
            </Card>)}
        </div>}
        <Heading level="2">
            Subject Overview
        </Heading>
    </>
);