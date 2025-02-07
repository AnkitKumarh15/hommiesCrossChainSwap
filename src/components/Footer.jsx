import React from "react";
import Link from 'next/link'

function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="container text-white py-6 ">
                <div className="px-20 mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <Link href={'/'}>
                            <h2 className="text-2xl font-bold">Hommies <span className="text-gray-400 font-bold">Swap</span></h2>
                        </Link>
                    </div>

                    <nav className="flex space-x-6 text-gray-400">
                        <a href="#" className="hover:text-white">About</a>
                        <a href="#" className="hover:text-white">Docs</a>
                        <a href="#" className="hover:text-white">Support</a>
                        <a href="#" className="hover:text-white">Terms</a>
                    </nav>
                </div>



            </div>
            <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-600 pt-4">
                © {new Date().getFullYear()} Hommies Swap.
            </div>
        </footer>
    );
}

export default Footer;
