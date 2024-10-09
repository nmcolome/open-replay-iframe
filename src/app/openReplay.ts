"use client";
import Tracker from "@openreplay/tracker";
import { useEffect } from "react";

export const tracker = new Tracker({
  projectKey: process.env.NEXT_PUBLIC_PROJECT_KEY as string,
  ingestPoint: process.env.NEXT_PUBLIC_INGEST_POINT as string,
  crossdomain: {
    enabled: true,
    parentDomain: 'ngrok-free.app'
  },
  __debug__: 5,
});

const Openreplay = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      tracker.start({
        metadata: {
          environment: 'test',
        },
      });
      tracker.setUserID('natalia')
    }
  }, []);

  return null;
};

export default Openreplay;
