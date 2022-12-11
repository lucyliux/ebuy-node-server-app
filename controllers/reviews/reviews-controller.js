import * as reviewsDao from './reviews-dao.js'

const create = async (req, res) => {
  const review = req.body;
  console.log("hoho");
  console.log(req);
  const newReview = await reviewsDao.createReview(review);
  res.json(newReview);
}

const findReviewsBySeller = async (req, res) => {
  const sellerName = req.body.sellerName;
  console.log(sellerName);
  const reviews = await reviewsDao.findReviewsBySeller(sellerName);
  console.log("all");
  console.log(reviews);
  console.log("haha");
  res.json(reviews);
}

const ReviewsController = (app) => {
  app.post("/api/reviews/create", create);
  app.post("/api/reviews/findReviewsBySeller", findReviewsBySeller);
};

export default ReviewsController;
