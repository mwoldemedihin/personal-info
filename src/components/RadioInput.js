import React from 'react';

export default function RadioInput({ personalInfo, onChangeHandler }) {
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
                <p>{label}</p>
                {
                    options.map(option =>
                        <div>
                            <input
                                id={option}
                                type="radio"
                                name={name}
                                value={option}
                                onFocus={onFocusHandler}
                                onBlur={onBlurHandler}
                                onChange={onChangeHandler}
                            />
                            <label for={option}>{option}</label>
                        </div>
                    )
                }

            </div>
            <div>
                {state && <p className="description">{description}</p>}
            </div>
        </div>
    );

}