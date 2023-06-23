import { CircularProgress } from "@mui/material";
import { useAPIContext } from "../../Context/APIContext";

const Loading = () => {
    const { error } = useAPIContext();
    return (
        <div>
            <p>Carregando</p>
            <CircularProgress/>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Loading;