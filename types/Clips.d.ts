interface Clips {
  data: ClipData[];
  total: number;
}

interface ClipData {
  id: string;
  title: string;
  creatorDisplayName: string;
  duration: number;
  views: number;
  gameId: string;
  thumbnailUrl: string;
  creationDate: string;
}

export type { Clips, ClipData };
