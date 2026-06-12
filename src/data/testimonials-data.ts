/** Testimonials + aggregate rating for UI and Review schema. */
export const TESTIMONIALS = [
  {
    name: "Mohideen Kader",
    role: "Head of HR",
    company: "Lulu International Exchange LLC",
    image: "/p2.svg",
    rating: 5,
    quote:
      "OfficeKit HR is an easy-to-use employee management software, fully customizable HRMS which made our tedious tasks of daily HR process so easy.",
  },
  {
    name: "Anees",
    role: "Head of HR",
    company: "Thai Group",
    image: "/p3.svg",
    rating: 5,
    quote:
      "OfficeKit HR lets you put your thoughts together in a very concise format through the best HR software and it really helps you present your best phase.",
  },
  {
    name: "Venugopal",
    role: "Chief Executive Officer",
    company: "Buchprufer",
    image: "/placeholder.svg",
    rating: 5,
    quote:
      "We have been using OfficeKit HR for the last couple of years, and it has helped us through the growth and management of our company.",
  },
  {
    name: "Sajitha",
    role: "HR Manager",
    company: "Midac Electronics",
    image: "/placeholder.svg",
    rating: 5,
    quote:
      "Statutory payroll for India and WPS for UAE on one platform saved our HR team weeks every month.",
  },
] as const;

export const AGGREGATE_RATING = {
  ratingValue: "4.8",
  reviewCount: "47",
  bestRating: "5",
  worstRating: "1",
} as const;
