import { useEffect } from "react";

export default function DarkLayout({ children }) {
  useEffect(() => {
    import("../asset/css/styleD.css")
  }, []);

  return <div className="dark-layout">{children}</div>;
}
