import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
        <div>
            <section>
                <div className="py-5 shadow-lg">Nav</div>
                <div className="py-5 shadow-lg">Hello</div>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MainLayout;