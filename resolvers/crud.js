// Get Model and Do Crud Operations

const createOne = async (model, data) => {
  const newData = await model.create(data);
  return newData;
};

const readAll = async (model) => {
  const data = await model.find();
  return data;
};

const readOne = async (model, id) => {
  const data = await model.findById(id);
  return data;
};

const updateOne = async (model, id, data) => {
  const updatedData = await model.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return updatedData;
};

const deleteOne = async (model, id) => {
  const deletedData = await model.findByIdAndDelete(id);
  return deletedData;
};

export { readAll, readOne, createOne, updateOne, deleteOne };
