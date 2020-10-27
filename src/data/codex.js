import times from "lodash.times";
import { chunkArray } from "../helpers/dataManipulate";
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
  card.club = { ...club };
  card.spade = { ...spade };
  card.heart = { ...heart };
  card.diamonds = { ...diamond };
  return card;
});
