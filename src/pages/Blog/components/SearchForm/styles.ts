import styled from "styled-components";

export const SearchFormContainer = styled.form`
    margin-top: 72px;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        justify-content: space-between;

        p{
            font-size: 14px;
            line-height: 160%;
            color:${
                props => props.theme["base-span"]
            };
        }
    }
    label{
        font-size: 18px;
        line-height: 160%;
        font-weight: bold;
        color:${
            props => props.theme["base-subtitle"]
        };
        margin-bottom: 8px;
    }
    input{
        padding: 12px 16px;
        height: 50px;
        width: 100%;
        background-color: ${
            props => props.theme["base-input"]
        };
        border: 1px solid ${
            props => props.theme["base-border"]
        };
        border-radius: 6px;
        color:${
            props => props.theme["base-label"]
        };
        ::placeholder{
            color:${
            props => props.theme["base-label"]
        };
        }

    }
`