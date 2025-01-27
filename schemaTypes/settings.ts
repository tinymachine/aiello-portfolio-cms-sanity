export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: `This appears as the site heading.`,
      validation: (rule: any) => rule.required()
    },
    {
      name: 'title',
      title: 'Role',
      type: 'string',
      description: `This appears as the site subhead.`,
      validation: (rule: any) => rule.required()
    },
    {
      name: 'projectSets',
      title: 'Project Sets',
      type: 'array',
      description: `Determines which project sets appear on the page, and in which order.`,
      of: [
        {
          type: 'reference',
          to: { type: 'projectSet' }
        }
      ],
      validation: (rule: any) => rule.unique()
    },
    {
      name: 'colorVerticalRule',
      title: 'Vertical Rule Color',
      type: 'color',
      description: `This is the color of the vertical line that runs down the length of the page.`,
      validation: (rule: any) => rule.required()
    },
    {
      name: 'description',
      title: 'Site Description (for search engines & social share previews)',
      description: `This won't appear on the website but may appear in search results and in a preview when the site is shared on social media or via messaging apps.`,
      type: 'text',
      rows: 4,
      validation: (rule: any) => rule.required()
    },
    {
      name: 'ogImage',
      type: 'image',
      title: 'Social Share Image',
      description:
        'This image will appear when your site is shared on social media and via messaging apps. It will be cropped to 1200x630px.',
      options: {
        hotspot: true
      },
      validation: (rule: any) => rule.required()
    }
  ]
}
