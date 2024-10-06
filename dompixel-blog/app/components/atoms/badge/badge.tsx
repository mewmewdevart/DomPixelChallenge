import React from "react";
import { Badge } from "@mantine/core";

type BadgeItem = {
  emoji?: string;
  label?: string;
};

interface BadgeComponentProps {
  badges: BadgeItem[];
}

export const BadgeComponent: React.FC<BadgeComponentProps> = ({ badges }) => (
  <>
    {badges.map((badge) => (
      <Badge
        key={badge.label}
        leftSection={badge.emoji}
        variant="light"
        color="blue"
        radius="lg"
        className="bg-[#eaf1ff] text-brand-primary-30"
        aria-label={`Badge ${badge.label}`}
      >
        {badge.label}
      </Badge>
    ))}
  </>
);
