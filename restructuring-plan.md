# Twistly CBD Website Restructuring Plan

## Overview
This document outlines the step-by-step plan to restructure the Twistly CBD website, focusing on moving content from the main landing page to respective category pages. The goal is to make the landing page more concise and focused while preserving the comprehensive content in dedicated category pages.

## Current Issues
- Main page is too lengthy with multiple full sections
- Users unlikely to scroll through all content
- Performance concerns with heavy landing page
- Content organization could be improved

## Restructuring Goals
- Create a more concise, focused landing page
- Move detailed sections to their respective category pages
- Preserve existing high-quality content
- Improve user navigation and experience

## Pre-Implementation Steps
1. **Create Git backup**
   - Commit all current changes
   - Create a new branch for restructuring
   - Push to remote repository

2. **Fix existing errors**
   - Fix the Table component import error in hybrid-and-mushrooms page
   - Ensure PawPrint is used instead of Paw in pet-section component

3. **Create missing page structure**
   - Create pet-cbd page structure at src/app/pet-cbd/page.tsx

## Implementation Plan

### Phase 1: Category Page Updates (One-by-One Approach)

#### Update Health and Wellness Page
1. Backup src/app/health-and-wellness/page.tsx
2. Modify the page to include:
   - Original page content (keep existing structure)
   - Add the Health section component from main page
   - Ensure proper imports and state management
3. Test thoroughly before proceeding to next section

#### Update Sport and Recovery Page
1. Backup src/app/sport-and-recovery/page.tsx
2. Modify the page to include:
   - Original page content (keep existing structure)
   - Add the Sport section component from main page
   - Ensure proper imports and state management
3. Test thoroughly before proceeding to next section

#### Update Beauty and Cosmetics Page
1. Backup src/app/beauty-and-cosmetics/page.tsx
2. Modify the page to include:
   - Original page content (keep existing structure)
   - Add the Beauty section component from main page
   - Ensure proper imports and state management
3. Test thoroughly before proceeding to next section

#### Create Pet CBD Page
1. Create new src/app/pet-cbd/page.tsx
2. Incorporate:
   - Similar structure to other category pages
   - Pet section component from main page
   - Appropriate header, navigation, and page elements
3. Test thoroughly before proceeding to next section

#### Update Hybrid and Mushrooms Page
1. Backup src/app/hybrid-and-mushrooms/page.tsx
2. Modify the page to include:
   - Original page content (keep existing structure)
   - Add the Hybrid section component from main page
   - Ensure proper imports and state management
3. Test thoroughly before proceeding to next phase

### Phase 2: Landing Page Redesign

1. Backup src/app/page.tsx
2. Restructure the landing page to:
   - Keep Hero section
   - Keep Featured Categories section (with clearer category links)
   - Keep a condensed CBD Doctor section
   - Add testimonials highlights section
   - Add blog/article highlights section
   - Create strong CTA section
   - Keep footer elements

3. Ensure proper navigation to all category pages
4. Test thoroughly

### Phase 3: Testing and Refinement

1. Test all pages for:
   - Functionality
   - Navigation
   - Mobile responsiveness
   - Performance
   - Content accuracy

2. Gather feedback and make adjustments
3. Deploy updates

## Implementation Sequence
1. Backup to Git
2. Create Pet CBD page structure
3. Implement Health page changes
4. Implement Sport page changes
5. Implement Beauty page changes
6. Implement Pet page changes
7. Implement Hybrid page changes
8. Implement Landing page changes
9. Final testing
10. Secondary Git backup before deployment

## Risk Mitigation
- Make small, incremental changes and test after each step
- Maintain Git backups at each significant stage
- Keep original component files untouched initially
- Use feature branches for development
- Create local backups of critical files

## Future Considerations
- After initial restructuring, evaluate which content to keep or remove
- Consider creating a more robust navigation system
- Evaluate page-specific performance optimizations
- Consider A/B testing for landing page variations 