import React, { useEffect, useContext } from "react";
import BlogContext from "../context/blogContext";
import { useParams } from 'react-router-dom';
import { Box, Text } from "@chakra-ui/react";

const Post = ()=> {
const blogContext = useContext(BlogContext);
const { getPostById, currentBlogPost }= blogContext;


let { postId } = useParams();

useEffect (() => {
    getPostById(postId);
}, [])
    return (
        <Box className="post">
            {
                currentBlogPost ? (
                    <>
                    <Box className="post-image" style={{
                        width: "100%",
                        height: "300px",
                        backgroundImage: `url('${currentBlogPost.image})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        position: "relative",
                        borderTopRightRadius: "2px",
                        borderTopLeftRadius: "2px",
                    }}></Box>

                    <Box className="post-content">
                        <Text>
                        <h2> {currentBlogPost.title} </h2>
                        <p> {currentBlogPost.content} </p>
                        </Text>
                    </Box>
                    </>
                ) : (
                    <Box> Loading... </Box>
                )
            }
        </Box>
    )
}

export default Post;