import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [ members, setMembers ] = useState([]);
  
  useEffect(() => {
    axios({
      url: `/members`,
    }).then((res) => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.members);
      setMembers(res.data.members);
    });

  }, [])

  return (
    <>
      {
        members.map((member) => {
          return (
            <p>{member}</p>
          )
        })
      }
    </>
  );
}

export default App;
