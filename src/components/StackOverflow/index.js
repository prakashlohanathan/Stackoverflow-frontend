import React, { useState, useEffect } from 'react'
import './css/index.css'
import Sidebar from './Sidebar'
import Main from './Main'
import Rightsidebar from './Rightsidebar'
import axios from 'axios'


function Index(props) {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    async function getQuestion() {
      await axios.get('https://stackoverflowbackend-xmm8.onrender.com/questions/all').then((res) => {
        // console.log(res.data);
        setQuestions(res.data.data)
      })
        .catch((err) => {
          console.log(err)
        })
    } getQuestion()
  },[])
//console.log(props.searchValue);

const filterNames = ({title}) =>{
  return title.toLowerCase().indexOf(props.searchValue.toLowerCase()) !== -1;
};
  return (<div className="stack-index">
    <div className="stack-index-content">
    
      <Sidebar />
      
      <Main questions={(questions.filter(filterNames).map((question) => {
        return question;
      }))} />
      <Rightsidebar />
    </div>
  </div>
  );
}

export default Index;