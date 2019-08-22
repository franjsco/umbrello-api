import mongoose from 'mongoose';

const city = {
  id: {
    type: Number,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  coord: {
    lon: {
      type: String,
    },
    lat: {
      type: String,
    },
  },
};

const citySchema = mongoose.Schema(city, {
  collection: 'umbrello_cities',
});

const City = mongoose.model('city', citySchema);

export default City;
