import React from "react"

const styleDiv = {
    minHeight: "100vh",
    background: "#ffffe6",
    textAlign: "center"

}
/**
 * Component for 404 page
 */
export default function Error404() {
    return (
        <div style={styleDiv}>
            <h1 className="headerTextDark">Error 404</h1>
            <h1 className="subHeaderTextDark"> Page not found</h1>
        </div>
    );
}