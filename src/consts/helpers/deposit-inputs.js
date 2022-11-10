export const DepositInputs = [
    {
        id: 1,
        name: 'cardHolder',
        type: 'text',
        label: 'Card Holder Name',
        placeholder: ''
    },
    {
        id: 2,
        name: 'cardNumber',
        type: 'text',
        label: 'Credit Card Number',
        placeholder: ''
    },
    {
        id: 3,
        name: 'cvvCode',
        type: 'text',
        label: 'CVV/CVV2 Code',
        placeholder: ''
    }
    ,
    {
        id: 4,
        name: 'depositAmount',
        type: 'number',
        label: 'Deposit Amount',
        placeholder: 'Minimum amount is 5'
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