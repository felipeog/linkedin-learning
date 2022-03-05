import React from 'react'

import './index.css'

export function HorizontalSplit({
  children,
  leftPercentageWidth = 50,
  rightPercentageWidth = 50,
}) {
  const [left, right] = children

  return (
    <div className="HorizontalSplit">
      <div
        className="HorizontalSplit__panel"
        style={{ width: `${leftPercentageWidth}%` }}
      >
        {left}
      </div>

      <div
        className="HorizontalSplit__panel"
        style={{ width: `${rightPercentageWidth}%` }}
      >
        {right}
      </div>
    </div>
  )
}
