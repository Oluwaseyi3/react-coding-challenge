import React, { useState, useEffect } from 'react'
import Card, { SkipData } from './Card'
import DrawerModal from './DrawerModal';


const CardContainer = () => {
    const [skipsData, setSkipsData] = useState<SkipData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [postcode, setPostalcode] = useState('NR32');
    const [area, setArea] = useState('Lowestoft');

    const [select, setSelect] = useState<boolean>(false)
    const [selectedSkip, setSelectedSkip] = useState<SkipData | null>(null);
    const [totalAmount, setTotalAmount] = React.useState<string>("");


    useEffect(() => {
        const fetchSkipData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`);

                const data = await response.json();
                setSkipsData(data);
                setError(null);
            } catch (err) {
                setError(`Failed to fetch skip data`);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSkipData();
    }, [postcode, area]);


    const handleClick = (skip: SkipData) => {
        setSelectedSkip(skip);
        setSelect(true);
    }


    return (
        <div className='flex flex-col items-center gap-[100px]'>

            {!error && !loading && (
                <div className="flex flex-wrap justify-center">
                    {skipsData.length > 0 ? (
                        skipsData.map(skip => <Card key={skip.id} data={skip} onClick={() => handleClick(skip)} />)
                    ) : (
                        <p className="text-center py-8">No skips available for this location.</p>
                    )}
                </div>
            )}
            <DrawerModal open={select} onClose={() => setSelect(false)} selectedSkip={selectedSkip} totalPrice={totalAmount || "Price Unavailable"} />

        </div>
    )
}

export default CardContainer