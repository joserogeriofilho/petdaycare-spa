import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './login-screen.css';

export default function LoginScreen() {
  return (
    <div className="wrapper">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <h1>AppName</h1>
        <TextField id="standard-basic" label="Usuário" />
        <TextField id="standard-basic" label="Senha" />
        <Button variant="contained" color="primary">
          Entrar
        </Button>
      </Grid>
    </div>
  );
}