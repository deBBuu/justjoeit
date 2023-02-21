import { Box, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import MoneyIcon from "@mui/icons-material/Money";
import EggAltIcon from "@mui/icons-material/EggAlt";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import EventIcon from "@mui/icons-material/Event";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AssessmentIcon from "@mui/icons-material/Assessment";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import HelpIcon from "@mui/icons-material/Help";
import GavelIcon from "@mui/icons-material/Gavel";

const SidenavButtons = () => {
  return (
    <Wrapper>
      <ButtonStyled>
        <MoneyIcon />
        100K Programista
      </ButtonStyled>
      <ButtonStyled>
        <EggAltIcon />
        Śniadanie z Programowaniem
      </ButtonStyled>
      <ButtonStyled>
        <CastForEducationIcon />
        For juniors
      </ButtonStyled>
      <ButtonStyled>
        <SchoolIcon />
        Program Ambasadorski
      </ButtonStyled>
      <ButtonStyled>
        <QueryStatsIcon />
        IT Index
      </ButtonStyled>
      <ButtonStyled>
        <EventIcon />
        Event
      </ButtonStyled>
      <ButtonStyled>
        <EmojiEventsIcon />
        Just Join Games
      </ButtonStyled>
      <ButtonStyled>
        <NewspaperIcon />
        Press Room
      </ButtonStyled>
      <ButtonStyled>
        <AssessmentIcon />
        Report
      </ButtonStyled>
      <ButtonStyled>
        <RocketLaunchIcon />
        Carrers
      </ButtonStyled>
      <DividerStyled />

      <ButtonStyled>
        <PodcastsIcon />
        RSS
      </ButtonStyled>
      <ButtonStyled>
        <HelpIcon />
        Help
      </ButtonStyled>
      <ButtonStyled>
        <GavelIcon />
        Terms
      </ButtonStyled>
    </Wrapper>
  );
};

const DividerStyled = styled(Divider)`
  height: 6px;
  background: #f3f6f8;
  border: none;
`;

const Wrapper = styled(Box)`
  padding-top: 10px;
  padding-bottom: 4px;
  display: flex;
  flex-direction: column;
`;

const ButtonStyled = styled(Button)`
  padding: 10px;
  min-height: 44px;
  font-weight: 600;
  max-height: 44px;
  padding-left: 20px;
  gap: 10px;
  color: #5f656b;
  width: auto;
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  font-size: 0.875rem;
  min-width: 64px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: Open Sans, sans-serif;
`;

export default SidenavButtons;
