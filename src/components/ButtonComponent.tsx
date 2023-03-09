import React from 'react';

type ButtonPropsType = {
    onClick?: ()=> void,
    name: string
}

const ButtonComponent:React.FC<ButtonPropsType> = ({onClick, name}) => {
    return (
        <button onClick={onClick}>
            {name}
        </button>
    );
};

export default ButtonComponent;