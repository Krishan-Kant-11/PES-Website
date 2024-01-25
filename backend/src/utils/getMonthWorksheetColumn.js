const daysInMonth = (month, year) => {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
    // return new Date(year, month, 0).getDate();
};

//little-endian format (dd/mm/yyyy)
const getDateStringLE = (day, month, year) => {
    day += 1;
    month += 1;
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`; 
};

//big-endian format (yyyy-mm-dd)
const getDateStringBE = (day, month, year) => {
    day += 1;
    month += 1;
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`; 
};


const getMonthWorksheetColumn = (month, year) => {
    const days = daysInMonth(month, year);
    
    const worksheetColumns = [];
    worksheetColumns.push({ header: 'Name', key: 'name', width: 40 });
    
    for (let i=0; i<days; i++) {
        worksheetColumns.push({
            header: getDateStringLE(i, month, year),
            key: getDateStringLE(i, month, year),
            width: 15
        })
    }

    worksheetColumns.push({ header: 'Total', key: 'total', width: 15 });
    return worksheetColumns;
};

module.exports = { getMonthWorksheetColumn, getDateStringLE, getDateStringBE, daysInMonth };