import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  TextField,
} from '@mui/material';
import { useState } from 'react';

function AppointmentType({
  eps,
  setEps,
  appointmentType,
  setAppointmentType,
  specializationType,
  setSpecializationType,
  coosaludDiagnostic,
  setCoosaludDiagnostic,
}) {
  const [otraEps, setOtraEps] = useState(false);
  const [coosalud, setCoosalud] = useState(false);

  const handleChangeEps = (e) => {
    if (e.target.value === 'Otra') {
      setOtraEps(true);
    } else {
      setOtraEps(false);
    }
    if (e.target.value === 'Coosalud') {
      setCoosalud(true);
    } else {
      setCoosalud(false);
      setCoosaludDiagnostic('');
    }
    setEps(e.target.value);
  };

  const handleChangeAppointmentType = (e) => {
    if (e.target.value !== 'Cita de medicina especializada') {
      setSpecializationType('');
    }
    setAppointmentType(e.target.value);
  };

  const handleChangeSpecializationType = (e) => {
    setSpecializationType(e.target.value);
  };

  const handleChangeOtraEps = (e) => {
    setEps(e.target.value);
  };

  const handleCooasludDiagnostig = (e) => {
    setCoosaludDiagnostic(e.target.value);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Tipo de Cita
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth required>
            <InputLabel id="eps">Eps a la que pertenece</InputLabel>
            <Select labelId="eps" id="eps" label="Eps" variant="filled" required value={eps} onChange={handleChangeEps}>
              <MenuItem value="Salud Total EPS">Salud Total EPS</MenuItem>
              <MenuItem value="Nueva EPS">Nueva EPS</MenuItem>
              <MenuItem value="Copensar EPS">Copensar EPS</MenuItem>
              <MenuItem value="Coosalud">Coosalud</MenuItem>
              <MenuItem value="Positiva">Positiva</MenuItem>
              <MenuItem value="Otra">Otra</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {coosalud && (
          <Grid item xs={12}>
            <TextField
              required
              id="coosaludDiagnostic"
              name="coosaludDiagnostic"
              label="Agregue diagnostico por el cual fue remitido"
              fullWidth
              type="text"
              variant="filled"
              value={coosaludDiagnostic}
              onChange={handleCooasludDiagnostig}
            />
          </Grid>
        )}
        {otraEps && (
          <Grid item xs={12}>
            <TextField
              required
              id="otraEps"
              name="otraEps"
              label="Especifique a que EPS pertenece"
              fullWidth
              type="text"
              variant="filled"
              onChange={handleChangeOtraEps}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <FormControl fullWidth required>
            <FormLabel id="appointmentType" sx={{ textAlign: 'left' }}>
              Tipo de Requerimiento
            </FormLabel>
            <RadioGroup
              aria-labelledby="appointmentType"
              name="appointmentType"
              onChange={handleChangeAppointmentType}
              value={appointmentType}
            >
              <FormControlLabel value="Cita de medicina general" control={<Radio />} label="Cita de medicina general" />
              <FormControlLabel
                value="Cita de medicina especializada"
                control={<Radio />}
                label="Cita de medicina especializada"
              />
              <FormControlLabel value="Odontologia" control={<Radio />} label="Odontologia" />
            </RadioGroup>
          </FormControl>
        </Grid>
        {appointmentType === 'Cita de medicina especializada' && (
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel id="specializationType" sx={{ textAlign: 'left' }}>
                Por favor seleccione el tipo de cita especializada
              </FormLabel>
              <RadioGroup
                aria-labelledby="specializationType"
                name="specializationType"
                onChange={handleChangeSpecializationType}
                value={specializationType}
              >
                <FormControlLabel value="Dermatología" control={<Radio />} label="Dermatología" />
                <FormControlLabel value="Urología" control={<Radio />} label="Urología" />
                <FormControlLabel value="Ginecología" control={<Radio />} label="Ginecología" />
                <FormControlLabel value="Ortopedia" control={<Radio />} label="Ortopedia" />
                <FormControlLabel value="Anestesiología" control={<Radio />} label="Anestesiología" />
                <FormControlLabel value="Pediatría" control={<Radio />} label="Pediatría" />
                <FormControlLabel value="Cirugía General" control={<Radio />} label="Cirugía General" />
                <FormControlLabel value="Cirugía Plástica" control={<Radio />} label="Cirugía Plástica" />
                <FormControlLabel value="Cirugía Pediátrica" control={<Radio />} label="Cirugía Pediátrica" />
                <FormControlLabel value="Medicina Interna" control={<Radio />} label="Medicina Interna" />
                <FormControlLabel value="Neurología" control={<Radio />} label="Neurología" />
                <FormControlLabel value="Neurocirugía" control={<Radio />} label="Neurocirugía" />
                <FormControlLabel value="Endocrinología" control={<Radio />} label="Endocrinología" />
                <FormControlLabel value="Otorrinolaringología" control={<Radio />} label="Otorrinolaringología" />
                <FormControlLabel value="Medicina del dolor" control={<Radio />} label="Medicina del dolor" />
                <FormControlLabel value="anestesiología" control={<Radio />} label="anestesiología" />
              </RadioGroup>
            </FormControl>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default AppointmentType;
