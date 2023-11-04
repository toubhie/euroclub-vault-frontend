import { InfoOutlined, Lock } from "@mui/icons-material";
import { TextField, Tooltip } from "@mui/material";
import { Field, ErrorMessage } from 'formik';

type Props = {
    customChange?: any,
    floatingLabel?: false,
    preventFormikSetValue?: false,

    id?: string;
    label?: string;
    readOnly?: boolean;
    tip?: string;
    disabled?: boolean;
    type?: string;
    required?: boolean;
    placeholder?: string;
    InputProps?: any; // Adjust the type as needed
    inputProps?: any; // Adjust the type as needed
    multiline?: boolean;
    minRows?: number;
    value?: string;
  }

const TextInput = ({ customChange, floatingLabel = false, preventFormikSetValue = false, ...props }) => {
	return (
        <div>
            { !floatingLabel && <label className="label">{props.label} {props.required && '*'} { props.readOnly && <Lock style={{ marginBottom: '-2px' }} />} {props.tip && <Tooltip title={props.tip} ><InfoOutlined style={{ marginBottom: '-2px' }} /></Tooltip>}</label> }
            <Field id={props.id} name={props.id} label={props.label}>
                {({ field, form }) => (
                    <div>
                        <TextField 
                            { ...props }
                            id={props.id}
                            name={props.id}
                            label={floatingLabel ? props?.label || '' :null}
                            disabled={props.disabled}
                            type={props.type || 'text'}
                            required={props.required} 
                            placeholder={props?.placeholder || `Enter ${props.label}`}
                            InputProps={{ readOnly: props.readOnly, ...props.InputProps }}
                            inputProps={{
                                ...props.inputProps
                            }}
                            multiline={props.multiline} minRows={props.minRows}
                            variant="outlined"
                            fullWidth
                            error={Boolean(form.errors[props.id] && form.touched[props.id])}
                            value={props?.value || field?.value || ''}
                            onChange={({ target }) => {
                                const value = target.value || ''
                                if(!preventFormikSetValue) form.setFieldValue(field.name, value, false);
                                if(customChange) customChange(field.name, value)
                            }}
                            onBlur={() => {
                                form.setTouched({ ...form.touched, [field.name]: true });
                            }}
                        />
                        {   
                            Boolean(form.errors[props.id] && form.touched[props.id]) &&
                            <small className="error input-feedback">{form.errors[props.id]}</small>
                        }
                        {/* <ErrorMessage className="error input-feedback" component="div" name={props.id} /> */}
                    </div>
                )}
            </Field>
        </div>
	);
};

export default TextInput;