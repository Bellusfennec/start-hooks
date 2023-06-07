import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
    const [isAuth, setIsAuth] = useState(
        localStorage.getItem("auth") ? localStorage.getItem("auth") : false
    );

    const onLogin = () => {
        localStorage.setItem("auth", "isAuth");
        setIsAuth(true);
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
        setIsAuth(false);
    };

    return (
        <CardWrapper>
            <SimpleComponent
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
