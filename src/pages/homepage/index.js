import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material';
import Input from '../../components/Input';
import useViewModel from './useViewModel';
import styles from './styles.module.css';
import PrimaryButton from 'components/Button';
import { Fragment } from 'react';

function Homepage() {

  // Get all functions and variables here
  const { model, actions } = useViewModel();

  return (
    <Box className={styles.pageContainer}>
      <Box className={styles.container}>
        <Grid container spacing={5} className={styles.gridContainer}>
          <Grid className={styles.gridItem} item sm={6}>
            <Typography variant="h3" className={styles.header}>
              Learn to code by watching others
            </Typography>
            <Typography className={styles.subtitle}>
              See how experienced developers solve problems in real-time. <br />
              Watching scripted tutorials is great, but understanding how developers think is
              invaluable.
            </Typography>
          </Grid>
          <Grid className={styles.gridItem} item sm={6}>
            {/* Upper Button */}
            <PrimaryButton
              id="upper-btn"
              className={styles.upperBtn}
              content={<Fragment>
                <strong>Try it free 7 days</strong>&nbsp; then $20/mo. thereafter
              </Fragment>}
            />
            <Box className={styles.formContainer}>
              <form onSubmit={actions.handleSubmit}>
                {/* First Name */}
                <Input
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  type="text"
                  onChange={actions.handleFieldChange}
                  helperText={model.errors?.['firstname'] || ''}
                />
                {/* Last Name */}
                <Input
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  type="text"
                  onChange={actions.handleFieldChange}
                  helperText={model.errors?.['lastname'] || ''}
                />
                {/* Email Address */}
                <Input
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  type="text"
                  onChange={actions.handleFieldChange}
                  helperText={model.errors?.['email'] || ''}
                />
                {/* Password */}
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={actions.handleFieldChange}
                  helperText={model.errors?.['password'] || ''}
                />
                <Stack py={2}>
                  {/* Submit Button */}
                  <PrimaryButton
                    id="submit-btn"
                    type="submit"
                    className={styles.submitBtn}
                    content="CLAIM YOUR FREE TRIAL"
                  />
                </Stack>
                <Typography className={styles.tosText}>
                  By clicking the button, you are agreeing to our{' '}
                  <Link id="tos-link" href="#" className={styles.link}>
                    Terms and Services
                  </Link>
                </Typography>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Homepage;
