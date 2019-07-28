import React from 'react';

function Form() {
  return (
    <div className="Form">
        <form >
             First name:<br></br>
             <input type="text" name="firstname" value="Mickey"></input>
            <br></br>
             Last name:<br></br>
             <input type="text" name="lastname" value="Mouse"></input>
             <br></br><br></br>
                <input type="submit" value="Submit"></input>
        </form> 
    </div> 
  );
}

export default Form;
