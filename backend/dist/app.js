"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("./middlewares/errorHandler");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
app.use('/api', userRoutes_1.default);
// Global error handler (should be after routes)
app.use(errorHandler_1.errorHandler);
app.get('/ping', (req, res) => res.send('pong'));
exports.default = app;
