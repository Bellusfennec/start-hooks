import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};

const Component = ({ number }) => {
    return <div>Компонент списка {number || ""}</div>;
};
Component.propTypes = {
    number: PropTypes.number
};

const ComponentsList = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        console.log(child);
        const config = {
            ...child.props,
            number: i + 1
        };

        return React.cloneElement(child, config);
    });
};

export default ChildrenExercise;
