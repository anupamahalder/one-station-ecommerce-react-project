import { Link, Outlet } from "react-router-dom";
const DashboardLayout = () => {
    return (
        <div>
            <div className="font-medium flex gap-3">
                <div className="w-[20%] min-h-screen bg-red-100 text-xl p-5">
                    <ul>
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/profile'>Profile</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/editprofile'>Edit Profile</Link>
                        </li>
                    </ul>
                </div>
                {/* Showing children as Outlet  */}
                <div className="w-[80%] p-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;