import "../App.scss"
import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function BasicSelect() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Нэвтрэх</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem ><Link to="login" style={{
                        textDecoration: 'none',
                        color: "blue"
                    }}>Нэвтрэх </Link></MenuItem>
                    <MenuItem ><Link to="sign" style={{
                        textDecoration: 'none',
                        color: "blue"
                    }}  >Бүртгүүлэх</Link></MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
const Header = () => {
    return (
        <div className="headerbody">
            <Link to="/">
            <img className="logo" src="http://zuragtnom.site/manga-logo.png" alt="logo" />
            </Link> 
            <div className="headerclick">
                <Link to="/manga" style={{
                    textDecoration: 'none',
                    color: "blue"
                }}>Манга</Link>
            </div>
            <BasicSelect />
        </div>
    )

}
export default Header;