const {
  Category
} = require('../models');

const { constants } = require('../config');

const getAllCategory = (req, res) => {
  Category.findAll()
    .then(categories => {
      res.json(categories);
    })
    .catch(err => res.json({ ...constants.SERVER500, error: err.message }));
};

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
            res.json('category saved');
          })
          .catch(err => res.json({ ...constants.SERVER500, error: err.message }));
      }
    })
    .catch(err => res.json({ ...constants.SERVER500, error: err.message }));

};

const deleteCategory = (req, res) => {

  const { _id } = req.params;

  Category.findByIdAndDelete(_id)
    .then(deleted => res.json("deleted"))
    .catch(err => res.json({ ...constants.SERVER500, error: err.message }));

};

module.exports = {
  getAllCategory,
  addNewCategory,
  deleteCategory
};
