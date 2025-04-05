import localFont from "next/font/local";

export const primaryFont = localFont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-VF.woff",
      //   weight: "400",
      style: "normal",
    },
  ],
});

export const headerFont = localFont({
  src: [
    {
      path: "../../public/fonts/Tanker-Regular.woff2",
      //   weight: "400",
      style: "normal",
    },
  ],
});
