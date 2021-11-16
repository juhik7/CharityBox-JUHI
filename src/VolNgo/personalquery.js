import React, { useState ,useEffect} from "react";
import '../App.css';
import firebase from "firebase";



const Personalquery =()=>{
  const [email ,setEmail] = useState("");
  const [regarding ,setRegarding] = useState("");
  const [query ,setQuery] = useState("");
  
  const [loader, setLoader] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoader(true);
    var db = firebase.firestore();
    db.collection('Personalquery')
    .add({
      email:email,
      regarding:regarding,
      query:query,
    }).then(()=>{
      setLoader(false);
      alert('Message has been submitted');
    })
    .catch((error)=>{
      alert(error.query);
      setLoader(false);
    });
    setEmail("");
    setRegarding("");
    setQuery("");
  };
        return(
          <form className="form" onSubmit={handleSubmit}>
            <h1>PERSONAL QUERY</h1>
            <label>EMAIL</label>
            <input placeholder="abc@gmail.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>

            <label>WHAT IS IT REGARDING</label>
            <input placeholder="" value={regarding} onChange={(e)=> setRegarding(e.target.value)}/>

            <label>QUERY</label>
            <textarea placeholder="message" value={query} onChange={(e)=> setQuery(e.target.value)}/>

            <button type="submit">SEND</button>
          </form>
        );
      };
    export default Personalquery;