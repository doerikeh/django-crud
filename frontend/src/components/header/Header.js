import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="container mx-auto">
                <nav className="flex items-center justify-between bg-gray-200 flex-wrap xl:py-0 pt-0">
                    <div className="flex items-center flex-shrink-0 text-white m-2 xl:m-0 xl:mr-6">
                        <a title="crud">
                            <img src="../../../static/icons/game.svg" className="h-8 lg:w-36" />
                        </a>
                    </div>
                    <div className="flex flex-grow lg:w-3/4 xl:2-4/5">
                        <div className="w-fulllg lg:px-6 lg:w-3/4 xl:px-12">
                            <div className="relative">
                                <span>
                                    <input>

                                    </input>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </nav>
            </header>
        </div>
    )
}

export default Header;