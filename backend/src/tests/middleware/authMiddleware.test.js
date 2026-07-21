const jwt = require("jsonwebtoken");
const authMiddleware = require("../../middleware/authMiddleware");

describe("Auth Middleware", () => {

    it("should return 401 when token is missing", () => {

        const req = {
            headers: {}
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const next = jest.fn();

        authMiddleware(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({
            message: "Access denied. No token provided."
        });

        expect(next).not.toHaveBeenCalled();

    });
    it("should return 401 for an invalid token", () => {

        const req = {
            headers: {
                authorization: "Bearer invalidToken"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const next = jest.fn();

        authMiddleware(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({
            message: "Invalid token."
        });

        expect(next).not.toHaveBeenCalled();

    });
    it("should allow access with a valid token", () => {

        const token = jwt.sign(
            {
                id: "123",
                role: "customer"
            },
            process.env.JWT_SECRET
        );

        const req = {
            headers: {
                authorization: `Bearer ${token}`
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const next = jest.fn();

        authMiddleware(req, res, next);

        expect(next).toHaveBeenCalled();
        expect(req.user.id).toBe("123");
        expect(req.user.role).toBe("customer");

    });

});