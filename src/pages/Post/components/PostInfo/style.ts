import styled from "styled-components";

export const PostInfoContainer = styled.div`
    padding: 32px;
    background-color: ${
        props => props.theme["base-profile"]
    };
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    `

export const PostInfoTitle = styled.h1`
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
    line-height: 130%;
    color: ${
        props => props.theme["based-title"]
    };
    margin-bottom: 8px;
    
`

export const ContactContainer = styled.div`
    display: flex;
    gap: 32px;
    height: 26px;
    width: 100%;
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }
    p{
        font-size: 16px;
        line-height: 150%;
        color: ${
            props => props.theme["base-span"]
        };
    }
`

export const VoltarButton = styled.div`
    display: flex;
    color: ${
       props => props.theme.blue 
    };
    p{
        color: ${
       props => props.theme.blue 
        };
        font-weight: bold;
        font-size: 12px;
    }

    text-decoration: none;
    gap: 8px;
    align-items: center;
    border-bottom: 1px solid transparent;
    &:hover{
        border-bottom: 1px solid ${props => props.theme.blue};
        cursor: pointer;
    }
`