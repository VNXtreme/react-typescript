import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PrimeButton from 'components/atoms/Buttons/PrimaryButton';
import useAuth from 'hooks/useAuth';
import { useHistory } from 'react-router-dom';
import AzureAuthenticationButton from 'azure/azure-authentication-component';
import useStyles from './style';

const Copyright = () => (
  <Typography variant="subtitle2" color="textSecondary" align="center">

    <Link color="inherit" href="https://material-ui.com/">
      ID/パスワードを忘れたときはこちらからご連絡ください。
    </Link>
  </Typography>
);

const Login: React.FC = () => {
  const history = useHistory();

  // console.log({ history });
  const classes = useStyles();
  const { signin, onAuthenticated } = useAuth();
  const submit = async (e: any) => {
    e.preventDefault();
    const result = await signin('nghoang2013', '123');
    console.log({ result });
    console.log({ history });
    history.push('/');
  };
  useEffect(() => {

  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Win-Board
        </Typography>
        <form className={classes.form} noValidate={true} onSubmit={submit}>
          <TextField
            variant="outlined"
            margin="normal"
            // required={true}
            fullWidth={true}
            id="id"
            label="ID"
            name="ID"
            autoComplete="ID"
            autoFocus={true}
          />
          <TextField
            variant="outlined"
            margin="normal"
            // required={true}
            fullWidth={true}
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <PrimeButton
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ログインする
          </PrimeButton>
          <AzureAuthenticationButton onAuthenticated={onAuthenticated} />
        </form>
        <Box mt={2}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
};
export default Login;
