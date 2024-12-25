import service1 from "@/assets/services-images/service1.jpeg";
import service2 from "@/assets/services-images/service2.jpeg";
import service3 from "@/assets/services-images/service3.jpeg";
import service4 from "@/assets/services-images/service4.jpeg";

import {
  FiSettings,
  FiDatabase,
  FiShield,
  FiArrowRightCircle,
  FiCheckCircle,
} from "react-icons/fi";

export const servicesIcons = {
  FiSettings: FiSettings,
  FiDatabase: FiDatabase,
  FiShield: FiShield,
  FiArrowRightCircle: FiArrowRightCircle,
  FiCheckCircle: FiCheckCircle,
};

export const getServiceIcon = (iconName) => {
  return servicesIcons[iconName];
};
export const services = [
  {
    name: "S/4 HANA Data Migration",
    longerDescription:
      "Our S/4 HANA Data Migration service helps businesses transition from legacy systems to SAP S/4 HANA with minimal disruption. We ensure a seamless, secure, and compliant migration process that maintains the integrity of your data throughout the entire lifecycle. Our team of experts works closely with you to ensure that your business operations are not interrupted during the migration, and that you experience a smooth transition to the latest SAP technologies.",
    longerBulletPoints: {
      "Comprehensive Migration": {
        icon: "FiSettings",
        description:
          "We manage every step of the migration, from initial planning and data extraction to loading and validating data in SAP S/4 HANA.",
      },
      "Data Mapping & Transformation": {
        icon: "FiDatabase",
        description:
          "We perform detailed data mapping and transformation to ensure your data is fully compatible with SAP S/4 HANA’s structure and requirements.",
      },
      "Validation & Reconciliation": {
        icon: "FiCheckCircle",
        description:
          "Full data validation and reconciliation are performed to ensure the accuracy and completeness of your data after migration.",
      },
      "Compliance & Security": {
        icon: "FiShield",
        description:
          "We adhere to strict industry compliance standards and ensure your data is migrated securely and remains protected throughout the process.",
      },
      "Post-Migration Support": {
        icon: "FiArrowRightCircle",
        description:
          "We offer continuous support after migration to ensure that your system is running smoothly and any post-migration adjustments are handled efficiently.",
      },
    },
    description:
      "Seamless migration to SAP S/4 HANA ensuring data integrity and compliance.",
    bulletPoints: [
      "End-to-end migration process",
      "Full data validation and reconciliation",
    ],
    href: "/services/s4-hana",
    src: service1.src,
    linkName: "s4-hana",
  },
  {
    name: "Data Archiving",
    longerDescription:
      "Our Data Archiving service is designed to help businesses manage their growing data volumes by securely storing legacy and inactive data. With our archiving solutions, you can optimize storage costs while ensuring that archived data is easily retrievable and remains compliant with industry standards. Whether you're archiving old transaction records or non-active customer data, we help you store it safely and efficiently.",
    longerBulletPoints: {
      "Cost Efficiency": {
        icon: "FiSettings",
        description:
          "Reduce storage costs by moving legacy and inactive data to secure, cost-effective archival solutions.",
      },
      "Data Security": {
        icon: "FiShield",
        description:
          "Ensure your archived data is protected by implementing advanced encryption and security measures.",
      },
      "Regulatory Compliance": {
        icon: "FiCheckCircle",
        description:
          "Maintain compliance with data retention and industry-specific regulations, ensuring that archived data meets necessary standards.",
      },
      "Easy Retrieval": {
        icon: "FiArrowRightCircle",
        description:
          "Easily retrieve archived data when needed, ensuring no data is lost or inaccessible during audits or business processes.",
      },
      "Long-Term Preservation": {
        icon: "FiDatabase",
        description:
          "We ensure data longevity by using formats and systems designed for long-term storage, preserving data integrity over time.",
      },
    },
    description:
      "Efficient data storage and management for legacy and inactive data.",
    bulletPoints: [
      "Optimize storage costs",
      "Ensure data security and compliance",
    ],
    href: "/services/data-archiving",
    src: service2.src,
    linkName: "data-archiving",
  },
  {
    name: "Master Data Management",
    longerDescription:
      "Our Master Data Management (MDM) service helps organizations centralize and manage their most critical data assets across all business units. With a single source of truth, we ensure that your data is accurate, consistent, and up-to-date, reducing redundancies and improving decision-making. Our MDM solution strengthens governance and enhances data quality, enabling you to have full confidence in your data-driven processes.",
    longerBulletPoints: {
      "Single Source of Truth": {
        icon: "FiDatabase",
        description:
          "Create and maintain a unified repository of critical data across all departments, eliminating inconsistencies and redundancies.",
      },
      "Data Governance": {
        icon: "FiShield",
        description:
          "Implement strict governance policies and controls to ensure that all data adheres to organizational standards and quality benchmarks.",
      },
      "Data Quality Control": {
        icon: "FiCheckCircle",
        description:
          "Monitor, cleanse, and improve the quality of your data, ensuring that it remains accurate and reliable for all business operations.",
      },
      Scalability: {
        icon: "FiArrowRightCircle",
        description:
          "Easily scale your MDM solution as your organization grows, ensuring that new data sources are integrated and managed effectively.",
      },
      "Improved Decision-Making": {
        icon: "FiSettings",
        description:
          "Leverage accurate, consistent, and timely data to make informed decisions across all business operations.",
      },
    },
    description:
      "Maintain consistent and centralized master data across the organization.",
    bulletPoints: [
      "Single source of truth for critical data",
      "Data governance and quality control",
    ],
    href: "/services/master-data-management",
    src: service3.src,
    linkName: "master-data-management",
  },
  {
    name: "Data Integration",
    longerDescription:
      "Our Data Integration service connects and unifies data from multiple systems, enabling businesses to streamline workflows, enhance collaboration, and improve decision-making. By integrating various data sources into a cohesive system, we help eliminate silos and ensure that critical information flows seamlessly across your organization, driving efficiency and better business outcomes.",
    longerBulletPoints: {
      "Seamless System Connectivity": {
        icon: "FiArrowRightCircle",
        description:
          "Connect various systems and data sources across your organization to create a unified data infrastructure.",
      },
      "Real-Time Data Integration": {
        icon: "FiSettings",
        description:
          "Ensure real-time data flow between systems, allowing your business to make up-to-date decisions based on accurate and timely information.",
      },
      "Data Synchronization": {
        icon: "FiDatabase",
        description:
          "Synchronize data across multiple platforms and databases to prevent silos and ensure data consistency throughout your organization.",
      },
      "Improved Collaboration": {
        icon: "FiCheckCircle",
        description:
          "Enable better collaboration by giving all teams access to the same up-to-date data, reducing delays and inefficiencies.",
      },
      "Enhanced Reporting & Analytics": {
        icon: "FiShield",
        description:
          "Gain deeper insights by integrating data across departments, improving the quality of your reporting and analytics efforts.",
      },
    },
    description:
      "Connect and unify data from multiple systems to enhance decision-making.",
    bulletPoints: [
      "Seamless system connectivity",
      "Improve data flow and collaboration",
    ],
    href: "/services/data-integration",
    src: service4.src,
    linkName: "data-integration",
  },
];
