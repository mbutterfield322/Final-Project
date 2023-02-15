import { useRouteError } from 'react-router-dom';
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    useRouteError();
    return (
        <>
        <MainNavigation />
        <main id="error-content">
            <h1>An error occured!</h1></main></>
    );
}

export default ErrorPage;