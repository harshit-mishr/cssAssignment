import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CustomInput({label , onChange ,value }) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <div>
        <TextField
          label={label}
          onChange={onChange}
          id="standard-size-small"
          value={value}
          size="small"
          variant="standard"
        />
     
      </div>
    </Box>
  );
}
