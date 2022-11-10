export const validateEmptyString = input => input !== '';

export const compareInputs = (input, compare) => input === compare;

export const validateEmailInput = input => (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(String(input).toLowerCase())
)

export const validatePasswordRegex = input => (
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(String(input))
)

export const validateCreditCardFormat = input => (
    /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\\d{3})\\d{11}$)/
        .test(String(input))
)

export const validateCvv2Cvc2Format = input => /^(\d{3})$/.test(String(input));

export const validateDepositAmount = input => parseInt(input) >= 5;

export const validateDepositAmountNonregistered = input => parseInt(input) === 5;

export const validateCardDate = date => Date.parse(date) > Date.parse(new Date());

export const validateAge = dateOfBirth => {
    let age = 0;

    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    if (dateOfBirth.getMonth() + 1 > currentMonth) {
        age = currentYear - dateOfBirth.getFullYear() - 1;
    }

    if (dateOfBirth.getMonth() + 1 === currentMonth && dateOfBirth.getDate() > currentDay) {
        age = currentYear - dateOfBirth.getFullYear() - 1;
    }

    if (dateOfBirth.getMonth() + 1 < currentMonth) {
        age = currentYear - dateOfBirth.getFullYear();
    }

    if (dateOfBirth.getMonth() + 1 === currentMonth && dateOfBirth.getDate() <= currentDay) {
        age = currentYear - dateOfBirth.getFullYear();
    }

    if (age < 18) {
        return false;
    }

    return true;
}