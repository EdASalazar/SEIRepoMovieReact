import { useState } from 'react';

export default function LoginPage({setUSer}) {
const [data, setData] = useState(null);

function handleChange(evt){
setData(evt.target.value)
};

  return(
    <form autoComplete="off" onSubmit={() => setUSer(data)}>
      <input type="text" value={data} onChange={handleChange}></input>
      <button type="submit">Submit</button>
      <button type="submit" onClick={() => setUSer(null)}>Log Out</button>
    </form>
  );

}
