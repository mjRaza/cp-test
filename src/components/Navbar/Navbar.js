import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import auth from "../../utils/routing/authToken";
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme/colors";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{background:colors.primary}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Assignment
          </Typography>
          <Button
            onClick={() => {
              auth.logout();
              navigate("/");
            }}
            color="inherit"
          >
            logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
