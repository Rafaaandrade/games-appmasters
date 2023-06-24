import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { useAPIContext } from "../../Context/APIContext";
import "./styles.css";

const GameCard = ({
  title,
  thumbnail,
  genre,
  release_date,
  platform,
  short_description,
}) => {
  const { filterGenres, filterGame, clearSearch, content } = useAPIContext();

  const handleFilter = (ev) => {
    const genre = ev.target.textContent;
    filterGenres(genre);
    clearSearch();
  };

  return (
    <>
      <Card
        className="actionArea"
        sx={{ maxWidth: 500,}}
      >
        <CardMedia
          sx={{
            height: 250,
            minWidth: { sm: 250, md: 400, xl: 500 },
            maxWidth: { md: 500, sm: 400 },
          }}
          image={thumbnail}
          title={title}
        />
        <CardContent sx={{minWidth: 500}}>
          <Typography gutterBottom variant="h5" component="div">
            {title} <Chip label={genre} onClick={handleFilter} />
          </Typography>
          <Typography variant="body2">{short_description}</Typography>
          <div>
            <Typography variant="body2">
              Data de lançamento: {release_date}
            </Typography>
            <Typography variant="body2">Plataforma: {platform}</Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default GameCard;
