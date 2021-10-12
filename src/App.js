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

  const [animeData, setAnimeData] = React.useState(null);
  const [imageLink, setImageLink] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .request(baseURL)
      .then(function (response) {
        setAnimeData(response.data);

        axios
          .request(imageURL + `/${response.data.anime}&limit=1`)
          .then(function (resp) {
            const item = resp.data.results;
            const imageLink = item.map((it) => it.image_url).toString();

            setImageLink(imageLink);
          });

        setTimeout(() => {
          setLoading(false);
        }, 2000);
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
          {animeData.anime}{" "}
        </Typography>
        <div className={classes.imageWrapper}>
          <Card className={classes.card}>
            {imageLink === null ? (
              <Typography variant="h4">
                {" "}
                API doesn't have an image for this anime{" "}
              </Typography>
            ) : (
              <CardMedia className={classes.cardMedia} image={`${imageLink}`} />
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
          {animeData.character}
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          "{animeData.quote}"
        </Typography>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
