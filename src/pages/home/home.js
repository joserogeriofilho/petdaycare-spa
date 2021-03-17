import Grid from '@material-ui/core/Grid';
import { Navigation } from "../../components/navigation";

export default function Home() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Navigation />
      <p>Home</p>
    </Grid>
  );
}