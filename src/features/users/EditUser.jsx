// import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectUserIds } from "./UsersApiSlice";
// import EditUserForm from "./EditUserForm";

// const EditUser = () => {
//   const {id} = useParams();
//   const user = useSelector((state) => selectUserIds(state, id));
//   const content = user ? <EditUserForm user={user}/> : <p>Loading....</p>

//   return content ;
// };

// export default EditUser;


import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUsersById } from './UsersApiSlice'
import EditUserForm from './EditUserForm'

const EditUser = () => {
    const { id } = useParams()

    const user = useSelector(state => selectUsersById(state, id))

    const content = user ? <EditUserForm user={user}/> : <p>Loading...</p>

    return content
}
export default EditUser;
