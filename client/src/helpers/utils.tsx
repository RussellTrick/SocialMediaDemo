export function timeAgo(timestamp: string) {
  const currentDate = new Date();
  const previousDate = new Date(timestamp);
  const timeDifference = currentDate.getTime() - previousDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);

  if (seconds < 60) {
    return seconds + " seconds ago";
  } else if (seconds < 3600) {
    return Math.floor(seconds / 60) + " minutes ago";
  } else if (seconds < 86400) {
    return Math.floor(seconds / 3600) + " hours ago";
  } else if (seconds < 2592000) {
    return Math.floor(seconds / 86400) + " days ago";
  } else if (seconds < 31536000) {
    return Math.floor(seconds / 2592000) + " months ago";
  } else {
    return Math.floor(seconds / 31536000) + " years ago";
  }
}
