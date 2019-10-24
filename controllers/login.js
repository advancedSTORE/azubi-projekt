exports.login = (req, res, next) => {
  res.render("login", {
    pageTitle: "Login Page",
    path: "/admin/login"
  });
};
