export function isWithinBounds(region, bounds) {
  const { latitude, longitude } = region;
  const { maxLatitude, maxLongitude, minLatitude, minLongitude } = bounds;

  const latitudeOk = latitude <= maxLatitude && latitude >= minLatitude;
  const longitudeOk = longitude <= maxLongitude && longitude >= minLongitude;

  return latitudeOk && longitudeOk;
}

// adapt the size of the icons on the map depending on the zoom level
export function getIconSize(region) {
  if (!region) {
    return;
  }
  if (region.latitudeDelta > 0.004) {
    return 30;
  }
  return 50;
}

export function makeBoundsFilter({
  maxLatitude,
  maxLongitude,
  minLatitude,
  minLongitude,
}) {
  return function ({ latitude, longitude }) {
    const insideLatitude = latitude <= maxLatitude && latitude >= minLatitude;
    const insideLongitude =
      longitude <= maxLongitude && longitude >= minLongitude;
    return insideLatitude && insideLongitude;
  };
}
