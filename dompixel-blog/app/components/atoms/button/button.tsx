import { useState } from 'react';

import { useInterval } from '@mantine/hooks';
import { Button, Progress, useMantineTheme, rgba } from '@mantine/core';

import style from './button.module.css';

export function ButtonProgress() {
  const theme = useMantineTheme();
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const interval = useInterval(
    () =>
      setProgress((current) => {
        if (current < 100) {
          return current + 1;
        }

        interval.stop();
        setLoaded(true);
        return 0;
      }),
    20
  );

  return (
    <Button
      fullWidth
      className={style.button}
      onClick={() => (loaded ? setLoaded(false) : !interval.active && interval.start())}
      color={loaded ? 'teal' : theme.primaryColor}
    >
      <div className={style.label}>
        {progress !== 0 ? 'Uploading post' : loaded ? 'Post uploaded' : 'Upload Post'}
      </div>
      {progress !== 0 && (
        <Progress
          value={progress}
          className={style.progress}
          color={rgba(theme.colors.blue[2], 0.35)}
          radius="sm"
        />
      )}
    </Button>
  );
}