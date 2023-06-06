import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);

    const handlerChange = (event) => {
        const { name, value } = event.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    // validateWithOutCallback
    const validateWithOutCallback = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    // validateWithCallback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallback: {withOutCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handlerChange}
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
