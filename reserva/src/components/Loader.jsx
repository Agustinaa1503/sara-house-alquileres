import React, { useState } from 'react'
import HashLoader from "react-spinners/HashLoader";

function Loader() {
    const [loading] = useState(true);

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    return (
        <div style={{marginTop:'100px'}}>
            <div className="sweet-loading text-center">

                <HashLoader
                    color={'#ce0045'}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    )
}

export default Loader