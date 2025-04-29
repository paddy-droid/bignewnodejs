# Rendering Strategy Plan

This plan outlines the rendering strategy for components on the root page (`page.tsx`) to ensure optimal SEO, adhere to web standards, and guarantee successful builds on Netlify.

## Analysis of Components and Interactivity:

1.  **`page.tsx`**: Root page component, orchestrates rendering.
2.  **`Header.tsx`**: Contains navigation and mobile menu toggle.
3.  **`Hero.tsx`**: Contains interactive buttons.
4.  **`RepairFocus.tsx`**: Renders `ExpandableRepairContent`, which has interactive expandable functionality.
5.  **`ExpandableRepairContent.tsx`**: Manages state for expanding/collapsing content and has a button with an `onClick` handler.
6.  **`Services.tsx`**: Renders `ExpandableServiceCard`, which has interactive expandable functionality.
7.  **`ExpandableServiceCard.tsx`**: Manages state for expanding/collapsing content and has a button with an `onClick` handler.
8.  **`SpecialServices.tsx`**: Renders `SpecialServicesCTAButton`, which is an interactive button.
9.  **`SpecialServicesCTAButton.tsx`**: Interactive button component.
10. **`Contact.tsx`**: Contains interactive links and a button.
11. **`Footer.tsx`**: Typically contains static content.

## Proposed Rendering Strategy:

*   **Server Components:** Components that are purely structural or display static content.
*   **Client Components:** Components that contain state, event handlers, or rely on browser APIs, marked with `"use client";`.

## Proposed Rendering Type for Each Component:

*   `page.tsx`: **Server Component**
*   `Header.tsx`: **Server Component**
*   `Hero.tsx`: **Client Component**
*   `RepairFocus.tsx`: **Client Component**
*   `ExpandableRepairContent.tsx` : **Client Component**
*   `Services.tsx`: **Client Component**
*   `ExpandableServiceCard.tsx`: **Client Component**
*   `SpecialServices.tsx`: **Client Component**
*   `SpecialServicesCTAButton.tsx`: **Client Component**
*   `Contact.tsx`: **Client Component**
*   `Footer.tsx`: **Server Component**

## Visual Representation (Mermaid Diagram):

```mermaid
graph TD
    A[page.tsx (Server)] --> B(Header.tsx (Server))
    A --> C(Hero.tsx (Client))
    A --> D(RepairFocus.tsx (Client))
    A --> E(Services.tsx (Client))
    A --> F(SpecialServices.tsx (Client))
    A --> G(Contact.tsx (Client))
    A --> H(Footer.tsx (Server))

    D --> D1(ExpandableRepairContent.tsx (Client))
    E --> E1(ExpandableServiceCard.tsx (Client))
    F --> F1(SpecialServicesCTAButton.tsx (Client))
    B --> B1(MobileMenu.tsx (Client))
```

## Refactoring Steps:

1.  **Verify Client Components:** Ensure the `"use client";` directive is present at the top of the following files:
    *   `fensterservice/src/components/Hero.tsx`
    *   `fensterservice/src/components/RepairFocus.tsx`
    *   `fensterservice/src/components/ExpandableRepairContent.tsx`
    *   `fensterservice/src/components/Services.tsx`
    *   `fensterservice/src/components/ExpandableServiceCard.tsx`
    *   `fensterservice/src/components/SpecialServices.tsx`
    *   `fensterservice/src/components/SpecialServicesCTAButton.tsx`
    *   `fensterservice/src/components/Contact.tsx`
    *   `fensterservice/src/components/MobileMenu.tsx`
2.  **Verify Server Components:** Ensure the `"use client";` directive is *not* present in:
    *   `fensterservice/src/app/page.tsx`
    *   `fensterservice/src/components/Header.tsx`
    *   `fensterservice/src/components/Footer.tsx`
3.  **Re-add MobileMenu (Optional):** If desired, re-add the import and usage of `<MobileMenu />` in `fensterservice/src/components/Header.tsx`.
4.  **Final Code Review:** Perform a final check to ensure no Server Components pass non-serializable data to Client Components and that previous fixes are in place.
5.  **Test Build:** Commit and push changes to trigger a Netlify build.