import * as React from 'react'
import { View } from 'utopia-api'
import { CanvasToolbar } from './toolbar'
import '../public/globals.css'

export var Playground = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        contain: 'layout',
      }}
    >
      <div
        style={{
          height: 150,
          position: 'absolute',
          left: 154,
          top: 134,
        }}
      >
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.jpg?raw=true'
          alt='Utopia logo'
          style={{ height: '100%' }}
        />
      </div>
      <View
        style={{
          backgroundColor: '#aaaaaa33',
          position: 'absolute',
          left: 125,
          top: 363,
          width: 172,
          height: 116,
        }}
      >
        hello
      </View>
      <CanvasToolbar
        style={{
          backgroundColor: '#aaaaaa33',
          position: 'absolute',
          left: 385,
          top: 268,
          width: 132,
          height: 174,
        }}
      />
    </div>
  )
}
