import { useState } from "react";

function State() {

    const [value, setValue] = useState(0);

    const add = () => {
        setValue(value + 1)
    };

    return (
        <div>
            <div>Total Value: ${value}</div>
            <button onClick={add}>Increase</button>
        </div>
    )
};

export default State;