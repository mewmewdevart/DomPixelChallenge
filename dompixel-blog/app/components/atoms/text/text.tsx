import { Text as MantineText } from "@mantine/core";

interface TextProps {
  size?: string;
  fw?: number;
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ size, fw, children, className }) => (
  <MantineText size={size} fw={fw} className={className}>
    {children}
  </MantineText>
);

export default Text;
