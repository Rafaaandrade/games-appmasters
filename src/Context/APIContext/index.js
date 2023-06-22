import axios from "axios";
import { createContext, useContext, useState } from "react";
import { baseUrl } from "../../utils/api/api";

const APIContext = createContext();

const initialState = {
    loading: false,
    data: [],
    genres: []
}

export default function APIContextProvider({children}) {
    const [content, setContent] = useState(initialState);
    const [error, setError] = useState();

    const getData = async () => {
        try {
            const { data } = await axios.get(baseUrl, {
                timeout: 5000,
                headers : {
                  'dev-email-address': ''
                },
                withCredentials: false,
              })
              setContent((prevState) => ({
                ...prevState,
                data: data
              }))

              console.log('content.data',content.data)
        } catch (error) {
            if (error.code === 'ECONNABORTED'){
                console.log('Request timeout')
                setError({message: "O servidor demorou para responder, tente mais tarde"})
            }
            if(error.response.status >= 500){
                setError({message: "O servidor fahou em responder, tente recarregar a página"})
                console.log('error 500+', 'O servidor fahou em responder, tente recarregar a página')
            }else{
                setError({message: "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"})
                console.log('outros erros+', 'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde')
            }
        }
    }

    return (
        <APIContext.Provider value={{content, error, getData}}>
            {children}
        </APIContext.Provider>
    )
}

export function useAPIContext() {
    const {content, error, getData} = useContext(APIContext);

    return {
        content, error, getData
    }
}