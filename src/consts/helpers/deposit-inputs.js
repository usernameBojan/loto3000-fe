export const DepositInputs = [
    {
        id: 1,
        name: 'cardHolder',
        type: 'text',
        label: 'Card Holder Name',
    },
    {
        id: 2,
        name: 'cardNumber',
        type: 'text',
        label: 'Credit Card Number',
    },
    {
        id: 3,
        name: 'cvvCode',
        type: 'text',
        label: 'CVV/CVV2 Code',
    }
    ,
    {
        id: 4,
        name: 'depositAmount',
        type: 'number',
        label: 'Deposit Amount',
    },
];

export const DepositInputValues = {
    cardHolder: '',
    cardNumber: '',
    cvvCode: '',
    depositAmount: 0,
    expireMonth: 0,
    expireYear: 0
}