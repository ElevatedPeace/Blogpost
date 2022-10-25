import React, { useEffect, useContext } from 'react';
import BlogContext from '../context/blogContext';
import PostCard from './PostCard';
import { Box, Text } from "@chakra-ui/react";


const PostLists = () => {
    const blogContext = useContext(BlogContext);
    const {getPosts, blogPosts, loading} = blogContext;

    useEffect (() => {
        getPosts();
    }, []);

    console.log(blogPosts);

    return(
        <Box className='posts'>
            <Box className='container'>
                <Text>
                <h2>Posts</h2>
                </Text>
                {
                    !loading ? (
                        <Box className='posts-grid-container'>
                            {
                                blogPosts.map((post, i) => {
                                    return (
                                        <PostCard
                                        key={i} title={post.title}
                                        image={post.image} author={post.author}
                                        date={post.date} id={post.id} />
                                    )
                                })
                            }
                            </Box>
                    ): (
                        <Box> Loading...</Box>
                    )
                }
            
            </Box>
           
        </Box>
    )
};

export default PostLists;