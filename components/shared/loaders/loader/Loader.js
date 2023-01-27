import Grid from 'react-loader-spinner';
import { LoaderStyles } from './LoaderStyles';

export default function Loader() {
  return (
    <LoaderStyles>
      <Grid
        type='Grid'
        color='#36222275'
        height={50}
        width={50}
      />
    </LoaderStyles>
  );
}
