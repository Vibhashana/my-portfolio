"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { FileDown } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

const DownloadCv = () => {
  return (
    <Button
      variant="secondary"
      asChild
      onClick={() =>
        sendGAEvent("event", "downloadCvButtonClicked", { value: "xyz" })
      }
    >
      <Link
        href="/CV of Sahan Vibhashana Bandara.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>Download my resume</span>
        <FileDown />
      </Link>
    </Button>
  );
};

export default DownloadCv;
