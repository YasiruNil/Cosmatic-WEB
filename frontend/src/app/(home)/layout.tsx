"use client";
import Providers from '@/redux/provider';
import { Spin } from 'antd';
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
      <div className="min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
        <div className="flex-grow">
          <main className="my-0 py-16">
            {showLoader ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "calc(100vh - 100px)",
                }}
              ><Spin size="large" /></div>
            ) : (
              <Providers>{children}</Providers>
            )}
          </main>
        </div>
      </div>
    </html>
  );
};

export default HomeLayout;
