import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const handlerFocus = () => {
        inputRef.current.focus();
    };
    const handlerWidth = () => {
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle>Программируемые действия и свойства</SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary" onClick={handlerFocus}>
                Toggle other state
            </button>
            <button className="btn btn-btn-secondary" onClick={handlerWidth}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
