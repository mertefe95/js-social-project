import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => (
    <>
        <Header />
        <div>{children}</div>
        <Footer />

    <style jsx global>{`
        *,
        *::before,
        *::after {
        box-sizing: border-box;
        }
    `}</style>
    </>
);

export default Layout;
