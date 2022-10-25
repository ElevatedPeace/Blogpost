import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { 
    Link,
} from "react-router-dom";

const Navbar = () => {

    return(
        <Box className="nav">
            <Box className="container">
                <Link to="/">
                    <Text>
                <h2> React Blog</h2>
                </Text>
                </Link>
            </Box>

        </Box>
    )
}

export default Navbar;