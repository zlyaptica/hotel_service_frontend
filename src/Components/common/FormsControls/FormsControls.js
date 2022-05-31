import classes from './FormsContols.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    // const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + " " + classes.error}>
            {props.children}
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}