import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout=()=>{
    return (
        <div className="App">
            <Header/>
            <Body/>
        </div>
    );
};

rootElement.render(<AppLayout/>);