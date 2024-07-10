import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Приветственное приложение
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Открыть диалог
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{"Использовать сервис?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Вы уверены, что хотите использовать этот замечательный сервис?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Нет
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Да
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default App;