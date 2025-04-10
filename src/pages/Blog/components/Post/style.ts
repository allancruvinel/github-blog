import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainerLink = styled(Link)`
    text-decoration: none;
    width: 100%;
    padding: 32px;
    background-color: ${
        props => props.theme["base-post"]
    };
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    div{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 16px;
    }
    span{
        font-size: 14px;
        line-height: 160%;
        min-width: 53px;
        color: ${
            props => props.theme["base-span"]
        };
    }
    border: 2px solid transparent;
    &:hover{
        border: 2px solid ${props => props.theme["base-label"]};
    }
`
export const PostTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    line-height: 160%;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${
        props => props.theme["based-title"]
    };
`
export const PostText = styled.p`
        color: white;
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
`