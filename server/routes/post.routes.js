import express from 'express';
import authCtrl from '../controllers/auth.controller';
import userCtrl from '../controllers/user.controller';
import postCtrl from '../controllers/post.controller';
const router = express.Router();

router.route('/api/posts/feed/:userId')
  .get(authCtrl.requireSignin, postCtrl.listNewsFeed);

router.route('/api/posts/by/:userId')
  .get(authCtrl.requireSignin, postCtrl.listByUser);

router.route('/api/posts/new/:userId')
  .post(authCtrl.requireSignin, postCtrl.create); // crear post

router.route('/api/posts/photo/:postId') //imagen del post
  .get(postCtrl.photo);

router.route('/api/posts/like')
  .put(authCtrl.requireSignin, postCtrl.like);//like al post

router.route('/api/posts/unlike')
  .put(authCtrl.requireSignin, postCtrl.unlike);

router.route('/api/posts/:postId')
  .put(authCtrl.requireSignin, postCtrl.isPoster, postCtrl.editPost); //editar el post

router.route('/api/posts/:postId')
  .delete(authCtrl.requireSignin, postCtrl.isPoster, postCtrl.remove);

router.route('/api/posts/comment')
  .put(authCtrl.requireSignin, postCtrl.comment); //agregar el comentario al post

router.route('/api/posts/uncomment')
  .put(authCtrl.requireSignin, postCtrl.uncomment);

router.param('userId', userCtrl.userById);

router.param('postId', postCtrl.postById);

export default router;
