import animationWebm from "../../../../assets/videos/animation.webm";

function EllipsesAnimation() {
  return (
    //esse style garante a responsividade para este componente
    <video muted autoPlay style={{ width: "100%", maxWidth: 600, minWidth: 320 }}>
      <source src={animationWebm} type="video/webm" />
    </video>
  );
}

export default EllipsesAnimation;
