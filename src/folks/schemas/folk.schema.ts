import * as mongoose from 'mongoose';

export const FolkSchema = new mongoose.Schema({
  name: String,
  colors: {
    type: Map,
    of: {
      hex: String,
      name: String
    }
  },
});
