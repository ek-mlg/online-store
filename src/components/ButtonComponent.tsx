import React from 'react';

type ButtonPropsType = {
    onClick: ()=> void
}

const ButtonComponent:React.FC<ButtonPropsType> = ({onClick}) => {
    return (
        <button onClick={onClick}>
            Click me
        </button>
    );
};

export default ButtonComponent;