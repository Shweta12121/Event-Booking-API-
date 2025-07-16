const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(role = null) {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Missing token" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      if (role && decoded.role !== role) return res.status(403).json({ message: "Forbidden" });
      next();
    } catch {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
}

module.exports = auth;
