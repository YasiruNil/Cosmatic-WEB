"use client";
import '../globals.css';
import Providers from "@/redux/provider";
import { Spin } from "antd";
import React, { useEffect, useState } from "react";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element => {
  const [showLoader, setShowLoader] = useState(true);

  // loading indicates when page rendering
  useEffect(() => {
    if (document.readyState !== "complete") {
      const handler = (): void => {
        setShowLoader(false);
      };
      window.addEventListener("load", handler);

      return () => {
        window.removeEventListener("load", handler);
      };
    } else {
      const timeout = window.setTimeout(() => {
        setShowLoader(false);
      }, 1000);
      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <html lang="en">
      <body>
      {showLoader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <Providers>{children}</Providers>
      )}
      </body>
    </html>
  );
};

export default HomeLayout;
