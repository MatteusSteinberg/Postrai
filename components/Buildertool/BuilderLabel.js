import React, { useRef, useEffect } from 'react'

export default function BuilderLabel({ value, updateLabel, setLabelActive, active, color, handleChange }) {
    const input = useRef();

    const handleOnChange = (ev) => {
        handleChange(input.current.value);
    }

    useEffect(() => {
        input.current.value = value;

        return () => {

        }
    }, [value])


    return (
        <li className="label">
            <div className="label-container">
                <div style={{ backgroundColor: `${color}` }} className="color" />
                <input placeholder="Label" type="text" className="label-name"
                    onChange={handleOnChange}
                    ref={input}
                />
            </div>
        </li>
    )
}
