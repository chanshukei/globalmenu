const baseRequest = {
    apiVersion: 2,
    
    apiVersionMinor: 0
};

const tokenizationSpecification = {
    type: 'PAYMENT_GATEWAY',
    parameters: {
      'gateway': 'payu',
      'gatewayMerchantId': '1SStDf07'
    }
  };

const allowedCardNetworks = ['MASTERCARD', 'VISA'];
const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];

const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
        allowedAuthMethods: allowedCardAuthMethods,
        allowedCardNetworks: allowedCardNetworks
    }
};

const cardPaymentMethod = Object.assign(
    {tokenizationSpecification: tokenizationSpecification},
    baseCardPaymentMethod
);

const paymentsClient = new google.payments.api.PaymentsClient({environment: 'TEST'});

const isReadyToPayRequest = Object.assign({}, baseRequest);
isReadyToPayRequest.allowedPaymentMethods = [baseCardPaymentMethod];

paymentsClient.isReadyToPay(isReadyToPayRequest)
.then(
    function(response) {
        if (response.result) {
            // add a Google Pay payment button\
            console.log('ready to add google pay button');
        }
    }
)
.catch(
    function(err) {
        // show error in developer console for debugging
        console.error(err);
    }
);

const button =
    paymentsClient.createButton(
        {
            onClick: function(){
                console.log('click google pay');
                const paymentDataRequest = Object.assign({}, baseRequest);
                paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];
                paymentDataRequest.transactionInfo = {
                    totalPriceStatus: 'FINAL',
                    totalPrice: '1.99',
                    currencyCode: 'USD',
                    countryCode: 'US'
                };
                paymentDataRequest.merchantInfo = {
                    merchantName: 'Example Merchant'
                    //merchantId: '12345678901234567890'
                };

                paymentsClient.loadPaymentData(paymentDataRequest)
                .then(function(paymentData){
                    // if using gateway tokenization, pass this token without modification
                    paymentToken = paymentData.paymentMethodData.tokenizationData.token;
                }).catch(function(err){
                    // show error in developer console for debugging
                    console.error(err);
                });
            } 
        }
    );

$(function() {
    document.getElementById('googlePayButtonContainer').appendChild(button);
});
