import { Typography, Grid } from '@mui/material';

function AppointmentConfirm({
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
}) {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Confirmar Cita
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Información Personal
          </Typography>
          <Typography variant="body2">{name}</Typography>
          <Typography variant="body2">{phoneNumber}</Typography>
          <Typography variant="body2">
            {documentType} {documentNumber}
          </Typography>
          <Typography variant="body2">{township}</Typography>
          <Typography variant="body2">{email}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Tipo de Cita
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Eps:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">{eps}</Typography>
            </Grid>
            {coosaludDiagnostic && (
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>Diagnostico</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">{coosaludDiagnostic}</Typography>
                </Grid>
              </>
            )}
            <Grid item xs={6}>
              <Typography gutterBottom>Cita:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">{appointmentType}</Typography>
            </Grid>
            {specializationType && (
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>Cita especializada:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom variant="body2">
                    {specializationType}
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AppointmentConfirm;
