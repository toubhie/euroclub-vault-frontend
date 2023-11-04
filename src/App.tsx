import Routes from './routes'
import Theme from './styles/theme';
import { SnackbarProvider } from 'notistack';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useRef } from 'react';

const App = () => {
    const stackRef = useRef(null);

    const onClose = (key) => () => {
        stackRef.current.closeSnackbar(key);
    }; 

    return (
        <SnackbarProvider
            ref={stackRef}
            dense
            maxSnack={1}
            preventDuplicate
            autoHideDuration={3000}
            variant="success" // Set default variant
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            // With close as default
            action={(key) => (
                <IconButton size="small" color='inherit' onClick={onClose(key)} sx={{ p: 0.5 }}>
                    <Close />
                </IconButton>
            )}
        
        >
            <Theme>
                <Routes />
            </Theme>
        </SnackbarProvider>
    );
}

export default App;