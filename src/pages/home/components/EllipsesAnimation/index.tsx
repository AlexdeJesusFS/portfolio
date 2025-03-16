import animationWebm from "../../../../assets/videos/animation.webm";

function EllipsesAnimation() {
  return (
    <video muted autoPlay>
      <source src={animationWebm} type="video/webm" />
    </video>
  );
}

export default EllipsesAnimation;
