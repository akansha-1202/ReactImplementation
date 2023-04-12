import React, {useRef} from 'react'

function UncontrolledCompo() {
    const NameRef=useRef();
    const UserNameRef=useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name is:",NameRef.current.value);
        console.log("UserName is:",UserNameRef.current.value);
    }
  return (
    <div>UncontrolledCompo
         <div>
            <form onSubmit={handleSubmit}>
                <label>UserName:</label>
                <input type="text" name="username" placeholder='UserName' ref={NameRef} />
                <label>Name</label>
                <input type="text" name='name' placeholder='name' ref={UserNameRef} />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default UncontrolledCompo