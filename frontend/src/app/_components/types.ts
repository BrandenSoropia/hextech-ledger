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
  vodUrl: {
    type: "youtube";
    timestamp?: number;
  };
  id: string;
}
