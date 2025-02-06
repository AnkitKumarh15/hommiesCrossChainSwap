"use client";
import React, { useState } from "react";
import { ethers } from "ethers";
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        toast.success("Wallet Connected!")
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      toast.error("MetaMask is not installed. Please install MetaMask to continue.");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    toast.success('Wallet Disconnected')
  };

  return (
    <div className="bg-blue-950 py-3 px-2 md:px-20 text-xl flex justify-between text-white items-center">
      <h1 className="text-center text-white text-lg md:text-2xl font-medium" style={{ fontFamily: "poppins" }}>
        Hommies <span className="text-gray-400 font-bold">Swap</span>
      </h1>

      {account ? (
        <div className="flex items-center gap-4">
          <span className="bg-gray-500 px-4 py-2 text-base font-semibold rounded-xl">
            {account.slice(0, 6)}...{account.slice(-4)}
          </span>
          <button
            onClick={disconnectWallet}
            className="bg-red-500 px-4 py-2 text-base font-semibold rounded-lg text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-gray-300 px-4 py-2 text-base font-semibold rounded-md text-black hover:text-white hover:bg-gray-500"
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default Navbar;
