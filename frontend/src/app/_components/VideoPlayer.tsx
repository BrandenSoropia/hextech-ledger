import { VOD } from "@/app/types";

// Consider doing this on BE.
const formatTimeStamp = ({
  type,
  timestamp,
}: {
  type: string;
  timestamp?: number;
}) => {
  if (type === "youtube") {
    return `?start=${timestamp}`;
  }

  return "";
};

const VideoPlayer = async ({ url, timestamp, type }: VOD) => {
  const formattedTimestamp = formatTimeStamp({ type, timestamp });

  return (
    <iframe
      className="w-100 h-100"
      src={encodeURI(`${url}${formattedTimestamp}`)}
      title="Match Video"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};

export default VideoPlayer;
