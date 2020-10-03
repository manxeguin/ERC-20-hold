const notFoundError = () => (req, res, next) =>
  res.status(404).json({ message: "Not Found" });

const internalServerError = (req, res, next) => {
  if (!err.status) {
    console.error(err.stack);
  }

  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
};

const useCORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};

const catchAsync = (handler) => (...args) => handler(...args).catch(args[2]);

module.exports = {
  notFoundError,
  internalServerError,
  catchAsync,
  useCORS,
};
