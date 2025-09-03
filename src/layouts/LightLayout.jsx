import { useEffect } from "react";

export default function LightLayout({ children }) {
  useEffect(() => {
    import("../asset/css/styleL.css");
  }, []);

  return <div className="light-layout">{children}</div>;
}
