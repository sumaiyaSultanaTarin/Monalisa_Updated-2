import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "../components/home/Preloader";

export default function RouteWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <Preloader /> : children;
}
