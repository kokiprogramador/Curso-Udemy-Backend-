const getALlUsers = (req, res) => {
  try {
    const { limit, offset } = req.query;
    if (limit && offset) {
      res.json({
        limit,
        offset,
      });
    } else {
      res.send("no hay ningun parametro");
    }
  } catch (error) {
    console.log(error);
  }
};

export default {
  getALlUsers,
};
