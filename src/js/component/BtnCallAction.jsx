import React from "react";


const BtnCallAction = () => {
    const action = {
        text: 'Call to Action',
        background: 'success btn-outline-dark'
    }
    return (
        <button className={`btn btn-${action.background} px-5 mb-5`} type="button">
            {action.text}
        </button>
    );
};

export default BtnCallAction