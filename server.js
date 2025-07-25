import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import './config/db.js';
import './passport/githubStrategy.js';

import userRoutes from './routes/users.js';
import bookmarkRoutes from './routes/bookmarks.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(session({ secret: 'keyboardcat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users', userRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
