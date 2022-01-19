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
  },
};

const Menu = () => {
  return (
    <div>
      <div style={styles.div1Styling}>
        <h1 style={styles.headerStyling}> Menu</h1>
        <p style={styles.paragraphStyling}>More to come!</p>
      </div>
    </div>
  );
};

export default Menu;
