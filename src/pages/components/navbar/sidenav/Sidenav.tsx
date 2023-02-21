import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import SidenavButtons from "@/pages/components/navbar/sidenav/SidenavButtons";
import SidenavActions from "@/pages/components/navbar/sidenav/SidenavActions";
import Socials from "@/pages/components/navbar/sidenav/Socials";

type Props = {
  toggleDrawer: (newOpen: boolean) => () => any;
};
const Sidenav = ({ toggleDrawer }: Props) => {
  return (
    <Wrapper>
      <Header>
        <HeaderText>MENU</HeaderText>
        <Btn onClick={toggleDrawer(false)}>
          <CloseIcon />
        </Btn>
      </Header>
      <SidenavButtons />
      <SidenavActions />
      <Socials />
    </Wrapper>
  );
};

export default Sidenav;

const HeaderText = styled(Typography)`
  height: auto;
  font-weight: 700;
  font-size: 1.25rem;
`;

const Btn = styled(IconButton)`
  border: 1px solid #e4e8f0;
  padding: 8px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  width: auto;
  flex: 0 0 auto;
  color: inherit;
  cursor: pointer;
  margin: 0;
  align-items: center;
  user-select: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
`;

const Wrapper = styled(Box)`
  display: flex;
  width: 320px;
  height: 100%;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
`;

const Header = styled(Box)`
  top: 0;
  color: #37474f;
  display: flex;
  padding: 24px;
  z-index: 1500;
  position: sticky;
  font-size: 1.25rem;
  background: #ffffff;
  align-items: center;
  font-weight: 700;
  padding-bottom: 8px;
  height: auto;
  justify-content: space-between;
`;
