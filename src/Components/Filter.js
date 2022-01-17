
import React from 'react'
import Rate from './Rate';
import {InputGroup,FormControl} from 'react-bootstrap';
import {useState}from 'react'
function Filter({setsearch,rating,setrating}) {



    return (
        <div className="filter">
            <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>setsearch(e.target.value)}
    />
  </InputGroup>

           <Rate rating={rating} setrating={setrating}/> 
        </div>
    )
}

export default Filter
