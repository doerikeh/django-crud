import React from 'react';




const Header = () => {
    return (
        <div>
            <header id="header">
                <div className="flex bg-white border-b border-gray-300 fixed top-0 inset-x-0 z-50 h-16 items-center">
                    <div className="w-full max-w-screen-xl relative mx-auto px-6">
                        <div className="flex items-center -mx-6">
                            <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
                                <div className="flex items-center">
                                    <a className="block lg:mr-4">
                                        <svg className="h-10 w-auto hidden md:block" height="72" viewBox="0 0 128 128" width="72" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m64 78.38v28.75l-24.896 14.37-24.897-14.37v-28.75l24.897-14.38z" fill="#fd637b"/><path d="m39.1 92.75v28.75l-24.89-14.37v-28.75z" fill="#62e0da"/><path d="m64 78.38v28.75l-24.9 14.37v-28.75z" fill="#fdd82e"/></g><g><path d="m64 20.88v28.75l-24.896 14.37-24.897-14.37v-28.75l24.897-14.38z" fill="#62e0da"/><path d="m39.1 35.25v28.75l-24.89-14.37v-28.75z" fill="#fdd82e"/><path d="m64 20.88v28.75l-24.9 14.37v-28.75z" fill="#fd637b"/></g><g><path d="m113.793 49.63v28.75l-24.897 14.37-24.896-14.37v-28.75l24.896-14.38z" fill="#fdd82e"/><path d="m113.79 49.63v28.75l-24.89 14.37v-28.75z" fill="#fd637b"/><path d="m88.9 64v28.75l-24.9-14.37v-28.75z" fill="#62e0da"/></g></g></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="flex  flex-grow lg:w-3/4 xl:w-4/5">
                                <div className="w-full lg:px-6 xl:-3/4 xl:-4/5">
                                    <div className="relative">
                                        <span className="relative inline-block">
                                            <input className="transition-colors duration-100 ease-in-out focus:outline-0
                                            border border-transparent focus:bg-white focus:border-gray-400 placeholder-gray-600
                                            rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input relative" type="text" name="search" placeholder="Search Crud"/>
                                        </span>
                                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                                            <svg className="fill-current pointer-events-none text-gray-600 w-4 h-4" id="Capa_1" height="512" viewBox="0 0 515.558 515.558" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;