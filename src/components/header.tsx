import Link from "next/link";
import Head from "next/head";

const Component = ({}) => (
    <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <nav className="header h-28 bg-white text-black flex justify-center items-center">
    
            <div className="logo-div">
                <Link href="/"><a><img src="./images/logo.png" className="logo pt-8 pl-4"/></a></Link>
            </div>

            <ul className="menu-links text-sm pl-2">
                <Link href="/about"><a><li>ABOUT</li></a></Link>
                <Link href="/mentors"><a><li>MENTORS</li></a></Link>
                <Link href="/programs"><a><li>PROGRAMS</li></a></Link>
                <Link href="/membership"><a><li>MEMBERSHIP</li></a></Link>
            </ul>

            <div className="mr-2">
                <Link href="https://discord.gg/svhARr">
                    <a className="border rounded text-sm text-black py-2 px-5 border-black">LOGIN</a>
                </Link>
            </div>
            
        </nav>

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
