import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu/BasicMenu";
import Box from "@mui/material/Box";
import ErrorFallback from "../../../hooks_and_helpers/ErrorBoundaryHook";
import { ErrorBoundary } from "react-error-boundary";

const notifications = [
  {
    id: 0,
    label: "First notification",
  },
  {
    id: 1,
    label: "Second notification",
  },
];

const NotificationBell = ({ iconColor, badgeColor }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const [open, setOpen] = Boolean(anchorEl);
  const newNotifications = `You have ${notifications.length} new notifications`;
  const noNotifications = "No new notifications";
  console.log(newNotifications);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    // setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Box>
        <Tooltip title={notifications ? newNotifications : noNotifications}>
          <IconButton
            color={iconColor}
            onClick={notifications.length ? handleOpen : null}
            // anchorEl={anchorEl}
          >
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <BasicMenu
          open={open}
          anchorEl={anchorEl}
          handleClose={handleClose}
          menuItems={notifications}
        />
      </Box>
    </ErrorBoundary>
  );
};

export default NotificationBell;

// const NotificationBell = ({ iconColor, badgeContent, badgeColor }) => {
//   const newNotifications = `You have ${badgeContent} new notifications`;
//   const noNotifications = "No new notifications";
//   const [open, setOpen] = React.useState(false);
//   const [anchorEl, setAnchorEl] = React.useState(null) | HTMLElement(null);

//   const handleOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box>
//       <Tooltip title={badgeContent ? newNotifications : noNotifications}>
//         <IconButton
//           color={iconColor}
//           onClick={badgeContent ? handleOpen : null}
//           anchorEl={anchorEl}
//         >
//           <Badge badgeContent={badgeContent} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <BasicMenu
//           open={open}
//           anchorEl={anchorEl}
//           handleClose={handleClose}
//           menuItems={notifications}
//         />
//       </Tooltip>
//     </Box>
//   );
// };

// export default NotificationBell;
