import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Button from "@mui/material/Button"
import { useEffect, useState } from 'react';

function DeleteComment({isLightTheme, comment_id, handleDelete, user, author}) {

const [isDisabled, setIsDisabled] = useState(false)

console.log("user", user, "author", author)
useEffect(() => {
  if (user !== author){
    setIsDisabled(true)
  
  }
})

    const darkthumbs = "#CEA16F"
    const lightthumbs = "#24222C"  
    function themeoptions(lightoption, darkoption) {
    
        if (isLightTheme) {
          return lightoption
        } else {return lightoption} 
      }
    return (
        <div>
        <Button
        disabled={isDisabled}
              onClick={() => {handleDelete(comment_id)} }
              sx={{color: themeoptions(darkthumbs)}}
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

