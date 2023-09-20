import { Outlet } from "react-router-dom";
const MainLayout = () => {
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
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;