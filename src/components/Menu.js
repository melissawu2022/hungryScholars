import { grey } from "@material-ui/core/colors";
import Grid from "@mui/material/Grid";
import wrap from "./../img/wrap.jpeg";
import smoothiebowl from "./../img/smoothiebowl.jpeg";
import drink from "./../img/drink.jpeg";

const styles = {
  div1Styling: {
    paddingLeft: "calc(10%)",
    paddingTop: "calc(3%)",
  },
  headerStyling: {
    fontFamily: "monospace",
    fontSize: "50px",
  },
  paragraphStyling: {
    fontFamily: "monospace",
    fontSize: "30px",
  },
  paragraphStyling2: {
    fontFamily: "monospace",
    fontSize: "30px",
  },
  gridCellStyling: {
    background: grey,
    paddingLeft: "calc(10%)",
  },
  itemTitle: {
    fontFamily: "monospace",
    fontSize: "20px",
  },
  itemDescription: {
    fontFamily: "monospace",
    fontSize: "15px",
  },
  imageStyling: {
    paddingLeft: "100px",
    paddingTop: "40px",
    width: "400px",
  },
};

const Menu = () => {
  return (
    <div>
      <div style={styles.div1Styling}>
        <h1 style={styles.headerStyling}> The Hungry Scholar Menu</h1>

        <Grid container spacing={2} paddingRight="calc(10%)">
          <Grid item xs={6}>
            <p style={styles.paragraphStyling2}>Breakfast Bites</p>
            <p1 style={styles.itemTitle}>Your Average Joe Smoothie Bowl</p1>
            <p style={styles.itemDescription}>
              A luscious smoothie of blueberries, blackberries, and
              strawberries, a banana, and peanut butter. Just whole ingredients.
            </p>
            <hr />
            <p style={styles.itemTitle}>The Impasta Egg wrap</p>
            <p style={styles.itemDescription}>
              Scrambled Tofu that magically tastes like egg, a couple slices of
              avocado, and a heaping scoop of beans all nestled in a tortilla.{" "}
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2} paddingRight="calc(10%)">
          <Grid item xs={6}>
            <p style={styles.paragraphStyling2}>Grab n' Go</p>
            <p1 style={styles.itemTitle}>The pick-me-up</p1>
            <p style={styles.itemDescription}>
              The name says it all; the warm hug you need to cheer you up :) [A
              whole wheat wrap with smokey beans, caramelized onions and cremini
              mushooms, lettuce and avocado.]
            </p>
            <hr />
            <p style={styles.itemTitle}>The Surprise Me</p>
            <p style={styles.itemDescription}>
              Don't know what to get? Here's something that you *probably* will
              like ;)
            </p>
            <hr />
            <p style={styles.itemTitle}>The Refrigerator Surprise 2.0</p>
            <p style={styles.itemDescription}>
              I'm sure we've all experienced this; it's the first time you're
              moving out, you have some takeout leftovers, a little bit of this,
              a bit of that. But this time, you don't have to worry about food
              poisoning.
            </p>
          </Grid>
        </Grid>
      </div>

      <Grid
        container
        spacing={2}
        paddingRight="calc(10%)"
        paddingLeft="calc(5%)"
        marginLeft={"50%"}
        marginTop={"-33.5%"}
      >
        <Grid item xs={6}>
          <p style={styles.paragraphStyling2}>
            Consumable Liquids That Aren't Water
          </p>
          <p1 style={styles.itemTitle}>Sweet n' Fruity</p1>
          <p style={styles.itemDescription}>
            Your choice of Mango Juice, Passionfruit Juice, or Orange Juice.
          </p>
          <hr />
          <p style={styles.itemTitle}>It's Crunch Time </p>
          <p style={styles.itemDescription}>
            Need a small caffiene boost to kick off your day? Then grab a Tea of
            the day (Comes iced or hot).
          </p>

          <hr />
          <p style={styles.itemTitle}>It's Crunch Time 1000</p>
          <p style={styles.itemDescription}>
            Our signature cold brew with a splash of oat milk (Extra shot of Espresso +$1.00).
          </p>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent={"center"} marginTop={"20%"}>
        <Grid item xs={3}>
          <img src={smoothiebowl} alt="a wrap" style={styles.imageStyling} />
        </Grid>
        <Grid item xs={3}>
          <img src={wrap} alt="a wrap" style={styles.imageStyling} />
        </Grid>
        <Grid item xs={3}>
          <img src={drink} alt="a wrap" style={styles.imageStyling} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Menu;
