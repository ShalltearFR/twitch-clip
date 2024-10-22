import NodeCache from "node-cache";

// Cache pour les données récupérées (TTL: 5 heures)
const cacheData = new NodeCache({ stdTTL: 18000 });

export default cacheData;
