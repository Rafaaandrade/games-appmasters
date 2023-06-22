import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

const GameCard = ({
  id,
  title,
  thumbnail,
  genre,
  release_date,
  platform,
  publisher,
  short_description,
}) => {
  return (
   
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia sx={{ height: 250, minWidth: {sm: 200, xl: 500}, maxWidth: {sm: 300}}} image={thumbnail} title={title} />
      <CardContent sx={{ minHeight: 150}}>
        <Typography gutterBottom variant="h5" component="div">
          {title} <Chip label={genre} />
        </Typography>
        <Typography variant="body2">{short_description}</Typography>
      </CardContent>
    </Card>


  );
};

export default GameCard;
