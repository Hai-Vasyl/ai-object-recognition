import { useSelector, useDispatch } from "react-redux";

import { StoreState } from "../redux/store";

const useStore = () => {
  const state = useSelector((s: StoreState) => s);
  const dispatch = useDispatch();

  return { state, dispatch };
};

export default useStore;
