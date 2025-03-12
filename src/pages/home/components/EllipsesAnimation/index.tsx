import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import EllipsesAnimationJson from "../../../../assets/lottie-jsons/ellipsesAnimation.json";

function EllipsesAnimation() {
  return (
    <Lottie
      animationData={EllipsesAnimationJson}
      loop={false}
      style={{ width: "100%", maxWidth: 600, minWidth: 320 }}
    />

    /*<DotLottieReact
      src="https://lottie.host/5739a018-f2bc-4af0-9949-0c425fdd43c2/ghPNiZT8mQ.lottie"
      autoplay={true}
      style={{ width: "100%", maxWidth: 600, minWidth: 320 }}
    />*/
  );
}

export default EllipsesAnimation;
