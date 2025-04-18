import { createGlobalStyle } from 'styled-components'

export const GlobalStyle =  createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${
            props => props.theme.blue
        };
    }

    body , input , textarea , button {
        font: 400 1rem Nunito, sans-serif;
    }

    html{
        background-color: ${
           props => props.theme['base-background'] 
        } ;
    }

    

     

`