import axios from "axios";
import { createContext, useContext, useState } from "react";
import { baseUrl } from "../../utils/api/api";

const APIContext = createContext();

const initialState = {
  data: [],
};

export default function APIContextProvider({ children }) {
  const [content, setContent] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(baseUrl, {
        timeout: 5000,
        headers: {
          "dev-email-address": "teste@gmail.com",
        },
        withCredentials: false,
      });
      setContent((prevState) => ({
        ...prevState,
        data: data,
      }));

      console.log("content.data", content.data);
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        console.log("Request timeout");
        setError("O servidor demorou para responder, tente mais tarde");
      }
      if (error.status === 500 || 502 || 503 || 504 || 507 || 508 || 509) {
        setError("O servidor fahou em responder, tente recarregar a página");
        console.log(
          "error 500+",
          "O servidor fahou em responder, tente recarregar a página"
        );
      } else {
        setError(
          "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
        );
        console.log(
          "outros erros+",
          "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
        );
      }
    }
    setLoading(false);
  };

  return (
    <APIContext.Provider value={{ content, error, getData, loading }}>
      {children}
    </APIContext.Provider>
  );
}

export function useAPIContext() {
  const { content, error, getData, loading } = useContext(APIContext);

  return {
    content,
    error,
    getData,
    loading,
  };
}
