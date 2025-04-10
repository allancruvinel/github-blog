import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    height: 212px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    background: ${
       props => props.theme["base-profile"] 
    };
    padding: 32px 40px;
`
export const AvatarContainer = styled.img`
    border-radius:  8px;
`
export const InfoContainer = styled.div`
    width: 612px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
        font-size: 24px;
        font-weight: bold;
        line-height: 130%;
        color: ${
            props => props.theme["based-title"]
        };
        margin-bottom: 8px;
    }

    p{
        font-size: 16px;
        line-height: 150%;
        color: ${
            props => props.theme["base-text"]
        };
    }

    a{
        position: absolute;
        top: 0;
        right: 0;
    }
`

export const ContactContainer = styled.div`
    display: flex;
    gap: 24px;
    height: 26px;
    width: 100%;
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }
`
