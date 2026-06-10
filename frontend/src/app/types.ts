export interface PlayerDetails {
  backgroundImageSrc: string;
  name: string;
}

export interface Match {
  eventName: string;
  round: string;
  date: string;
  player1: PlayerDetails;
  player2: PlayerDetails;
  vod: {
    type: "youtube"; // Might be useful to differentiate
    timestamp?: number;
    url: string;
  };
  id: string;
}
