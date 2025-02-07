"use client";
import React, { useContext } from "react";
import { WalletContext } from "./ConnectWallet/WalletContext"
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const Nav = () => {
    const { account, connectWallet, disconnectWallet } = useContext(WalletContext);

    return (
        
        <div className="bg-gray-800">
            <Toaster />
            <div className="container py-4 px-2 md:px-20 text-xl flex justify-between text-white items-center">
                <Link href={"/"}>
                    <h1 className="text-center text-white text-lg md:text-2xl font-bold" style={{ fontFamily: "poppins" }}>
                        Hommies <span className="text-gray-400 font-bold">Swap</span>
                    </h1>
                </Link>

                {account ? (
                    <div className="flex items-center gap-4">
                        <span className="bg-gray-500 px-4 py-2 text-base font-semibold rounded-xl">
                            {account.slice(0, 6)}...{account.slice(-4)}
                        </span>
                        <button
                            onClick={disconnectWallet}
                            className="bg-red-500 px-4 py-2 text-base font-semibold rounded-lg text-white hover:bg-red-600"
                            style={{ fontFamily: "poppins" }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={connectWallet}
                        className="bg-gray-300 px-4 py-2 text-base font-semibold rounded-md text-black hover:text-white hover:bg-gray-500"
                        style={{ fontFamily: "poppins" }}
                    >
                        Connect
                    </button>
                )}
            </div>
        </div>
    );
};

export default Nav;
