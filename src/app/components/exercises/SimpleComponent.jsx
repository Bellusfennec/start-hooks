import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = (props) => {
    const { isAuth, onLogin, onLogOut } = props;

    const style = isAuth ? "secondary" : "primary";

    const handlerAuth = () => (isAuth ? onLogOut() : onLogin());

    return (
        <button
            type="button"
            className={"btn btn-" + style}
            onClick={handlerAuth}
        >
            {isAuth ? "Выйти из системы" : "Войти"}
        </button>
    );
};
SimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
