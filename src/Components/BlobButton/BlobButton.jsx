import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import './BlobButton.css'; 

const BlobButton = ({ children }) => {
  return (
    <div className="buttons">
      <Button
        className="blob-btn"
        variant="outlined"
        component={motion.button}
        initial={{ borderColor: '#0505A9' }}
        whileHover={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}
        sx={{
          position: 'relative',
          padding: '20px 46px',
          marginBottom: '30px',
          textTransform: 'uppercase',
          fontSize: '16px',
          fontWeight: 'bold',
          overflow: 'hidden',
          borderRadius: '30px',
          transition: 'color 0.5s',
          zIndex: 1,
        }}
      >
        {children}
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </Button>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BlobButton;
