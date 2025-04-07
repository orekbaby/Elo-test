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

const steps = ['Approve your tokens', 'Enter amount', 'Confirm stake'];
const icons = [<AccountBalanceWalletIcon />, <InputIcon />, <SendIcon />];

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.root}`]: {
    paddingTop: 10,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    background: 'linear-gradient(90deg, #1a73e8 0%, #64b5f6 100%)',
    borderRadius: 1,
  },
}));

const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#0a192f' : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 44,
  height: 44,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  ...(ownerState.completed && {
    background: 'linear-gradient(135deg, #1a73e8 0%, #64b5f6 100%)',
  }),
  ...(ownerState.active && {
    background: 'linear-gradient(135deg, #1a73e8 0%, #64b5f6 100%)',
    boxShadow: '0 0 0 4px rgba(26, 115, 232, 0.2)',
    transform: 'scale(1.1)',
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
        maxWidth: '700px',
        margin: 'auto',
        p: 4,
        borderRadius: 3,
        background: 'rgba(23, 42, 69, 0.5)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        mb: 6,
      }}
    >
      <Stepper activeStep={-1} alternativeLabel connector={<CustomConnector />}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#64b5f6',
                    transform: 'translateY(-2px)',
                  },
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
