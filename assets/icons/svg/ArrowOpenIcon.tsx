import * as React from "react"
import Svg, {Defs, ClipPath, Rect, G, Path, SvgProps} from "react-native-svg"

export const ArrowOpenIcon = (props: SvgProps) => (
    <Svg fill="none" {...props}>
      <Defs>
        <ClipPath id="a">
          <Rect
              width={26}
              height={26}
              fill="#fff"
              fillOpacity={0}
              rx={0}
              transform="translate(.666 .666)"
          />
        </ClipPath>
      </Defs>
      <G fill="#FFF" clipPath="url(#a)">
        <Path
            d="M9.47 10.5 14 15.02l4.53-4.52c.45-.46 1.19-.46 1.64 0 .46.45.46 1.19 0 1.64l-5.35 5.36c-.46.45-1.19.45-1.65 0l-5.35-5.36c-.46-.45-.46-1.19 0-1.64.45-.45 1.2-.46 1.65 0Z"/>
        <Path
            fillRule="evenodd"
            d="m15.13 13.89 3.4-3.39c.45-.46 1.19-.46 1.64 0 .46.45.46 1.19 0 1.64l-5.35 5.36c-.46.45-1.19.45-1.65 0l-5.35-5.36c-.46-.45-.46-1.19 0-1.64.45-.45 1.2-.46 1.65 0l3.4 3.39L14 15.02l1.13-1.13Z"
        />
      </G>
    </Svg>
)

