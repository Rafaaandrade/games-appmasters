import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAPIContext } from "../../Context/APIContext";

const SearchInput = () => {
  const [value, setValue] = useState();
  const { filterGame, content } = useAPIContext();

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  const confirmSearch = () => {
    filterGame(value);
  };
  return (
    <div style={{ display: "flex" }}>
      <TextField
        sx={{ marginLeft: "1em", marginTop: "10px" }}
        label="Pesquise jogos"
        variant="outlined"
        onChange={handleChange}
        disabled={content.genresFilter}
      />
      <Button
        sx={{ marginLeft: "1em", marginTop: "10px" }}
        variant="contained"
        onClick={confirmSearch}
      >
        Buscar
      </Button>
    </div>
  );
};

export default SearchInput;
