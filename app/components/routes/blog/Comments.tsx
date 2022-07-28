import type { FC } from 'react';
import { useRef, useEffect } from 'react';

const Comments: FC = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = parentRef?.current;
    const script = document.createElement('script');

    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('repo', 'c1495616js/remix-portfolio');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-dark');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');

    parent?.appendChild(script);

    return () => {
      while (parent?.firstChild) {
        if (parent?.lastChild) {
          parent?.removeChild(parent?.lastChild);
        }
      }
    };
  }, [parentRef]);

  return (
    <>
      <div ref={parentRef} />
    </>
  );
};

export default Comments;
