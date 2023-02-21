import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FaceIcon from "@mui/icons-material/Face";
import WorkIcon from "@mui/icons-material/Work";

const SidenavActions = () => {
  return (
    <Wrapper>
      <ButtonStyled startIcon={<IconStyled1 />}>
        <Text> Sign in as Developer</Text>
      </ButtonStyled>
      <ButtonStyled startIcon={<IconStyled2 />}>
        <Text> Sign in as Employer </Text>
      </ButtonStyled>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 20px;
  padding-bottom: 16px;
  min-height: 200px;
`;

const ButtonStyled = styled(Button)`
  width: 100%;
  margin: 8px 0;
  display: flex;
  padding: 12px 22px;
  text-align: left;
  font-weight: 600;
  white-space: nowrap;
  border-radius: 5px;
  letter-spacing: 0;
  justify-content: start;
  color: #5f656b;
  border: 1px solid rgba(228, 232, 240, 0.23);

  &:hover {
    text-decoration: none;
    background-color: rgba(55, 71, 79, 0.04);
  }
`;

const IconStyled1 = styled(FaceIcon)`
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: rgb(255, 248, 251);
  color: rgb(255, 64, 129);
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
`;

const IconStyled2 = styled(WorkIcon)`
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: rgb(243, 229, 245);
  color: rgb(171, 71, 188);
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
`;

const Text = styled(Typography)`
  height: auto;
  font-size: 0.875rem;
  min-width: 166px;
`;

export default SidenavActions;
