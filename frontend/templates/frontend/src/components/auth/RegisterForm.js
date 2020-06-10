import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../actions/auth';

export class RegisterForm extends Component {
    renderField = ({ input, label, type, meta: { touched, error } }) => {
        return (
          <div className={`field ${touched && error ? 'error' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...input} type={type} />
            {touched && error && (
              <span className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'>{error}</span>
            )}
          </div>
        );
    };

    onSubmit = formValues => {
        this.props.register(formValues);
    };
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
          }
        return (
            <div>
            <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <div class="mb-4">
                           <Field name='email'
                                type='text'
                                component={this.renderField}
                                label='Email' />
                        </div>
                        <div class="mb-6">
                            <Field name='password'
                                type='password'
                                component={this.renderField}
                                validate={required}
                                label='Password' />
                        </div>
                        <div class="mb-6">
                            <Field name='password2'
                                type='password'
                                component={this.renderField}
                                validate={[required, passwordsMatch]}
                                label='Confirm Password' />
                        </div>
                            <Field
                            name='non_field_errors'
                            type='hidden'
                            component={this.hiddenField}
                            />
                        <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p style={{ marginTop: '1rem' }}>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
            </div>
            </div>
        )
    }
}

const required = value => (value ? undefined : 'Required');

const minLength = min => value =>
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;

const minLength3 = minLength(3);

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength15 = maxLength(15);

const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? 'Passwords do not match' : undefined;

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

RegisterForm = connect(
  mapStateToProps,
  { register }
)(RegisterForm);

export default reduxForm({
  form: 'registerForm'
})(RegisterForm);

