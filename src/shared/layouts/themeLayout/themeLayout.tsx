import { ConfigProvider } from "antd";
import type { ReactNode } from "react";

const ThemeLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0169ff",
          colorInfo: "#0169ff",
          colorPrimaryHover: "#2780ff",
          colorPrimaryActive: "#0850c5",
          colorError: "#fa4d56",
          colorSuccess: "#42be65",
          borderRadius: 12,
          fontSize: 20,
        },
        components: {
          Button: {
            paddingInline: 16,
            paddingBlock: 16,
            contentFontSize: 16,
            controlHeight: 56,
            defaultShadow: "none",
            primaryShadow: "none",
            dangerShadow: "none",
            colorPrimaryBorder: "none",
          },
          Dropdown: {
            controlItemBgHover: "#F2F7FF",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeLayout;
