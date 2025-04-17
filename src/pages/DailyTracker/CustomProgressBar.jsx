import ProgressBar from "@ramonak/react-progress-bar";

const CustomProgressBar = ({ raised, goal, bgColor, baseBgColor }) => {
  const progress = (raised / goal) * 100;

  return (
    <div style={{ maxWidth: "1224px", width: "100%", margin: "auto" }}>
      <ProgressBar
        completed={progress}
        customLabel={`$${raised.toLocaleString()}`}
        bgColor={bgColor}
        height="25px"
        baseBgColor={baseBgColor}
        borderRadius="30px"
        labelAlignment="center"
        labelColor="#000"
      />
    </div>
  );
};

export default CustomProgressBar;