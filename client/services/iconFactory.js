import warning from "../assets/warning.png";
import easyAccess from "../assets/easyAccess.png";
import elevator from "../assets/elevator.png";
import ramp from "../assets/ramp.png";
import stairs from "../assets/stairs.png";
import parking from "../assets/parkingSpot.png";
import badMetro from "../assets/badMetro.png";
import goodMetro from "../assets/goodMetro.png";
import codeworks from "../assets/codepng.png";

export const allIcons = [
  "ramp",
  "elevator",
  "easyAccess",
  "parking",
  "warning",
  "stairs",
  "goodMetro",
  "badMetro",
  "codeworks",
];

export function renderIcon(iconName = "") {
  if (!(iconName in icons)) {
    return "no-icon";
  }

  return icons[iconName].icon;
}

export function renderTitle(iconName = "") {
  if (!(iconName in icons)) {
    return "no-title";
  }

  return icons[iconName].title;
}

export function renderDescr(iconName = "") {
  if (!(iconName in icons)) {
    return "no-description";
  }

  return icons[iconName].description;
}

export const icons = {
  warning: {
    icon: warning,
    title: "Warning",
    description:
      "Put this marker to describe a tricky path (bad road, bumps...)",
  },
  easyAccess: {
    icon: easyAccess,
    title: "Easy access",
    description:
      "Put this marker for relatively easy paths (flat paths, no obstacles...)",
  },
  elevator: {
    icon: elevator,
    title: "Elevator",
    description:
      "Put this marker if there is an device that allows you to move up and down thanks to elelectricity.a.k.a.an elevator",
  },
  ramp: {
    icon: ramp,
    title: "Ramp",
    description:
      "Put this marker if there is an actual dedicated ramp in the location",
  },
  stairs: {
    icon: stairs,
    title: "Stairs",
    description:
      "Put this icon if there are stairs. You can precise in the description how steep they are",
  },
  parking: {
    icon: parking,
    title: "Parking spot",
    description: "Put this icon where you find a dedicated parking spot",
  },
  badMetro: {
    icon: badMetro,
    title: "Bad metro access",
    description:
      "Put this icon if the metro station has no easy access on this location",
  },
  goodMetro: {
    icon: goodMetro,
    title: "Good metro access",
    description:
      "Put this icon the the metro station has an easy acces on this location",
  },
  codeworks: {
    icon: codeworks,
    title: "Temple of frustration",
    description:
      "Put this icon if you hear screams of frustrations and noises of heads banging against walls",
  },
};
