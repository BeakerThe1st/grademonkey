import {Heading} from "../components";

const subjectData = {
    completed: [
        {
            code: "COMP1005",
            name: "Programming Fundamentals",
            grade: {
                wam: 0.9,
                letter: "HD"
            }
        }
    ],
    current: [
        {
            code: "COMP2014",
            name: "Object Oriented Programming",
            grade: {
                wam: 0,
            }
        }
    ]
}
export const Subjects = () => (
    <>
        <Heading level="1">Subjects</Heading>
        <Heading level="2">Current Subjects</Heading>

        <Heading level="2">Completed Subjects</Heading>
    </>
);