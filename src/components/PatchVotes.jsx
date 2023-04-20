import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Button } from "@mui/material";
import { useParams } from 'react-router-dom';
import { VoteReviewById } from '../api';
import { useState } from 'react';
import { toast } from "react-toastify" 

function PatchVotesByReviewId({clickCount, setClickCount}) {
    const [isClicked, setIsClicked] = useState(false)
    const [errorToast, setErrorToast] = useState(false)
const {review_id} = useParams(); 

 return( 
    <div>
    <Button
    disabled={isClicked}
    varient="outlined"
    onClick={() => {
        setClickCount(1)
        setIsClicked(true)
        VoteReviewById(review_id, clickCount)
        .catch(() => {setClickCount(0);
        setErrorToast(true);
        toast.error(`Cannot vote offline!`,  { position: toast.POSITION.TOP_RIGHT });
        });
    }
        }
    sx={{color: "#24222C"}}
    type="submit"
    endIcon={<ThumbUpOffAltIcon />}
>
  Vote
</Button>
</div>

)

    }

export default PatchVotesByReviewId;
