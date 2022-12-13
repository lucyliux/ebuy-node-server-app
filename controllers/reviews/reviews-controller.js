import * as reviewsDao from './reviews-dao.js'

const create = async (req, res) => {
  const review = req.body;
  const newReview = await reviewsDao.createReview(review);
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL || 'http://localhost:3000');
  res.json(newReview);
}

const findReviewsBySeller = async (req, res) => {
  const sellerName = req.body.sellerName;
  const reviews = await reviewsDao.findReviewsBySeller(sellerName);
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL || 'http://localhost:3000');
  res.json(reviews);
}

const ReviewsController = (app) => {
  app.post("/api/reviews/create", create);
  app.post("/api/reviews/findReviewsBySeller", findReviewsBySeller);
};

export default ReviewsController;
