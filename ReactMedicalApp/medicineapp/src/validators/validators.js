export const requiredField = value => {
    if (value) return undefined;

    return "Field is requird"
}

export const maxLength30Creator = (maxLength30) => value => {
    if (value && value.length > 30) {
        return `Max symbols is ${maxLength30}`
    }

    return undefined
}


