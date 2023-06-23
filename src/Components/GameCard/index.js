import { Button, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { useAPIContext } from "../../Context/APIContext";

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
  const { filterGenres, filterGame, clearSearch, content } = useAPIContext();
  const handleFilter = (ev) => {
    const genre = ev.target.textContent;
    // console.log('genre >>> ', ev.target.textContent);
    filterGenres(genre);
    clearSearch();
  };
  return (
    <>
      <Card sx={{ maxWidth: 500, minWidth: { sm: 500 } }}>
        <CardMedia
          sx={{
            height: 250,
            minWidth: { sm: 250, md: 400, xl: 500 },
            maxWidth: { md: 500 },
          }}
          image={thumbnail}
          title={title}
        />
        <CardContent sx={{ minHeight: 150 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title} <Chip label={genre} onClick={handleFilter} />
          </Typography>
          <Typography variant="body2">{short_description}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default GameCard;
