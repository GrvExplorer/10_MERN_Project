import express from "express";

import { memories } from "../models/model.js";

const getAll = async (_, res) => {
  try {
    const allMemories = await memories.find({});
    return res.status(200).send(allMemories);
  } catch (err) {
    return res.status(404).send(err);
  }
};

const getSpecific = async (req, res) => {
  try {
    const { id } = req.params;
    const specificMemorie = await memories.findById(id);
    if (specificMemorie) {
      return res.status(200).send(specificMemorie);
    }
    return res.status(400).send("Invalid Id");
  } catch (err) {
    return res.status(404).send(err);
  }
};

const createSpecific = async (req, res) => {
  try {
    if (!req.body.title || !req.body.creator || !req.body.message ) {
      return res.status(400).send('All details are required')
    }
    const memorie = {
      title: req.body.title,
      creator: req.body.creator,
      message: req.body.message,
      tags: req.body.tags,
      likeCount: req.body.likeCount,
      selectedFile: "",
    }
    const createdMemorie = await memories.create(memorie)
    if (createdMemorie) {
      return res.status(200).send(createdMemorie)  
    }
    return res.status(404).send('some thing went wrong')
  } catch (err) {
    return res.status(404).send(err)
  }
};

const updateSpecific = async (req, res) => {
  try {
    if (!req.body.title || !req.body.creator || !req.body.message) {
      return res.status(400).send('All details are required')
    }
    const memorie = {
      title: req.body.title,
      message: req.body.message,
      creator: req.body.creator,
    }
    const {id} = req.params
    const updateMemorie = await memories.findByIdAndUpdate(id, memorie)
    if (updateMemorie) {
      return res.status(200).send(updateMemorie)  
    }
    return res.status(404).send('some thing went wrong')
  } catch (err) {
    return res.status(404).send(err)
  }
};

const deleteSpecific = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMemorie = await memories.findByIdAndDelete(id);
    if (deleteMemorie) {
      return res.status(200).send(deleteMemorie);
    }
    return res.status(400).send("Invalid Id");
  } catch (err) {
    return res.status(404).send(err);
  }
};

export { getAll, getSpecific, createSpecific, updateSpecific, deleteSpecific };
