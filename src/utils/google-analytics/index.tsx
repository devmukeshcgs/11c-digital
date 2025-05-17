import ReactGA from "react-ga";
import ReactGA4 from "react-ga4";
const InitializeGoogleAnalytics = () => {
  // Initialize UA
  ReactGA.initialize("UA-XXXXXXXX-X");
  // Initialize GA4 - Add your measurement ID
  ReactGA4.initialize("G-XXXXXXXXXX");

  console.log("GA INITIALIZED");
};

// const TrackGoogleAnalyticsEvent = (
//   category: string,
//   action: string,
//   label: string
// ) => {
//   console.log("GA event:", category, ":", action, ":", label);
//   // Send UA Event
//   ReactGA.event({
//     category: category,
//     action: action,
//     label: label,
//   });
//   // Send GA4 Event
//   ReactGA4.event({
//     category: category,
//     action: action,
//     label: label,
//   });
// };
const TrackGoogleAnalyticsEvent = (
  category,
  event_name,
  label,
  data
) => {
  console.log("GA event:", category, ":", event_name, ":", label);

  let event_params = {
    category,
    label,
    ...data
  };
  // Send GA4 Event
  ReactGA4.event(event_name, event_params);
};


export default InitializeGoogleAnalytics;
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent };
