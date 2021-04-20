"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (_a) {
        var duration = _a.duration, edurcator = _a.edurcator, name = _a.name;
        console.log(name, duration, edurcator);
    };
    return CreateCourseService;
}());
exports.default = new CreateCourseService();
