import { Router } from 'express';
import { getAllThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, removeReaction, } from '../../controllers/thoughtController.js';
const router = Router();
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);
export { router as thoughtRouter };
