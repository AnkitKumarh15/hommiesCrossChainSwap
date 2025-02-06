'use client'
import React, { useState } from "react";
import Image from "next/image";
import eth from '../../public/ETH.png';
import sol from '../../public/SOL.png';
import convert from '../../public/convert.png';

const Swap = () => {
    const [isSwapped, setIsSwapped] = useState(false);
    const [ethAmount, setEthAmount] = useState("");
    const [solAmount, setSolAmount] = useState("");
    const [isOneToOne, setIsOneToOne] = useState(true);

    const handleSwap = () => {
        setIsSwapped(!isSwapped);
        setEthAmount("");
        setSolAmount("");
    };

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

    return (
        <div className="min-h-screen">
            <h1 className="pt-10 text-center text-4xl font-bold" style={{ fontFamily: "poppins" }}>Swap Cross Chain</h1>
            <div className="bg-gray-700 p-5 md:py-8 md:px-8 mx-auto mt-10 rounded-3xl shadow-lg max-w-[550px] flex flex-col justify-center">
                <div>
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

                                        <div className="flex m-4 gap-x-2 items-center bg-black text-white px-4 py-2 rounded-3xl">
                                            <Image src={eth} alt="" className="w-8" />
                                            <div className="flex flex-col">
                                                <h1 className="font-semibold" style={{ fontFamily: 'open_sans' }}>HOMMIES</h1>
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

                                        <div className="flex m-4 gap-x-2 items-center bg-black text-white px-4 py-2 rounded-3xl">
                                            <Image src={sol} alt="" className="w-8 bporder-[1px] bg-blue-500 rounded-full" />
                                            <div className="flex flex-col">
                                                <h1 className="font-semibold" style={{ fontFamily: 'open_sans' }}>HOMMIES</h1>
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

                                        <div className="flex m-4 gap-x-2 items-center bg-black text-white px-4 py-2 rounded-3xl">
                                            <Image src={sol} alt="" className="w-8 bporder-[1px] bg-blue-500 rounded-full" />
                                            <div className="flex flex-col">
                                                <h1 className="font-semibold" style={{ fontFamily: 'open_sans' }}>HOMMIES</h1>
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

                                        <div className="flex m-4 gap-x-2 items-center bg-black text-white px-4 py-2 rounded-3xl">
                                            <Image src={eth} alt="" className="w-8" />
                                            <div className="flex flex-col">
                                                <h1 className="font-semibold" style={{ fontFamily: 'open_sans' }}>HOMMIES</h1>
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
                />

                <button
                    className="mt-10 py-3 w-full text-white mx-auto rounded-3xl text-lg bg-blue-600 font-semibold hover:bg-blue-700"
                    style={{ fontFamily: 'open_sans' }}
                    onClick={handleSwap}
                >
                    SWAP
                </button>

            </div>
        </div>
    );
};

export default Swap;
