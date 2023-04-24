import {
  Empty,
  Head,
  Body,
  LegLeft,
  LegRight,
  ArmLeft,
  ArmRight,
} from "./stickman.styles";

const bodyParts = [Empty, Head, Body, LegLeft, LegRight, ArmLeft, ArmRight];

interface StickManProps {
  errors: number;
}

const StickMan = ({ errors }: StickManProps) => {
  const parts = bodyParts.slice(0, errors + 1);

  return (
    <>
      {parts.map((Cmp, i) => (
        <Cmp key={i} />
      ))}
    </>
  );
};

export default StickMan;
