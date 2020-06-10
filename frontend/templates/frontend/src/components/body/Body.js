import React, { Component } from 'react';
import CrudCreate from './CrudCreate';
import CrudList from './CrudList';
export class Body extends Component {

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
