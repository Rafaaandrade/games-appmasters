import { CircularProgress } from "@mui/material";
import { useAPIContext } from "../../Context/APIContext";
import "./styles.css";

const Loading = () => {
  const { error } = useAPIContext();
  
  return (
    <div className="loading">
      {!error && (
        <div>
          <p>Carregando</p>
          <CircularProgress />
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Loading;
