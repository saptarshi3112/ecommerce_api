const { Category } = require('../models');
const { statusMessage, constants } = require('../config');

/**
 * Fetch all the categories
 * @param {*} req 
 * @param {*} res 
 * @returns {json}
 */
const getAllCategory = (req, res) => {
  Category.find()
    .then(categories => {
      if (categories && categories.length > 0) {
        categories = categories.map(category => {
          return { name: category.name, _id: category._id}
        });
        res.json({ ...statusMessage.CATEGORY200, data: categories });
      } else {
        res.json({ ...statusMessage.CATEGORY200, message: "No categories found" });
      }
    })
    .catch(err => res.json({ ...constants.SERVER500, error: err.message }));
};

/**
 * Add a new category
 * @param {*} req 
 * @param {*} res 
 * @returns {json}
 */
const addNewCategory = (req, res) => {
  const {
    name
  } = req.body;

  Category.findOne({ name: name })
    .then(categoryFound => {
      if (categoryFound) {
        res.json("Already exists");
      } else {
        new Category({ name: name })
          .save()
          .then((saved) => {
            if (!saved) {
              res.json(statusMessage.CATEGORY400);
            } else {
              res.json(statusMessage.CATEGORY201);
            }
          })
          .catch(err => res.json({ ...statusMessage.SERVER500, error: err.message }));
      }
    })
    .catch(err => res.json({ ...statusMessage.SERVER500, error: err.message }));
};

/**
 * Delete a category by id
 * @param {*} req 
 * @param {*} res 
 * @returns {json}
 */
const deleteCategory = (req, res) => {
  const { _id } = req.params;
  console.log(_id);

  Category.findByIdAndDelete(_id)
    .then(deleted => {
      if (!deleted) {
        res.json({ ...statusMessage.REQUEST400 });
      } else {
        res.json(statusMessage.CATEGORY204);
      }
    })
    .catch(err => res.json({ ...statusMessage.SERVER500, error: err.message }));
};

module.exports = {
  getAllCategory,
  addNewCategory,
  deleteCategory
};
