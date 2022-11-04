export const PersonalInfoInputs = [
    {
        id: 1,
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        description: 'Please enter your real name'

    },
    {
        id: 2,
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        description: 'Please enter your real last name'
    },
];

export const ProfileInfoInputs = [
    {
        id: 3,
        name: 'username',
        type: 'text',
        label: 'Username',
        description: 'Choose an username'
    },
    {
        id: 4,
        name: 'email',
        type: 'email',
        label: 'Email',
        description: 'Enter valid email address'
    }
]

export const PasswordInputs = [
    {
        id: 5,
        name: 'password',
        type: 'password',
        label: 'Password',
        description: 'Must contain: 8 characters, uppercase and lowercase letters, number, special symbol'
    },
    {
        id: 6,
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
        description: 'Please confirm your password'
    }
]

export const InputValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
}