'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './message.events';

var MessageSchema = new mongoose.Schema({
  author: String,
  text: String,
  active: Boolean
});

registerEvents(MessageSchema);
export default mongoose.model('Message', MessageSchema);
