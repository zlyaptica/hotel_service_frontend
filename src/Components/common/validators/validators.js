export const required = value => value ? undefined : "Это обязательное поле."

const dateRegex = new RegExp("/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/g")
export const validDate = value => dateRegex.test(value) ? undefined : "Введите дату по примеру."