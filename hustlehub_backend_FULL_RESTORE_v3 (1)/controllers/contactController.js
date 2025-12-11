
import Contact from '../models/Contact.js';

export const getContacts=async(req,res)=>{
  const list=await Contact.find({user:req.user});
  res.json(list);
};

export const getContact=async(req,res)=>{
  const c=await Contact.findOne({_id:req.params.id,user:req.user});
  res.json(c);
};

export const createContact=async(req,res)=>{
  const c=await Contact.create({...req.body,user:req.user});
  res.json(c);
};

export const updateContact=async(req,res)=>{
  const c=await Contact.findOneAndUpdate(
    {_id:req.params.id,user:req.user},
    req.body,
    {new:true}
  );
  res.json(c);
};

export const deleteContact=async(req,res)=>{
  await Contact.findOneAndDelete({_id:req.params.id,user:req.user});
  res.json({msg:"deleted"});
};

export const addNote=async(req,res)=>{
  const c=await Contact.findOne({_id:req.params.id,user:req.user});
  c.notes.push({text:req.body.text,date:new Date()});
  await c.save();
  res.json(c);
};

export const deleteNote=async(req,res)=>{
  const c=await Contact.findOne({_id:req.params.id,user:req.user});
  c.notes=c.notes.filter(n=>String(n._id)!==req.params.noteId);
  await c.save();
  res.json(c);
};

export const addTag=async(req,res)=>{
  const c=await Contact.findOne({_id:req.params.id,user:req.user});
  if(!c.tags.includes(req.body.tag)) c.tags.push(req.body.tag);
  await c.save();
  res.json(c);
};

export const deleteTag=async(req,res)=>{
  const c=await Contact.findOne({_id:req.params.id,user:req.user});
  c.tags=c.tags.filter(t=>t!==req.params.tag);
  await c.save();
  res.json(c);
};
