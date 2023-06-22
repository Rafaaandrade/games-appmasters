import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { baseUrl } from "./utils/api/api";
import APIContextProvider, { useAPIContext } from "./Context/APIContext";
import Home from "./Pages/Home";

function App() {

  // const { getData } = useAPIContext();
  // useEffect(() => {
  //   getData();
  // }, [])
  // const [value, setValue] = useState("");
  // const [apiData, setApiData] = useState([]);

  // const getData = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data",
  //       {
  //         headers: {
  //           "dev-email-address": "",
  //         },
  //         withCredentials: false,
  //       }
  //     );
  //     setApiData(data);
  //     console.log("data", data);
  //     console.log("apiData", apiData);
  //   } catch (error) {
  //     if(error.response.status >= 500){
  //       console.log('error 500');
  //     }else{
  //       console.log('outros erros')
  //     }
  //   }
  // };

  // const handleChange = (ev) => {
  //   setValue(ev.target.value);
  //   console.log("newValue", value);
  //   console.log("ev.value", ev.target.value);
  // };

  return (
    <APIContextProvider>
      <div className="App">
        <Home/>
      </div>
    </APIContextProvider>
  );
}

export default App;
