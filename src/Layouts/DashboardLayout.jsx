import { Link } from "react-router-dom";
const DashboardLayout = () => {
    return (
        <div>
            This is a dashboard layout
            <div className="w-[20%] bg-red-100">
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
        </div>
    );
};

export default DashboardLayout;