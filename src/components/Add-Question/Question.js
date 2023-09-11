import React, { useState } from "react";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' // Quill's CSS is important
import { TagsInput } from "react-tag-input-component";
import "./Question.css"
import { useNavigate } from "react-router-dom";
import apiClient from "../../http-common";

function Question() {
  
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const navigate = useNavigate()

  const handleQuill = (value) => {
    setBody(value)
  }

  function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}
  const handleSumbit = async (e) => {
    e.preventDefault()

    if (title !== "" || body !== "" || tags !== "" || user !== "") { 
      setLoading(true)
       
        const postData = {

        user: user,
        title: title,
        body:removeTags(body),
        tags: tags
             
      };

      try {
        const res = await apiClient.post("/questions/add", postData, {
          headers: {
            "x-access-token": "token-value",
          },
          });
          //console.log(postData);


        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        console.log(result)
        navigate ('/stackoverflow')
      } catch (err) {
        //console.log(err)
      }
    }
  }

  return (
    <div className='add-question'>
      <div className='add-question-container'>
        <div className='head-title'>
          <h1>Ask a public question</h1>
        </div>
        <div className='question-container'>
          <div className='question-options'>
            <div className='question-option'>
              <div className='username'>
                <h3>UserName</h3>
                <input
                  value={user} 
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  placeholder="Enter your name..."
                />
              </div>
              <div className='title'>
                <h3>Title</h3>
                <small>Be specific and imagine you're asking a question to another person</small>
                <input
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g., Is there a function to find the index of an array?"
                />
                <div className='question-option'>
                  <div className='body'>
                    <h3>Body</h3>
                    <small>Include all the information someone would need to answer your question</small>
                    <ReactQuill
                      value={body}
                      onChange={handleQuill}
                      className="react-quill"
                      theme="snow"
                    />
                  </div>
                </div>
                <div className='question-option'>
                  <div className='title'>
                    <h3>Tags</h3>
                    <small>Add up to 5 tags to describe what your question is about</small>
                    <TagsInput
                      value={tags}
                      onChange={setTags}
                      name="tags"
                      placeholder="Press enter to add a new tag"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='button-container'>
          <button
            disabled={loading}
            type="submit" 
            onClick={handleSumbit}
            className="button"
          >
            {loading ? 'Adding question...' : 'Add your question'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Question;
