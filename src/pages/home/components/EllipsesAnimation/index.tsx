import Lottie from "lottie-react";
import EllipsesAnimationJson from "../../../../assets/lottie-jsons/ellipsesAnimation.json";

function EllipsesAnimation() {
  return (
    <Lottie
      animationData={EllipsesAnimationJson}
      loop={false}
      autoplay={true}
      style={{ width: "100%", maxWidth: 600, minWidth: 320 }}
    />
  );
}

export default EllipsesAnimation;
