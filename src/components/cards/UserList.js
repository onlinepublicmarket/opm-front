import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers} from "../../functions/user";
const UserList = ({match}) => {
// const [users,setUser] = useState({})
//  const {user} = match.params



// useEffect(()=>{
//  loadingUser()
// },[]);

//  const loadingUser = () => getUsers(user).then(res=>setUser(res.data))

  return (
    <div>
    {/* {user._id} */}
         {/* <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>IS Vendor</th>
              <th>IS ADMIN</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isVendor ? 'YES' : ' NO'}</td>
                <td>{user.isAdmin ? 'YES' : 'NO'}</td>

              </tr>
            ))}
          </tbody>
        </table> */}
    </div>
  )
}

export default UserList