import React from 'react'

const Badge = props => {
  const statusClassMap = [
    {
      name: 'Upcomming',
      class: 'success'
    },
    {
      name: 'Expired',
      class: 'danger'
    }
  ]
  const statusTemplate = statusClassMap[props.mapKey]
  return (
    <span className={ `badge badge-${statusTemplate.class}` }>
      { statusTemplate.name }
    </span>
  )
}

export default Badge