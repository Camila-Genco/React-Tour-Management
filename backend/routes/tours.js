import express from "express";
import { createTour, getAllTours, getSingleTour, updateTour, deleteTour, getTourBySearch, getTourCount} from "../controllers/tourController.js";

const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";

//create new tour
router.post("/", verifyAdmin, createTour);
//update tour
router.put("/:id", verifyAdmin, updateTour);
//delete tour
router.delete("/:id", verifyAdmin, deleteTour);
//get single tour
router.get("/:id", getSingleTour);
//get all tours
router.get("/", getAllTours);
//get tours by sreach
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getTourCount", getTourCount);

export default router;