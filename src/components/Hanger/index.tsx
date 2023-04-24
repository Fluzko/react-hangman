import { Floor, Mast, Roof, Rope, HangmanContainer } from "./hanger.styles";

interface HangerProps {
  children: React.ReactNode;
}

const Hanger = ({ children }: HangerProps) => (
  <HangmanContainer>
    {children}
    <Rope />
    <Roof />
    <Mast />
    <Floor />
  </HangmanContainer>
);

export default Hanger;
