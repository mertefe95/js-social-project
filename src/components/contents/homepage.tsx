import Link from "next/link";


const Component = ({}) => (
    <>
        <div className="homepage flex flex-col items-center justify-center">
            <div className="upper-content">           
                <img src="./images/jsocial-image.jpg" className="jsocial-logo mt-0"/>
            <div className="bird-content mt-10 tracking-wide text-center">
                <p className="bird-first-p text-base font-semibold">A membership-based</p>
                <h1 className="bird-first-h text-3xl pb-3"><span>Javascript</span> <span>Community</span></h1>
                <Link href="https://discord.gg/svhARr">
                    <a className="border-2 rounded text-sm text-white bg-black py-1 px-2 border-black font-bold">JOIN US</a>
                </Link>
            </div>
            </div>
            <div className="membership-benefits text-center mt-32">
                <div className="membership-text">
                    <p className="text-orange-400 font-bold tracking-wide">What do you get</p>
                    <h2 className="membership-first-h2 text-4xl mb-10">Membership Benefits</h2>
                </div>
                <div className="membership-blocks">
                <div className="membership flex flex-col justify-center items-center">
                    <div className="membership-logo">
                        <img src="./images/icon1.png" /> 
                    </div>
                    <div className="membership-text px-8 pt-4">
                        <h2 className="text-xl">Private</h2>
                        <h2 className="text-xl">Discord Chat</h2>
                        <p className="text-base py-6">Access to our private Discord chat where you can ask and receive Javascript help</p>
                    </div>
                </div>

                <div className="membership flex flex-col justify-center items-center">
                    <div className="membership-logo">
                        <img src="./images/icon2.png" /> 
                    </div>
                    <div className="membership-text px-8 pt-4">
                        <h2 className="text-xl">Experienced</h2>
                        <h2 className="text-xl">Developers</h2>
                        <p className="text-base py-6">We have developers with over 100+ years of combined experience</p>
                    </div>

                </div>

                <div className="membership flex flex-col justify-center items-center">
                    <div className="membership-logo">
                        <img src="./images/icon3.png" /> 
                    </div>
                    <div className="membership-text px-8 pt-4">
                        <h2 className="text-xl">100% Real Projects</h2>
                        <p className="text-base py-6">We help you learn with real-world projects that provides you with critical experience</p>
                    </div>

                </div>

                <div className="membership flex flex-col justify-center items-center">
                    <div className="membership-logo">
                        <img src="./images/icon4.png" /> 
                    </div>
                    <div className="membership-text px-8 pt-4">
                        <h2 className="text-xl">Speed-up</h2>
                        <h2 className="text-xl">Learning</h2>
                        <p className="text-base py-6">With our help, you can increase your learning speed by up to 200%</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="explanation-div mt-24 text-center px-4">
                <p className="what-is-jsocial text-orange-400 font-bold tracking-wide">What is JS.social</p>
                <h2 className="explanation-h text-3xl my-4 pb-8 tracking-tight">A network of mentors and students</h2>

                <div className="text-and-zoom">
                <div className="cards">
                <div className="card">
                    <h2 className="card-h text-2xl text-left leading-none tracking-wide pl-2">Code with world-class developers</h2>
                    <p className="card-p text-base text-left pt-4">We are a network of Javascript developers who have real jobs and possess decades of real-life experience who have
                        a passion for helping coders of all ages. Coding can be hard at times, and we are aware of the various roadblocks
                        you may encounter. Let us help and guide you to be your best</p>
                </div>

                <div className="card mt-20">
                    <h2 className="card-h text-2xl text-left leading-none tracking-wide pl-2">We make learning a life-style</h2>
                    <p className="card-p text-base text-left pt-4">We provide a private Discord room where we either provide support, mentor, and guide our members to further enhanance 
                        their abilities. Our aim is to develop you into a 10x Javascript full-stack developer. </p>
                </div>
                </div>

                <div className="zoom-img pt-10">
                    <img src="./images/zoom.jpg" />
                </div>        
                </div>
                </div>

            <div className="jae-lee-quote text-center px-4 py-40">
                <p className="jae-lee-first-p tracking-tight">"Our mission is to teach through project-based curriculums to craft and hone their skills."</p>
                <p className="jae-lee-second-p pt-6">Jae Lee, JS.social mentor</p>
            </div>



            <div className="middle-section">

            <div className="learn-more-div px-4 flex flex-col items-center">
                <h2 className="text-left font-extrabold text-3xl leading-tight">We help you land jobs through our extensive network</h2>
                <p className="text-left text-base tracking-wide pt-4">We have helped members land their dream jobs in some of the most respected companies </p>
                <button type="submit" className="w-full bg-black text-center border border-transparent mt-8 rounded-md py-2 px-4 text-base leading-6 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Learn More
                </button>

            </div>

        
            

            <div className="bg-white">
                <div className="max-w-screen-xl mx-auto py-12  sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 px-12">
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 py-4">
                            <img className="h-12 icons" src="https://tailwindui.com/img/logos/transistor-logo.svg" alt="Transistor" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 py-4">
                            <img className="h-12 icons" src="https://tailwindui.com/img/logos/mirage-logo.svg" alt="Mirage" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 py-4">
                            <img className="h-12 icons" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 py-4">
                            <img className="h-12 icons" src="https://tailwindui.com/img/logos/laravel-logo.svg" alt="Laravel" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 py-4">
                            <img className="h-12 icons" src="https://tailwindui.com/img/logos/statickit-logo.svg" alt="StaticKit" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 py-4">
                            <img className="h-12 icons" src="https://tailwindui.com/img/logos/statamic-logo.svg" alt="Statamic" />
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="james-lee-div px-4 py-4">
                <div className="james-lee-img pb-10">
                    <img src="./images/jameslee.jpg" />
                </div>

                <div className="james-lee-text">
                    <h2 className="james-lee-h leading-tight">It's time to start investing</h2>
                    <h2 className="james-lee-h leading-tight">in your future.</h2>
                    <p className="james-lee-first-p font-semibold pt-1 pb-4">Let us make you a better coder.</p>
                    <p className="james-lee-second-p pb-6">James Lee, CTO of Bambee</p>
                </div>
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
