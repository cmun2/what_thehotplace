// src/Detail.jsx

import React, {useState} from "react";
import styled from "styled-components";
const Ex = () => {

    const [imgUrl, setImageUrl] = useState();

    const onImgChange = (e) => { 
      setImageUrl(e.target.files[0]);
    }

    return(
        <div className="fileContainer">
          <button>+</button>
 
          <input 
            type='file'
            id='image'
            accept='image/*'
            name='image'
            onChange={onImgChange} >
          </input>

        </div>
    )
};

export default Ex;
