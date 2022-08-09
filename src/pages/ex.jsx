// src/Detail.jsx

import React, {useCallback, useState} from "react";
import styled from "styled-components";
const Ex = () => {

    const [imgUrl, setImageUrl] = useState();

    const onImgChange = (e) => { 
      setImageUrl(e.target.files[0]);
    }

    const [value, setValue] = useState("");

    const onChange=useCallback(e => {
      setValue(e.targer.value);
    }, []);

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

          <form className="TodoInsert">
          <input placeholder="입력테스트" value={value} onChange={onChange}></input>
          </form>
        </div>
    )
};

export default Ex;
