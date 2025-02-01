Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /-4- (Four Reasons)
- /- (Company Introduction)

Page Implementations:
/-4-:
Core Purpose: Showcase the four key reasons why customers can achieve success with the company
Key Components
- ReasonCard: Visual cards displaying each reason with icon and description
- AnimatedCounter: Shows relevant statistics

/numbers
- CTASection: Call-to-action for learning more
Layout Structure:
- Hero section with headline
- Grid layout for 4 reason cards
- Supporting statistics section
- Bottom CTA section
- Responsive grid adjusts from 4 columns to 2 to 1 on smaller screens

/-
Core Purpose: Present comprehensive company information and build trust
Key Components
- CompanyOverview: Key company details and mission
- TeamSection: Leadership team profiles
- HistoryTimeline: Company milestones
- OfficeLocations: Map and address information
Layout Structure
- Full-width hero with company vision
- Two-column layout for company details
- Timeline section spanning full width
- Grid layout for team members
- Contact information footer

Layouts:
MainLayout:
Applicable routes
- All pages
Core components
- Header with navigation
- Footer with company info
- Breadcrumb navigation
Responsive behavior
- Sticky header on desktop
- Hamburger menu on mobile
- Fluid container width with max-width
- Consistent padding across breakpoints

ContentLayout
Applicable routes
- /-4-
- /-
Core components
- Page title component
- Section dividers
- Sidebar navigation (desktop)
Responsive behavior
- Single column on mobile (<768px)
- Two columns on tablet (768px-1024px)
- Three columns on desktop (>1024px)
- Adjustable spacing based on viewport
</page-structure-prompt>