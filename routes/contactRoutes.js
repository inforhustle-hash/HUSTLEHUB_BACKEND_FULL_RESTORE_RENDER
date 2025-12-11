
import express from 'express';
import auth from '../middleware/auth.js';
import {
  getContacts, getContact, createContact,
  updateContact, deleteContact,
  addNote, deleteNote, addTag, deleteTag
} from '../controllers/contactController.js';

const r=express.Router();
r.use(auth);

r.get('/',getContacts);
r.get('/:id',getContact);
r.post('/',createContact);
r.put('/:id',updateContact);
r.delete('/:id',deleteContact);

r.post('/:id/notes',addNote);
r.delete('/:id/notes/:noteId',deleteNote);

r.post('/:id/tags',addTag);
r.delete('/:id/tags/:tag',deleteTag);

export default r;
