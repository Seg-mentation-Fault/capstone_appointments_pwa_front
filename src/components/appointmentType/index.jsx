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
                <FormControlLabel value="Dermatolog??a" control={<Radio />} label="Dermatolog??a" />
                <FormControlLabel value="Urolog??a" control={<Radio />} label="Urolog??a" />
                <FormControlLabel value="Ginecolog??a" control={<Radio />} label="Ginecolog??a" />
                <FormControlLabel value="Ortopedia" control={<Radio />} label="Ortopedia" />
                <FormControlLabel value="Anestesiolog??a" control={<Radio />} label="Anestesiolog??a" />
                <FormControlLabel value="Pediatr??a" control={<Radio />} label="Pediatr??a" />
                <FormControlLabel value="Cirug??a General" control={<Radio />} label="Cirug??a General" />
                <FormControlLabel value="Cirug??a Pl??stica" control={<Radio />} label="Cirug??a Pl??stica" />
                <FormControlLabel value="Cirug??a Pedi??trica" control={<Radio />} label="Cirug??a Pedi??trica" />
                <FormControlLabel value="Medicina Interna" control={<Radio />} label="Medicina Interna" />
                <FormControlLabel value="Neurolog??a" control={<Radio />} label="Neurolog??a" />
                <FormControlLabel value="Neurocirug??a" control={<Radio />} label="Neurocirug??a" />
                <FormControlLabel value="Endocrinolog??a" control={<Radio />} label="Endocrinolog??a" />
                <FormControlLabel value="Otorrinolaringolog??a" control={<Radio />} label="Otorrinolaringolog??a" />
                <FormControlLabel value="Medicina del dolor" control={<Radio />} label="Medicina del dolor" />
                <FormControlLabel value="anestesiolog??a" control={<Radio />} label="anestesiolog??a" />
              </RadioGroup>
            </FormControl>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default AppointmentType;
