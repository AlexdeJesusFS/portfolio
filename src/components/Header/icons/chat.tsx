const chat = ({ color = "currentColor", size = "25" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Ícone de balão de fala/chat"
  >
    <title>Balão de fala/chat</title>
    <path
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 14C9.33127 13.9998 10.6247 13.5569 11.6766 12.7409C12.7285 11.925 13.4792 10.7823 13.8104 9.49292C14.1417 8.20351 14.0347 6.84056 13.5063 5.61863C12.9779 4.3967 12.0582 3.38519 10.8918 2.74336C9.72548 2.10153 8.3788 1.86582 7.0638 2.07335C5.7488 2.28088 4.54016 2.91985 3.62816 3.88967C2.71617 4.85949 2.15261 6.10508 2.02621 7.43035C1.89982 8.75561 2.21777 10.0853 2.93 11.21L2 14L4.79 13.07C5.74972 13.6791 6.86331 14.0017 8 14Z"
    />
  </svg>
);

export default chat;
