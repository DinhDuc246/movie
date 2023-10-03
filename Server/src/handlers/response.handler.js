const responseWithdata = (res, statusCode, data) =>
  res.status(statusCode).json(data);

const error = (res) =>
  responseWithdata(res, 500, {
    status: 500,
    message: "Oop! Something wrong!",
  });

const badrequest = (res, message) =>
  responseWithdata(res, 400, {
    status: 400,
    message,
  });

const ok = (res, data) => responseWithdata(res, 200, data);

const created = (res, data) => responseWithdata(res, 201, data);

const unauthorize = (res) =>
  responseWithdata(res, 401, {
    status: 401,
    message: "Unathorized",
  });
const notfound = (res) =>
  responseWithdata(res, 404, {
    status: 404,
    message: "Resource not found",
  });
export default {
  error,
  badrequest,
  ok,
  created,
  unauthorize,
  notfound,
};
