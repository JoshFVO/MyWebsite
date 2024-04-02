import React from "react";
import { Button } from "@mui/material";
import {Stack} from "@mui/material";
import "./header.css";



const Header = ({}) => {

    return (

        <div className="header">

                <Stack spacing={2} direction="row">

                    <Button style={{ color: 'grey' }} variant="text">HOME</Button>
                    <Button style={{ color: 'grey' }} variant="text">PROJECTS</Button>
                    <Button style={{ color: 'grey' }} variant="text">ART</Button>
                    <Button style={{ color: 'grey' }} variant="text">GAMES</Button>
                    <Button style={{ color: 'grey' }} variant="text">CONTACT</Button>

                </Stack>

        </div>
    )
};

export default Header;