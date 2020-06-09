import React, { Component } from 'react';

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
                            <div className="border border-gray-400 mt-12 p-8 rounded">
                                <ul>
                                  {this.state.data.map(crud => {
                                      return (
                                      <div className="border my-3 p-6 rounded-lg mx-10">
                                        <div className="flex justify-between items-center">
                                            <li key={crud.id}>
                                                {crud.title}
                                            </li>
                                              <div className="flex">
                                                <div className="mr-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="-57 0 512 512" width="32px"><g><path d="m156.371094 30.90625h85.570312v14.398438h30.902344v-16.414063c.003906-15.929687-12.949219-28.890625-28.871094-28.890625h-89.632812c-15.921875 0-28.875 12.960938-28.875 28.890625v16.414063h30.90625zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#E33D3D"/><path d="m344.210938 167.75h-290.109376c-7.949218 0-14.207031 6.78125-13.566406 14.707031l24.253906 299.90625c1.351563 16.742188 15.316407 29.636719 32.09375 29.636719h204.542969c16.777344 0 30.742188-12.894531 32.09375-29.640625l24.253907-299.902344c.644531-7.925781-5.613282-14.707031-13.5625-14.707031zm-219.863282 312.261719c-.324218.019531-.648437.03125-.96875.03125-8.101562 0-14.902344-6.308594-15.40625-14.503907l-15.199218-246.207031c-.523438-8.519531 5.957031-15.851562 14.472656-16.375 8.488281-.515625 15.851562 5.949219 16.375 14.472657l15.195312 246.207031c.527344 8.519531-5.953125 15.847656-14.46875 16.375zm90.433594-15.421875c0 8.53125-6.917969 15.449218-15.453125 15.449218s-15.453125-6.917968-15.453125-15.449218v-246.210938c0-8.535156 6.917969-15.453125 15.453125-15.453125 8.53125 0 15.453125 6.917969 15.453125 15.453125zm90.757812-245.300782-14.511718 246.207032c-.480469 8.210937-7.292969 14.542968-15.410156 14.542968-.304688 0-.613282-.007812-.921876-.023437-8.519531-.503906-15.019531-7.816406-14.515624-16.335937l14.507812-246.210938c.5-8.519531 7.789062-15.019531 16.332031-14.515625 8.519531.5 15.019531 7.816406 14.519531 16.335937zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#E33D3D"/><path d="m397.648438 120.0625-10.148438-30.421875c-2.675781-8.019531-10.183594-13.429687-18.640625-13.429687h-339.410156c-8.453125 0-15.964844 5.410156-18.636719 13.429687l-10.148438 30.421875c-1.957031 5.867188.589844 11.851562 5.34375 14.835938 1.9375 1.214843 4.230469 1.945312 6.75 1.945312h372.796876c2.519531 0 4.816406-.730469 6.75-1.949219 4.753906-2.984375 7.300781-8.96875 5.34375-14.832031zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#E33D3D"/></g> </svg>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.873 477.873" xml="preserve" width="32px" height="32px"><g><g>
                                                  <g>
                                                    <path d="M392.533,238.937c-9.426,0-17.067,7.641-17.067,17.067V426.67c0,9.426-7.641,17.067-17.067,17.067H51.2    c-9.426,0-17.067-7.641-17.067-17.067V85.337c0-9.426,7.641-17.067,17.067-17.067H256c9.426,0,17.067-7.641,17.067-17.067    S265.426,34.137,256,34.137H51.2C22.923,34.137,0,57.06,0,85.337V426.67c0,28.277,22.923,51.2,51.2,51.2h307.2    c28.277,0,51.2-22.923,51.2-51.2V256.003C409.6,246.578,401.959,238.937,392.533,238.937z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#52965F"/>
                                                  </g>
                                                </g><g>
                                                  <g>
                                                    <path d="M458.742,19.142c-12.254-12.256-28.875-19.14-46.206-19.138c-17.341-0.05-33.979,6.846-46.199,19.149L141.534,243.937    c-1.865,1.879-3.272,4.163-4.113,6.673l-34.133,102.4c-2.979,8.943,1.856,18.607,10.799,21.585    c1.735,0.578,3.552,0.873,5.38,0.875c1.832-0.003,3.653-0.297,5.393-0.87l102.4-34.133c2.515-0.84,4.8-2.254,6.673-4.13    l224.802-224.802C484.25,86.023,484.253,44.657,458.742,19.142z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#52965F"/>
                                                  </g>
                                                </g></g> </svg>
                                              </div>
                                           </div>
                                      </div>
                                      );
                                  })}
                                  

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Body;
