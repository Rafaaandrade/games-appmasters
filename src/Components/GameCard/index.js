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
  const { filterGenres, clearSearch } = useAPIContext();

  const handleFilter = (ev) => {
    const genre = ev.target.textContent;
    filterGenres(genre);
    window.scroll(0, 0);
    clearSearch();
  };

  return (
    <>
      <Card className="actionArea" sx={{ backgroundColor: "lightgray" }}>
        <CardMedia
          sx={{
            height: 250,
          }}
          image={thumbnail}
          title={title}
        />
        <CardContent
          sx={{
            "&:last-child": { pb: 0, p: 0 },
          }}
          className="cardContent"
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="title"
          >
            {title}
            <Chip label={genre} onClick={handleFilter} variant="outlined" />
          </Typography>
          <Typography variant="body2">{short_description}</Typography>
          <div className="subContentArea">
            <Typography variant="subtitle2">
              Data de lançamento: {release_date}
            </Typography>
            <Typography variant="subtitle2">Plataforma: {platform}</Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default GameCard;
