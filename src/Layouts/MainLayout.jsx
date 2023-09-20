// import { Outlet, useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PageFooter from "../Pages/PageFooter"
// import SpinnerTime from "../components/SpinnerTime";

const MainLayout = () => {
    // const navigation = useNavigation()
    // const isLoadingData = navigation.state === 'loading';
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
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </section>
            {/* conditional loading of outlet  */}
            {/* {
                isLoadingData ? <SpinnerTime></SpinnerTime> : <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
            } */}
            <div className="min-h-screen">
                    <Outlet></Outlet>
            </div>
            
            {/* Footer section  */}
            <PageFooter></PageFooter>
        </div>
    );
};

export default MainLayout;