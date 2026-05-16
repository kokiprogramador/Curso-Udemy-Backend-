export const errorsLogs = (err, req, res, next) => {
  console.log("errorLogs");
  console.error(err);
  next(err);
};

export const handlerError = (err, req, res, next) => {
  console.log("HandleError");
  res.status(501).json({
    message: err.message,
    stack: err.stack,
  });
};
