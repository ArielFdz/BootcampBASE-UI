import { useCallback, useState } from 'react';

export const useToggle = (initialState = false) : [value:boolean, toggle:()=>void] => {
   const [value, setState] = useState(initialState);

   const toggle = useCallback(() => {
      setState((state) => !state);
   }, []);

   return [value, toggle];
};
