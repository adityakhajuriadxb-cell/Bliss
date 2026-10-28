export default function GradientBackdrop() {
  return (
    <div className="gradient-position">
      <img src="/assets/images/gradient-circle.svg" style={{ left: "-4%", top: "-4%" }} width="500" alt="Background Circle" />
      <img src="/assets/images/gradient-circle.svg" style={{ right: "-4%", bottom: "-4%" }} width="500" alt="Background Circle" />
    </div>
  );
}
