import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { login } from '../../utils/auth';
import styles from './login.module.css';

export default function Login() {

  const handleLogin = () => {
    login('wefewfn(*UH*T6re67gdh&%RF¨%$D65f');
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="height100"
    >
      <h1>AppName</h1>
      <TextField id="standard-basic" label="Usuário" />
      <TextField id="standard-basic" label="Senha" />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Entrar
      </Button>
    </Grid>
  );
}