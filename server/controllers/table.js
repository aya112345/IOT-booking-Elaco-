import Table from "../models/Tables.js";
import Space from "../models/Space.js";
import { createError } from "../utils/error.js";
//ayy hotel=space +table =room
export const createTable = async (req, res, next) => {
  const spaceId = req.params.spaceid;
  const newTable = new Table(req.body);

  try {
    const savedTable = await newTable.save();
    try {
      await Space.findByIdAndUpdate(spaceId, {
        $push: { tables: savedTable._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedTable);
  } catch (err) {
    next(err);
  }
};

export const updateTable = async (req, res, next) => {
  try {
    const updatedTable = await Table.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTable);
  } catch (err) {
    next(err);
  }
};

export const updateTableAvailability = async (req, res, next) => {
  try {
    await Table.updateOne(
      { "tableNumbers._id": req.params.id },
      {
        $push: {
          "tableNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Table status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteTable = async (req, res, next) => {
  const spaceId = req.params.spaceid;
  try {
    await Table.findByIdAndDelete(req.params.id);
    try {
      await Space.findByIdAndUpdate(spaceId, {
        $pull: { tables: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Table has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getTable = async (req, res, next) => {
  try {
    const table = await Table.findById(req.params.id);
    res.status(200).json(table);
  } catch (err) {
    next(err);
  }
};
export const getTables = async (req, res, next) => {
  try {
    const tables = await Table.find();
    res.status(200).json(tables);
  } catch (err) {
    next(err);
  }
};