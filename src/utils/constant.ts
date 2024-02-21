
export const NAVBAR_DEFAULT = [
  {
    key: 1,
    text: 'Home',
    endpoint: ''
  },
  {
    key: 2,
    text: 'about us',
    endpoint: 'about-us'
  },
  {
    key: 3,
    text: 'our service',
    endpoint: 'our-services',
    children: [
      {
        number: '01/',
        title: "Web Development",
        img: "https://ik.imagekit.io/arsdfirst/spatium/image.png?updatedAt=1706252849709",
        endpoint: 'our-services/web-development',

      },
      {
        number: '02/',
        title: "Mobile App Development",
        img: "https://ik.imagekit.io/arsdfirst/spatium/image.png?updatedAt=1706252849709",
        endpoint: 'our-services/mobile-app-development',

      },
      {
        number: '03/',
        title: "Testing and Quality Assurance",
        img: "https://ik.imagekit.io/arsdfirst/spatium/image.png?updatedAt=1706252849709",
        endpoint: 'our-services/testing',

      },
      {
        number: '04/',
        title: "UI/UX Designing Service",
        img: "https://ik.imagekit.io/arsdfirst/spatium/image.png?updatedAt=1706252849709",
        endpoint: 'our-services/ui-ux',

      },
    ]
  }, {
    key: 4,
    text: 'Blog',
    endpoint: 'blog'
  },
  {
    key: 5,
    text: 'Get In Touch',
    endpoint: 'contact-us'
  }
]



export const BLOG_DETAIL_DEFAULT = (t: any) => [
  {
    title: t('blog-details-page.blogDefault.item1.title'),
    desc: t('blog-details-page.blogDefault.item1.desc'),
    method: t('blog-details-page.blogDefault.item1.method'),
    img: "https://ik.imagekit.io/arsdfirst/spatium/blog/Image%20(2).png?updatedAt=1706293190622"
  },
  {
    title: t('blog-details-page.blogDefault.item2.title'),
    desc: t('blog-details-page.blogDefault.item2.desc'),
    method: t('blog-details-page.blogDefault.item2.method'),
    img: "https://ik.imagekit.io/arsdfirst/spatium/blog/Image%20(2).png?updatedAt=1706293190622"

  },

]