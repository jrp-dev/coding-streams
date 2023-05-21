import { Button } from "@mui/material";

/**
 * PrimaryButton component.
 *
 * @param {string} id - The ID of the button.
 * @param {string} type - The type of the button
 * @param {string} className - The CSS class name for the button.
 * @param {function} onClick - The event handler for the button's click event.
 * @param {JSX.Element} content - The content of the button
 * @returns {JSX.Element} The rendered PrimaryButton component.
 */
const PrimaryButton = (props) => {
  const { id, type, className, onClick, content} = props;
  return ( 
    <Button
      id={id}
      type={type}
      variant="containd"
      className={className}
      onClick={onClick}
    >
      {content}
    </Button>
   );
}
 
export default PrimaryButton;