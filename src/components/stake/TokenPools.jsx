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
  { label: 'Wallet Balance', value: '0.0 $' },
  { label: 'Staked', value: '0.0 $' },
  { label: 'Earned', value: '0.0000 $' },
];

const CardLabel = ({ text }) => {
  return (
    <Typography color="text.secondary" sx={{ fontWeight: 500 }} variant="body1" display="block">
      {text}
    </Typography>
  );
};

const CardValue = ({ text }) => {
  return (
    <Typography color="text.primary" sx={{ fontWeight: 500, textAlign: 'right' }}>
      {text}
    </Typography>
  );
};

const TokenPools = () => {
  const [amountToStake, setAmountToStake] = useState('');

  return (
    <Grid container spacing={0} justifyContent="center">
      <Grid item xs={12} md={5}>
        <Card
          elevation={4}
          sx={{
            borderRadius: 10,
            p: 2,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'background.paper',
          }}
        >
          <CardContent>
            <Typography
              color="text.primary"
              sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}
              variant="h5"
            >
              Staking Pool
            </Typography>
            {stakingPoolData.map((item, i) => (
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                key={i}
              >
                <CardLabel text={item.label} />
                <CardValue text={item.value} />
              </Stack>
            ))}
            <Box mt={3}>
              <TextField
                type="number"
                id="amount-to-stake"
                label="Amount to stake"
                variant="outlined"
                fullWidth
                value={amountToStake}
                onChange={(e) => setAmountToStake(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                helperText="Maximum amount is 0"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  },
                  '& .MuiInputLabel-root': {
                    fontWeight: 600,
                    color: 'text.primary',
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'text.secondary',
                  },
                  '& .MuiInputBase-input': {
                    color: '#FFFFFF',
                  },
                }}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 8,
                fontWeight: 600,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                '&:hover': { boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)' },
              }}
            >
              Stake
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TokenPools;
