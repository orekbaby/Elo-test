import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import StakingGuide from './StakingGuide';
import Typography from '@mui/material/Typography';

const HowToStake = () => {
  const [stakingGuideDialogOpen, setStakingGuideDialogOpen] = useState(false);

  const handleStakingGuideDialogToggle = () => {
    setStakingGuideDialogOpen(!stakingGuideDialogOpen);
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 2,
        mb: 8,
        px: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 3,
          background: 'linear-gradient(135deg, #64b5f6 30%, #1a73e8 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Need Help With Staking?
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          mb: 4,
          maxWidth: '600px',
          mx: 'auto',
          lineHeight: 1.7,
        }}
      >
        Our comprehensive guide will walk you through the staking process step by step.
      </Typography>
      <Button
        variant="contained"
        onClick={handleStakingGuideDialogToggle}
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 6,
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
        View Staking Guide
      </Button>
      <StakingGuide open={stakingGuideDialogOpen} handleClose={handleStakingGuideDialogToggle} />
    </Box>
  );
};

export default HowToStake;
