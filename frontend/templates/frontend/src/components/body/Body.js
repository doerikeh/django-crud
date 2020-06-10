import React, { Component } from 'react';
import CrudCreate from './CrudCreate';
import CrudList from './CrudList';
export class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [],
          loaded: false,
          placeholder: "Loading"
        };
      }
    
      componentDidMount() {
        fetch("api/crud/")
          .then(response => {
            if (response.status > 400) {
              return this.setState(() => {
                return { placeholder: "Something went wrong!" };
              });
            }
            return response.json();
          })
          .then(data => {
            this.setState(() => {
              return {
                data,
                loaded: true
              };
            });
          });
      }
    
    render() {
        return (
            <div>
                <div className="w-full max-w-screen-xl mx-auto px-6">
                    <div className="lg:flex -mx-6">
                            <div className="pt-24 pb-16 lg:pt-28 w-full">
                            <CrudCreate/>
                            <CrudList/>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Body;
