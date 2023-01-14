import * as React from "react";
import { Breakpoint } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

type ModalProps = {
  title: string;
  open: boolean;
  children: React.ReactNode;
  size?: Breakpoint;
  position?: "top" | "center" | "bottom";
  onclose: () => void;
};
type DialogTitleProps = {
  id: string;
  children?: JSX.Element;
  onClose: () => void;
};

const posTop = {
  position: "fixed",
  top: 30,
  left: "auto",
  m: 0,
};

const posBottom = {
  position: "fixed",
  bottom: 30,
  left: "auto",
  m: 0,
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: "15px",
        backgroundColor: "#27293d",
        color: "#fff",
        minHeight: "16.42857143px",
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#ffffff",
            textShadow: "0 1px 0 #ffffff",
          }}
        >
          <CloseIcon
            sx={{
              fontSize: "21px",
              fontWeight: "bold",
              lineHeight: 1,
              color: "#ffffff",
              textShadow: "0 1px 0 #ffffff",
              opacity: 0.2,
              "&:hover": {
                color: "#ffffff",
                textShadow: "0 1px 0 #ffffff",
                opacity: 0.5,
              },
            }}
          />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export const Modal = ({
  title,
  open,
  children,
  onclose,
  size,
  position,
}: ModalProps) => {
  const handleClose = () => {
    onclose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="title-amu-modal"
      open={open}
      fullWidth={true}
      maxWidth={size}
      TransitionComponent={Transition}
      keepMounted
      PaperProps={{
        sx: {
          ...((position === "top" && posTop) ||
            (position === "bottom" && posBottom) ||
            posTop ||
            (position === "center" && {})),
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: "14px",
          color: "#555555",
        },
      }}
    >
      {/* title */}
      <BootstrapDialogTitle id="title-amu-modal" onClose={handleClose}>
        <Typography variant="body2">{title}</Typography>
      </BootstrapDialogTitle>
      {/* content */}
      <DialogContent
        sx={{
          p: 0,
        }}
        dividers
      >
        {/* scrollable content */}
        <Box>{children}</Box>
      </DialogContent>
      {/* footer */}
    </Dialog>
  );
};

