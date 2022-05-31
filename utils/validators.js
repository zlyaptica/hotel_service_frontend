export const required = value => value ? undefined : "Это поле обязательное"

export const minLength = minLength => value => (value.length >= minLength) ? undefined : `Минимальная длина должна быть не менее ${minLength} символов.`

export const maxLength = maxLength => value => (value.length <= maxLength) ? undefined : `Максимальная длина должна быть не более ${maxLength} символов.`