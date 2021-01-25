import './App.css';
import {useEffect, useState} from 'react'
import List from './components/users/List';
function App() {
  const [user, setuser] = useState([])
//   useEffect(()=>{
// axios.get('http://localhost:4000/api/users')
// .then(res=>setuser(res))
//   },[])
  console.log(user)
  return (
    <div className='App'>
      <List/>
      {/* {user.map(
        (item) => (
          <div>{item.name}</div>
        )

      )} */}
    </div>
  );
}

export default App;
