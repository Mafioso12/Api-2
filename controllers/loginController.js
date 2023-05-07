import { Router } from 'express';
import passport from 'passport'


const router = Router();

router.get('/login', passport.authenticate('discord', {
    failureRedirect: '/'
}), function(req, res) {
    res.redirect('/verify') // Successful auth
})

export default router;