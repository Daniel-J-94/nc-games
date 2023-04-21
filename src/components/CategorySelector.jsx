
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Link from '@mui/material/Link';





const CategorySelector = ({newCatArray}) => {
    console.log("newcatsarrrrr", newCatArray)

    const [newCategory, setNewCategory] = useState('');
    const [linkButton, setLinkButton] = useState(false)
    const [newRef, setNewRef] = useState("")

  const handleChange = (event) => {
    setNewCategory(event.target.value);
setNewRef(newCategory)
console.log("newCatinhandler", newCategory)
    
  };

//   const handleClick = (event) => {
    
//   }

    return (
<div>
        <>
         <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Categories</InputLabel>
            <Select
            
            label="Select a category"
            value={newCategory}
            onChange={handleChange}>
                {newCatArray.map((cat) => {
        console.log("catsBANG",cat)
        return(
        <MenuItem href={`/${cat.slug}`} key={cat.slug} value={cat.slug}><Link href={`/${cat.slug}`} >{cat.slug}</Link></MenuItem>)
    })}
            </Select>
            <FormHelperText>Choose a category of games!</FormHelperText>
 </FormControl>
        </>
        </div>
    );
}



// function CategorySelecter(catArray) {

//    const catList = catArray.map((category) => {
//         {console.log("in here")}
//         <MenuItem value={30}>{category.slug}</MenuItem>
//       })

//     return (
//   <FormControl sx={{ m: 1, minWidth: 120 }}>
//   <InputLabel id="demo-simple-select-helper-label">CategoriesBabyyyyy</InputLabel>
//   <Select
//     labelId="demo-simple-select-helper-label"
//     id="demo-simple-select-helper"
//     // value={age}
//     label="Categories"
//     // onChange={handleChange}
//   >
//     <MenuItem value="">
//       <em>None</em>
//     </MenuItem>
//     {catList}
    
//   </Select>
//   <FormHelperText>Choose a category of games!</FormHelperText>
// </FormControl>)}

export default CategorySelector;