import { ImageResponse } from "next/og";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

// Image metadata
export const sizes = [
  { width: 16, height: 16 },
  { width: 32, height: 32 },
  { width: 48, height: 48 },
  { width: 96, height: 96 },
];

export const contentType = "image/png";

// Image generation
export default function Icon({ size = { width: 32, height: 32 } }) {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: Math.round(size.width * 0.625),
          fontWeight: "700",
          background: "#1d4ed8",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: Math.round(size.width * 0.15),
          ...poppins.style,
        }}
      >
        SB
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
