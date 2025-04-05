import React from 'react';
import { ConfigProvider, Steps } from 'antd';


const description = '';

const ProgressBar = () => {
    return (
        <ConfigProvider
            theme={{
                token: {

                    colorText: "#ffffff",
                    colorPrimary: "#1677ff"
                },
            }}
        >
            <Steps
                className='custom-steps'
                current={2}
                percent={100}

                labelPlacement="vertical"
                items={[
                    {
                        title: 'Post Code',
                        description,
                    },
                    {
                        title: 'Waste Type',
                        description,
                    },
                    {
                        title: 'Select Skip',
                        description,
                    },
                    {
                        title: 'Permit Check',
                        description,
                    },
                    {
                        title: 'Choose Date',
                        description,
                    },
                    {
                        title: 'Payment',
                        description,
                    },

                ]}
            />
        </ConfigProvider>
    );

};

export default ProgressBar;