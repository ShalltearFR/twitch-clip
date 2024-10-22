import { eventHandler } from "h3";

export default eventHandler(async (event) => {
  const user = event?.context?.params?.user || "";
  const apiClient = (event.context as any).twitchAPI;

  try {
    const streamer = await apiClient.users.getUserByName(user);

    if (!streamer) {
      return {
        success: false,
        message: "User not found",
      };
    }

    return {
      success: true,
      data: {
        id: streamer.id,
        broadcasterType: streamer.broadcasterType,
        creationDate: streamer.creationDate,
        description: streamer.description,
        displayName: streamer.displayName,
        profilePictureUrl: streamer.profilePictureUrl,
      },
    };
  } catch (error) {
    console.error("API error:", error);
    return {
      success: false,
      message: "Failed to fetch data from Twitch API",
    };
  }
});
