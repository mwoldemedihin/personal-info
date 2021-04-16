import React from 'react';

export default function SelectInput({ personalInfo, onChangeHandler }) {
    const { name, label, description, options } = personalInfo;
    const [state, setState] = React.useState(false);

    const onFocusHandler = (e) => {
        setState(true);
    }

    const onBlurHandler = (e) => {
        setState(false);
    }

    return (
        <div className="field-container">
            <div>
                <label>{label}</label>
                <select
                    name={name}
                    className="form-control"
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onChange={onChangeHandler}
                >
                    {
                        options.map(option => <option value={option}>{option}</option>)
                    }
                </select>
            </div>
            <div>
                {state && <p className="description">{description}</p>}
            </div>
        </div>
    );

}