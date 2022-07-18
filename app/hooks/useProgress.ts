import React from 'react';
import { useGlobalPendingState } from 'remix-utils';
import toast from 'react-hot-toast';

function useProgress() {
  let globalState = useGlobalPendingState();
  const toastRef = React.useRef<string | null>(null);

  if (globalState === 'idle') {
    if (toastRef.current) {
      toast.dismiss(toastRef.current);
    }
    return null;
  }

  const toastId = toast.loading('Loading...');
  toastRef.current = toastId;
}

export default useProgress;
