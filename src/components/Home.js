import { fontSize } from "@mui/system";
import Image from "../img/vegan-food.jpg";

const styles = {
  paperContainer: {
    paddingTop: "0px",
    height: "100vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${Image})`,
  },
};

const Home = () => {
  return (
    <div style={styles.paperContainer}>
      <h1
        style={{
          top: "calc(30% - 3cm)",
          left: "calc(40% - 13cm)",
          right: "calc(30% + 12cm)",

          color: "white",
          backgroundColor: "black",
          position: "absolute",
          fontFamily: "monospace",
          fontSize: "40px",
        }}
      >
        Want a bite that's delicious and affordable? 
      </h1>
      <h1
        style={{
          top: "calc(70% + 2cm)",
          left: "calc(80% - 15cm)",

          color: "white",
          backgroundColor: "black",
          position: "absolute",
          fontFamily: "monospace",
          fontSize: "40px",
        }}
      >
        You've come to the right
        place :)
      </h1>
    </div>
  );
};

export default Home;
