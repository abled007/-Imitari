import { useState, useEffect } from "react";
import { Component } from "react";
import axios from "axios";

// function App(){

//   const [postList, setPostList] = useState([])

//   useEffect(() => {
//     axios
//     .get("http://localhost:8000/api/posts")
//     .then((res) => {
//       console.log(res.data)
//       setPostList(res.data)
//     })
//     .catch((err) => console.log(err))
//   }, [])

// return (
//   <div>
//     <div>
//       <p> {postList.map((e) => {
//         return(
//           <div>
//             <p> {e.title}</p>
//             <p> {e.img}</p>
//             <p> {e.caption}</p>
//           </div>
//           )})
//         }
//       </p>
//     </div>
//   </div>
// );

// }





class App extends Component {

  

  state = {
    title: '',
    content: '',
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('title', this.state.title);
    form_data.append('content', this.state.content);
    let url = 'http://localhost:8000/api/posts/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">

        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='Content' id='content' value={this.state.content} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
