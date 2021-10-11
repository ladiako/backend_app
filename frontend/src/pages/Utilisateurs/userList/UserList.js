import { React, useCallback, useEffect } from 'react'
import './UserList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, PanoramaSharp } from '@material-ui/icons';
import { userRows } from '../../../dummyData/DummyData'
import { useState } from 'react';
import NewUser from '../newUser/NewUser.js';
import DeleteUser from '../deleteUser';
import axios from 'axios';


const UserList = () => {

  const [data, setData] = useState([]);

  const listUers = useCallback(
    () => {
      axios.get('http://localhost:8080/utilisateur/list-user?size=100')
        .then((res) => {
          if (res.status === 200) {
            setData(res.data.content);
          } else {
            console.log("Erreur");
          }
        });
    },
    [data],
  )

  const columns = [

    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'name',
      headerName: 'Full name',
      width: 200,
      editable: true,
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 150,
      editable: true,
    },
    {
      field: 'nom',
      headerName: 'Client',
      width: 150,
      editable: true,
    },
    {
      field: 'role',
      headerName: 'Role',
      sortable: true,
      width: 160,

    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="userListEdit" onClick={() => handleOpenAdd(params.row)} >Edit</button>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleOpenDELETE(params.row)} />
          </>
        );
      }
    },
  ];

  const [openAdd, setOpenAdd] = useState(false);
  const [openDELETE, setOpenDELETE] = useState(false);
  const [selected, setSelected] = useState();
  const handleOpenDELETE = (user) => {
    setOpenDELETE(true);
    setSelected(user);
  };
  const handleCloseDELETE = () => {
    listUers();
    setOpenDELETE(false);
    setSelected(null);
  };
  const handleOpenAdd = (user) => {
    setOpenAdd(true);
    setSelected(user);
  };
  const handleCloseAdd = () => {
    listUers();
    setOpenAdd(false);
    setSelected(null);
  };

  useEffect(() => {
    listUers();
  }, [listUers])

  return (
    <>
      <div className="row ajoutBTN">
        <button className="userAddButtonList" onClick={() => handleOpenAdd(null)}>Create</button>
      </div>
      <div className="userList">
        <div style={{ height: 460, width: '100%' }}>
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={6}
          />
        </div>
      </div>
      {openAdd && (<NewUser
        open={openAdd}
        handleClose={handleCloseAdd}
        selected={selected} />
      )}
      {openDELETE && (<DeleteUser
        open={openDELETE}
        handleClose={handleCloseDELETE}
        selected={selected} />
      )}
    </>
  )
}
export default UserList;
