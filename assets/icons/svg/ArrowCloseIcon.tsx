import * as React from "react"
import Svg, {SvgProps, Defs, ClipPath, Rect, G, Path} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg fill="none" {...props}>
      <Defs>
        <ClipPath id="a">
          <Rect
              width={27.2}
              height={27.2}
              fill="#fff"
              fillOpacity={0}
              rx={0}
              transform="translate(.4 .4)"
          />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)">
        <Path
            stroke="#FAFAFA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m7 17.5 7-7 7 7"
        />
      </G>
    </Svg>
)
export default SvgComponent