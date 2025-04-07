import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';

const stakingPoolData = [
  { label: 'APR', value: '0.000%' },
  { label: 'Wallet Balance', value: '0.0 $ELO' },
  { label: 'Staked', value: '0.0 $ELO' },
  { label: 'Earned', value: '0.0000 $ELO' },
];

const CardLabel = ({ text }) => {
  return (
    <Typography
      color="text.secondary"
      sx={{
        fontWeight: 500,
        fontSize: '0.95rem',
      }}
      variant="body1"
    >
      {text}
    </Typography>
  );
};

const CardValue = ({ text }) => {
  return (
    <Typography
      color="text.primary"
      sx={{
        fontWeight: 600,
        fontSize: '1rem',
      }}
    >
      {text}
    </Typography>
  );
};

const TokenPools = () => {
  const [amountToStake, setAmountToStake] = useState('');

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            borderRadius: 3,
            p: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(135deg, rgba(23, 42, 69, 0.8), rgba(10, 25, 47, 0.9))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                mb: 4,
                textAlign: 'center',
                color: '#64b5f6',
              }}
            >
              $ELO Staking Pool
            </Typography>

            <Box sx={{ mb: 3 }}>
              {stakingPoolData.map((item, i) => (
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2.5}
                  key={i}
                >
                  <CardLabel text={item.label} />
                  <CardValue text={item.value} />
                </Stack>
              ))}
            </Box>

            <TextField
              type="number"
              label="Amount to stake"
              variant="outlined"
              fullWidth
              value={amountToStake}
              onChange={(e) => setAmountToStake(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ color: '#ffffff' }}>
                    $ELO
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 2,
                  '& input': {
                    py: 1.8,
                    color: '#ffffff !important',
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  color: '#ffffff',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#64b5f6',
                  },
                },
              }}
            />
          </CardContent>

          <CardActions sx={{ px: 2, pb: 2 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                py: 1.8,
                borderRadius: 2,
                fontWeight: 600,
                background: 'linear-gradient(135deg, #1a73e8 0%, #64b5f6 100%)',
                boxShadow: '0 4px 15px rgba(26, 115, 232, 0.3)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(26, 115, 232, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Stake Tokens
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TokenPools;
