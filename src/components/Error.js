import {useRouteError} from "react-router-dom";

const Error = ()=>{
    const err=useRouteError();
    return (
        <h1>
            OOPS!!!!!!!
            <h2>
                Something went wrong
            </h2>
            <h3>
                {err.status} : {err.statusText}
            </h3>
        </h1>
    )
}
export default Error