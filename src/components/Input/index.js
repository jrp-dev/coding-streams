import { InputAdornment, Stack, TextField } from '@mui/material';
import { errorIcon } from 'constants';
import styles from './styles.module.css';
/**
 * Input Component
 * @param {string} placeholder - Placeholder of the input
 * @param {string} name - name of the input
 * @param {string} type - Type attribute of the input
 * @param {Function} onChange - Handle input change event
 * @param {string} helperText - Error message at the bottom of the input
 */
const Input = (props) => {
  const { placeholder, name, type, onChange, helperText } = props;

  return (
    <Stack mt={2}>
      <TextField
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        variant="outlined"
        name={name}
        onChange={(e) => onChange(e)}
        InputProps={{
          endAdornment:
            helperText?.length > 0 ? (
              <InputAdornment position="end">
                <img src={errorIcon} alt="error icon" />
              </InputAdornment>
            ) : null,
          className: styles.input,
        }}
        error={helperText?.length > 0}
        helperText={helperText}
        FormHelperTextProps={{
          classes: {
            root: styles.helperText,
          },
        }}
        color="primary"
      />
    </Stack>
  );
};

export default Input;
