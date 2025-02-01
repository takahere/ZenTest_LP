Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
Japanese Career Development Platform Landing Page
</summary_title>

<image_analysis>

1. Navigation Elements:
- Top header with: 実現できる4つの理由, 転職実績・アドバイザー, 代表メッセージ, 会社紹介
- Logo placement in top left corner
- Clean, horizontal navigation structure


2. Layout Components:
- Full-width hero section (100vw)
- Main content area with 4 feature cards (300px x 200px each)
- Logo section (200px x 80px)
- Headline text block (450px width)


3. Content Sections:
- Hero banner with salary proposition (¥4.5M+)
- 4 key feature cards with icons and descriptions
- Corporate branding elements
- Professional imagery integration


4. Interactive Controls:
- Navigation menu items with hover states
- Feature cards with hover effects
- Logo as home link
- Call-to-action elements


5. Colors:
- Primary: #FF6B00 (Orange)
- Secondary: #000000 (Black)
- Accent: #FFFFFF (White)
- Background: #F5F5F5 (Light Gray)
- Text: #333333 (Dark Gray)


6. Grid/Layout Structure:
- 12-column grid system
- 20px gutters between elements
- Responsive breakpoints at 768px, 1024px
- Card grid: 2x2 on desktop, 1x4 on mobile
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Hero
│   │   └── FeatureGrid
│   ├── features/
│   │   ├── FeatureCard
│   │   └── CTAButton
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Responsive navigation system
- Feature card grid layout
- Dynamic content loading
- Internationalization support (JP/EN)


3. State Management:
```typescript
interface AppState {
├── navigation: {
│   ├── currentPage: string
│   ├── isMenuOpen: boolean
├── }
├── features: {
│   ├── cards: FeatureCard[]
│   └── activeCard: string
├── }
}
```


4. Routes:
```typescript
const routes = [
├── '/',
├── '/reasons/*',
├── '/achievements/*',
├── '/message/*',
└── '/company/*'
]
```


5. Component Architecture:
- HeaderComponent
- HeroSection
- FeatureCardGrid
- NavigationMenu
- CTAButton
- FooterComponent


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── mobile: 320px,
├── tablet: 768px,
├── desktop: 1024px,
└── wide: 1440px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.