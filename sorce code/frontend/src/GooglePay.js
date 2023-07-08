import React from 'react'
import GooglePayButton from '@google-pay/button-react';
function GooglePay({callback,total}) {
    
    return (
        <div>
            <GooglePayButton
                environment="TEST"
                buttonColor='white'
                buttonLocale='en'
                buttonSizeMode='fill'
                 buttonType=' Now Pay'
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'example',
                                    gatewayMerchantId: 'exampleGatewayMerchantId',
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: '100',
                        totalPrice: '100',
                        currencyCode: 'INR',
                        countryCode: 'IN',
                    },
                }}
                onLoadPaymentData={(paymentRequest,transactionInfo )=> {
                    console.log('load payment data', paymentRequest);
                    console.log("transaction info",transactionInfo)
                }}
            />
        </div>
    )
}

export default GooglePay
