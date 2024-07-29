import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    description: {
      type: String,
      trim: true,
    },
  },
  {
    location: {
      type: String,
      trim: true,
    },
  },
  {
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Event = mongoose.model(eventSchema);