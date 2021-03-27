module.exports = {
  siteMetadata: {
    siteUrl: "https://shahabyazdi.github.io/",
    en: {
      title: "React Multi Date Picker",
      description: "a simple React datepicker component for working with gregorian, persian, arabic and indian calendars with the ability to select the date in single, multiple and range modes.",
      keywords: ["react", "multi", "date", "picker", "datepicker", "gregorian", "persian", "arabic", "indian", "farsi", "hindi", "calendar", "component"],
      type: "website"
    },
    fa: {
      title: "دیت پیکر چند منظوره ری اکت",
      description: "دیت پیکر ری اکت  برای کار با تقویم های میلادی ، فارسی ، عربی و هندی با قابلیت انتخاب تاریخ در حالت های تکی ، چندگانه و دامنه.",
      keywords: ["ری اکت", "دیت", "پیکر", "دیت پیکر", "چند منظوره", "میلادی", "شمسی", "قمری", "هندی", "فارسی", "هجری", "تقویم", "کامپوننت"],
      type: "وب سایت"
    }
  },
  pathPrefix: "/react-multi-date-picker",
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      }
    }
  ]
}
