import Chip from "@material-ui/core/Chip";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { atom, useAtom } from "jotai";

const countAtom = atom(0);

const style = {
  upArrow: {
    background: "#6e6e6e",
    padding: "10px 10px",
    borderRadius: "30px",
    color: "white",
    transition: "all 150ms ease",
    cursor: "pointer",
    border: "none",
  },

  "&:hover": {
    background: "#a1a1a1",
  },
};

const CustomIcon = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div style={{ display: "flex" }}>
      <KeyboardArrowUpIcon
        style={style.upArrow}
        onClick={() => setCount((c) => c + 1)}
      />

      {count}
      <KeyboardArrowDownIcon
        style={style.downArrow}
        onClick={() => setCount((c) => Math.max(0, c - 1))}
      />
    </div>
  );
};

const Order = () => {
  return (
    <div>
      <div>
        <h1> Ordering</h1>
        <p>More to come!</p>
        <CustomIcon />
      </div>
    </div>
  );
};

export default Order;
