export const ScrollAnimationStyles = () => (
  <style jsx>{`
    h3 {
      color: #8a8e91;
      transition: color 0.3s ease-in-out;
    }

    h6 {
      color: #656c73;
      transition: color 0.3s ease-in-out;
    }

    .highlighted-span {
      color: #d2d4d6;
      transition: color 0.3s ease-in-out;
    }

    .scroll-active h3 {
      color: #fff !important;
    }

    .scroll-active h6 {
      color: #fff !important;
    }

    .scroll-active .highlighted-span {
      color: #f21314 !important;
    }

    svg path {
      fill: #3f464b;
      stroke: #1c2731;
      transition: all 0.3s ease-in-out;
    }

    .scroll-active svg path {
      fill: #fff !important;
      stroke: #fff !important;
    }

    .icon-span {
      transition: transform 0.3s ease-in-out;
    }

    .scroll-active .icon-span {
      transform: rotate(45deg);
    }
  `}</style>
);