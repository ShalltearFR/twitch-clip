import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

// Vérifier si le modèle existe déjà dans Mongoose
const Game = mongoose.models.Game || mongoose.model("Game", gameSchema);

export default Game;
