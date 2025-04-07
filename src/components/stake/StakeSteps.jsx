import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import InputIcon from '@mui/icons-material/Input';
import SendIcon from '@mui/icons-material/Send';

const steps = ["Approve you've $", 'Enter an amount', 'Press stake'];
const icons = [<AccountBalanceWalletIcon />, <InputIcon />, <SendIcon />];

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    background: 'linear-gradient(90deg, #8E44AD 0%, #00D4FF 100%)',
    borderRadius: 1,
  },
}));

const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: ownerState.completed ? '#8E44AD' : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  ...(ownerState.active && {
    background: 'linear-gradient(135deg, #8E44AD 0%, #D355E7 100%)',
    boxShadow: '0 4px 10px rgba(142, 68, 173, 0.5)',
  }),
}));

function CustomStepIcon(props) {
  const { active, completed, className, icon } = props;
  return (
    <CustomStepIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? <CheckIcon /> : icons[icon - 1]}
    </CustomStepIconRoot>
  );
}

const StakeSteps = () => {
  return (
    <Box
      sx={{
        maxWidth: '650px',
        margin: 'auto',
        p: 3,
        borderRadius: 3,
        background: 'rgba(30, 30, 36, 0.4)',
        backdropFilter: 'blur(5px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(142, 68, 173, 0.1)',
      }}
    >
      <Stepper activeStep={-1} alternativeLabel connector={<CustomConnector />}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: 'text.primary',
                  transition: 'all 0.3s ease',
                  '&:hover': { color: '#00D4FF' },
                }}
              >
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StakeSteps;
