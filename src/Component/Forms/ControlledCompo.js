import React,{useState} from 'react'

function ControlledCompo() {
   const [userName, setUserName]=useState("");
   const [Name, setName]=useState("");
   const handleSubmit = (e) => {
    e.preventDefault();
     console.log("UserName is:", userName);
     console.log("Name is:", Name);
   }

  return (
    <div>ControlledCompo
        Form:
        <div>
            <form onSubmit={handleSubmit}>
                <label>UserName:</label>
                <input type="text" name="username" placeholder='UserName' value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <label>Name</label>
                <input type="text" name='name' placeholder='name' value={Name} onChange={(e) => setName(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default ControlledCompo