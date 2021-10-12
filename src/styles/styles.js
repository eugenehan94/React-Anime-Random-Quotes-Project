import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    marginBottom: "2rem",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  cardMedia: {
    height: "700px",
    width: "500px",
    objectFit: "contain",
  },
  navbar: {
    marginBottom: "2rem",
  },
  navbarContainer: {
    backgroundColor: "#3B3B3B",
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
