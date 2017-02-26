import express from 'express';

const router = express();

//controller imports
import basicController from './controllers/basicController';
import gamedev from './controllers/reddit/GameDev';
import devblogs from './controllers/reddit/DevBlogs';
import gamedesign from './controllers/reddit/GameDesign';
import indiegaming from './controllers/reddit/IndieGaming';
import indiedev from './controllers/reddit/IndieDev';


router.get('/', basicController.get);
router.get('/reddit/gamedev', gamedev.get);
router.get('/reddit/devblogs', devblogs.get);
router.get('/reddit/gamedesign', gamedesign.get);
router.get('/reddit/indiegaming', indiegaming.get);
router.get('/reddit/indiedev', indiedev.get);


export default router
