import React, {useEffect} from "react";

const SimplexWebPage = () => {
    useEffect(() => {
        if (window.simplex)
            window.simplex.updateCryptoCurrency("XDC");
    })
    return (
        <div className="simplex">
            <iframe title="simplex" is="x-frame-bypass" src={process.env.REACT_APP_IS_PROD_ENV === "true"
                ? "/simplex.html" : "/simplex-sandbox.html"}/>
        </div>)
}
export default SimplexWebPage;
