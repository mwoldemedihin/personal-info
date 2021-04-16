import React from 'react';
import TextInput from './components/TextInput';
import RadioInput from './components/RadioInput';
import SelectInput from './components/SelectInput';

export default class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            formType: '',
            fields: []
        }
    }

    displayOrder = (field1, field2) => {
        return field1.displayOrder - field2.displayOrder;
    }

    onChangeHandler = (e) => {
        const { name, value } = e.target;

        let fields = [...this.state.fields];
        let fieldIndex = fields.findIndex(field => field.name === name);

        if (fieldIndex !== -1) {
            fields[fieldIndex].value = value;
            this.setState({ fields }, () => console.log(this.state));
        }
    }

    componentDidMount() {
        fetch('data.json')
            .then(response => response.json())
            .then(result => {

                let fields = result.data.fields.sort(this.displayOrder);
                fields = fields.map(field => ({ ...field, value: '' }));
                console.log({ fields });
                this.setState({
                    isLoading: false,
                    formType: result.formType,
                    fields
                });
            })
            .catch(err => { console.log({ err }); });
    }

    render() {
        const { isLoading, formType, fields } = this.state;

        return (
            <div>
                <h2>{formType}</h2>
                {isLoading ? (<h2>Loading...</h2>) : (
                    <form className="form">
                        {
                            fields.map(field => {
                                switch (field.type) {
                                    case 'radio':
                                        return <RadioInput
                                            personalInfo={field}
                                            onChangeHandler={this.onChangeHandler} />
                                    case 'select':
                                        return <SelectInput
                                            personalInfo={field}
                                            onChangeHandler={this.onChangeHandler} />
                                    default:
                                        return <TextInput
                                            personalInfo={field}
                                            onChangeHandler={this.onChangeHandler} />
                                }
                            })
                        }
                    </form>
                )}
            </div>
        );
    }
}