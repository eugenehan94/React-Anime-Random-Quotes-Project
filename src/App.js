/*
Get random anime quote from : https://animechan.vercel.app/api/random   

Anime data base with API: https://api.jikan.moe/v3/search/anime?q=naruto 
to get an appropriate image for the quote above.

*/

import React, { useEffect } from "react";
import axios from "axios";

/*Components imports*/
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

/*Material UI imports*/
import {
  Typography,
  CssBaseline,
  Container,
  Card,
  CardMedia,
  Button,
  Box,
} from "@material-ui/core";

/*For makeStyles*/
import useStyles from "./styles/styles";

/*For axios*/
const baseURL = "https://animechan.vercel.app/api/random";
const imageURL = "https://api.jikan.moe/v3/search/anime?q=";

function App() {
  /*For using makeStyles */
  const classes = useStyles();

  const [post, setPost] = React.useState(null);
  const [post2, setPost2] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [imageLoading, setImageLoading] = React.useState(true);

  useEffect(() => {
    axios
      .request(baseURL)
      .then(function (response) {
        setPost(response.data);

        axios
          .request(imageURL + `/${response.data.anime}&limit=1`)
          .then(function (resp) {
            const item = resp.data.results;
            const imageLink = item.map((it) => it.image_url).toString();
            setPost2(imageLink);
          });
        setImageLoading(false);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <CssBaseline />
        <Typography variant="h3" align="center">
          {post.anime}{" "}
        </Typography>
        <div className={classes.imageWrapper}>
          <Card className={classes.card}>
            {imageLoading === true ? (
              "Loading..."
            ) : (
              <CardMedia className={classes.cardMedia} image={`${post2}`} />
            )}
          </Card>
        </div>
        <Box textAlign="center">
          <Button
            onClick={() => window.location.reload(false)}
            variant="contained"
            disableElevation
          >
            Refresh
          </Button>
        </Box>
        <Typography variant="h3" align="center">
          {post.character}
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          "{post.quote}"
        </Typography>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
