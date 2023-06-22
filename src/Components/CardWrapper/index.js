import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useAPIContext } from "../../Context/APIContext";
import GameCard from "../GameCard";

const CardWrapper = () => {
  const { content, getData } = useAPIContext();

  //Ao montar o componente, verifica se existe algum dado no context, caso não tenha, chama a API para preencher os dados
  useEffect(() => {
    if (content.data == "") getData();
  }, []);

  return (
    <Grid container spacing={2} sx={{ justifyContent: "space-around", marginTop: '15px' }}>
      {content.data &&
        content.data.map((c) => (
          <Grid item key={c.id} xl={4} sx={{ border: "solid red 1px", display: "contents" }}>
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
