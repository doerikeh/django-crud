import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCruds } from '../../actions/cruds';
import CrudsForm from './CrudForm';

export class CrudCreate extends Component {
    onSubmit = formValues => {
        this.props.addCruds(formValues);
      };
    render() {
        return (
            <div>
                 <div className="flex justify-center">
                    <span className="ml-8">
                        <h1 className="text-3xl font-medium capitalize no-underline text-gray-800">Add Your Todo Or Crud</h1>
                    </span>
                </div>
                <CrudsForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(
    null,
    { addCruds }
  )(CrudCreate);
