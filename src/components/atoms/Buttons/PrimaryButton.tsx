import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const PrimeButton = withStyles({
  root: {
    height: '50px',
    borderRadius: '25px',
    padding: '8px 3rem',
    boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
  },
})(Button);
export default PrimeButton;
