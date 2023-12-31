import * as styles from './GlitchLogo.css'

const GlitchLogo = () => {
  return (
    <>
      <svg
        version="1.1"
        id="glitch"
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
      >
        <defs>
          <filter id="glitchshadow">
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="0"
              result="blur"
            ></feGaussianBlur>
            <feOffset dx="0" dy="0" result="offsetblur">
              <animate
                attributeName="dx"
                from="0"
                to="0"
                begin="0s"
                dur="2s"
                repeatCount="indefinite"
                values="-10;-5;15;-15;5;10"
                keyTimes="0;0.125;0.275;0.625;0.875;1"
              ></animate>
              <animate
                attributeName="dy"
                from="0"
                to="0"
                begin="0s"
                dur="1s"
                repeatCount="indefinite"
                values="1;1.5;3;1.7;-1.7;0"
                keyTimes="0;0.125;0.275;0.625;0.875;1"
              ></animate>
            </feOffset>
            <feOffset dx="60" dy="-12" result="offsetblur2" in="blur">
              <animate
                attributeName="dx"
                from="0"
                to="0"
                begin="0s"
                dur="1s"
                repeatCount="indefinite"
                values="0;5;-2;-2;-2;-5"
                keyTimes="0;0.125;0.275;0.625;0.875;1"
              ></animate>
              <animate
                attributeName="dy"
                from="0"
                to="0"
                begin="0s"
                dur="0.1s"
                repeatCount="indefinite"
                values="0;-1.7;1.7;-3;1.5;1"
                keyTimes="0;0.125;0.275;0.625;0.875;1"
              ></animate>
            </feOffset>
            <feComponentTransfer result="shadow1" in="offsetblur">
              <feFuncA type="linear" slope=".8"></feFuncA>
              <feFuncR type="discrete" tableValues="0"></feFuncR>
              <feFuncG type="discrete" tableValues="1"></feFuncG>
              <feFuncB type="discrete" tableValues="1"></feFuncB>
            </feComponentTransfer>
            <feComponentTransfer result="shadow2" in="offsetblur2">
              <feFuncA type="linear" slope=".8"></feFuncA>
              <feFuncR type="discrete" tableValues="1"></feFuncR>
              <feFuncG type="discrete" tableValues="0"></feFuncG>
              <feFuncB type="discrete" tableValues="1"></feFuncB>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="shadow1"></feMergeNode>
              <feMergeNode in="shadow2"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
      </svg>
      <img
        className={styles.image}
        src="/img/hero/logo-outline.svg"
        alt="hero-logo"
      />
    </>
  )
}

export default GlitchLogo
