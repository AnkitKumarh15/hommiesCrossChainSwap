'use client'
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import eth from '../../public/ETH.png';
import sol from '../../public/SOL.png';
import convert from '../../public/convert.png';
import { WalletContext } from "./ConnectWallet/WalletContext"
import toast, { Toaster } from "react-hot-toast";
import Loader from "./Loader";


const Swap = () => {
    const { account, connectWallet, disconnectWallet } = useContext(WalletContext);

    const [isSwapped, setIsSwapped] = useState(false);
    const [ethAmount, setEthAmount] = useState("");
    const [solAmount, setSolAmount] = useState("");
    const [isOneToOne, setIsOneToOne] = useState(true);
    const [solanaAddress, setSolanaAddress] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSwap = () => {
        setIsSwapped(!isSwapped);
        setEthAmount("");
        setSolAmount("");
    };
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            console.log("5 sec completed 1");
        }, 3000);
        console.log("5 sec completed");
    }, [handleSwap]);

    const handleEthChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEthAmount(value);
            if (isOneToOne) {
                setSolAmount(value);
            }
        }
    };

    const handleSolChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setSolAmount(value);
            if (isOneToOne) {
                setEthAmount(value);
            }
        }
    };

    const handleSolanaAddress = (e) => {
        setLoading(true);
        setSolanaAddress(e.target.value);
    }

    return (
        <div className="bgSwap pb-10">
            <div className="container min-h-screen p-2 md:p-0">
                <div className="max-w-[550px] flex flex-col justify-center mx-auto">
                    <h1 className="pt-10 text-left text-4xl font-bold text-black" style={{ fontFamily: "poppins" }}>Swap</h1>
                    <div className="relative bg-gray-700 p-5 md:py-8 md:px-8 mt-5 rounded-3xl shadow-lg flex flex-col overflow-hidden">
                        {loading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 rounded-3xl">
                                <Loader />
                            </div>
                        )}
                        <div className>
                            {
                                !isSwapped ?
                                    (
                                        <>
                                            {/* div 1 */}
                                            <div className="mx-auto py-2 px-3 md:py-2 md:px-6 rounded-3xl shadow-sm text-black w-full h-[100px] border-[1px] border-[#E6E6E6] flex justify-between">
                                                <input
                                                    type="text"
                                                    placeholder="0000.00"
                                                    value={ethAmount}
                                                    onChange={handleEthChange}
                                                    className="text-gray-200 bg-gray-700 max-w-[100px] p-2 rounded-2xl flex items-center outline-none"
                                                />

                                                <div className="flex mx-2 my-4 md:m-4 gap-x-2 items-center bg-black text-white px-2 md:px-4 md:py-2 rounded-3xl">
                                                    <Image src={eth} alt="" className="w-8" />
                                                    <div className="flex flex-col">
                                                        <h1 className="font-semibold text-sm md:text-base" style={{ fontFamily: 'open_sans' }}>HOMMIES</h1>
                                                        <h1 className="font-semibold text-center text-xs" style={{ fontFamily: 'open_sans' }}>ETH</h1>
                                                    </div>
                                                </div>
                                            </div>

                                            <Image src={convert} alt="" className="w-9 mx-auto my-4 cursor-pointer" onClick={handleSwap} />

                                            {/* div 2 */}
                                            <div className="mx-auto py-2 px-3 md:py-2 md:px-6 rounded-3xl shadow-sm text-black w-full h-[100px] border-[1px] border-[#E6E6E6] flex justify-between">
                                                <input
                                                    type="text"
                                                    placeholder="0000.00"
                                                    value={solAmount}
                                                    onChange={handleSolChange}
                                                    className="text-gray-200 bg-gray-700 max-w-[100px] p-2 rounded-2xl flex items-center outline-none"
                                                    readOnly
                                                />

                                                <div className="flex mx-2 my-4 md:m-4 gap-x-2 items-center bg-black text-white px-2 py-0 md:px-4 md:py-2 rounded-3xl">
                                                    <Image src={sol} alt="" className="w-8 bporder-[1px] bg-blue-500 rounded-full" />
                                                    <div className="flex flex-col">
                                                        <h1 className="font-semibold text-sm md:text-base" style={{ fontFamily: 'open_sans' }}>HOMMIES</h1>
                                                        <h1 className="font-semibold text-center text-xs" style={{ fontFamily: 'open_sans' }}>SOL</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            {/* div 2 */}
                                            <div className="mx-auto py-2 px-3 md:py-2 md:px-6 rounded-3xl shadow-sm text-black w-full h-[100px] border-[1px] border-[#E6E6E6] flex justify-between">
                                                <input
                                                    type="text"
                                                    placeholder="0000.00"
                                                    value={solAmount}
                                                    onChange={handleSolChange}
                                                    className="text-gray-200 bg-gray-700 max-w-[100px] p-2 rounded-2xl flex items-center outline-none"
                                                />

                                                <div className="flex mx-2 my-4 md:m-4 gap-x-2 items-center bg-black text-white px-2 py-0 md:px-4 md:py-2 rounded-3xl">
                                                    <Image src={sol} alt="" className="w-8 bporder-[1px] bg-blue-500 rounded-full" />
                                                    <div className="flex flex-col">
                                                        <h1 className="font-semibold text-sm md:text-base" style={{ fontFamily: 'open_sans' }}>HOMMIES</h1>
                                                        <h1 className="font-semibold text-center text-xs" style={{ fontFamily: 'open_sans' }}>SOL</h1>
                                                    </div>
                                                </div>
                                            </div>

                                            <Image src={convert} alt="" className="w-9 mx-auto my-4 cursor-pointer"
                                                onClick={handleSwap} />

                                            {/* div 1 */}
                                            <div className="mx-auto py-2 px-3 md:py-2 md:px-6 rounded-3xl shadow-sm text-black w-full h-[100px] border-[1px] border-[#E6E6E6] flex justify-between">
                                                <input
                                                    type="text"
                                                    placeholder="0000.00"
                                                    value={ethAmount}
                                                    onChange={handleEthChange}
                                                    className="text-gray-200 bg-gray-700 max-w-[100px] p-2 rounded-2xl flex items-center outline-none"
                                                    readOnly
                                                />

                                                <div className="flex mx-2 my-4 md:m-4 gap-x-2 items-center bg-black text-white px-2 py-0 md:px-4 md:py-2 rounded-3xl">
                                                    <Image src={eth} alt="" className="w-8" />
                                                    <div className="flex flex-col">
                                                        <h1 className="font-semibold text-sm md:text-base" style={{ fontFamily: 'open_sans' }}>HOMMIES</h1>
                                                        <h1 className="font-semibold text-center text-xs" style={{ fontFamily: 'open_sans' }}>ETH</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                            }
                        </div>

                        <input
                            type="text"
                            placeholder="Enter Solana Address"
                            className="mt-10 px-4 py-2 rounded-3xl bg-gray-700 outline-none text-white border-[1px]"
                            value={solanaAddress}
                            onChange={handleSolanaAddress}
                        />


                        <button
                            className="mt-10 py-3 w-full text-white mx-auto rounded-3xl text-lg bg-blue-600 font-semibold hover:bg-blue-700"
                            style={{ fontFamily: 'open_sans' }}
                            onClick={handleSolanaAddress}
                        >
                            SWAP
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Swap;
