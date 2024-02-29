import React, {useEffect, useState} from 'react'
import { fetchUsers, deleteUser } from '../../../services/UsersService'
import './users.scss'

export default function Users() {
  const [data, setData] = useState()

useEffect(() => {
   getData()
},[])

const getData = () => {
  fetchUsers().then((res) => {
    setData(res)
    console.log("res", res)
  })
}

const handleDelete = (id) => {
  deleteUser(id).then((res) => {
    getData()
  })
}

const columns = [
  {
    key: "firstName",
    title: "FirstName",
  },
  {
    key: "lastName",
    title: "LastName",
  },
  {
    key: "age",
    title: "Age",
  },
  {
    key: "email",
    title: "Email",
  },
  {
    key: "phone",
    title: "Phone",
  },
  {
    key: "actions",
    title: "Actions",
    actions: (item) => {
      return (
        <div className='act__btns'>
          <button className='edit__btn'>
            Edit
          </button>
          <button 
          onClick={() => handleDelete(item.id)}
          className='delete__btn'>
            Delete
          </button>
        </div>
      );
    },
  },
]

  return (
    <div className='users__table'>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {data?.map((el, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {column.actions ? column.actions(el) : el[column.key]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
