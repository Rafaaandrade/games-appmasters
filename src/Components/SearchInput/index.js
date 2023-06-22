import { Button, TextField } from "@mui/material";
import { useState } from "react";

const SearchInput = () => {

    const [value, setValue] = useState();

    const handleChange = (ev) => {
        setValue(ev.target.value);
        console.log("Values", value)
    }
    return (
        <div style={{display: 'flex', marginTop:"10px"}}>
            <TextField sx={{}} id="outlined-basic" label="Pesquise jogos" variant="outlined" onChange={handleChange} />
            <Button variant="contained" sx={{}}>Buscar</Button>
        </div>
    )
}

export default SearchInput;