export const formatTime = (time: number): string => {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor(((time % 1000) / 100));

  return `
    ${hours < 10 ? '0' + hours : hours}:
    ${minutes < 10 ? '0' + minutes : minutes}:
    ${seconds < 10 ? '0' + seconds : seconds}:
    ${milliseconds}
    `;
}
