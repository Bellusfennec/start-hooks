import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const [change, setChange] = useState(false);
    const elementRef = useRef();

    const handlerClick = () => {
        const element = elementRef.current;
        element.style.height = change ? "40px" : "150px";
        element.style.width = change ? "60px" : "80px";
        element.textContent = change ? "Блок" : "text";

        setChange(!change);
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <button
                onClick={handlerClick}
                className="btn btn-outline-primary mb-2"
            >
                {change ? "Отменить" : "Применить"}
            </button>
            <div
                ref={elementRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
