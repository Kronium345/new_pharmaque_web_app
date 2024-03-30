import { useContext } from "react";
import { LoadingContext } from "@contexts/loadingContext";

const useLoading = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  return { loading, setLoading };
};

export default useLoading;
