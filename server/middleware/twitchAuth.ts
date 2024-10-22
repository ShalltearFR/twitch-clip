// server/middleware/twitchApi.ts

import { eventHandler } from "h3"; // Importation de eventHandler
import { ApiClient } from "@twurple/api"; // Client API de Twurple
import { AppTokenAuthProvider } from "@twurple/auth"; // Importation de AppTokenProvider pour obtenir un token d'application

// Middleware pour accéder à l'API Twitch sans authentification utilisateur
export default eventHandler(async (event) => {
  const clientId = process.env.TWITCH_CLIENT as string;
  const clientSecret = process.env.TWITCH_SECRET as string;

  // Créer un fournisseur de token d'application
  const authProvider = new AppTokenAuthProvider(clientId, clientSecret);

  // Obtenir le token d'application
  const accessToken = await authProvider.getAppAccessToken();

  // Créez un client API avec le token d'application
  const apiClient = new ApiClient({ authProvider });

  // Attacher le client API à l'objet event pour un accès ultérieur
  (event.context as any).twitchAPI = apiClient;

  // Vous pouvez maintenant accéder à `event.context.twitchAPI` pour faire des appels API
});
