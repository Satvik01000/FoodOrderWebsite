import React from "react"
import ReactDOM from "react-dom/client"

// const h3= React.createElement("h3", {}, "I am h3 tag");
// const h2 = React.createElement("h2", {}, "I am h2 tag", h3);
// const h1 = React.createElement("h1", {}, "I am h1 tag", h2);
//
// const div = React.createElement("div", {id:"title"}, h1);
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(div);

const root = ReactDOM.createRoot(document.getElementById("root"));
const Elem = () => (
    <div id="title">
        <h1>
            I am h1 tag
            <h2>
                I am h2 tag
                <h3>
                    I am h3  tag
                </h3>
            </h2>
        </h1>
    </div>
);
console.log(typeof(Elem));
root.render(Elem());