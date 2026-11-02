/* Original LifeeCode visual fidelity: central metadata for separate English and Hindi/Hinglish audio series. */
export type PlannedEpisode = { number: number; status: "planned" | "published"; };
export type HindiPodcastEpisode = { number: number; spotify: string; };

export const audioFirstRun: PlannedEpisode[] = [
  { number: 8, status: "published" },
  { number: 9, status: "published" },
  { number: 10, status: "published" },
  { number: 11, status: "published" },
  { number: 12, status: "planned" },
];

export const englishEpisode8Spotify = "https://open.spotify.com/episode/4Uu1pEy8ALJcLDzd5WscY5?si=E-NRpScrQjuQhaLe1fexeQ";
export const englishEpisode9Spotify = "https://open.spotify.com/episode/4LPCQ9HSOwt4aX5RYnDHob?si=-bpDaBMrSWKVB3xlQ0BW2w";
export const englishEpisode10Spotify = "https://open.spotify.com/episode/11MluFQnShlzyXiAwbTV4l?si=8G87yXOPTgG3uZCTt0HpGA";
export const englishEpisode11Spotify = "https://open.spotify.com/episode/6PxTqKJu3d5asEWAcnVSMZ?si=tC2ssFF_T4y8NkfDRGnkJA";

export const hindiPodcastEpisodes: HindiPodcastEpisode[] = [
  { number: 1, spotify: "https://open.spotify.com/episode/7f4gAqcs4ThpPIylEcrAvk?si=yFxhYyLCQkCr_VfYNMSR_w" },
  { number: 2, spotify: "https://open.spotify.com/episode/4nsaxFCwXec1hD2FyevfxH?si=Z4qPkn0hSAqtlubCVLyPCQ" },
  { number: 3, spotify: "https://open.spotify.com/episode/11Afs7R8I5BXBsACuIreAS?si=aMFvtomYSqGdK05xpPdaHA" },
  { number: 4, spotify: "https://open.spotify.com/episode/5qRrZVZVhpb2q3GvGS4HSa?si=u6zJm6_gSV6IM4LMwWTFSw" },
  { number: 5, spotify: "https://open.spotify.com/episode/1FArSeGSpV2MQQxsT8lwPl?si=-i3S8y3ZS0-Sg56cPEaA2g" },
  { number: 6, spotify: "https://open.spotify.com/episode/5L1ifsBSxh7CQ1qMIQFBC9?si=kk83igkeRnSdFNSve9R6Jg" },
  { number: 7, spotify: "https://open.spotify.com/episode/3jOccdIAGHYxxmBH9cWU4B?si=2dOofnOzR-iJfiGOyR5gXw" },
  { number: 8, spotify: "https://open.spotify.com/episode/4KbjV3DlKtueSUHEEXOHvF?si=3NLTaoPIT3O_dWNRiIQzzQ" },
  { number: 9, spotify: "https://open.spotify.com/episode/15cFAbdeVrqtnVOFBUeAyi?si=aVlIeyidRTGtsQ6-4Wppcw" },
  { number: 10, spotify: "https://open.spotify.com/episode/7gi2gzwcHtJe4aFtshsWIX?si=z70AIld2S2mHtyg8PhYX9A" },
];

export const bilingualPublishingModel = {
  english: { label: "English", brief: "Weekly Brief", podcast: "Podcast episode" },
  hinglish: { label: "Hindi / Hinglish", brief: "देवनागरी-plus-Roman weekly brief", podcast: "Hindi / Hinglish podcast episode" },
};
