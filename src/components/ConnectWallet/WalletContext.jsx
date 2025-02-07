"use client";
import React, { createContext, useState } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";

export const WalletContext = createContext({});

const WalletContextProvider = ({ children }) => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
        
      try {
        // const provider = new ethers.BrowserProvider(window.ethereum);   // for latest ethers version 6
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        toast.success("Wallet Connected!");

      } catch (error) {
        console.error("User denied account access", error);
        toast.error("Failed to connect wallet");
      }

    } else {
      toast.error("MetaMask is not installed. Please install MetaMask to continue.");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    toast.success("Wallet Disconnected!");
  };

  return (
    <WalletContext.Provider value={{ account, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
