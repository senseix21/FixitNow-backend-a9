"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateWithoutTime = void 0;
// Utility function to format a date as "YYYY-MM-DD"
function formatDateWithoutTime(date) {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
}
exports.formatDateWithoutTime = formatDateWithoutTime;
