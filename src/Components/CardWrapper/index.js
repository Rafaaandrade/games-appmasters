import { Grid } from "@mui/material";
import { useAPIContext } from "../../Context/APIContext";
import GameCard from "../GameCard";

const CardWrapper = () => {
  const { content} = useAPIContext();

  return (
    <Grid container spacing={2} sx={{ justifyContent: "space-around", marginTop: '15px' }}>
      {content.data &&
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
    </Grid>
  );
};

export default CardWrapper;
