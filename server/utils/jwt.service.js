const jwt = require("jsonwebtoken");

class JWTService {
   secretKey= process.env.JWT_SECRET;
   expiresIn = process.env.JWT_EXPIRES_IN;

  constructor() {}
  
  /**
   * Generates a new JWT token.
   * @param payload Token payload (e.g., userId, email, etc.).
   * @returns The generated JWT token.
   */
  generateToken(payload) {
    return jwt.sign(payload, this.secretKey, { expiresIn: this.expiresIn });
  }

  /**
   * Verifies a JWT token and returns the decoded payload if valid.
   * @param token The JWT token to verify.
   * @returns The decoded token payload.
   * @throws Error if the token is invalid or expired.
   */
  verifyToken(token){
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      throw new Error("Invalid or expired token");
    }
  }

  /**
   * Refreshes a JWT token by verifying the old token and generating a new one.
   * @param token The existing JWT token.
   * @returns A new JWT token if the old one is valid.
   */
  refreshToken(token) {
    const decoded = this.verifyToken(token);
    return this.generateToken({
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
    });
  }
}

module.exports = new JWTService();
