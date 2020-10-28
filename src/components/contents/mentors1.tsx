const Component = ({}) => (
    <>
        <div className="page-mentors">
            <div className="bg-white">
                <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-8 sm:space-y-12">
                        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Mentors</h2>
                            <p className="text-xl leading-7 text-gray-500">Some of the mentors we have available to help you and guide you through any obstacles</p>
                        </div>
                        <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
                            <li>
                                <div className="space-y-4">
                                <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="./images/mentors-jae.jpg" alt="" />
                                <div className="space-y-2">
                                    <div className="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                                        <h4>@jaequery</h4>
                                        <p className="text-base pb-1">Full-stack</p>
                                        <p className="mentors-p">Node.js, Nest.js, Vue.js, React, Ruby</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="space-y-4">
                                <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                                <div className="space-y-2">
                                    <div className="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                                        <h4>@ibanzajoe</h4>
                                        <p className="text-base pb-1">Front-end</p>
                                        <p className="mentors-p">HTML, CSS, Vue.js</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="space-y-4">
                                <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="./images/mentors-james.jpg" alt="" />
                                <div className="space-y-2">
                                    <div className="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                                        <h4>@uptownhr</h4>
                                        <p className="text-base pb-1">Full-stack</p>
                                        <p className="mentors-p">Node.js, Express.js, Vue.js, MongoDB</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>

        <div className="alumni-network text-center px-6">
            <h2 className="text-3xl font-extrabold pb-4">Alumni Network</h2>
            <p className="network-p pb-6">Some of the vetted top numbers of our network</p>
            <p className="network-second-p text-base">coming soon ...</p>
        </div>


        </div>

        <style jsx global>{`
        *,
        *::before,
        *::after {
        box-sizing: border-box;
        }
        `}</style>
    </>
);

export default Component;
