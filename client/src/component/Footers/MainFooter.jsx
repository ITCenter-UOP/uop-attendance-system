import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const MainFooter = () => {
    return (
        <footer className="bg-[#3b0a0a] text-[#f5f0e6] text-center py-4">
            &copy; Attendance Management System | ICT Center - University of Peradeniya {new Date().getFullYear()} - All rights reserved
        </footer>
    );
};

export default MainFooter;
