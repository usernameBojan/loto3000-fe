const themeToggleIconsStyle = {
    transform: "scale(1.5)",
    borderRadius: '50%'
}

export const lightThemeIconStyle = {
    ...themeToggleIconsStyle,
    backgroundColor: '#292b2c',
    color: '#e9ecf3',
    marginLeft: '50px'
}

export const darkThemeIconStyle = {
    ...themeToggleIconsStyle,
    backgroundColor: '#e9ecf3',
    color: '#292b2c    ',
    marginRight: '50px'
}

export const toggleStyle = {
    cursor: 'pointer', 
    padding: '8px', 
    borderRadius: '25px'
}