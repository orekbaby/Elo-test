import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const stakingGuides = [
  {
    title: 'How to Stake',
    details: [
      'Connect your wallet to the platform',
      'Approve the staking contract to access your tokens',
      'Enter the amount you wish to stake',
      'Confirm the staking transaction',
    ],
  },
  {
    title: 'Checking Your Balance',
    details: [
      'Your staked balance appears at the top of the staking card',
      "Refresh the page if balances don't appear immediately",
      "Ensure you're connected with the correct wallet",
    ],
  },
  {
    title: 'Unstaking Tokens',
    details: [
      'Navigate to the staking section',
      'Click on the "Claim & Unstake" button',
      'Confirm the transaction in your wallet',
      'Wait for the transaction to complete',
    ],
  },
];

export default function StakingGuide({ open, handleClose }) {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          background: 'linear-gradient(135deg, rgba(23, 42, 69, 0.95), rgba(10, 25, 47, 0.95))',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(12px)',
          p: 1,
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: 'center',
          color: '#64b5f6',
          fontWeight: 'bold',
          pt: 3,
          pb: 1,
        }}
      >
        Staking Guide
      </DialogTitle>

      <DialogContent sx={{ px: 3, py: 0 }}>
        {stakingGuides.map((data, i) => (
          <Accordion
            key={i}
            expanded={expanded === i}
            onChange={handleChange(i)}
            sx={{
              background: 'transparent',
              boxShadow: 'none',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              mb: 2,
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#64b5f6' }} />}
              sx={{
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: expanded === i ? '#64b5f6' : 'text.primary',
                }}
              >
                {data.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ pt: 0, pb: 3 }}>
              <Stepper
                orientation="vertical"
                connector={null}
                sx={{
                  '& .MuiStepLabel-label': {
                    color: 'text.primary',
                    fontWeight: 500,
                  },
                }}
              >
                {data.details.map((item, i) => (
                  <Step key={i} active>
                    <StepLabel>{item}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </AccordionDetails>
          </Accordion>
        ))}
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 1 }}>
        <Button
          onClick={handleClose}
          sx={{
            px: 4,
            py: 1,
            borderRadius: 2,
            fontWeight: 600,
            background: 'linear-gradient(135deg, #1a73e8 0%, #64b5f6 100%)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(26, 115, 232, 0.3)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Got It
        </Button>
      </DialogActions>
    </Dialog>
  );
}
