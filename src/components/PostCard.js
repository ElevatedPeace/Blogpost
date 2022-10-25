import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";


const PostCard = (props) => {
    return (
        <Box className="card">
            <Box className="card-image" style = {{
                width:'100%',
                height:'200px',
                backgroundImage: `url('${props.image}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
                borderTopLeftRadius: "2px",
                borderTopRightRadius: "2px",
            }}>

            </Box>
            <Box className="card-info">
                <Box className="card-title">
                    <Link to={`/${props.id}`}>
                    <p> {props.title}</p>
                    </Link>
                </Box>

                <Box className="card-author-section">
                    <p> {props.author}</p>
                    <p> {props.date} </p>
                </Box>
            </Box>
        </Box>
    )
}

export default PostCard;