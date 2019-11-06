"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API is /api/games', info: 'info' });
    }
}
exports.indexController = new IndexController();
