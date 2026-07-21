const adminMiddleware = require("../../middleware/adminMiddleware");

describe("Admin Middleware", () => {

    it("should allow admin user", () => {

        const req = {
            user: {
                id: "123",
                role: "admin"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const next = jest.fn();

        adminMiddleware(req, res, next);

        expect(next).toHaveBeenCalled();

    });
    it("should return 403 for customer", () => {

        const req = {
            user: {
                id: "123",
                role: "customer"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const next = jest.fn();

        adminMiddleware(req, res, next);

        expect(res.status).toHaveBeenCalledWith(403);

        expect(res.json).toHaveBeenCalledWith({
            message: "Access denied. Admins only."
        });

        expect(next).not.toHaveBeenCalled();

    });

});