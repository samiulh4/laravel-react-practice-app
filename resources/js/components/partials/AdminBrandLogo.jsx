import React, {useRef} from "react";
import logo from '../../assets/img/logos/logo-512x512.png';

const AdminBrandLogo = () => {
    const logoRef = useRef(logo);
    return (
        <div className="p-5">
            <a href="#" className="text-nowrap">
                <img
                    src={logoRef.current}
                    style={{ height: "80px", width: "80px" }}
                    alt="..."
                />
            </a>
        </div>
    );
};

export default AdminBrandLogo;
