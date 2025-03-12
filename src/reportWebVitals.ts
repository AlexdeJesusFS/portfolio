// src/reportWebVitals.ts
import {
  type Metric,
  onCLS,
  onFCP,
  onINP, // Substituí onFID por onINP
  onLCP,
  onTTFB,
} from "web-vitals";

// Tipo genérico para o callback
type WebVitalsCallback = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: WebVitalsCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onINP(onPerfEntry); // Substituí onFID por onINP
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
