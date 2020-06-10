import React, { Component } from 'react';

export class CrudCreate extends Component {
    render() {
        return (
            <div>
                 <div className="flex justify-center">
                    <span className="ml-8">
                        <h1 className="text-3xl font-medium capitalize no-underline text-gray-800">Add Your Todo Or Crud</h1>
                        </span>
                </div>
                <div className="flex flex-grow justify-center">
                    <div className="w-2/3">
                    <div className="mt-8">
                        <input placeholder="Add Your Feed" className="transition-colors duration-100 ease-in-out focus:outline-0
                            border border-transparent focus:bg-white focus:border-gray-400 placeholder-gray-600
                            rounded-lg bg-gray-200 py-2 pr-4 pl-10 block h-12 w-full appearance-none leading-normal ds-input relative"/> 
                    <div className="flex justify-center">
                    <button class="ml-16 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CrudCreate;
