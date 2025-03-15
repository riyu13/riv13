import { TypeAnimation } from "react-type-animation";

const Type = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "私の事下に押してください!",
        100,
      ]}
      speed={30}
      style={{ fontSize: "1em" }}
      repeat={1}
    />
  );
};

export default Type;
