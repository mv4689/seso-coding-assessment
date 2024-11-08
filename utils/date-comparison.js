const compareDates = (i, j) => {
    if (i.last.date > j.last.date) return 1;
    if (i.last.date < j.last.date) return -1;
    return 0;
}

module.exports = {
    compareDates
}