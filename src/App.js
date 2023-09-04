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
    <ul>
      {
        members.map((member, index) => {
          return (
            <li key={index}>
              <p>Member{index + 1}</p>
              <p>
                name: {member.name.lastName}, {member.name.firstName}
              </p>
              <p>
                age: {member.age}
              </p>
            </li>
          );
        })
      }
    </ul>
  );
}

export default App;
