const geolib = require('geolib');

const calculateDistance = (ulat, ulon, vlat, vlon) => {
    const distance = geolib.getDistance(
        { latitude: ulat, longitude: ulon },
        { latitude: vlat, longitude: vlon }
    );
    
    return distance;
};

module.exports = calculateDistance;