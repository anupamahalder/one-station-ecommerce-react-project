import { Outlet, useNavigate, NavLink } from "react-router-dom";
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
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                // We can change style if its is active by writing classname there 
                                isPending ? "pending" : isActive ? "p-2 bg-blue-300 rounded-md" : ""
                            }
                            >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "p-2 bg-blue-300 rounded-md" : ""
                            }
                            >
                            Products
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "p-2 bg-blue-300 rounded-md" : ""
                            }
                            >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "p-2 bg-blue-300 rounded-md" : ""
                            }
                            >
                            Dashboard
                        </NavLink>
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