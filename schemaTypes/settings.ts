export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    {
      name: 'name',
      title: 'Your Name',
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
      name: 'description',
      title: 'Site Description (for search engines)',
      description: `This won't appear on the website but may appear in Google search results.`,
      type: 'text',
      rows: 4,
      validation: (rule: any) => rule.required()
    },
    {
      name: 'colorVerticalRule',
      title: 'Vertical Rule Color',
      type: 'color',
      description: `This is the color of the vertical line that runs down the length of the page.`,
      validation: (rule: any) => rule.required()
    },
    {
      name: 'projectSetsAndOrder',
      title: 'Project Sets',
      type: 'array',
      description: `Determines which project sets appear on the page, and in which order.`,
      of: [{
        type: 'reference',
        to: { type: 'projectSet' }
      }],
      validation: (rule: any) => rule.unique()
    },
  ]
}