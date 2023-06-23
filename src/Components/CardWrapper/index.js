import { Button, Grid } from "@mui/material";
import { useAPIContext } from "../../Context/APIContext";
import GameCard from "../GameCard";

const CardWrapper = () => {
  const { content, clearFilter } = useAPIContext();

  return (
    <div>
      {content.genresFilter && (
        <Button
          sx={{
            display: "flex",
            marginLeft: "1em",
            marginTop: "1em",
            backgroundColor: "red",
          }}
          variant="contained"
          onClick={clearFilter}
        >
          Voltar
        </Button>
      )}
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-around", marginTop: "15px" }}
      >
        {content.data &&
          !content.searchedGame &&
          !content.genresFilter &&
          content.data.map((c) => (
            <Grid item key={c.id} xl={4} sx={{ display: "contents" }}>
              <GameCard
                id={c.id}
                title={c.title}
                genre={c.genre}
                short_description={c.short_description}
                thumbnail={c.thumbnail}
              />
            </Grid>
          ))}
        {content.searchedGame && 
          content.searchedGame.map((c) => (
            <Grid item key={c.id} xl={4} sx={{ display: "contents" }}>
              <GameCard
                id={c.id}
                title={c.title}
                genre={c.genre}
                short_description={c.short_description}
                thumbnail={c.thumbnail}
              />
            </Grid>
          ))}
        {content.genresFilter &&
          content.genresFilter.map((c) => (
            <Grid item key={c.id} xl={4} sx={{ display: "contents" }}>
              <GameCard
                id={c.id}
                title={c.title}
                genre={c.genre}
                short_description={c.short_description}
                thumbnail={c.thumbnail}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default CardWrapper;
