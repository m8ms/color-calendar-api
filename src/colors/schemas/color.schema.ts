import * as mongoose from 'mongoose';

export const ColorSchema = new mongoose.Schema({
  hex: String,
  name: String
});
