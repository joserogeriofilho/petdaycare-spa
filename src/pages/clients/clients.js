import Grid from '@material-ui/core/Grid';
import { Navigation } from "../../components/navigation";

export default function Clients() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Navigation />
      <p>Clients</p>
    </Grid>
  );
}