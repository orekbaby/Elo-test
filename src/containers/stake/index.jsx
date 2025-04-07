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
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fadeInUp');
    fadeInElements.forEach((element) => {
      element.classList.add('active');
    });
  }, []);

  return (
    <Fragment>
      {/* Hero Section - Completely Redesigned */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #1a73e8, #64b5f6)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(100, 181, 246, 0.5), transparent)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Main Heading with Modern Gradient */}
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 900,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                background: 'linear-gradient(135deg, #64b5f6 10%, #1a73e8 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(26, 115, 232, 0.2)',
                letterSpacing: '-0.5px',
                position: 'relative',
                '&::after': {
                  content: '"STAKING"',
                  position: 'absolute',
                  top: '4px',
                  left: '4px',
                  background: 'linear-gradient(135deg, #0a192f 10%, #172a45 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  zIndex: -1,
                },
              }}
            >
              ELO Staking Platform
            </Typography>

            {/* Subheading */}
            <Typography
              variant="h6"
              component="p"
              sx={{
                maxWidth: '700px',
                color: 'rgba(255, 255, 255, 0.85)',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.6,
              }}
            >
              Maximize your crypto holdings by staking $ELO tokens. Earn competitive rewards while
              contributing to network security with our high-yield staking pools.
            </Typography>

            {/* Decorative Elements */}
            <Box
              sx={{
                width: '100%',
                maxWidth: '600px',
                height: '2px',
                background:
                  'linear-gradient(90deg, transparent, rgba(100, 181, 246, 0.5), transparent)',
                mb: 4,
              }}
            />
          </Box>
        </Container>

        {/* Floating Particles Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            zIndex: 0,
            '& > div': {
              position: 'absolute',
              borderRadius: '50%',
              background: 'rgba(100, 181, 246, 0.1)',
            },
          }}
        >
          {[...Array(15)].map((_, i) => (
            <Box
              key={i}
              sx={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(40px)',
                opacity: 0.3,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          py: 8,
          position: 'relative',
          background: 'linear-gradient(to bottom, #0a192f, #172a45)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(100, 181, 246, 0.5), transparent)',
          },
        }}
      >
        <Container
          maxWidth="lg"
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
            variant="h4"
            component="div"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #64b5f6 30%, #1a73e8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.5px',
            }}
          >
            Start Earning Rewards Today
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              textAlign: 'center',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              '& strong': {
                color: '#64b5f6',
                fontWeight: 600,
              },
            }}
          >
            <strong>Estimated APRs may decrease over time</strong> as more participants join the
            staking pool. To begin, approve your tokens for staking, then enter your desired amount
            and confirm the transaction.
          </Typography>

          <StakeSteps />
          <HowToStake />
          <TokenPools />
        </Container>
      </Box>
    </Fragment>
  );
}
