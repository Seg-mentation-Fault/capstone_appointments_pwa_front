import './App.css';
import {
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  Box,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import theme from './assets/theme';
import CardForm from './components/cardForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main" maxWidth="md">
        <Typography variant="h3" component="h1" noWrap>
          Solicitud de citas web
        </Typography>
        <Typography variant="subtitle1">
          Para fortalecer nuestra atención con el paciente queremos brindarle la oportunidad de agendar las citas online
          con una respuesta máxima de 72 horas
        </Typography>
        <CardForm />
      </Box>
    </ThemeProvider>
  );
}

export default App;
