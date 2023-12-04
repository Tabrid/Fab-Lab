import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const Location = ({ title, links }) => {
    return (
        <div >
            <div className="flex-col ml-24 mt-28 mb-10 flex gap-10 ">
                <div className="">
                    <h1 className="text-5xl font-bold">
                        <span className="text-[#2e3094] mr-2">{title.label}</span>{title.subLabel}
                    </h1>
                </div>
                <div className="flex gap-2 
                items-center">
                    <Link to='/' className="flex gap-2 items-center">
                    <FaHome className=" text-2xl" />
                    <h1 className="text-2xl font-bold">Home</h1>
                    </Link>
                    {links.map((link, index) => (
                        <div key={index} className="flex items-center gap-2">
                            
                            {link.icon && <link.icon />}
                            <h1 className={`text-2xl font-bold ${link.color || ''}`}>{link.label}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default Location;