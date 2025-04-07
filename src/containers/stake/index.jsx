'use client';

import { Fragment, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import TokenPools from '../../components/stake/TokenPools';
import StakeSteps from '../../components/stake/StakeSteps';
import HowToStake from '../../components/stake/HowToStake';

export default function Stake() {
  // Add subtle animation effect when component mounts
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fadeInUp');
    fadeInElements.forEach((element) => {
      element.classList.add('active');
    });
  }, []);

  return (
    <Fragment>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '40vh',
          marginTop: 10,
          paddingX: 2,
          background: 'linear-gradient(135deg, #8E44AD 0%, #D355E7 100%)',
          borderRadius: 10,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          sx={{
            mb: 4,
            mt: 2,
            animation: 'fadeIn 1s ease-out',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '800px',
            paddingX: 2,
          }}
        >
          <Typography
            color="text.primary"
            variant="h3"
            sx={{
              fontWeight: '900',
              mb: 1,
              background: 'linear-gradient(135deg, #FF6347, #FF8C00)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(142, 68, 173, 0.4)',
              letterSpacing: '1px',
            }}
            component="div"
          >
            Staking
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              fontSize: '1.05rem',
              textAlign: 'center',
              maxWidth: '750px',
              color: 'text.primary',
              marginTop: 2,
            }}
          >
            Stake $ELO to earn more $ELO. You can stake $ELO tokens in the staking pools to earn
            high APR as a return for holding $ELO tokens.
          </Typography>
        </Box>
      </Container>

      <Box
        sx={{
          background: 'linear-gradient(to right, rgba(30, 30, 36, 0.9), rgba(35, 35, 39, 0.9))',
          backdropFilter: 'blur(10px)',
          py: 7,
          borderTop: 1,
          borderBottom: 1,
          borderColor: alpha('#8E44AD', 0.2),
          mb: 4,
          boxShadow: `0 10px 30px -10px ${alpha('#000', 0.2)}`,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(142, 68, 173, 0.5), transparent)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent)',
          },
        }}
      >
        <Container
          className="fadeInUp"
          sx={{
            transition: 'all 0.8s ease-out',
            opacity: 0,
            transform: 'translateY(20px)',
            '&.active': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            color="text.primary"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #fff 30%, #00D4FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
              letterSpacing: '0.5px',
            }}
          >
            Stake $ELO tokens to earn rewards
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              textAlign: 'center',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: '1rem',
              '& strong': {
                color: '#00D4FF',
                fontWeight: 600,
              },
            }}
          >
            Please be aware{' '}
            <strong>estimated APRs will likely drop over time as more people join the pool</strong>.
            First you must approve you&apos;ve $ for use on the staking contract, then enter an
            amount and press stake.
          </Typography>
          <StakeSteps />
          <HowToStake />
          <TokenPools />
        </Container>
      </Box>
    </Fragment>
  );
}
