import { FiZap, FiShield, FiUsers, FiAward } from "react-icons/fi";

export const valuesIcons = {
  FiZap: FiZap,
  FiUsers: FiUsers,
  FiShield: FiShield,
  FiAward: FiAward,
};

export const getValueIcon = (iconName) => {
  return valuesIcons[iconName];
};

export const values = [
  {
    icon: "FiZap",
    heading: "Innovation",
    description:
      "We deliver innovative, cutting-edge solutions that help businesses thrive in the digital age.",
  },
  {
    icon: "FiShield",
    heading: "Integrity",
    description:
      "We conduct our business with honesty, transparency, and a commitment to ethical practices.",
  },
  {
    icon: "FiUsers",
    heading: "Collaboration",
    description:
      "We partner with our clients to fully understand their needs and deliver the right solutions.",
  },
  {
    icon: "FiAward",
    heading: "Excellence",
    description:
      "We strive for excellence in every solution we deliver and in every client interaction.",
  },
];
