import { useState } from "react";


export function Login(){
    const [data, setData] = useState ({ 
        username: "",
        password: "",
        checkbox: false,
    })

  function handleData(e) {
    const name = e.target.name 
    const value = e.target.value
    const checked = e.target.checked
    const type = e.target.type

    setData((data) => {
      return { 
        ...data,
        [name]: type == "checkbox" ? checked : value
      };
    });
  }

  function handleLoginButton(e){
    e.preventDefault(); 
    onLogin(data) 
  }

   //we have to put Prevent Default since is a form, the instance i click the log-in button
   // the page refreshes and to stop the refresh to happend every time we do something 
   // we usa "preventDefault"

  function handleResetButton (){
    setData ({
        username: '',
        password: '',
        checkbox: false,
    })
  }
 
  return (
    <div>
      <h1> My Form: </h1>
      <input type = "text" name="userName" value={data.userName} onChange={handleData} placeholder="username" />
      <input type="password" name="password" value={data.password} onChange={handleData} placeholder="password" />
      <input type="checkbox" name="rememberMe" value={data.checkBox} onChange={handleData} />
      <button onClick={handleLoginButton}> Login </button>
      <button onClick={handleResetButton}> Reset </button>
    </div>
  );
}