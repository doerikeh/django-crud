import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export class CrudForm extends Component {
    renderField = ({ input, label, meta: { touched, error } }) => {
        return (
          <div className={`field ${touched && error ? 'error' : ''}`}>
            <label>{label}</label>
            <input {...input} autoComplete='off' placeholder="Add Your Feed" className="transition-colors duration-100 ease-in-out focus:outline-0
                border border-transparent focus:bg-white focus:border-gray-400 placeholder-gray-600
                rounded-lg bg-gray-200 py-2 pr-4 pl-10 block h-12 w-full appearance-none leading-normal ds-input relative"/> 
            {touched && error && (
            <span className='ui pointing red basic label'>{error}</span>
            )}
          </div>
        );
      };
    
      onSubmit = formValues => {
        this.props.onSubmit(formValues);
      };
     
    render() {
        return (
            <div>
               <div className="flex flex-grow justify-center">
                    <div className="w-2/3">
                        <div className="mt-8">
                            
                            <div className="flex justify-center">
                                <form onSubmit={this.this.props.handleSubmit(this.onSubmit)}>
                                <Field name='cruds' component={this.renderField} label='Cruds' />
                                <button class="ml-16 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {};
  
    if (!formValues.task) {
      errors.cruds = 'Please enter at least 1 character';
    }
  
    return errors;
};
  
export default reduxForm({
    form: 'crudsForm',
    touchOnBlur: false,
    validate
})(CrudForm);
