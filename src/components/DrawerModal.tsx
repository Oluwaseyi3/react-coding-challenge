
import React from 'react';
import { Button, Drawer, } from 'antd';
import garden from "../images/garden.jpeg"
import { SkipData } from './Card';
import { totalPriceCalculator } from './utils/totalPriceCalculator';

type DrawerProps = {
    open: boolean;
    onClose?: () => void;
    totalPrice?: string
    selectedSkip?: SkipData | null;
}

const DrawerModal = ({ open, onClose, selectedSkip }: DrawerProps) => {
    const totalPrice = selectedSkip ? totalPriceCalculator(selectedSkip.price_before_vat, selectedSkip.vat) : "0";

    return (
        <div>
            <Drawer
                title={` Your selected Skip Size is ${selectedSkip?.size} `}
                placement="bottom"
                closable={true}
                onClose={onClose}
                open={open}
                key="bottom"
                height={200}
            >
                <div className='flex flex-row gap-5'>
                    <img src={garden} alt="" className=' h-[60px] md:pt-[10px]  md:h-[90px] mb-[10px] md:mb-[20px]' loading="lazy" />
                    <div className='flex flex-col gap-3'>
                        <p className='font-bold text-lg'>£{totalPrice} </p>
                        <div className='flex gap-3'>
                            <Button danger onClick={onClose}>Return</Button>
                            <Button type="primary">Proceed</Button>
                        </div>
                    </div>
                </div>
            </Drawer></div>
    )
}

export default DrawerModal