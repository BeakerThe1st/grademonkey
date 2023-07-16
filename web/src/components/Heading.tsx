import * as React from "react";

interface HeadingProps {
    children? : React.ReactNode;
    level: string;
    className?: string;
}

const classes = new Map<number, string>;
classes.set("1", "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl");
classes.set("2", "py-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0")

export const Heading = (props: HeadingProps) => {
    const className = classes.get(props.level) + props.className ?? "";
    return <h1 className={className}>{props.children}</h1>
}