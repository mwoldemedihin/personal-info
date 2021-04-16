import React from 'react';
import '../App.css';
export default function TextInput({ personalInfo, onChangeHandler }) {
    const [state, setState] = React.useState(false);
    const { name, label, description } = personalInfo;

    const onFocusHandler = (e) => {
        setState(true);
    }

    const onBlurHandler = (e) => {
        setState(false);
    }
    return (
        <div className="field-container form-group" data-test="textInput">
            <div data-test="input-div">
                <label>{label}</label>
                <input
                    className="form-control"
                    type="text"
                    name={name}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onChange={onChangeHandler}
                />
            </div>
            <div data-test="description-div">
                {state && <p className="description">{description}</p>}
            </div>
        </div>
    );

}