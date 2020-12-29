import times from "lodash.times";
import { chunkArray } from "../helpers/dataManipulate";
import { NUMBER_MAP } from "./numberMap";
import {
  clubsSkillsUnparsed,
  diamondsHeritageUnparsed,
  heartsRelationsUnparsed,
  spadesTraitsUnparsed
} from "./unparsedCodex";

function parseLabelDescription(a, b) {
  const label = a.split(/-/)[1].replace(/\s+/g, " ").trim();
  const description = b.trim().replace(/\s+/g, " ");
  return { label, description };
}

const chunkedClubs = chunkArray(clubsSkillsUnparsed.split("\n"), 2);
const chunkedSpades = chunkArray(spadesTraitsUnparsed.split("\n"), 2);
const chunkedHearts = chunkArray(heartsRelationsUnparsed.split("\n"), 2);
const chunkedDiamonds = chunkArray(diamondsHeritageUnparsed.split("\n"), 2);

export const CODEX_MAP = times(13, () => ({})).map((card, index) => {
  const club = parseLabelDescription(
    chunkedClubs[index][0],
    chunkedClubs[index][1]
  );
  const spade = parseLabelDescription(
    chunkedSpades[index][0],
    chunkedSpades[index][1]
  );
  const heart = parseLabelDescription(
    chunkedHearts[index][0],
    chunkedHearts[index][1]
  );
  const diamond = parseLabelDescription(
    chunkedDiamonds[index][0],
    chunkedDiamonds[index][1]
  );
  club.suit = "club";
  spade.suit = "spade";
  heart.suit = "heart";
  diamond.suit = "diamond";
  club.face = NUMBER_MAP[index];
  spade.face = NUMBER_MAP[index];
  heart.face = NUMBER_MAP[index];
  diamond.face = NUMBER_MAP[index];

  const newCards = [club, spade, heart, diamond];
  return newCards;
});

export const CODEX_DECK = CODEX_MAP.flat().map((card, index) => ({ ...card, index })).sort((a, b) => a.index > b.index);
