import React from "react";
import PostLists from "../components/PostLists";
import Hero from "../components/Hero";
import { Box } from "@chakra-ui/react";


const Home = () => {
    return (
        <Box>
            <Hero />
            <PostLists />

        </Box>
    )
}

export default Home;