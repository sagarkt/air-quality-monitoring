import formatAMPM from './time_am_pm_formatter';

export default function timeSince(date) {
  let seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return "A few seconds ago";

  let minutes = Math.floor(seconds/60)
  if(minutes < 1) return "A minute ago";

  formatAMPM(date);
}
