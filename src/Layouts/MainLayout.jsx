import { Outlet, useNavigate, Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import PageFooter from "../Pages/PageFooter"
import SpinnerTime from "../components/SpinnerTime";

const MainLayout = () => {
    const navigation = useNavigate()
    const isLoadingData = navigation.state === 'loading';
    return (
        <div>
            <section className="flex justify-between px-10 py-7 shadow-md">
                <div>
                    <h1 className="text-3xl font-bold">One Station</h1>
                </div>
                {/* Navbar design  */}
                <nav>
                    <ul className="flex gap-5 font-medium">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>
            </section>
            {/* conditional loading of outlet  */}
            {
                isLoadingData ? <SpinnerTime></SpinnerTime> : <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
            }
            {/* <div className="min-h-screen">
                    <Outlet></Outlet>
            </div>
             */}
            {/* Footer section  */}
            <PageFooter></PageFooter>
        </div>
    );
};

export default MainLayout;