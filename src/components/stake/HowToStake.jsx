import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import StakingGuide from './StakingGuide';
import { Typography } from '@mui/material';

const HowToStake = () => {
  const [stakingGuideDialogOpen, setStakingGuideDialogOpen] = useState(false);

  const handleStakingGuideDialogToggle = () => {
    setStakingGuideDialogOpen(!stakingGuideDialogOpen);
  };

  return (
    <Box component="div" sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Learn How to Stake
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Stake your tokens and start earning rewards. Need guidance? Check the guide below!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleStakingGuideDialogToggle}
        sx={{
          px: 3,
          py: 1.5,
          borderRadius: 8,
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
          '&:hover': { boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' },
        }}
      >
        Learn how to stake
      </Button>
      <StakingGuide open={stakingGuideDialogOpen} handleClose={handleStakingGuideDialogToggle} />
    </Box>
  );
};

export default HowToStake;
