"use client";

import { sendGAEvent } from "@next/third-parties/google";

import { Button } from "./ui/button";
import { profile } from "@/lib/data";

const DownloadCv = () => {
  return (
    <Button asChild>
      <a
        href={profile.resume}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          sendGAEvent("event", "downloadCvButtonClicked", { value: "xyz" })
        }
      >
        Download my resume ↓
      </a>
    </Button>
  );
};

export default DownloadCv;
