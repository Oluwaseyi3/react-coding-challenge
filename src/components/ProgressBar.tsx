import React from 'react';
import { ConfigProvider, Steps } from 'antd';


const ProgressBar = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Steps: {
                        colorText: '#FFFFFF', // White text for all steps
                        colorTextDisabled: '#FFFFFF', // White text for disabled/wait steps
                        colorTextLabel: '#FFFFFF',    // White text for labels
                        colorBgContainer: '#808080',  // Grey background
                        colorFillContent: '#808080',
                    }
                }
            }}
        >
            <Steps
                className='custom-steps'
                current={3}
                percent={100}

                labelPlacement="vertical"
                items={[
                    {
                        title: 'Post Code',

                    },
                    {
                        title: 'Waste Type',

                    },
                    {
                        title: 'Select Skip',

                    },
                    {
                        title: 'Permit Check',

                    },
                    {
                        title: 'Choose Date',

                    },
                    {
                        title: 'Payment',

                    },

                ]}
            />
        </ConfigProvider>
    );

};

export default ProgressBar;