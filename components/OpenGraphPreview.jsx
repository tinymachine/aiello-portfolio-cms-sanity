import React from 'react'
import { Card, Stack, Box } from '@sanity/ui'
import imageUrlBuilder from '@sanity/image-url'
import { useClient } from 'sanity'
import { getImageDimensions } from '@sanity/asset-utils'

// Open Graph Preview Component
const OpenGraphPreview = (props) => {
  const {
    name,
    title: subhead,
    description,
    ogImage
  } = props.document.displayed
  const title = `${name} · ${subhead}`

  // Configure the Sanity client
  const client = useClient({ apiVersion: '2025-01-25', useCDN: false })

  // Create image URL builder
  const builder = imageUrlBuilder(client)

  const getRectDims = (ogImage) => {
    // Get rectangle (crop) dimensions
    const imageRef = ogImage.asset._ref
    const { width, height } = getImageDimensions(imageRef)
    const crop = ogImage.crop || { top: 0, right: 0, bottom: 0, left: 0 }

    // compute the cropped image's area
    const croppedWidth = Math.floor(width * (1 - (crop.right + crop.left)))
    const croppedHeight = Math.floor(height * (1 - (crop.top + crop.bottom)))

    // compute the cropped image's position
    const left = Math.floor(width * crop.left)
    const top = Math.floor(height * crop.top)

    return {
      left,
      top,
      croppedWidth,
      croppedHeight
    }
  }

  // Helper function to generate image URL with hotspot consideration
  function urlFor(source) {
    if (!source) return null

    const { left, top, croppedWidth, croppedHeight } = getRectDims(source)

    return builder
      .image(source)
      .width(1200)
      .height(630)
      .rect(left, top, croppedWidth, croppedHeight)
      .focalPoint(source.hotspot?.x || 0.5, source.hotspot?.y || 0.5)
      .fit('crop') // Use crop to respect hotspot
      .crop('focalpoint')
      .url()
  }

  // Fallback image
  const fallbackImage = 'https://placehold.co/1200x630'

  // Get image URL or use fallback
  const imageUrl = ogImage ? urlFor(ogImage) : fallbackImage

  return (
    <Card
      tone="default"
      border
      radius={2}
      shadow={1}
      style={{
        width: '600px',
        maxWidth: '100%',
        margin: '2em auto 0',
        boxShadow: '0 4px 36px -12px rgba(0,0,0,0.5)'
      }}
    >
      <Box>
        {/* Image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Open Graph Preview"
            style={{
              display: 'block',
              width: '100%',
              height: '315px',
              objectFit: 'cover'
            }}
          />
        )}

        {/* Text Content */}
        <Box padding={4} style={{ backgroundColor: 'white' }}>
          <Stack space={1}>
            <h2
              style={{
                fontSize: '0.925em',
                fontWeight: 600,
                color: '#000',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '100%',
                margin: 0
              }}
            >
              {title || 'Default Page Title'}
            </h2>

            <h3
              style={{
                fontSize: '0.875em',
                fontWeight: 'normal',
                lineHeight: '1.4',
                color: '#666',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                margin: 0
              }}
            >
              {description || 'Default description for the page'}
            </h3>
          </Stack>
        </Box>
      </Box>
    </Card>
  )
}

export { OpenGraphPreview }
