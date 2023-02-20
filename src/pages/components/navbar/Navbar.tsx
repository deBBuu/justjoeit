import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Buttons from "@/pages/components/navbar/Buttons";
import Info from "@/pages/components/navbar/Info";

const Navbar = () => {
  return (
    <Wrapper>
      <Info />
      <Buttons />
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled(Box)`
  display: flex;
  height: 68px;
  padding-left: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e4e8f0;

  @media (max-width: 1025px) {
    height: 48px;
    max-height: 48px;
  }
`;
