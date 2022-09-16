import { useState } from 'react';
import { Container, Paper, Stepper, Step, StepLabel, Typography, Button, Box, CircularProgress } from '@mui/material';

import { useDataForm } from './hooks';
import InfoPersonal from '../infoPersonal';
import AppointmentType from '../appointmentType';
import AppointmentConfirm from '../appointmentConfirm';
import { postAppointment } from '../../services/sheets.service';

const steps = ['Información personal', 'Tipo de Cita', 'Confirmar cita'];

function CardForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const {
    name,
    setName,
    phoneNumber,
    setPhoneNumber,
    documentType,
    setDocumentType,
    documentNumber,
    setDocumentNumber,
    township,
    setTownship,
    email,
    setEmail,
    eps,
    setEps,
    appointmentType,
    setAppointmentType,
    specializationType,
    setSpecializationType,
    coosaludDiagnostic,
    setCoosaludDiagnostic,
  } = useDataForm();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <InfoPersonal
            name={name}
            setName={setName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            documentType={documentType}
            setDocumentType={setDocumentType}
            documentNumber={documentNumber}
            setDocumentNumber={setDocumentNumber}
            township={township}
            setTownship={setTownship}
            email={email}
            setEmail={setEmail}
          />
        );
      case 1:
        return (
          <AppointmentType
            eps={eps}
            setEps={setEps}
            appointmentType={appointmentType}
            setAppointmentType={setAppointmentType}
            specializationType={specializationType}
            setSpecializationType={setSpecializationType}
            coosaludDiagnostic={coosaludDiagnostic}
            setCoosaludDiagnostic={setCoosaludDiagnostic}
          />
        );
      case 2:
        return (
          <AppointmentConfirm
            name={name}
            phoneNumber={phoneNumber}
            documentType={documentType}
            documentNumber={documentNumber}
            township={township}
            email={email}
            eps={eps}
            appointmentType={appointmentType}
            specializationType={specializationType}
            coosaludDiagnostic={coosaludDiagnostic}
          />
        );
      default:
        throw new Error('Unknown step');
    }
  };

  const handleNext = async (e) => {
    const text = e.target.textContent;

    if (text === 'Confirmar') {
      setLoading(true);
      const result = await postAppointment({
        name,
        phoneNumber,
        documentType,
        documentNumber,
        township,
        email,
        eps,
        appointmentType,
        specializationType,
        coosaludDiagnostic,
      });
      console.log(result);
      setLoading(false);
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleButton = () => {
    if (activeStep === 0) {
      if (name && phoneNumber && documentType && documentNumber && township) return false;
      return true;
    } else if (activeStep === 1) {
      if (eps && appointmentType) {
        if (appointmentType === 'Cita de medicina especializada' && !specializationType) return true;
        return false;
      }
      return true;
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Paper elevation={2} sx={{ my: { xs: 2, md: 4 }, p: { xs: 1, md: 3 } }}>
        <Stepper activeStep={activeStep} sx={{ pt: 2, pb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Gracias por utilizar el generador de citas web.
                </Typography>
                <Typography variant="subtitle1">
                  Tu cita ha sido enviada correctamente, reciberas una respuesta máxima en 72 horas.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Atrás
                    </Button>
                  )}

                  <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }} disabled={handleButton()}>
                    {activeStep === steps.length - 1 ? 'Confirmar' : 'Siguiente'}
                  </Button>
                </Box>
              </>
            )}
          </>
        )}
      </Paper>
    </Container>
  );
}

export default CardForm;
