var lonlat2coord = function(lon, lat) {
    var x = (lon + 180.0) / 360.0 * width;
    var y = height / 180.0 * (90.0 - lat);
    return [x, y]
}