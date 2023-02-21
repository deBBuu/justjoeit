import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Socials = () => {
  return (
    <Wrapper>
      <Icon>
        <FacebookIcon />
      </Icon>
      <Icon>
        <LinkedInIcon />
      </Icon>
      <Icon>
        <YouTubeIcon />
      </Icon>
      <Icon>
        <InstagramIcon />
      </Icon>
    </Wrapper>
  );
};

export default Socials;

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Icon = styled(IconButton)`
  flex: 0 0 auto;
  max-width: 52px;
  max-height: 52px;
  color: #99a1ab;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
`;
