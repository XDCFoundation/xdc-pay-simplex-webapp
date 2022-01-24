import React from "react";

const SimplexWebPage = () => {
    return (
        <div className="simplex">
            <iframe title="simplex" src={process.env.REACT_APP_IS_PROD_ENV === "true"
                ? "/simplex.html" : "/simplex-sandbox.html"}/>
        </div>)
}
export default SimplexWebPage;
