import React, { useCallback, useEffect } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core/";
import axios from "axios";

export default ({ open, handleClose, selected }) => {
  const deleteUserCallback = useCallback(() => {
    axios.get(`http://localhost:8080/utilisateur/delete/${selected.id}`)
        .then((res) => {
            handleClose();
        });
  }, [selected, handleClose]);
  
  function submitForm() {
    deleteUserCallback();
  }
  return (
    <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      aria-describedby="form-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Etes-vous sur que vous voulez le supprimer definitivement?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Si vous cliquez sur le button de confirmation vous supprimerez ce User definitive
          </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={submitForm} color="primary">
          Confirmer
          </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Annuler
          </Button>
      </DialogActions>
    </Dialog>
  );
};
