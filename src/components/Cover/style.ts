import styled from "styled-components";

export const CoverContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    height: 18.438rem;
    background-color: ${
        props => props.theme["base-profile"]
    };
    margin-bottom: -88px;
`

export const LeftEffectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-bottom: 38px;
    height: 100%;
`

export const LogoContainer = styled.div`
    padding-top: 64px;
`

export const RightEffectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`