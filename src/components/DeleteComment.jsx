import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Button from "@mui/material/Button"

function DeleteComment({isLightTheme, comment_id, handleDelete}) {
    const darkthumbs = "#CEA16F"
    const lightthumbs = "#24222C"  
    function themeoptions(lightoption, darkoption) {
    
        if (isLightTheme) {
          return lightoption
        } else {return darkoption} 
      }
    return (
        <div>
        <Button
              onClick={() => {handleDelete(comment_id)} }
              sx={{color: themeoptions(lightthumbs, darkthumbs)}}
              type="submit"
              varient="contained"
              endIcon={<DeleteOutlineIcon />}
              >
                Delete
              </Button>
                <br></br>
                </div>
    )
}

export default DeleteComment;

