import React from 'react';
import { useGlobalPendingState } from 'remix-utils';
import toast from 'react-hot-toast';

function useProgress() {
  let globalState = useGlobalPendingState();
  const toastRef = React.useRef<string | null>(null);

  function cleanToast() {
    if (toastRef.current) {
      toast.dismiss(toastRef.current);
      toastRef.current = null;
    }
  }

  React.useEffect(() => {
    if (globalState === 'idle') {
      cleanToast();
    } else {
      if (!toastRef.current) {
        const toastId = toast.loading('Loading...');
        toastRef.current = toastId;
      }
    }
  }, [globalState]);
}

export default useProgress;
