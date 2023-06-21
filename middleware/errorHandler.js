const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case 400:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 404:
      res.json({
        title: "not found",
        message: err.message,
        stackTrace: err.stack,
      });
    case 401:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case 403:
      res.json({
        title: "forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case 500:
      res.json({
        title: "server error",
        message: err.message,
        stackTrace: err.stack,
      });

    default:
      console.log("no error");
      break;
  }
};

module.exports = errorHandler;
