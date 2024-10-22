import { HelixClip } from "@twurple/api";
import cacheData from "../../lib/cacheData";

export default defineEventHandler(async (event) => {
  const userID = event?.context?.params?.userID || "";
  const cachedData = cacheData.get(`user${userID}`);
  if (cachedData) {
    return cachedData;
  }

  const apiClient = (event.context as any).twitchAPI;

  const maxClips = 5000;
  const clipsPerPage = 100;

  // Limite la requête à 5000 clips dès le début
  const paginatedRequest = apiClient.clips.getClipsForBroadcasterPaginated(
    userID,
    { first: Math.min(clipsPerPage, maxClips) }
  );

  const allClips: Array<Partial<HelixClip>> = [];
  let totalClips = 0;

  // Récupération des clips par page, en limitant à 5000
  while (allClips.length < maxClips) {
    const clipBatch = await paginatedRequest.getNext();

    if (clipBatch.length === 0) break; // Arrête si plus de clips

    allClips.push(
      ...clipBatch
        .slice(0, maxClips - allClips.length)
        .map((clip: HelixClip) => ({
          id: clip.id,
          title: clip.title,
          creatorDisplayName: clip.creatorDisplayName,
          duration: clip.duration || 1,
          views: clip.views,
          gameId: clip.gameId,
          thumbnailUrl: clip.thumbnailUrl,
          creationDate: clip.creationDate,
        }))
    );

    // Si on atteint 5000 clips, on arrête
    if (allClips.length >= maxClips) {
      break;
    }
  }

  cacheData.set(`user${userID}`, { data: allClips, total: allClips.length });
  return { data: allClips, total: allClips.length };
});
