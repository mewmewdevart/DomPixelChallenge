import { useState } from "react";
import { useInterval } from "@mantine/hooks";
import { Button, Progress, useMantineTheme, rgba } from "@mantine/core";

import styles from "./button.module.css";

export function ButtonProgressComponent() {
  const theme = useMantineTheme();
  const [progress, setProgress] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const interval = useInterval(() => {
    setProgress((current) => {
      if (current < 100) return current + 1;

      interval.stop();
      setLoaded(true);
      return 0;
    });
  }, 20);

  const handleClick = () => {
    if (loaded) {
      setLoaded(false);
    } else if (!interval.active) {
      interval.start();
    }
  };

  const buttonLabel = () => {
    if (progress !== 0) return "Uploading post";
    return loaded ? "Post upload failed. Please try again." : "Upload Post";
  };

  return (
    <Button
      fullWidth
      className={styles.button}
      onClick={handleClick}
      color={loaded ? "red" : "blue"}
    >
      <div className={styles.label}>{buttonLabel()}</div>
      {progress !== 0 && (
        <Progress
          value={progress}
          className={styles.progress}
          color={rgba(theme.colors.blue[2], 0.35)}
          radius="sm"
        />
      )}
    </Button>
  );
}
