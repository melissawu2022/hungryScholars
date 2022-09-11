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
    fontSize: "15px",
    paddingRight: "calc(25%)"
  },
};

const About = () => {
  return (
    <div>
      <div style={styles.div1Styling}>
        <h1 style={styles.headerStyling}> About Us</h1>
        <p style={styles.paragraphStyling}>
          This started as a dream to have a food-related side hustle. Fast forward to today, the goal of this business
          is simple; we just want to serve students/those of us who:
          <p>1. Don't have time to cook</p>
          <p>
            2. Don't want to spend an arm and a leg when we want to grab a bite
          </p>
          <p>
            3. Want something delicious, nutritious, and is plant-based
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
