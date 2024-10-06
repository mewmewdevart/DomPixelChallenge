import { Overlay as MantineOverlay } from "@mantine/core";

interface OverlayProps {
  opacity?: number;
  zIndex?: number;
  className?: string;
}

const Overlay: React.FC<OverlayProps> = ({ opacity, zIndex, className }) => (
  <MantineOverlay opacity={opacity} zIndex={zIndex} className={className}/>
);

export default Overlay;
