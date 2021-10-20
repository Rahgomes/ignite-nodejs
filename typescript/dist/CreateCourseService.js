"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (_a) {
        var educator = _a.educator, _b = _a.duration, duration = _b === void 0 ? 12 : _b, name = _a.name;
        console.log(educator, duration, name);
    };
    return CreateCourseService;
}());
exports.default = new CreateCourseService();
