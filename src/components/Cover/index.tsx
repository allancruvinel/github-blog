import {
  CoverContainer,
  LeftEffectContainer,
  LogoContainer,
  RightEffectContainer,
} from "./style";
import LeftEffect from "../../assets/left_effect.png";
import RightEffect from "../../assets/right_effect.png";
import Logo from "../../assets/Logo.png";

export function Cover() {
  return (
    <CoverContainer>
      <LeftEffectContainer>
        <img src={LeftEffect} alt="left-effect" />
      </LeftEffectContainer>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>
      <RightEffectContainer>
        <img src={RightEffect} alt="right-effect" />
      </RightEffectContainer>
    </CoverContainer>
  );
}
