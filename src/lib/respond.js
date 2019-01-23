module.exports = {
  ok(res, data, status = 200) {
    res
      .status(status)
      .send(data);
  }
}