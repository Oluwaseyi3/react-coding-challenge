import React from 'react';
import { ConfigProvider, Steps } from 'antd';


const ProgressBar = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Steps: {
                        colorText: '#FFFFFF',
                        colorTextDisabled: '#FFFFFF',
                        colorTextLabel: '#FFFFFF',
                        colorBgContainer: '#808080',
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