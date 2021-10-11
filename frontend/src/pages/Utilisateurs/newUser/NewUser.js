import React, { useEffect, useState } from 'react';
import './NewUser.css'
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core/";
import axios from 'axios';



export default ({ props, open, handleClose, selected }) => {

  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [client, setClient] = useState()
  const [role, setRole] = useState()

  /*************************** */
  const handleSubmit = (values) => {
    values.preventDefault();
    const user = {
      id: selected ? selected.id : undefined,
      nom: client,
      name: name,
      username: username,
      password: password,
      role: role
    };
    axios({
      method: "POST",
      url: 'http://localhost:8080/utilisateur/add-edit',
      data: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        console.log("User bien ajouter");
        handleClose();
      } else {
        console.log("Error server ");
      }
    });
  };

  /*************************** */


  useEffect(() => {
    setName(selected ? selected.name : null);
    setUsername(selected ? selected.username : null);
    setRole(selected ? selected.role : null);
    setClient(selected ? selected.nom : null);
    console.log(selected)
  }, [selected])

  return (

    <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      aria-describedby="form-dialog-description"
    >
      <DialogTitle
        onSubmit={handleSubmit}
        id="alert-dialog-title">{selected ? "Edit User" : "New User"}</DialogTitle>
      <DialogContent>
        <div className="newUserItem">
          <label>name</label>
          <input type="text" placeholder="name" defaultValue={name} onChange={(event) => { setName(event.target.value) }} />
        </div>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="username" defaultValue={username} onChange={(event) => { setUsername(event.target.value) }} />
        </div>
        <div className="newUserItem">
          <label>password</label>
          <input type="password" placeholder="Password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
        </div>
        <div className="newUserItem">
          <label>Client</label>
          <select className="selectClient" name="Client" id="active" value={client} onChange={(event) => { setClient(event.target.value) }}>
            <option value="">---</option>
            <option value="CFG">CFG</option>
            <option value="SGA">SGA</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <select className="selectClient" name="Role" id="active" value={role} onChange={(event) => { setRole(event.target.value) }}>
            <option value="">---</option>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
      </DialogContent>
      <DialogActions  >
        <Button onClick={handleSubmit} color="primary" >
          Confirmer
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Annuler
        </Button>
      </DialogActions>
    </Dialog>
  )
};
