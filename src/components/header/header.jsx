import React from "react";
import { Button } from "@mui/material";
import {Stack} from "@mui/material";
import "./header.css";
import { Link } from "react-router-dom";



const Header = ({}) => {

    return (

        <div className="header">

                <Stack spacing={2} direction="row">

                    <Link to="/">
                        <Button style={{ color: 'grey' }} variant="text">
                            Home 
                        </Button>
                    </Link>
                    
                    <Link to="/projects">
                        <Button style={{ color: 'grey' }} variant="text">
                            PROJECTS 
                        </Button>
                    </Link>

                    <Link to="/art">
                        <Button style={{ color: 'grey' }} variant="text">
                            ART 
                        </Button>
                    </Link>

                    <Link to="/games">
                        <Button style={{ color: 'grey' }} variant="text">
                            GAMES
                        </Button>
                    </Link>
                    
                    <Link to="/contact">
                        <Button style={{ color: 'grey' }} variant="text">
                            CONTACT 
                        </Button>
                    </Link>

                </Stack>

        </div>
    )
};

export default Header;