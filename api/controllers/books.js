const GET_ALL_BOOKS = (req, res, next) => {
  res.status(200).json({
    books: [
      {
        name: "Super 1",
        author: "Geromy Stakins",
        published_on: "21st Dec, 2015",
      },
    ],
  });
};

export { GET_ALL_BOOKS };
