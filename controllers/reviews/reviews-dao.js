import reviewsModel from './reviews-model.js';

export const createReview = async (review) =>
  await reviewsModel.create(review);

export const findReviewsBySeller = async (sellerName) =>
  await reviewsModel.find({ sellerName }).sort({date: 'descending'});