import { styled } from "@mui/material/styles";
import { Box, Switch } from "@mui/material";

const ThemeSwitch = () => {
  return (
    <Wrapper>
      <SwitchStyled />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  height: 100%;
`;

const SwitchStyled = styled(Switch)(({ theme }) => ({
  width: 64,
  height: 40,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 0,
    padding: 0,
    transform: "translateX(13px)",
    "&:hover": {
      background: "none",
    },
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(-13px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="25" width="15" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          "#757575"
        )}" d="M 8.972 6.661 c 0 6.044 4.806 10.965 10.804 11.15 A 9.749 9.749 0 0 1 11.761 22 C 6.371 22 2 17.63 2 12.239 c 0 -4.683 3.298 -8.596 7.698 -9.542 a 11.125 11.125 0 0 0 -0.726 3.964 Z m 5.331 -2.407 L 15.536 2 l 1.232 2.254 l 2.254 1.232 l -2.254 1.233 l -1.232 2.253 l -1.233 -2.253 l -2.253 -1.233 l 2.253 -1.232 Z m 4.754 6.725 l 0.986 -1.803 l 0.986 1.803 l 1.803 0.986 l -1.803 0.986 l -0.986 1.803 l -0.986 -1.803 l -1.803 -0.986 l 1.803 -0.986 Z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#e4e8f0",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "white" : "white",
    width: 21,
    height: 21,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="25" width="15" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        "#757575"
      )}" d="M12 19a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm-6.364-2.05a.999.999 0 111.414 1.414l-1.414 1.414a.997.997 0 01-1.414 0 .999.999 0 010-1.414zm11.314 0a.999.999 0 011.414 0l1.414 1.414a.999.999 0 11-1.414 1.414l-1.414-1.414a.999.999 0 010-1.414zM12 6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm10 5a1 1 0 110 2h-2a1 1 0 110-2zM4 11a1 1 0 110 2H2a1 1 0 110-2zm14.364-6.779a1 1 0 011.414 1.414L18.364 7.05a.997.997 0 01-1.414 0 .999.999 0 010-1.414zm-14.142 0a1 1 0 011.414 0L7.05 5.636A.999.999 0 115.636 7.05L4.222 5.635a.999.999 0 010-1.414zM12 1a1 1 0 011 1v2a1 1 0 11-2 0V2a1 1 0 011-1z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#e4e8f0",
    borderRadius: 50,
  },
}));

export default ThemeSwitch;
