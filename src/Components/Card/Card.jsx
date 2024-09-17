// import React from 'react';
// import './Card.css';

// const Card = ({ title, value, icon: IconComponent, color, first }) => {
//   return (
//     <div className={`card ${color ? 'custom-color' : ''}`} style={{ backgroundColor: color }}>
//       <div className="card-header">
//         <h3 className={first ? 'first-card-title' : ''}>{value}</h3>
//         <p className={first ? 'first-card-description' : ''}>{title}</p>
//       </div>
//       {IconComponent && <div className="card-icon">{IconComponent}</div>}

//     </div>
//   );
// };

// export default Card;
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const Card = ({ image, title, text }) => {
  return (
    <Card>
      <CardMedia component="img" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Card;
