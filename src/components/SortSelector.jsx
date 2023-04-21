import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

function SortSelector({handleSortChange, handleAcsChange}) {

    


return (<div>
    <>
     <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Sort</InputLabel>
        <Select
        
        label="Sort by:"
        value={"sort"}
        onChange={handleSortChange}
        >
            <MenuItem disabled={true} value={null}>Sort by:</MenuItem>
    <MenuItem value="isSortByDate">Date</MenuItem>
    <MenuItem value="isSortByCommentCount">Comment Count</MenuItem>
    <MenuItem value="isSortByVotes">Votes</MenuItem>
        </Select>
        <Select
        
        label="Asc or Desc:"
        value={"AorD"}
        onChange={handleAcsChange}
        >
             <MenuItem disabled={true} value={null}>Asc or Desc:</MenuItem>
    <MenuItem value={true}>Ascending</MenuItem>
    <MenuItem value={false}>Decsending</MenuItem>
        </Select>
        <FormHelperText>Sort the reviews!</FormHelperText>
</FormControl>
    </>
    </div>



)}

export default SortSelector;