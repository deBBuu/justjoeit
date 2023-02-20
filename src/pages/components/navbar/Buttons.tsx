import { styled } from "@mui/material/styles";
import { Box, Button, Popover } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import PopoutCurrencies from "@/pages/components/navbar/PopoutCurrencies";

const Buttons = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Wrapper>
      <TextBtn>Offers</TextBtn>
      <TextBtn>Brand Stories</TextBtn>
      <TextBtn>Geek</TextBtn>
      <TextBtn>Matchmaking</TextBtn>
      <PostJobButton>Post a Job</PostJobButton>
      <SignInButton>
        Sign In
        <KeyboardArrowDownIcon />
      </SignInButton>
      <ButtonStyled aria-describedby={id} onClick={handleClick}>
        PLN
      </ButtonStyled>
      <PopoverStyled
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <PopoutCurrencies />
      </PopoverStyled>
      <ButtonStyled>
        <MenuIcon />
      </ButtonStyled>
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled(Box)`
  display: flex;
  width: auto;
  height: 100%;
  align-items: center;
  flex-direction: row;
`;

const PostJobButton = styled(Button)`
  color: #5f656b;
  margin: 0 6px;
  border: 1px solid #e4e8f0;
  padding: 6px 16px;
  font-size: 0.875rem;
  height: 40px;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  line-height: 1.75;
  white-space: nowrap;
  border-radius: 32px;
  letter-spacing: 0.5px;
  text-transform: none;
  &:hover {
    text-decoration: none;
    background-color: rgba(55, 71, 79, 0.04);
  }
`;

const ButtonStyled = styled(Button)`
  color: #5f656b;
  width: 58px;
  border: none;
  cursor: pointer;
  height: 100%;
  display: flex;
  font-size: 14px;
  background: #ffffff;
  align-items: center;
  border-left: 1px solid #e4e8f0;
  justify-content: center;
`;

const SignInButton = styled(Button)`
  color: white;
  border: none;
  margin: 0 6px;
  padding: 6px 16px;
  font-size: 0.875rem;
  background: #ff4081;
  height: 40px;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  line-height: 1.75;
  white-space: nowrap;
  border-radius: 32px;
  letter-spacing: 0.5px;
  text-transform: none;
  &:hover {
    text-decoration: none;
    background-color: #ad1457;
  }
`;

const TextBtn = styled(Button)`
  color: #99a1ab;
  margin: 0 6px;
  padding: 8px 6px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  line-height: 1.75;
  height: 40px;
  white-space: nowrap;
  border-radius: 32px;
  letter-spacing: 0.5px;
  text-transform: none;

  &:hover {
    background: none;
  }

  &:active {
    color: #ff4081;
    background: none;
  }

  &:focus-visible {
    background: none;
  }

  @media (max-width: 1025px) {
    display: none;
  }
`;

const PopoverStyled = styled(Popover)`
  width: 230px;
  height: 330px;
  margin-top: 10px;
`;
