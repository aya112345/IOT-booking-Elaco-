import Space from "../models/Space.js";
import  Table from "../models/Tables.js";
// import { createError } from "../utils/error.js";
export const createSpace = async (req, res, next) => {
    const newSpace = new Space(req.body)
    try {
      const savedSpace = await newSpace.save();
      res.status(200).json(savedSpace);
    } catch (err) {
        next(err);
        }
    }
export const updateSpace = async (req, res, next) => {
    try {
        const updatedSpace = await Space.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedSpace);
      } catch (err) {
    next(err);  
    }
};
export const deleteSpace = async (req, res, next) => {
    try {
        await Space.findByIdAndDelete(req.params.id);
        res.status(200).json("space has been deleted.");
      } catch (err) {
    next(err);
}
};
export const getSpace = async (req, res, next) => {
    console.log(`testing * 3`)
    try {
        const space = await Space.findById(req.params.id);
        res.status(200).json(space);
      } catch (err) {
        next(err);
      }
};

// export const getSpaces = async (req, res, next) => {
//   const { limit, featured, min, max, ...others } = req.query;
//   try {
//     const spaces = await Space.find({
//       ...others,
//       cheapestPrice: { $gt: min || 1, $lt: max || 200 }, // Using || for logical OR
//     }).limit(parseInt(limit)); // Ensure limit is parsed as an integer
//     return res.status(200).json(spaces);
//   } catch (err) {
//     next(err);
//   }
// };

export const getSpaces = async (req, res, next) => {

  const { limit, featured, min, max, ...others } = req.query;
  try {
    const query = {
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 1999 } // Ensure min/max range
    };

    if (featured) {
      query.featured = featured === 'true'; // Convert string to boolean
    }

    const spaces = await Space.find(query).limit(parseInt(limit)); // Ensure limit is parsed as an integer
    return res.status(200).json(spaces);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  const TYPES = req.query.TYPES.split(",");
  try {
    const list = await Promise.all(
      TYPES.map((type) => {
        return Space.countDocuments({ type: type });
      })
    );
    res.status(200).json(list);
  
  } catch (err) {
    next(err);
  }
};
export const countByName = async (req, res, next) => {
  try {
    const table1Count = await Space.countDocuments({name: "Table For 1 Per" });
    const table2Count = await Space.countDocuments({ name: "Table For 2 Per" });
    const table4Count = await Space.countDocuments({ name: "Table For 4 Per" });
    const table6Count = await Space.countDocuments({ name: "Table For 6 Per" });
    const mettingTableCount = await Space.countDocuments({ name: "Metting Room Table" });
    const privateTable1Count = await Space.countDocuments({ name: "Private Office (1 Table)" });
    const privateTable2Count = await Space.countDocuments({ name: "Private Office (2 Tables)" });
    


    res.status(200).json([
      { name: "table for 1 per", count: table1Count },
      { name: "table for 2 per", count: table2Count },
      { name: "table for 4 per", count: table4Count },
      { name: "table for 6 per", count: table6Count },
      { name: "Metting room table", count: mettingTableCount },
      { name: "Private office (1 table)", count: privateTable1Count },
      { name: "Private office (2 tables)", count: privateTable2Count },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getSpaceTables = async (req, res, next) => {
  try {
    const space = await Space.findById(req.params.id);
    const list = await Promise.all(
      space.tables.map((table) => {
        return Table.findById(table);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};


