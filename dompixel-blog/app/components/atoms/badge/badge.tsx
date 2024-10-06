import { Badge } from "@mantine/core";

export const BadgeList: React.FC<{ badges: { emoji: string; label: string }[] }> = ({
    badges,
  }) => {
    return (
      <>
        {badges.map((badge) => (
          <Badge key={badge.label} leftSection={badge.emoji} className="bg-[#eaf1ff] text-brand-primary-30">
            {badge.label}
          </Badge>
        ))}
      </>
    );
  };