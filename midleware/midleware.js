import jwt from 'jsonwebtoken';

const authorization = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header && header === '') return res.status(401).json({ status: 401, error: 'Authentication failed' });

    const token = jwt.verify(header, 'pr');
    req.user = token;
    next();
  } catch {
    return res.status(401).json({ status: 401, error: 'Invalid token!' });
  }
};

export default authorization;
