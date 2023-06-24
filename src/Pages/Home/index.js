import { useEffect } from "react";
import CardWrapper from "../../Components/CardWrapper";
import SearchInput from "../../Components/SearchInput";
import { useAPIContext } from "../../Context/APIContext";
import Loading from "../../Components/Loading";


const Home = () => {
  const { content, getData, loading } = useAPIContext();

  //Ao montar o componente, verifica se existe algum dado no context, caso não tenha, chama a API para preencher os dados
  useEffect(() => {
    if (content.data == "") getData();  
  });

  return (
    <div>
      {content.data && loading === false ? (
        <>
          <SearchInput />
          <CardWrapper />
        </>
      ) : (
        <Loading/>
      )}
    </div>
  );
};
export default Home;
