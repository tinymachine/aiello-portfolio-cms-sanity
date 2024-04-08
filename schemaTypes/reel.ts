export default {
  name: 'reel',
  title: 'Reel',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    {
      name: 'vimeoUrl',
      title: 'Vimeo URL',
      type: 'string',
      description: `
        Note: the site currently only works with video URLs
        from Vimeo that end with the video's ID number
        (e.g. https://vimeo.com/manage/videos/644686119)
      `,
      validation: (rule: any) => rule.required()
    },
    {
      name: 'placeholderStills',
      title: 'Placeholder Stills',
      type: 'array',
      description: `
        These images will display as a rotating set
        before you click to view the reel.
      `,
      of: [
        { type: 'image' }
      ],
      options: {
        layout: 'list'
      }
    },
  ]
}