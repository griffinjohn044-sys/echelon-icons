import React from "react";

export default function EcHome({ size = 24, className, title = "ECHELON Home", ...props }) {
  return (
    <svg
      viewBox="0 0 293 242"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...props}
    >
      <path
        d="M 141 3.5 L 151 3.5 L 159 7.5 L 160 9.5 L 172 18.5 L 174 21.5 L 186 30.5 L 188 33.5 L 202 45.5 L 202.5 8 L 204 5.5 L 208 3.5 L 242 3.5 L 246 5.5 L 247.5 8 L 247.5 84 L 254 90.5 L 266 99.5 L 268 102.5 L 279 110.5 L 281 113.5 L 285 115.5 L 287.5 119 L 288.5 121 L 287.5 125 L 279.5 136 L 275 140.5 L 272 141.5 L 269 140.5 L 146 34.5 L 26 138.5 L 21 141.5 L 17 140.5 L 4.5 125 L 3.5 122 L 6.5 116 L 11 113.5 L 13 110.5 L 19 106.5 L 20 104.5 L 33 94.5 L 34 92.5 L 38 90.5 L 48 80.5 L 88 47.5 L 90 44.5 L 118 21.5 L 120 18.5 L 132 9.5 L 133 7.5 L 141 3.5 Z M 145 51.5 L 147 51.5 L 158 60.5 L 160 63.5 L 177 76.5 L 179 79.5 L 191 88.5 L 192 90.5 L 210 104.5 L 214 109.5 L 218 111.5 L 219 113.5 L 247.5 137 L 247.5 229 L 245.5 233 L 240 237.5 L 169 237.5 L 168 167.5 L 123.5 168 L 123 237.5 L 98.5 237 L 106.5 213 L 106 208.5 L 100 208.5 L 99 209.5 L 44.5 209 L 44.5 200 L 55 168.5 L 88 168.5 L 89 167.5 L 112.5 167 L 122.5 138 L 121 136.5 L 66 137.5 L 65.5 135 L 72.5 114 L 92 96.5 L 139 96.5 L 140.5 95 L 149.5 66 L 129.5 65 L 145 51.5 Z M 89 65.5 L 89 66.5 L 105.5 66 L 89 65.5 Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
