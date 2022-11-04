const noServerResponse = 'No Server Response';

export const loginErrorHandler = err => {
    let errorMsg = '';

    if (!err?.response) errorMsg = noServerResponse;

    switch (err.response?.status) {
        case 400:
            errorMsg = 'Missing Username or Password';
            break;
        case 401:
            errorMsg = 'Unauthorized';
            break;
        case 403:
            errorMsg = 'Forbidden';
            break;
        case 404:
            errorMsg = 'Wrong username or password';
            break;
        default:
            errorMsg = 'Login Failed';
            break;
    }

    return errorMsg;
}

export const registerErrorHandler = err => {
    let errorMsg = 'Please provide valid info to register.';

    if (!err?.response) errorMsg = noServerResponse;

    if (err.response.data === '') {
        switch (err.response.status) {
            case 400:
                errorMsg = 'Provided account info is connected with another account.';
                break;
            case 403:
                errorMsg = 'You must be 18 years old or older to create an account.'
                break;
            default:
                errorMsg = 'Register failed.'
                break;
        }
    } else {
        let emptyField = ('FirstName' in err.response.data.errors || 'LastName' in err.response.data.errors || 'Username' in err.response.data.errors)

        if (emptyField) {
            errorMsg = 'You must provide info for all fields to register.'
        } else {            
            if ('Password' in err.response.data.errors) {
                errorMsg = '';
                err.response.data.errors.Password.map(el => errorMsg += `${el}; `);
            }
            if ('Email' in err.response.data.errors) {
                errorMsg = '';
                err.response.data.errors.Email.map(el => errorMsg += `${el}; `);
            }
        }
    }

    return errorMsg;
}