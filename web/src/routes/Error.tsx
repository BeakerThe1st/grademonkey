import {useRouteError} from "react-router-dom";

export const Error = () => {
    const error = useRouteError() as any;
    console.error(error);

    return <>
        <h1>Whoops!</h1>
        <h2>{error.statusText ?? error.message}</h2>
    </>
}