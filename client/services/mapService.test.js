import * as mapService from "./mapService";
import { defaultRegion, marker$ } from "./stateService";
import * as markerService from "./markerService";
import * as Location from "expo-location";
import * as expoLocation from "expo-location";

const myMock = jest.fn();
const myMock2 = jest.fn();
const myMock3 = jest.fn();

const defaultBounds = {
  minLatitude: -1500,
  maxLatitude: 1500,
  minLongitude: -1500,
  maxLongitude: 1500,
};

beforeEach(jest.restoreAllMocks);

describe("mapService", () => {
  describe("getBounds", () => {
    it("should return a square centered on a region", () => {
      const bounds = mapService.getBounds(defaultRegion);
      expect(bounds).toEqual(defaultBounds);
    });
  });
  describe("hasLocationPermission", () => {
    it("should resolve to true if permission was granted", async () => {
      Location.requestForegroundPermissionsAsync = myMock;
      myMock.mockResolvedValue({ status: "granted" });
      const call = mapService.hasLocationPermission();
      await expect(call).resolves.toBe(true);
    });
    it("should resolve to false if permission was denied", async () => {
      Location.requestForegroundPermissionsAsync = myMock;
      myMock.mockResolvedValue({ status: "denied" });
      const call = mapService.hasLocationPermission();
      await expect(call).resolves.toBe(false);
    });
  });
  describe("getUserLocation", () => {
    it("should resolves to location coordinates", async () => {
      Location.getCurrentPositionAsync = myMock;
      myMock.mockResolvedValue({ coords: "some coords" });
      const call = mapService.getUserLocation();
      await expect(call).resolves.toBe("some coords");
    });
  });
  describe("setupMarkers", () => {
    it("should resolves to false if permission was denied", async () => {
      mapService.hasLocationPermission = myMock;
      myMock.mockResolvedValue(false);
      const call = mapService.setupMarkers();
      await expect(call).resolves.toBe(false);
    });
    it("should resolves to false if it fails to update markers", async () => {
      mapService.hasLocationPermission = myMock;
      myMock.mockResolvedValue(true);
      mapService.getUserLocation = myMock2;
      myMock2.mockResolvedValue({ latitude: 0, longitude: 0 });
      markerService.updateMarkersWithinBounds = myMock3;
      myMock3.mockRejectedValue(false);
      const call = mapService.setupMarkers();
      await expect(call).resolves.toBe(false);
    });
  });
  describe("tryToGetPlaceName", () => {
    it("should update marker place name if successful", async () => {
      const address = { name: "name", street: "street" };
      expoLocation.reverseGeocodeAsync = myMock;
      myMock.mockResolvedValue([address]);
      await mapService.tryToGetPlaceName();
      expect(marker$.value.placeName).toEqual("name");
    });
    it("should leave marker as is if unsuccessful", async () => {
      expoLocation.reverseGeocodeAsync = myMock;
      myMock.mockRejectedValue();
      const initialValue = marker$.value;
      await mapService.tryToGetPlaceName();
      expect(marker$.value).toEqual(initialValue);
    });
  });
});
