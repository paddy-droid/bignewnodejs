# Plan to Fix Netlify Build Errors

Based on the Netlify deploy error log, the build is failing due to ESLint errors related to unused variables in `src/components/ServiceCard.tsx` and `src/components/Services.tsx`.

## Identified Issues:

*   **`src/components/ServiceCard.tsx`**: Unused imported icons (`Square`, `Home`, `Sun`, `Shield`, `DoorClosed`) from `lucide-react`.
*   **`src/components/Services.tsx`**: Unused imported component (`ExpandableServiceCard`), unused variable definition (`iconWrapperStyle`), and unused variable assignment (`const Icon = service.icon;`).

## Plan:

1.  **Modify `fensterservice/src/components/ServiceCard.tsx`**:
    *   Remove the unused imports of `Square`, `Home`, `Sun`, `Shield`, and `DoorClosed` from `lucide-react`.
2.  **Modify `fensterservice/src/components/Services.tsx`**:
    *   Remove the unused import of `ExpandableServiceCard`.
    *   Remove the unused variable definition `iconWrapperStyle`.
    *   Remove the unused variable assignment `const Icon = service.icon;` inside the `services.map` loop.

## Implementation:

After confirming this plan, I will switch to 'code' mode to implement these changes directly in the specified files.