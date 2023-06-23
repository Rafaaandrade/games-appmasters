import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAPIContext } from "../../Context/APIContext";

const SearchInput = () => {
    const [value, setValue] = useState();
    const { filterGame, filterGenres } = useAPIContext();

    const handleChange = (ev) => {
        setValue(ev.target.value);
        // console.log("Values", value)
    }

    const confirmSearch = () => {
            filterGame(value);
    }
    return (
        <div style={{display: 'flex', marginTop:"10px"}}>
            <TextField sx={{marginLeft: '1em'}} label="Pesquise jogos" variant="outlined" onChange={handleChange} />
            <Button sx={{marginLeft: '1em'}} variant="contained" onClick={confirmSearch}>Buscar</Button>
        </div>
    )
}

export default SearchInput;