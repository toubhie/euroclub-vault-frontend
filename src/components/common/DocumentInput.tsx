import { Cancel, Close, InfoOutlined, Lock, Upload, UploadOutlined, Visibility } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import { Field, ErrorMessage } from 'formik';
import { useRef, useState } from "react";
// import { Document, Page, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const DocumentInput = ({ customChange, preventFormikSetValue = false, readOnly, ...props}) => {
    const inputRef = useRef(null)
    const [ uploadAlert, showUploadAlert ] = useState(null)
    const [ file, setFile ] = useState(null)

    const [ viewer, showViewer ] = useState("")
    const [numPages, setNumPages] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = ({ target }, field, form) => {
        const file  = target?.files[0]
        if(file) {
            if(file.size/1024 < 1024 * 100) {
                // if(file.type === 'image/jpeg' || file.type === 'application/pdf' || file.type === 'image/png') {
                    setFile(file)
                    if(!preventFormikSetValue) form.setFieldValue(field.name, file);
                    if(customChange) customChange(field.name, file)
                // } else {
                //     showUploadAlert("Invalid file format, only JPEG, PNG and PDF files are allowed")
                // }
            } else {
                showUploadAlert("File size is must be less than 1MB")
            }
        } else {
            setFile(null)
            form.setFieldValue(field.name, '');
        }
    }

        
    const closeDialog = () => {
        showViewer(null)
    }

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

	return (
        <div>
            <label className="label">{props.label} {props.required && '*'} { readOnly && <Lock style={{ marginBottom: '-2px' }} />} {props.tip && <Tooltip title={props.tip} ><InfoOutlined style={{ marginBottom: '-2px' }} /></Tooltip>}</label>
            <Field id={props.id} name={props.id} label={props.label}>
                {({ field, form }) => (
                    <div>
                        <input ref={inputRef} hidden type='file' accept={props.accept} onChange={(e) => handleChange(e, field, form)} />
                        <TextField 
                            { ...props }
                            id={props.id}
                            name={props.id}
                            label={null}
                            disabled={props.disabled}
                            type={props.type || 'text'}
                            required={props.required}
                            multiline={props.multiline} 
                            minRows={props.minRows}
                            variant="outlined"
                            fullWidth
                            value={file?.name || field.value || props?.value || ''}
                            placeholder={props?.placeholder || `Click to upload ${props.label}`}
                            error={Boolean(form.errors[props.id] && form.touched[props.id])}
                            className="document-input"
                            InputProps={{
                                onKeyDown: () => { return false },
                                startAdornment: (
                                    !readOnly &&
                                    <InputAdornment position="start">
                                        <Button
                                            variant="outlined" title="Upload Document"
                                            startIcon={<Upload />}
                                            style={{ borderTopRightRadius: 0 }}
                                            onClick={() => inputRef.current.click()}
                                        >
                                            Select File
                                        </Button>
                                    </InputAdornment>
                                ),
                                // endAdornment: (
                                //     <InputAdornment position="end">
                                //         <Button
                                //             disabled={!Boolean(file) && !Boolean(props?.value || field?.value)}
                                //             variant="contained" color="secondary" title="View document"
                                //             onClick={() => {
                                //                 if(file) openFileInNewBrowser(file)
                                //                 else if(props?.value || field?.value) openDocument(props?.value || field?.value)
                                //             }}
                                //         >
                                //             <Visibility />
                                //         </Button>
                                //     </InputAdornment>
                                // ),
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


            <Dialog open={Boolean(uploadAlert)}>
                <DialogContent className="p-2 pb-1">
                    <div className="d-flex justify-content-center flex-direction-column align-items-center">
                        <Cancel color="error" style={{ fontSize: '70px' }} />
                        <h3 className="mt-05 mb-0">File Upload Error</h3>
                        <p className="mt-05">{uploadAlert}</p>
                    </div>
                </DialogContent>
                <DialogActions className="p-1 pt-0">
                    <Button color="secondary" variant="contained" onClick={() => showUploadAlert(null)}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
	);
};

export default DocumentInput;