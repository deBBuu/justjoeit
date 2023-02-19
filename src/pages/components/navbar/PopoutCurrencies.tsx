import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

const PopoutCurrencies = () => {
  return (
    <Wrapper>
      <Text>Select Your Currency</Text>
      <ButtonStyled>PLN</ButtonStyled>
      <ButtonStyled>EUR</ButtonStyled>
      <ButtonStyled>USD</ButtonStyled>
      <ButtonStyled>GBP</ButtonStyled>
      <ButtonStyled>CHF</ButtonStyled>
      <ButtonStyled>Default</ButtonStyled>
    </Wrapper>
  );
};

export default PopoutCurrencies;

const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background: #ffffff;
  justify-items: center;
  align-items: center;
  text-align: left;
  flex-direction: column;
  box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%),
    0px 3px 14px 2px rgb(0 0 0 / 12%);
  border-radius: 4px;
  color: #5f656b;
  gap: 5px;
  opacity: 1;
  transform: none;
  transition: opacity 320ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 213ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 16px;
  left: 1121px;
  transform-origin: 142px -16px;
`;

const Text = styled(Typography)`
  margin: 12px 16px 0;
  font-size: 16px;
  font-weight: 600;
  width: auto;
  height: auto;
  color: #5f656b;
`;

const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  color: #37474f;
  height: auto;
`;
