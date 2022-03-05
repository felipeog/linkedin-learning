import React from 'react'

export function RegularList({
  items,
  resourceName,
  itemComponent: ItemComponent,
  listWrapper: ListWrapper = 'ul',
}) {
  return (
    <ListWrapper className="RegularList">
      {items.map((item) => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))}
    </ListWrapper>
  )
}
