import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [postList, setPostList] = useState([])

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/posts")
    .then((res) => {
      console.log(res.data)
      setPostList(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

return (
  <div>
    <div>
      <p> {postList.map((e) => {
        return(
          <div>
            <p> {e.title}</p>
            <p> {e.img}</p>
            <p> {e.caption}</p>
          </div>
          )})
        }
      </p>
    </div>
  </div>
);

}

export default App;