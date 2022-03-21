function paginatedResults() {

    return async (req, res, next) => {
      
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const skipIndex = (page - 1) * limit;
      const results = {};
  
      try {
        results.results = await Restaurant.find()
          .sort({ _id: 1 })
          .limit(limit)
          .skip(skipIndex)
          .exec();
        res.paginatedResults = results;
        // console.log(results);
        next();
      } catch (e) {
        res.status(500).json({ message: "Error Occured" });
      }
    };
  }

  module.exports = paginatedResults();