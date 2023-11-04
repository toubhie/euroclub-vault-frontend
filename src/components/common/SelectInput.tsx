import { Lock } from "@mui/icons-material";
import { Autocomplete, capitalize, TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Field, ErrorMessage } from 'formik';
import { useState } from "react";
import { useAsync } from 'react-async';

const SelectInput = ({ fieldDisplay='name', filterField = '', capitalizeLabel = true, preventFormikSetValue = false, filterValue = 'string', floatingLabel = false, error, customChange, readOnly, selectFunction, ...props}) => {
    const [open, setOpen] = useState(false);
    const { data, isLoading } = useAsync({ promiseFn: selectFunction });

    let options = data || props?.options || []
    if(filterField) options = options.filter((op) => op[filterField] === filterValue)


	// if (isLoading) return 'Loading...';
	// if (error) return `Something went wrong: ${error.message}`;

	return (
        <Field id={props.id} name={props.id} label={props.label}>
            {({ field, form }) => (
                <div className="w-100">
                    { !floatingLabel && props.label && <label className="label">{props.label} {props.required && '*'} { readOnly && <Lock style={{ marginBottom: '-2px' }} />}</label> }
                    <Autocomplete
                        id={props.id}
                       // name={props.id}
                      //  label={floatingLabel ? props?.label || '' :null}
                        options={options.sort((a, b) => (a[fieldDisplay] > b[fieldDisplay]) ? 1 : -1)}
                        getOptionLabel={option => (capitalizeLabel) ? capitalize(option[fieldDisplay] || '') : option[fieldDisplay] || ''}
                        value={options.filter(lval => lval[props.field] === field.value)[0] || null}
                        onChange={(e, value) => {
                            if(!preventFormikSetValue) {
                                if (value) {
                                    form.setFieldValue(field.name, value[props.field]);
                                } else {
                                    form.setFieldValue(field.name, '');
                                }
                            };
                            if(customChange) customChange(field.name, value ? value[props.field] : '')
                        }}
                        onBlur={() => {
                            form.setTouched({ ...form.touched, [field.name]: true });
                        }}
                        open={open}
                        onOpen={() => !readOnly && setOpen(true)}
                        onClose={() => setOpen(false)}
                        disableClearable={readOnly}
                        renderInput={params => (
                            <TextField 
                                {...params} 
                                name={props.id}       
                                placeholder={props?.placeholder || `Select ${props.label}`}  
                                label={floatingLabel ? props?.label || '' :null}
                                required={props.required}
                                variant="outlined" 
                                fullWidth
                                error={error}
                                InputLabelProps={{
                                    // className: classes.labelStyle
                                }}
                                inputProps={{
                                    ...params.inputProps,
                                    ...props
                                }}
                            />
                        )}
                    //    required={props.required}
                    //    variant="outlined"
                    />
                    <small className="error">{form.errors[props.id] || error}</small>
                    {/* <ErrorMessage className="error input-feedback" component="div" name={props.id} /> */}
                </div>
            )}
        </Field>
	);
};

export default SelectInput; 