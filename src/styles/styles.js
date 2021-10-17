import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    minHeight: "358px",
    marginBottom: "2rem",
  },

  navbar: {
    marginBottom: "2rem",
  },

  navbarToolbar: {
    justifyContent: "center",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  footerContainer: {
    width: "100%",
    backgroundColor: "#3B3B3B",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
  },
  footerLink: {
    color: "white",
    textDecoration: "none",
  },
});

export default useStyles;
