/** Public pricing — single source of truth for /pricing and schema. */
export const SITE_PRICING = {
  currency: { india: "INR", gcc: "AED" },
  billing: "per user / month",
  plans: [
    {
      id: "silver",
      name: "Silver",
      indiaFrom: 99,
      gccFrom: 15,
      description: "Core HR for small teams getting started",
    },
    {
      id: "gold",
      name: "Gold",
      indiaFrom: 149,
      gccFrom: 22,
      description: "HR for small and medium teams scaling operations",
      popular: true,
    },
    {
      id: "platinum",
      name: "Platinum",
      indiaFrom: 199,
      gccFrom: 30,
      description: "HR for organizations with complete automations",
    },
  ],
  note: "Modular pricing — enable only the HR, payroll, and compliance modules you need. Volume discounts for 200+ employees.",
} as const;

export function formatIndiaPrice(amount: number): string {
  return `₹${amount}`;
}

export function formatGccPrice(amount: number): string {
  return `AED ${amount}`;
}
