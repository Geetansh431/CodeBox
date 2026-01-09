import { db } from '@/config/db';
import { CourseChaptersTable } from '@/config/schema';
import { NextResponse, NextRequest } from 'next/server';

// REACT DATA
const REACT_DATA = [
  {
    id: 1,
    name: 'Introduction to React',
    desc: 'Learn what React is and why it revolutionizes modern web development.',
    exercises: [
      {
        name: 'Meet React',
        slug: 'meet-react',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Your First Component',
        slug: 'your-first-component',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'JSX Magic',
        slug: 'jsx-magic',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'React vs Vanilla JS',
        slug: 'react-vs-vanilla-js',
        xp: 15,
        difficulty: 'easy',
      },
      {
        name: 'Component Detective',
        slug: 'component-detective',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Build a Hello World',
        slug: 'build-a-hello-world',
        xp: 25,
        difficulty: 'easy',
      },
    ],
  },
  {
    id: 2,
    name: 'Components Basics',
    desc: 'Master the building blocks of React applications.',
    exercises: [
      {
        name: 'Functional Components',
        slug: 'functional-components',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Component Composition',
        slug: 'component-composition',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Export & Import',
        slug: 'export-and-import',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Component Hierarchy',
        slug: 'component-hierarchy',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Reusable Components',
        slug: 'reusable-components',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Build a Card Component',
        slug: 'build-a-card-component',
        xp: 35,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 3,
    name: 'Props',
    desc: 'Pass data between components using props.',
    exercises: [
      {
        name: 'Understanding Props',
        slug: 'understanding-props',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Passing Props',
        slug: 'passing-props',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Props Destructuring',
        slug: 'props-destructuring',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Default Props',
        slug: 'default-props',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Children Props',
        slug: 'children-props',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Build a Profile Card',
        slug: 'build-a-profile-card',
        xp: 40,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 4,
    name: 'State Management',
    desc: 'Make your components interactive with state.',
    exercises: [
      {
        name: 'Introduction to State',
        slug: 'introduction-to-state',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'useState Hook',
        slug: 'usestate-hook',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Updating State',
        slug: 'updating-state',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'State vs Props',
        slug: 'state-vs-props',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Build a Counter',
        slug: 'build-a-counter',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Toggle Visibility',
        slug: 'toggle-visibility',
        xp: 30,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 5,
    name: 'Event Handling',
    desc: 'Respond to user interactions like clicks and input changes.',
    exercises: [
      {
        name: 'onClick Events',
        slug: 'onclick-events',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Event Object',
        slug: 'event-object',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Input Events',
        slug: 'input-events',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Form Handling',
        slug: 'form-handling',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Prevent Default',
        slug: 'prevent-default',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Build a Search Bar',
        slug: 'build-a-search-bar',
        xp: 40,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 6,
    name: 'Conditional Rendering',
    desc: 'Display components based on conditions.',
    exercises: [
      {
        name: 'If-Else in JSX',
        slug: 'if-else-in-jsx',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Ternary Operators',
        slug: 'ternary-operators',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Logical AND',
        slug: 'logical-and',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Show/Hide Components',
        slug: 'show-hide-components',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Loading States',
        slug: 'loading-states',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Build a Login Gate',
        slug: 'build-a-login-gate',
        xp: 40,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 7,
    name: 'Lists & Keys',
    desc: 'Render dynamic lists and understand the importance of keys.',
    exercises: [
      {
        name: 'Map Over Arrays',
        slug: 'map-over-arrays',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Understanding Keys',
        slug: 'understanding-keys',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Unique Keys',
        slug: 'unique-keys',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Filter Lists',
        slug: 'filter-lists',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Build a Todo List',
        slug: 'build-a-todo-list',
        xp: 45,
        difficulty: 'medium',
      },
      {
        name: 'Dynamic User List',
        slug: 'dynamic-user-list',
        xp: 40,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 8,
    name: 'Styling in React',
    desc: 'Apply styles to React components using different methods.',
    exercises: [
      {
        name: 'Inline Styles',
        slug: 'inline-styles',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'CSS Classes',
        slug: 'css-classes',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'CSS Modules',
        slug: 'css-modules',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Dynamic Styling',
        slug: 'dynamic-styling',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Conditional Classes',
        slug: 'conditional-classes',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Build a Themed Button',
        slug: 'build-a-themed-button',
        xp: 35,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 9,
    name: 'useEffect Hook',
    desc: 'Handle side effects in functional components.',
    exercises: [
      {
        name: 'Introduction to useEffect',
        slug: 'introduction-to-useeffect',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Dependency Array',
        slug: 'dependency-array',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Cleanup Functions',
        slug: 'cleanup-functions',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Fetch Data',
        slug: 'fetch-data',
        xp: 45,
        difficulty: 'medium',
      },
      {
        name: 'Timer & Intervals',
        slug: 'timer-and-intervals',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Build a Data Fetcher',
        slug: 'build-a-data-fetcher',
        xp: 50,
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 10,
    name: 'Forms in React',
    desc: 'Build controlled and uncontrolled forms.',
    exercises: [
      {
        name: 'Controlled Inputs',
        slug: 'controlled-inputs',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Multiple Inputs',
        slug: 'multiple-inputs',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Form Validation',
        slug: 'form-validation',
        xp: 45,
        difficulty: 'medium',
      },
      {
        name: 'Checkbox & Radio',
        slug: 'checkbox-and-radio',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Select Dropdown',
        slug: 'select-dropdown',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Build a Registration Form',
        slug: 'build-a-registration-form',
        xp: 50,
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 11,
    name: 'React Router Basics',
    desc: 'Navigate between different pages in your React app.',
    exercises: [
      {
        name: 'Setup Router',
        slug: 'setup-router',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Route Components',
        slug: 'route-components',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Link Navigation',
        slug: 'link-navigation',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'URL Parameters',
        slug: 'url-parameters',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Nested Routes',
        slug: 'nested-routes',
        xp: 45,
        difficulty: 'medium',
      },
      {
        name: 'Build a Multi-Page App',
        slug: 'build-a-multi-page-app',
        xp: 50,
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 12,
    name: 'React Best Practices',
    desc: 'Write clean, performant, and maintainable React code.',
    exercises: [
      {
        name: 'Component Organization',
        slug: 'component-organization',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Avoid Prop Drilling',
        slug: 'avoid-prop-drilling',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Memoization',
        slug: 'memoization',
        xp: 45,
        difficulty: 'hard',
      },
      {
        name: 'Code Splitting',
        slug: 'code-splitting',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Error Boundaries',
        slug: 'error-boundaries',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Optimize Performance',
        slug: 'optimize-performance',
        xp: 50,
        difficulty: 'hard',
      },
    ],
  },
];

// CSS DATA
const CSS_DATA = [
  {
    id: 1,
    name: 'Introduction to CSS',
    desc: 'Discover how CSS transforms plain HTML into beautiful web pages.',
    exercises: [
      {
        name: 'What is CSS',
        slug: 'what-is-css',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Link a Stylesheet',
        slug: 'link-a-stylesheet',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Inline vs External',
        slug: 'inline-vs-external',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'CSS Syntax',
        slug: 'css-syntax',
        xp: 15,
        difficulty: 'easy',
      },
      {
        name: 'Your First Style',
        slug: 'your-first-style',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Style Detective',
        slug: 'style-detective',
        xp: 25,
        difficulty: 'easy',
      },
    ],
  },
  {
    id: 2,
    name: 'CSS Selectors',
    desc: 'Target HTML elements using different selector types.',
    exercises: [
      {
        name: 'Element Selector',
        slug: 'element-selector',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Class Selector',
        slug: 'class-selector',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'ID Selector',
        slug: 'id-selector',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Descendant Selector',
        slug: 'descendant-selector',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Attribute Selector',
        slug: 'attribute-selector',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Selector Challenge',
        slug: 'selector-challenge',
        xp: 35,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 3,
    name: 'Colors & Backgrounds',
    desc: 'Apply colors, backgrounds, and visual effects.',
    exercises: [
      {
        name: 'Text Colors',
        slug: 'text-colors',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Background Colors',
        slug: 'background-colors',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'RGB & Hex',
        slug: 'rgb-and-hex',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Background Images',
        slug: 'background-images',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Gradients',
        slug: 'gradients',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Create a Hero Section',
        slug: 'create-a-hero-section',
        xp: 40,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 4,
    name: 'Text Styling',
    desc: 'Control fonts, sizes, spacing, and text appearance.',
    exercises: [
      {
        name: 'Font Family',
        slug: 'font-family',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Font Size & Weight',
        slug: 'font-size-and-weight',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Text Alignment',
        slug: 'text-alignment',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Line Height & Spacing',
        slug: 'line-height-and-spacing',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Text Decoration',
        slug: 'text-decoration',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Typography Challenge',
        slug: 'typography-challenge',
        xp: 35,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 5,
    name: 'Box Model',
    desc: 'Understand margin, padding, border, and content dimensions.',
    exercises: [
      {
        name: 'Understanding the Box',
        slug: 'understanding-the-box',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Padding Power',
        slug: 'padding-power',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Margin Magic',
        slug: 'margin-magic',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Border Styles',
        slug: 'border-styles',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Width & Height',
        slug: 'width-and-height',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Build a Card Layout',
        slug: 'build-a-card-layout',
        xp: 40,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 6,
    name: 'Display & Positioning',
    desc: 'Control element flow and positioning on the page.',
    exercises: [
      {
        name: 'Display Property',
        slug: 'display-property',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Block vs Inline',
        slug: 'block-vs-inline',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Position Static',
        slug: 'position-static',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Relative Positioning',
        slug: 'relative-positioning',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Absolute Positioning',
        slug: 'absolute-positioning',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Fixed & Sticky',
        slug: 'fixed-and-sticky',
        xp: 40,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 7,
    name: 'Flexbox',
    desc: 'Create flexible, responsive layouts with Flexbox.',
    exercises: [
      {
        name: 'Flex Container',
        slug: 'flex-container',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Flex Direction',
        slug: 'flex-direction',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Justify Content',
        slug: 'justify-content',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Align Items',
        slug: 'align-items',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Flex Wrap',
        slug: 'flex-wrap',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Build a Navigation Bar',
        slug: 'build-a-navigation-bar',
        xp: 45,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 8,
    name: 'CSS Grid',
    desc: 'Build complex two-dimensional layouts with Grid.',
    exercises: [
      {
        name: 'Grid Container',
        slug: 'grid-container',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Grid Template',
        slug: 'grid-template',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Grid Gap',
        slug: 'grid-gap',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Grid Areas',
        slug: 'grid-areas',
        xp: 45,
        difficulty: 'medium',
      },
      {
        name: 'Responsive Grid',
        slug: 'responsive-grid',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Build a Dashboard Layout',
        slug: 'build-a-dashboard-layout',
        xp: 50,
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 9,
    name: 'Responsive Design',
    desc: 'Make your websites work on all screen sizes.',
    exercises: [
      {
        name: 'Viewport Meta Tag',
        slug: 'viewport-meta-tag',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Media Queries',
        slug: 'media-queries',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Breakpoints',
        slug: 'breakpoints',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Fluid Layouts',
        slug: 'fluid-layouts',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Mobile First Design',
        slug: 'mobile-first-design',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Build a Responsive Page',
        slug: 'build-a-responsive-page',
        xp: 50,
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 10,
    name: 'Transitions & Animations',
    desc: 'Add motion and interactivity to your designs.',
    exercises: [
      {
        name: 'CSS Transitions',
        slug: 'css-transitions',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Hover Effects',
        slug: 'hover-effects',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Transform Property',
        slug: 'transform-property',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Keyframe Animations',
        slug: 'keyframe-animations',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Animation Timing',
        slug: 'animation-timing',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Build an Animated Button',
        slug: 'build-an-animated-button',
        xp: 45,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 11,
    name: 'Advanced Selectors',
    desc: 'Master pseudo-classes, pseudo-elements, and complex selectors.',
    exercises: [
      {
        name: 'Pseudo-Classes',
        slug: 'pseudo-classes',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'First & Last Child',
        slug: 'first-and-last-child',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Nth-Child',
        slug: 'nth-child',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Pseudo-Elements',
        slug: 'pseudo-elements',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Before & After',
        slug: 'before-and-after',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Advanced Selector Challenge',
        slug: 'advanced-selector-challenge',
        xp: 45,
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 12,
    name: 'CSS Best Practices',
    desc: 'Write maintainable, scalable, and efficient CSS.',
    exercises: [
      {
        name: 'CSS Organization',
        slug: 'css-organization',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'BEM Methodology',
        slug: 'bem-methodology',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'CSS Variables',
        slug: 'css-variables',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Performance Optimization',
        slug: 'performance-optimization',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Browser Compatibility',
        slug: 'browser-compatibility',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Code Refactoring',
        slug: 'code-refactoring',
        xp: 45,
        difficulty: 'hard',
      },
    ],
  },
];

// PYTHON DATA
const PYTHON_DATA = [
  {
    id: 1,
    name: 'Introduction to Python',
    desc: 'Start your programming journey with Python basics.',
    exercises: [
      {
        name: 'What is Python',
        slug: 'what-is-python',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Your First Program',
        slug: 'your-first-program',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Print Function',
        slug: 'print-function',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Python Syntax',
        slug: 'python-syntax',
        xp: 15,
        difficulty: 'easy',
      },
      {
        name: 'Comments',
        slug: 'comments',
        xp: 15,
        difficulty: 'easy',
      },
      {
        name: 'Python Detective',
        slug: 'python-detective',
        xp: 25,
        difficulty: 'easy',
      },
    ],
  },
  {
    id: 2,
    name: 'Variables & Data Types',
    desc: 'Store and work with different types of data.',
    exercises: [
      {
        name: 'Creating Variables',
        slug: 'creating-variables',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Data Types',
        slug: 'data-types',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Type Conversion',
        slug: 'type-conversion',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'String Operations',
        slug: 'string-operations',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'User Input',
        slug: 'user-input',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Build a Calculator',
        slug: 'build-a-calculator',
        xp: 35,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 3,
    name: 'Operators',
    desc: 'Perform calculations and comparisons.',
    exercises: [
      {
        name: 'Arithmetic Operators',
        slug: 'arithmetic-operators',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Comparison Operators',
        slug: 'comparison-operators',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Logical Operators',
        slug: 'logical-operators',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Assignment Operators',
        slug: 'assignment-operators',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Operator Precedence',
        slug: 'operator-precedence',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Expression Challenge',
        slug: 'expression-challenge',
        xp: 30,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 4,
    name: 'Conditional Statements',
    desc: 'Make decisions in your code with if-else statements.',
    exercises: [
      {
        name: 'If Statement',
        slug: 'if-statement',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Else Clause',
        slug: 'else-clause',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Elif Chain',
        slug: 'elif-chain',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Nested Conditions',
        slug: 'nested-conditions',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Boolean Logic',
        slug: 'boolean-logic',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Build a Grade Calculator',
        slug: 'build-a-grade-calculator',
        xp: 40,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 5,
    name: 'Loops',
    desc: 'Repeat actions with for and while loops.',
    exercises: [
      {
        name: 'For Loop Basics',
        slug: 'for-loop-basics',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'While Loop',
        slug: 'while-loop',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Range Function',
        slug: 'range-function',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Break & Continue',
        slug: 'break-and-continue',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Nested Loops',
        slug: 'nested-loops',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Build a Pattern Printer',
        slug: 'build-a-pattern-printer',
        xp: 40,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 6,
    name: 'Lists',
    desc: 'Work with ordered collections of data.',
    exercises: [
      {
        name: 'Creating Lists',
        slug: 'creating-lists',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'List Indexing',
        slug: 'list-indexing',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'List Methods',
        slug: 'list-methods',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'List Slicing',
        slug: 'list-slicing',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'List Comprehension',
        slug: 'list-comprehension',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Build a Shopping List',
        slug: 'build-a-shopping-list',
        xp: 45,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 7,
    name: 'Functions',
    desc: 'Create reusable blocks of code.',
    exercises: [
      {
        name: 'Define a Function',
        slug: 'define-a-function',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Function Parameters',
        slug: 'function-parameters',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Return Values',
        slug: 'return-values',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Default Arguments',
        slug: 'default-arguments',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Scope',
        slug: 'scope',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Build a Function Library',
        slug: 'build-a-function-library',
        xp: 45,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 8,
    name: 'Dictionaries',
    desc: 'Store data in key-value pairs.',
    exercises: [
      {
        name: 'Creating Dictionaries',
        slug: 'creating-dictionaries',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Accessing Values',
        slug: 'accessing-values',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Dictionary Methods',
        slug: 'dictionary-methods',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Iterating Dictionaries',
        slug: 'iterating-dictionaries',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Nested Dictionaries',
        slug: 'nested-dictionaries',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Build a Contact Book',
        slug: 'build-a-contact-book',
        xp: 45,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 9,
    name: 'File Handling',
    desc: 'Read from and write to files.',
    exercises: [
      {
        name: 'Open & Close Files',
        slug: 'open-and-close-files',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Reading Files',
        slug: 'reading-files',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Writing Files',
        slug: 'writing-files',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'With Statement',
        slug: 'with-statement',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'File Modes',
        slug: 'file-modes',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Build a Note Saver',
        slug: 'build-a-note-saver',
        xp: 45,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 10,
    name: 'Exception Handling',
    desc: 'Handle errors gracefully in your programs.',
    exercises: [
      {
        name: 'Try-Except Blocks',
        slug: 'try-except-blocks',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Multiple Exceptions',
        slug: 'multiple-exceptions',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Finally Clause',
        slug: 'finally-clause',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Raising Exceptions',
        slug: 'raising-exceptions',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Custom Exceptions',
        slug: 'custom-exceptions',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Build a Robust Calculator',
        slug: 'build-a-robust-calculator',
        xp: 45,
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 11,
    name: 'Modules & Packages',
    desc: 'Organize and reuse code across files.',
    exercises: [
      {
        name: 'Import Modules',
        slug: 'import-modules',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Built-in Modules',
        slug: 'built-in-modules',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Create Your Module',
        slug: 'create-your-module',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'From Import',
        slug: 'from-import',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Explore Packages',
        slug: 'explore-packages',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Build a Utility Library',
        slug: 'build-a-utility-library',
        xp: 45,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 12,
    name: 'Python Best Practices',
    desc: 'Write clean, efficient, and Pythonic code.',
    exercises: [
      {
        name: 'PEP 8 Style Guide',
        slug: 'pep-8-style-guide',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Code Documentation',
        slug: 'code-documentation',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'List vs Generator',
        slug: 'list-vs-generator',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Code Optimization',
        slug: 'code-optimization',
        xp: 45,
        difficulty: 'hard',
      },
      {
        name: 'Debugging Techniques',
        slug: 'debugging-techniques',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Refactor Challenge',
        slug: 'refactor-challenge',
        xp: 40,
        difficulty: 'hard',
      },
    ],
  },
];

// HTML DATA
const HTML_DATA = [
  {
    id: 1,
    name: 'Introduction to HTML',
    desc: 'Discover the foundation of every webpage and learn how HTML shapes the digital world.',
    exercises: [
      {
        name: 'Explore the Web Skeleton',
        slug: 'explore-the-web-skeleton',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Build Your Base Camp',
        slug: 'build-your-base-camp',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Name Your World',
        slug: 'name-your-world',
        xp: 15,
        difficulty: 'easy',
      },
      {
        name: 'Break & Repair',
        slug: 'break-and-repair',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'HTML Detective',
        slug: 'html-detective',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Element Collector',
        slug: 'element-collector',
        xp: 25,
        difficulty: 'easy',
      },
    ],
  },
  {
    id: 2,
    name: 'HTML Boilerplate',
    desc: 'Understand the core structure that every HTML document begins with.',
    exercises: [
      {
        name: 'Build the Core Structure',
        slug: 'build-the-core-structure',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Fix the Broken Blueprint',
        slug: 'fix-the-broken-blueprint',
        xp: 30,
        difficulty: 'easy',
      },
      {
        name: 'Boost Meta Power',
        slug: 'boost-meta-power',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Add Language Identity',
        slug: 'add-language-identity',
        xp: 10,
        difficulty: 'easy',
      },
      {
        name: 'Viewport Setup',
        slug: 'viewport-setup',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Author Credit',
        slug: 'author-credit',
        xp: 15,
        difficulty: 'easy',
      },
    ],
  },
  {
    id: 3,
    name: 'Head & Body Tags',
    desc: 'Learn the difference between behind-the-scenes metadata and visible page content.',
    exercises: [
      {
        name: 'Mind vs Body',
        slug: 'mind-vs-body',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Activate Styles',
        slug: 'activate-styles',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Display Your Content',
        slug: 'display-your-content',
        xp: 15,
        difficulty: 'easy',
      },
      {
        name: 'Add External Script',
        slug: 'add-external-script',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Meta Collection',
        slug: 'meta-collection',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Body Structure Challenge',
        slug: 'body-structure-challenge',
        xp: 25,
        difficulty: 'easy',
      },
    ],
  },
  {
    id: 4,
    name: 'Text Formatting',
    desc: 'Format your content with headings, paragraphs, bold, italic, and more.',
    exercises: [
      {
        name: 'Create the Text Realm',
        slug: 'create-the-text-realm',
        xp: 30,
        difficulty: 'easy',
      },
      { name: 'Power Words', slug: 'power-words', xp: 20, difficulty: 'easy' },
      {
        name: 'Build a Story Block',
        slug: 'build-a-story-block',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Line Break Mastery',
        slug: 'line-break-mastery',
        xp: 15,
        difficulty: 'easy',
      },
      {
        name: 'Quote Chamber',
        slug: 'quote-chamber',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Code Snippet Display',
        slug: 'code-snippet-display',
        xp: 30,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 5,
    name: 'Links & Navigation',
    desc: 'Create portals between pages and build simple navigation.',
    exercises: [
      {
        name: 'Create a Warp Gate',
        slug: 'create-a-warp-gate',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Open a New Dimension',
        slug: 'open-a-new-dimension',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Navigation Builder',
        slug: 'navigation-builder',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Anchor Teleport',
        slug: 'anchor-teleport',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Email Portal',
        slug: 'email-portal',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Button Link Trick',
        slug: 'button-link-trick',
        xp: 25,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 6,
    name: 'Images',
    desc: 'Display images, control sizing, and optimize accessibility.',
    exercises: [
      {
        name: 'Summon an Image',
        slug: 'summon-an-image',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Vision for All',
        slug: 'vision-for-all',
        xp: 15,
        difficulty: 'easy',
      },
      {
        name: 'Image Grid Challenge',
        slug: 'image-grid-challenge',
        xp: 35,
        difficulty: 'medium',
      },
      { name: 'Resize Hero', slug: 'resize-hero', xp: 20, difficulty: 'easy' },
      {
        name: 'Caption Creator',
        slug: 'caption-creator',
        xp: 25,
        difficulty: 'medium',
      },
      {
        name: 'Broken Image Test',
        slug: 'broken-image-test',
        xp: 15,
        difficulty: 'easy',
      },
    ],
  },
  {
    id: 7,
    name: 'Lists',
    desc: 'Structure grouped information using ordered, unordered, and description lists.',
    exercises: [
      {
        name: 'Bullet Creator',
        slug: 'bullet-creator',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Number Builder',
        slug: 'number-builder',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Nested List Challenge',
        slug: 'nested-list-challenge',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Description Vault',
        slug: 'description-vault',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Task Checklist',
        slug: 'task-checklist',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Navigation with Lists',
        slug: 'navigation-with-lists',
        xp: 35,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 8,
    name: 'Tables',
    desc: 'Represent information in structured grid format.',
    exercises: [
      {
        name: 'Table Blueprint',
        slug: 'table-blueprint',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Add Column Headers',
        slug: 'add-column-headers',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Merge the Cells',
        slug: 'merge-the-cells',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Student Report Table',
        slug: 'student-report-table',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Border Styling',
        slug: 'border-styling',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Header Footer Rows',
        slug: 'header-footer-rows',
        xp: 30,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 9,
    name: 'Forms Basics',
    desc: 'Collect user input using form controls like input, labels, and buttons.',
    exercises: [
      {
        name: 'Create a Login Portal',
        slug: 'create-a-login-portal',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Design a Contact Form',
        slug: 'design-a-contact-form',
        xp: 45,
        difficulty: 'medium',
      },
      {
        name: 'Placeholder Magic',
        slug: 'placeholder-magic',
        xp: 15,
        difficulty: 'easy',
      },
      {
        name: 'Label Linker',
        slug: 'label-linker',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Choose Wisely',
        slug: 'choose-wisely',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Dropdown Selector',
        slug: 'dropdown-selector',
        xp: 30,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 10,
    name: 'Semantic HTML',
    desc: 'Use meaningful HTML elements to improve page structure and accessibility.',
    exercises: [
      {
        name: 'Build the Layout',
        slug: 'build-the-layout',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Blog Structure',
        slug: 'blog-structure',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Sidebar Creator',
        slug: 'sidebar-creator',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Navigation Map',
        slug: 'navigation-map',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Figure & Caption',
        slug: 'figure-and-caption',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Semantic Rebuild',
        slug: 'semantic-rebuild',
        xp: 40,
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 11,
    name: 'Audio & Video',
    desc: 'Add multimedia components for richer experiences.',
    exercises: [
      {
        name: 'Play the Sound',
        slug: 'play-the-sound',
        xp: 25,
        difficulty: 'easy',
      },
      {
        name: 'Video Portal',
        slug: 'video-portal',
        xp: 30,
        difficulty: 'medium',
      },
      {
        name: 'Autoplay Test',
        slug: 'autoplay-test',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Add Subtitles',
        slug: 'add-subtitles',
        xp: 40,
        difficulty: 'medium',
      },
      {
        name: 'Audio Playlist',
        slug: 'audio-playlist',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Thumbnail Setup',
        slug: 'thumbnail-setup',
        xp: 25,
        difficulty: 'easy',
      },
    ],
  },
  {
    id: 12,
    name: 'HTML Best Practices',
    desc: 'Write clear, clean, and accessible HTML optimized for real-world use.',
    exercises: [
      {
        name: 'Code Cleanup',
        slug: 'code-cleanup',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Accessibility Upgrade',
        slug: 'accessibility-upgrade',
        xp: 35,
        difficulty: 'medium',
      },
      {
        name: 'Alt Text Review',
        slug: 'alt-text-review',
        xp: 20,
        difficulty: 'easy',
      },
      {
        name: 'Heading Order Fix',
        slug: 'heading-order-fix',
        xp: 25,
        difficulty: 'easy',
      },
      { name: 'Link Check', slug: 'link-check', xp: 20, difficulty: 'easy' },
      {
        name: 'Semantic Improvement',
        slug: 'semantic-improvement',
        xp: 40,
        difficulty: 'medium',
      },
    ],
  },
];

export async function GET(req: NextRequest) {
  // Get courseId from query params (default to HTML - courseId: 2)
  const { searchParams } = new URL(req.url);
  const courseId = parseInt(searchParams.get('courseId') || '2');

  // Select the appropriate data based on courseId
  let DATA;
  switch (courseId) {
    case 1:
      DATA = REACT_DATA;
      break;
    case 2:
      DATA = HTML_DATA;
      break;
    case 3:
      DATA = CSS_DATA;
      break;
    case 4:
      DATA = PYTHON_DATA;
      break;
    default:
      return NextResponse.json({ error: 'Invalid courseId' }, { status: 400 });
  }

  // Insert data into database
  for (const item of DATA) {
    await db.insert(CourseChaptersTable).values({
      courseId: courseId,
      desc: item?.desc,
      exercises: item.exercises,
      name: item?.name,
      chapterId: item?.id,
    });
  }

  return NextResponse.json({
    success: true,
    message: `Successfully inserted ${DATA.length} chapters for courseId: ${courseId}`,
  });
}
