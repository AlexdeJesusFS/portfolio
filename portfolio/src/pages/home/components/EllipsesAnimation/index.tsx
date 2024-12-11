import Lottie from "lottie-react";
import EllipsesAnimationJson from "../../../../assets/lottie-jsons/ellipsesAnimation.json";

function EllipsesAnimation() {
    return (
        <Lottie 
            animationData={EllipsesAnimationJson}
            loop={false}
            autoplay={true}
            style={{ width: 564, height: 128 }}
        />
    );
};

export default EllipsesAnimation;
