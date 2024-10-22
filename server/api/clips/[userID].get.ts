import { HelixClip } from "@twurple/api";

export default defineEventHandler(async (event) => {
  const userID = event?.context?.params?.userID || "";
  const apiClient = (event.context as any).twitchAPI;

  const streamer = await apiClient.clips.getClipById(userID);

  const maxClips = 5000;
  const allClips = [];

  // Création de la requête paginée pour récupérer les clips
  const paginatedRequest = apiClient.clips.getClipsForBroadcasterPaginated(
    userID,
    { first: 100 } // Limite à 100 clips par requête
  );

  // Récupération des premières pages de clips
  let clipBatch = await paginatedRequest.getNext();

  // Continue à paginer jusqu'à atteindre la limite de 5000 clips ou jusqu'à ce qu'il n'y ait plus de clips
  while (clipBatch.length > 0 && allClips.length < maxClips) {
    allClips.push(
      ...clipBatch.map((clip: HelixClip) => ({
        id: clip.id,
        title: clip.title,
        creatorDisplayName: clip.creatorDisplayName,
        duration: clip.duration || 1,
        views: clip.views,
        gameId: clip.gameId,
        //embedUrl: `https://clips.twitch.tv/embed?clip=${clip.id}&parent=localhost&autoplay=true`,
        thumbnailUrl: clip.thumbnailUrl,
        creationDate: clip.creationDate,
      }))
    );

    // Si on atteint 5000 clips, on arrête
    if (allClips.length >= maxClips) {
      allClips.length = maxClips; // Limite à 5000 clips
      break;
    }

    // Récupération de la page suivante de clips
    clipBatch = await paginatedRequest.getNext();
  }

  // Réponse envoyée avec les clips et le nombre total
  //res.send({ data: allClips, total: allClips.length });

  return { data: allClips, total: allClips.length };
});
