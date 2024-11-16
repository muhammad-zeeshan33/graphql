const jwtUtils = require('../utils/jwt.service');

function authMiddleware(context) {
    const token = context.req.headers.authorization || '';
    const decoded = jwtUtils.verifyToken(token.replace('Bearer ', ''));
    
    if (!decoded) {
        throw new Error('Authentication failed');
    }

    context.user = decoded;
    return context;
}

function adminMiddleware(context) {
    if (context.user.role !== 'admin') {
        throw new Error('Not authorized');
    }
    return context;
}

module.exports = { authMiddleware, adminMiddleware };
