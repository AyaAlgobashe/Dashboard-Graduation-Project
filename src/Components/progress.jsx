import { CircularProgress, Typography } from '@mui/material';

const ProgressCircle = ({ value, label }) => {
  return (
    <div
     style={{ display: 'flex',alignItems: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
     borderRadius: '8px', padding: '16px',
     width: '80%',top:'20%',
    }}>
      <div style={{ marginRight: '10px', position: 'relative' }}>
        <CircularProgress variant="determinate" value={value} color="primary" />
        <Typography
          variant="body2"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'black',
            direction:"ltr"
          }}
        >
          {value}%
        </Typography>
      </div>
      <div>
        <Typography variant="body1" color="textPrimary">{label}</Typography>
        <Typography variant="body2" color="textSecondary">{value}%</Typography>
      </div>
    </div>
  );
};

export default ProgressCircle;


