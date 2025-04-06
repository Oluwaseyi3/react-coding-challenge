import React from 'react'
import garden from "../images/garden.jpeg"
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { ComponentType } from 'react';
import { totalPriceCalculator } from './utils/totalPriceCalculator';


const CalendarIcon = FaCalendarAlt as ComponentType;
const Check = FaCheckCircle as ComponentType;
const Cancel = GiCancel as ComponentType;

interface SkipData {
    id: number;
    size: number;
    hire_period_days: number;
    transport_cost: number;
    per_tonne_cost: number;
    price_before_vat: number;
    vat: number;
    postcode: string;
    area: string | null;
    forbidden: boolean;
    created_at: string;
    updated_at: string;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
    onClick?: () => void;

}
export type { SkipData };

type CardProps = {
    data: SkipData;
    onClick?: () => void;
    children?: React.ReactNode;

}

const Card = ({ data, onClick }: CardProps) => {
    const {
        size,
        hire_period_days,
        price_before_vat,
        vat,
        transport_cost,
        per_tonne_cost,
        allowed_on_road,

    } = data;


    const totalPrice = totalPriceCalculator(price_before_vat, vat);

    return (
        <div className="px-5 pb-[100px]">
            <div
                className="relative ] flex w-80  flex-col rounded-xl bg-white from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
                <div
                    className="relative mx-4 -mt-6 h-50 overflow-hidden rounded-xl bg-clip-border"
                >
                    <img src={garden} alt="yard skip" />
                </div>
                <div className="p-6">
                    <h5
                        className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-900 transition-colors duration-300"
                    >
                        {size} Yard Skip
                    </h5>
                    <p
                        className="block font-sans text-base font-light text-black  flex flex-col gap-3"
                    >
                        <div className="flex items-center gap-2">
                            <CalendarIcon />
                            {size} yard skip for {hire_period_days} days
                        </div>

                        <div className='text-base font-light text-black'>
                            {allowed_on_road ? (
                                <div className="flex items-center gap-2">
                                    <div className="text-green-500">
                                        <Check />
                                    </div>
                                    Road placement allowed
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <div className="text-red-500">
                                        <Cancel />
                                    </div>
                                    No road placement
                                </div>
                            )}
                        </div>
                    </p>
                    {transport_cost && (
                        <p className="mt-2 text-sm text-black py-3">
                            Transport cost: £{transport_cost}<br />
                            {per_tonne_cost && ` Per tonne: £${per_tonne_cost}`}
                        </p>
                    )}
                </div>
                <div className="p-6 pt-0">
                    <p className="text-2xl font-bold mb-3 text-black text-right">
                        {price_before_vat ? `£${totalPrice}` : "Price Unavailable"}
                    </p>
                    <button
                        className="group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                        onClick={onClick}
                    >
                        <span className="relative flex items-center gap-2">
                            Select Skip
                            <svg
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                            >
                                <path
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card