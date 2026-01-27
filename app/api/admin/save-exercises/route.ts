import { db } from '@/config/db';
import { ExerciseTable } from '@/config/schema';
import { NextRequest, NextResponse } from 'next/server';

const HTML_DATA = [
  {
    courseId: 2,
    exerciseId: 'explore-the-web-skeleton',
    exerciseName: 'Explore the Web Skeleton',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Welcome, brave explorer! Your journey begins by discovering the <strong>web skeleton</strong>. Every web page is built on the foundation of HTML.</p><p style='margin-bottom:8px;'>The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser what type of document it is and prepares the page for modern rendering.</p><p style='margin-bottom:8px;'>The outer wrapper <code>&lt;html&gt;</code> contains everything on the page — think of it as the walls of your fortress.</p><p style='margin-bottom:8px;'>Inside the fortress, the <code>&lt;head&gt;</code> stores your tools: the <code>&lt;title&gt;</code>, meta tags, and other hidden helpers.</p><p style='margin-bottom:8px;'>The <code>&lt;body&gt;</code> is the open field where your story unfolds — headings, paragraphs, images, and links all appear here.</p><p style='margin-bottom:8px;'>Headings act like banners guiding visitors; paragraphs are your story logs; lists are treasure maps organizing loot.</p><p style='margin-bottom:8px;'>If the skeleton is wrong, your page may look broken or confusing. Correct structure means a reliable page across browsers and devices.</p><p style='margin-bottom:8px;'>This exercise trains you to recognize the essential tags that every HTML page needs. It is the first step to mastering web crafting.</p><p style='margin-bottom:8px;'>Observe, build, and defend your web skeleton — then move on to more advanced quests with confidence.</p><p style='margin-bottom:8px;'>Ready your quill: identify the DOCTYPE, the <code>&lt;html&gt;</code> wrapper, a proper <code>&lt;head&gt;</code> and the <code>&lt;body&gt;</code> to claim your victory.</p><p style='margin-bottom:8px;'>Completing this will unlock basic HTML understanding and set you up for the rest of the course.</p><p style='margin-bottom:8px;'>Good luck — the web world awaits!</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create a complete HTML skeleton including <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang="en"&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>. Inside <code>&lt;head&gt;</code> add a <code>&lt;title&gt;</code> with the text <strong>Web Skeleton Adventure</strong>. Leave the body empty for now.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Start with <code>&lt;!DOCTYPE html&gt;</code>. Then create <code>&lt;html lang="en"&gt;</code>. Inside head add <code>&lt;title&gt;Web Skeleton Adventure&lt;/title&gt;</code>. Finally add an empty <code>&lt;body&gt;</code>.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title></title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<title>\\s*Web Skeleton Adventure\\s*</title>',
      output: '<title>Web Skeleton Adventure</title>',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'build-your-base-camp',
    exerciseName: 'Build Your Base Camp',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Every adventurer needs a base camp — a safe place to plan and rest. In HTML, your base camp is built with headings, paragraphs, and sections.</p><p style='margin-bottom:8px;'>A main heading (<code>&lt;h1&gt;</code>) acts like a flag planted at the camp's center, marking its purpose.</p><p style='margin-bottom:8px;'>Paragraphs (<code>&lt;p&gt;</code>) are the camp logs where you record instructions, stories, and NPC dialogues.</p><p style='margin-bottom:8px;'>Sections (<code>&lt;section&gt;</code>) divide your camp into zones—training grounds, supply tents, and the map room.</p><p style='margin-bottom:8px;'>Using the correct tags keeps your camp organized, accessible, and friendly to both players and browsers.</p><p style='margin-bottom:8px;'>Headings provide hierarchy; paragraphs provide content; semantic tags give meaning to your base layouts.</p><p style='margin-bottom:8px;'>Master the base camp structure and future quests will be easier to implement and navigate.</p><p style='margin-bottom:8px;'>This exercise focuses on placing a strong heading and a descriptive paragraph in the body.</p><p style='margin-bottom:8px;'>Think of HTML elements as camp equipment—each has a specific role and must be used correctly.</p><p style='margin-bottom:8px;'>When your base camp is solid, you can explore the rest of the web world without worry.</p><p style='margin-bottom:8px;'>Complete this and your in-game reputation will rise among fellow learners.</p><p style='margin-bottom:8px;'>Set up your flag and write your first log to start the adventure!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Inside the <code>&lt;body&gt;</code>, add a heading <code>&lt;h1&gt;</code> with the text <strong>Welcome to Base Camp</strong> and a paragraph <code>&lt;p&gt;</code> with the text <strong>Prepare yourself for the HTML adventure!</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use <code>&lt;h1&gt;Welcome to Base Camp&lt;/h1&gt;</code> and <code>&lt;p&gt;Prepare yourself for the HTML adventure!&lt;/p&gt;</code> inside the body.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Base Camp</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '<h1>\\s*Welcome to Base Camp\\s*</h1>[\\s\\S]*<p>\\s*Prepare yourself for the HTML adventure!\\s*</p>',
      output:
        '<h1>Welcome to Base Camp</h1><p>Prepare yourself for the HTML adventure!</p>',
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: 'name-your-world',
    exerciseName: 'Name Your World',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Every world needs a name — a clear identity so explorers can find and recognize it. In HTML, the world is named with the <code>&lt;title&gt;</code> tag inside the <code>&lt;head&gt;</code>.</p><p style='margin-bottom:8px;'>The title appears on the browser tab and in search results, serving as your world's calling card.</p><p style='margin-bottom:8px;'>A concise and descriptive title helps visitors quickly understand what your page offers.</p><p style='margin-bottom:8px;'>Naming your world well increases discoverability and gives your site a professional feel.</p><p style='margin-bottom:8px;'>This exercise trains you to place the title correctly and choose a clear name for your HTML world.</p><p style='margin-bottom:8px;'>Think of the title as the banner that appears on every explorer's map — make it meaningful and memorable.</p><p style='margin-bottom:8px;'>Even small pages benefit from a thoughtful title — it is an important habit for all web builders.</p><p style='margin-bottom:8px;'>Once you master titles, your pages will start showing up properly in tabs and bookmarks.</p><p style='margin-bottom:8px;'>This task is simple but crucial — do it correctly to move forward in the questline.</p><p style='margin-bottom:8px;'>Add your world name inside the head and prepare for the next chapter of adventures.</p><p style='margin-bottom:8px;'>Your title completes the identity of the HTML skeleton you built earlier.</p><p style='margin-bottom:8px;'>Name well — your kingdom's reputation depends on it!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set the HTML page <code>&lt;title&gt;</code> to <strong>My Adventure World</strong> inside the <code>&lt;head&gt;</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Open the <code>&lt;head&gt;</code> and add <code>&lt;title&gt;My Adventure World&lt;/title&gt;</code>. The title must be inside head, not body.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title></title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<title>\\s*My Adventure World\\s*</title>',
      output: '<title>My Adventure World</title>',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'break-and-repair',
    exerciseName: 'Break & Repair',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Even the best fortresses can develop cracks. In HTML, broken or unclosed tags are the cracks that cause rendering issues.</p><p style='margin-bottom:8px;'>Your role is the repair hero: identify missing closing tags, mismatched nesting, and misplaced elements.</p><p style='margin-bottom:8px;'>Every opening tag (<code>&lt;tag&gt;</code>) should have a matching closing tag (<code>&lt;/tag&gt;</code>) unless it is self-closing.</p><p style='margin-bottom:8px;'>Improper nesting (for example placing a block-level tag inside an inline tag) can also break layouts and semantics.</p><p style='margin-bottom:8px;'>This exercise gives you a broken snippet to inspect and fix — a practical detective mission.</p><p style='margin-bottom:8px;'>Fixing HTML strengthens the page structure and makes future styling and interactivity predictable.</p><p style='margin-bottom:8px;'>Pay attention to headings, paragraphs, and the order of closing tags when repairing code.</p><p style='margin-bottom:8px;'>Once repaired, the page should display the correct heading and paragraph texts as intended.</p><p style='margin-bottom:8px;'>Good repair work increases your reliability as a web craftsman and prepares you for more complex challenges.</p><p style='margin-bottom:8px;'>This mission hones attention to detail — a vital skill for all web developers.</p><p style='margin-bottom:8px;'>Patch the cracks and your fortress will stand strong again.</p><p style='margin-bottom:8px;'>Begin the repair now and claim the title of Master Fixer.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Inspect and fix the broken HTML so all tags are properly opened and closed. After repair, the body should contain a heading <code>&lt;h1&gt;</code> with <strong>Fortress Repaired</strong> and a paragraph <code>&lt;p&gt;</code> with <strong>Your castle is strong again!</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Look for missing <code>&lt;/title&gt;</code>, missing <code>&lt;/h1&gt;</code> or <code>&lt;/p&gt;</code>. Ensure tags are nested correctly: <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code> must be complete.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Broken Fortress</title>\n</head>\n<body>\n  <!-- This file has intentional errors that you must fix -->\n  <h1>Fortress Repaired\n  <p>Your castle is strong again!\n</body>\n</html>',
      },
      regex:
        '<h1>\\s*Fortress Repaired\\s*</h1>[\\s\\S]*<p>\\s*Your castle is strong again!\\s*</p>',
      output: '<h1>Fortress Repaired</h1><p>Your castle is strong again!</p>',
      hintXp: 40,
    },
  },
  {
    courseId: 2,
    exerciseId: 'html-detective',
    exerciseName: 'HTML Detective',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Don your detective hat — it's time to hunt down HTML mistakes. A skilled detective finds missing tags, typos, and wrong nesting.</p><p style='margin-bottom:8px;'>Start by scanning for tags that never close or are mistyped (for example <code>&lt;heder&gt;</code> instead of <code>&lt;header&gt;</code>).</p><p style='margin-bottom:8px;'>Check that textual content sits inside the correct container: headings in <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, paragraphs in <code>&lt;p&gt;</code>.</p><p style='margin-bottom:8px;'>Missing quotes on attributes or stray characters can also break parsers — be vigilant.</p><p style='margin-bottom:8px;'>This exercise gives a nearly-correct file with subtle issues; your job is to correct them so the expected texts appear.</p><p style='margin-bottom:8px;'>Keeping a checklist helps: doctype, html lang, head with title, body with content, and matching closing tags.</p><p style='margin-bottom:8px;'>A methodical approach will help you become faster at spotting problems in real-world codebases.</p><p style='margin-bottom:8px;'>When all errors are found and fixed, the page should show the heading and paragraph exactly as specified.</p><p style='margin-bottom:8px;'>This detective training is essential — it saves time and prevents frustrating bugs later.</p><p style='margin-bottom:8px;'>Inspect carefully, correct mistakes, and log your findings to level up your debugging skills.</p><p style='margin-bottom:8px;'>Complete this case and wear the badge of HTML Detective with pride.</p><p style='margin-bottom:8px;'>Begin the investigation now!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Inspect the provided HTML and fix any missing or misaligned tags. After fixing, the body must contain a heading <code>&lt;h1&gt;</code> with <strong>Detective Mode</strong> and a paragraph <code>&lt;p&gt;</code> with <strong>All HTML errors are found!</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Search for unclosed tags like <code>&lt;h1&gt;</code> without <code>&lt;/h1&gt;</code>, or a title missing <code>&lt;/title&gt;</code>. Fix typos and ensure proper nesting.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Detective Task</title>\n</head>\n<body>\n  <!-- Fix the issues in this file -->\n  <h1>Detective Mode\n  <p>All HTML errors are found!\n</body>\n</html>',
      },
      regex:
        '<h1>\\s*Detective Mode\\s*</h1>[\\s\\S]*<p>\\s*All HTML errors are found!\\s*</p>',
      output: '<h1>Detective Mode</h1><p>All HTML errors are found!</p>',
      hintXp: 45,
    },
  },
  {
    courseId: 2,
    exerciseId: 'element-collector',
    exerciseName: 'Element Collector',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Become the Element Collector — gather headings, paragraphs, and lists to build a rich page. Each element is an artifact that adds meaning and structure.</p><p style='margin-bottom:8px;'>Headings (<code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>) give hierarchy; paragraphs (<code>&lt;p&gt;</code>) provide content; lists (<code>&lt;ul&gt;</code> / <code>&lt;ol&gt;</code>) organize items.</p><p style='margin-bottom:8px;'>Links (<code>&lt;a&gt;</code>) guide explorers to new realms, and images (<code>&lt;img&gt;</code>) paint scenes of your world.</p><p style='margin-bottom:8px;'>Using these elements correctly creates pages that are scannable, accessible, and enjoyable to read.</p><p style='margin-bottom:8px;'>This exercise will ask you to collect a few basic elements and place them in the body.</p><p style='margin-bottom:8px;'>Think of each <code>&lt;li&gt;</code> as a treasure chest — list them clearly for future retrieval.</p><p style='margin-bottom:8px;'>Collecting and arranging elements teaches you how to present information cleanly and logically.</p><p style='margin-bottom:8px;'>A well-structured page is easier to style later and better for accessibility tools and search engines.</p><p style='margin-bottom:8px;'>Practice makes perfect: the more elements you use, the more confident you become.</p><p style='margin-bottom:8px;'>This quest readies you for complex pages by mastering small, reusable parts.</p><p style='margin-bottom:8px;'>Collect the required elements and your inventory will be complete.</p><p style='margin-bottom:8px;'>Start collecting now — three artifacts await!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Inside the <code>&lt;body&gt;</code>, add a heading <code>&lt;h1&gt;</code> with <strong>Element Collection</strong>, a paragraph <code>&lt;p&gt;</code> with <strong>Gather all HTML treasures!</strong>, and an unordered list <code>&lt;ul&gt;</code> with three list items: <strong>Headings</strong>, <strong>Paragraphs</strong>, and <strong>Links</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, and a <code>&lt;ul&gt;</code> containing three <code>&lt;li&gt;</code> items. Example: <code>&lt;li&gt;Headings&lt;/li&gt;</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Element Collector</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '<h1>\\s*Element Collection\\s*</h1>[\\s\\S]*<p>\\s*Gather all HTML treasures!\\s*</p>[\\s\\S]*<li>\\s*Headings\\s*</li>[\\s\\S]*<li>\\s*Paragraphs\\s*</li>[\\s\\S]*<li>\\s*Links\\s*</li>',
      output:
        '<h1>Element Collection</h1><p>Gather all HTML treasures!</p><ul><li>Headings</li><li>Paragraphs</li><li>Links</li></ul>',
      hintXp: 35,
    },
  },
  // Chapter 2: HTML Boilerplate
  {
    courseId: 2,
    exerciseId: 'build-the-core-structure',
    exerciseName: 'Build the Core Structure',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The HTML boilerplate is the foundation — a standardized template that every professional website begins with. It ensures your document is properly formatted and recognized by all browsers.</p><p style='margin-bottom:8px;'>The DOCTYPE declaration tells browsers this is HTML5, the modern standard.</p><p style='margin-bottom:8px;'>The HTML element wraps everything and defines the document language.</p><p style='margin-bottom:8px;'>The head contains metadata — invisible instructions and configuration for the page.</p><p style='margin-bottom:8px;'>The body holds all visible content that users see and interact with.</p><p style='margin-bottom:8px;'>Meta tags inside head provide character encoding, viewport settings, and more.</p><p style='margin-bottom:8px;'>Every serious web project starts here — master this pattern and you'll write correct HTML every time.</p><p style='margin-bottom:8px;'>This exercise asks you to build a complete boilerplate from scratch.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create a complete HTML5 boilerplate with <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang="en"&gt;</code>, <code>&lt;head&gt;</code> with <code>&lt;meta charset="UTF-8"&gt;</code>, <code>&lt;meta name="viewport"&gt;</code>, and <code>&lt;title&gt;My Boilerplate&lt;/title&gt;</code>, plus an empty <code>&lt;body&gt;</code>.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Start with DOCTYPE, then html lang="en", then head with two meta tags and title, then body tag.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<meta\\s+charset="UTF-8"[\\s\\S]*<meta\\s+name="viewport"[\\s\\S]*<title>\\s*My Boilerplate\\s*</title>',
      output:
        '<meta charset="UTF-8"><meta name="viewport"><title>My Boilerplate</title>',
      hintXp: 40,
    },
  },
  {
    courseId: 2,
    exerciseId: 'fix-the-broken-blueprint',
    exerciseName: 'Fix the Broken Blueprint',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Sometimes boilerplate templates are incomplete or broken. You must be able to identify and repair missing or malformed tags.</p><p style='margin-bottom:8px;'>A missing closing tag, misplaced meta tag, or incomplete attribute can break the entire structure.</p><p style='margin-bottom:8px;'>This challenge presents a broken boilerplate — your job is to fix all issues.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Fix the broken HTML boilerplate so it has all required meta tags, a proper title, and correct structure.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Check for missing closing tags, incomplete meta tags, and the title element.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en"\n<head>\n  <meta charset="UTF-8"\n  <meta name="viewport" content="width=device-width, initial-scale=1.0"\n  <title>Fixed Blueprint</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<html\\s+lang="en">.*<meta\\s+charset="UTF-8".*<meta\\s+name="viewport"',
      output: '<html lang="en"><meta charset="UTF-8"><meta name="viewport">',
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: 'boost-meta-power',
    exerciseName: 'Boost Meta Power',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Meta tags are invisible power-ups in your HTML head. They control how browsers render your page and how search engines understand it.</p><p style='margin-bottom:8px;'>Charset meta ensures text displays correctly. Viewport meta enables responsive design on mobile.</p><p style='margin-bottom:8px;'>Adding these small but crucial tags is what separates amateur from professional websites.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Inside the <code>&lt;head&gt;</code>, add <code>&lt;meta charset="UTF-8"&gt;</code> and <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>.</p></body>',
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add both meta tags inside head. The viewport meta helps responsive design.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Meta Booster</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<head>.*<meta\\s+charset="UTF-8".*<meta\\s+name="viewport"',
      output: '<meta charset="UTF-8"><meta name="viewport">',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'add-language-identity',
    exerciseName: 'Add Language Identity',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Every page has a language — English, Spanish, French, and so on. Setting the correct language helps accessibility tools and search engines.</p><p style='margin-bottom:8px;'>The <code>lang</code> attribute on the <code>&lt;html&gt;</code> tag tells the world what language your content is in.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Set the <code>lang</code> attribute on the <code>&lt;html&gt;</code> tag to <code>"en"</code> for English.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use <code>&lt;html lang="en"&gt;</code> to specify English language.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>Language Setup</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<html\\s+lang="en"',
      output: '<html lang="en">',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'viewport-setup',
    exerciseName: 'Viewport Setup',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Modern websites must work on phones, tablets, and desktops. The viewport meta tag is essential for responsive design.</p><p style='margin-bottom:8px;'>Without it, mobile browsers render pages at desktop width, forcing users to zoom and scroll excessively.</p><p style='margin-bottom:8px;'>Adding the correct viewport meta makes your site mobile-friendly automatically.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> to make your page responsive.</p></body>',
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Insert the viewport meta tag inside head. This enables mobile responsiveness.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Responsive Page</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<meta\\s+name="viewport"\\s+content="width=device-width,\\s*initial-scale=1.0"',
      output:
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'author-credit',
    exerciseName: 'Author Credit',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Giving credit and adding metadata about your content is professional practice. The author meta tag documents who created the page.</p><p style='margin-bottom:8px;'>Search engines and accessibility tools can read this information, improving your site's credibility.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add <code>&lt;meta name="author" content="CodeBox Dev"&gt;</code> to the head section.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Place a meta tag with name="author" inside the head element.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Author Info</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<meta\\s+name="author"\\s+content="CodeBox Dev"',
      output: '<meta name="author" content="CodeBox Dev">',
      hintXp: 25,
    },
  },
  // Chapter 3: Head & Body Tags
  {
    courseId: 2,
    exerciseId: 'mind-vs-body',
    exerciseName: 'Mind vs Body',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The head is your page's brain — metadata, configuration, and invisible instructions live here.</p><p style='margin-bottom:8px;'>The body is the visible form — everything users see and interact with.</p><p style='margin-bottom:8px;'>Understanding this split is crucial for organizing your HTML correctly.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a page where the head contains a <code>&lt;title&gt;Mind and Body&lt;/title&gt;</code> and the body contains an <code>&lt;h1&gt;</code> with <code>The Mind Controls the Body</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Put the title in head and the h1 in body.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<title>\\s*Mind and Body\\s*</title>[\\s\\S]*<h1>\\s*The Mind Controls the Body\\s*</h1>',
      output: '<title>Mind and Body</title><h1>The Mind Controls the Body</h1>',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'activate-styles',
    exerciseName: 'Activate Styles',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Stylesheets belong in the head. That's where you link external CSS files and define styles.</p><p style='margin-bottom:8px;'>The <code>&lt;link&gt;</code> tag connects your HTML to CSS files, unlocking visual magic.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add a <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> tag in the head.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use <code>&lt;link&gt;</code> in the head with rel="stylesheet" and href="style.css".</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Style Activation</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<link\\s+rel="stylesheet"\\s+href="style.css"',
      output: '<link rel="stylesheet" href="style.css">',
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: 'display-your-content',
    exerciseName: 'Display Your Content',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Content belongs in the body. This is where your visitors see text, images, and interactive elements.</p><p style='margin-bottom:8px;'>Everything users interact with lives here, from paragraphs to buttons to images.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Inside the body, add a heading <code>&lt;h1&gt;Welcome to My Page&lt;/h1&gt;</code> and a paragraph with your favorite quote.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Put the h1 and p tags inside the body element.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Page</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<body>[\\s\\S]*<h1>\\s*Welcome to My Page\\s*</h1>[\\s\\S]*<p>',
      output: '<h1>Welcome to My Page</h1><p>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'add-external-script',
    exerciseName: 'Add External Script',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>JavaScript files make pages interactive. The <code>&lt;script&gt;</code> tag can link external JS files.</p><p style='margin-bottom:8px;'>Scripts are typically placed at the end of the body for performance reasons.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add <code>&lt;script src="app.js"&gt;&lt;/script&gt;</code> at the end of the body (before closing </code>&lt;/body&gt;</code>).</p></body>',
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Place the script tag inside body, near the end.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Script Setup</title>\n</head>\n<body>\n  <h1>Interactive Page</h1>\n\n</body>\n</html>',
      },
      regex: '(?i)<script\\s+src="app.js"[\\s\\S]*</body>',
      output: '<script src="app.js"></script>',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'meta-collection',
    exerciseName: 'Meta Collection',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Meta tags come in many varieties. Each serves a specific purpose: encoding, viewport, author, description, keywords.</p><p style='margin-bottom:8px;'>Collecting the right meta tags improves SEO, accessibility, and page rendering.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add three meta tags to the head: charset="UTF-8", name="viewport", and name="description" with content="My awesome website".</p></body>',
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add meta charset, meta viewport, and meta description inside head.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Meta Tags</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<meta\\s+charset="UTF-8"[\\s\\S]*<meta\\s+name="viewport"[\\s\\S]*<meta\\s+name="description"\\s+content="My awesome website"',
      output:
        '<meta charset="UTF-8"><meta name="viewport"><meta name="description" content="My awesome website">',
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: 'body-structure-challenge',
    exerciseName: 'Body Structure Challenge',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Master the distinction between head and body by building a complete page structure.</p><p style='margin-bottom:8px;'>Head gets metadata, title, links to styles and scripts. Body gets visible content.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a page with proper head and body. Head should have title and meta tags. Body should have an h1 and a paragraph with meaningful content.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Follow boilerplate structure: DOCTYPE, html lang, head with metadata and title, body with content.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Complete Structure</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<title>.*</title>[\\s\\S]*<body>[\\s\\S]*<h1>.*</h1>[\\s\\S]*<p>.*</p>',
      output: '<title>Complete Structure</title><h1><p>',
      hintXp: 35,
    },
  },
  // Chapter 4: Text Formatting
  {
    courseId: 2,
    exerciseId: 'create-the-text-realm',
    exerciseName: 'Create the Text Realm',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Text formatting brings content to life. Headings create hierarchy, paragraphs organize thoughts, and emphasis tags highlight importance.</p><p style='margin-bottom:8px;'>Master these basic elements and you'll create readable, well-structured pages.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a page with an <code>&lt;h1&gt;</code> title, an <code>&lt;h2&gt;</code> subtitle, and two paragraphs of content.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use h1, h2, and p tags in the body with meaningful text.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Text Realm</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<h1>.*</h1>.*<h2>.*</h2>.*<p>.*</p>.*<p>.*</p>',
      output: '<h1><h2><p><p>',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'power-words',
    exerciseName: 'Power Words',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Bold and italic text emphasize important words. Use <code>&lt;strong&gt;</code> for strong importance and <code>&lt;em&gt;</code> for emphasis.</p><p style='margin-bottom:8px;'>These semantic tags improve readability and accessibility.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write a paragraph that includes <code>&lt;strong&gt;bold text&lt;/strong&gt;</code> and <code>&lt;em&gt;italicized text&lt;/em&gt;</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;strong&gt; for bold and &lt;em&gt; for italic within a paragraph.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Power Words</title>\n</head>\n<body>\n  <p>This is a paragraph with </p>\n</body>\n</html>',
      },
      regex: '(?i)<strong>.*</strong>.*<em>.*</em>',
      output: '<strong></strong><em></em>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'build-a-story-block',
    exerciseName: 'Build a Story Block',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Combining multiple text elements creates a cohesive narrative. Organize headings, paragraphs, bold, and italic to tell your story effectively.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a story block with an h1 title, three paragraphs, and at least two instances of emphasis (bold or italic).</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Structure: h1, then p with strong, then p regular, then p with em.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Story Block</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<h1>.*</h1>.*<p>.*<strong>.*</strong>.*</p>.*<p>.*</p>.*<p>.*<em>.*</em>.*</p>',
      output: '<h1><p><strong><p><p><em>',
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: 'line-break-mastery',
    exerciseName: 'Line Break Mastery',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The <code>&lt;br&gt;</code> tag creates line breaks without starting a new paragraph. Perfect for poetry, addresses, or formatted text.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a poem or address using multiple <code>&lt;br&gt;</code> tags within a paragraph or div.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;br&gt; tags to create line breaks within a text block.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Line Breaks</title>\n</head>\n<body>\n  <p>Line one<br></p>\n</body>\n</html>',
      },
      regex: '(?i)<br>.*<br>',
      output: '<br><br>',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'quote-chamber',
    exerciseName: 'Quote Chamber',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Block quotes highlight important quotations. The <code>&lt;blockquote&gt;</code> tag semantically marks quoted text.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add a <code>&lt;blockquote&gt;</code> element with an inspiring quote inside.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;blockquote&gt; tags to wrap your quote.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Quotes</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<blockquote>.*</blockquote>',
      output: '<blockquote></blockquote>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'code-snippet-display',
    exerciseName: 'Code Snippet Display',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Display code in a readable way using the <code>&lt;code&gt;</code> tag. Pair it with <code>&lt;pre&gt;</code> to preserve formatting.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>&lt;pre&gt;&lt;code&gt;</code> block with a snippet of code (any language).</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;pre&gt;&lt;code&gt; to display formatted code.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Code Display</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<pre>.*<code>.*</code>.*</pre>',
      output: '<pre><code></code></pre>',
      hintXp: 30,
    },
  },
  // Chapter 5: Links & Navigation
  {
    courseId: 2,
    exerciseId: 'create-a-warp-gate',
    exerciseName: 'Create a Warp Gate',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Links are portals between pages. The <code>&lt;a&gt;</code> tag connects your site together and to the wider web.</p><p style='margin-bottom:8px;'>Every link needs an href attribute pointing to its destination.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a link to <code>https://www.google.com</code> with the text <code>Visit Google</code>.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use &lt;a href="https://www.google.com"&gt;Visit Google&lt;/a&gt;.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Links</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<a\\s+href="https://www.google.com">\\s*Visit Google\\s*</a>',
      output: '<a href="https://www.google.com">Visit Google</a>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'open-a-new-dimension',
    exerciseName: 'Open a New Dimension',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Open links in a new tab with the <code>target=\"_blank\"</code> attribute. This keeps users on your site while letting them explore new destinations.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a link that opens <code>https://github.com</code> in a new tab with the text <code>GitHub</code>.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add target="_blank" to the link tag.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>New Tab Links</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<a\\s+href="https://github.com"\\s+target="_blank">\\s*GitHub\\s*</a>',
      output: '<a href="https://github.com" target="_blank">GitHub</a>',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'navigation-builder',
    exerciseName: 'Navigation Builder',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>A navigation menu is a set of links grouped together. Use a list to structure navigation semantically.</p><p style='margin-bottom:8px;'>This pattern makes navigation accessible and easy to style.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a navigation menu using <code>&lt;ul&gt;</code> with three links: Home, About, and Contact.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;ul&gt; with &lt;li&gt; items, each containing an &lt;a&gt; tag.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Navigation</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<ul>.*<li>.*<a\\s+href[^>]*>\\s*Home\\s*</a>.*<li>.*<a[^>]*>\\s*About\\s*</a>.*<li>.*<a[^>]*>\\s*Contact\\s*</a>',
      output: '<ul><li><a>Home</a><li><a>About</a><li><a>Contact</a></ul>',
      hintXp: 40,
    },
  },
  {
    courseId: 2,
    exerciseId: 'anchor-teleport',
    exerciseName: 'Anchor Teleport',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Jump to sections within a page using anchor links. Use an id on a target element and href=\"#id\" on a link.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create a link <code>&lt;a href="#section1"&gt;Go to Section 1&lt;/a&gt;</code> and an <code>&lt;h2 id="section1"&gt;Section 1&lt;/h2&gt;</code>.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use href="#id" and id="sectionname" to create anchor jumps.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Anchors</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<a\\s+href="#section1">.*</a>.*<h2\\s+id="section1">.*</h2>',
      output: '<a href="#section1"></a><h2 id="section1"></h2>',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'email-portal',
    exerciseName: 'Email Portal',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Create email links with the <code>mailto:</code> protocol. Clicking opens the user's email client ready to send a message.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create an email link: <code>&lt;a href="mailto:hello@example.com"&gt;Send Email&lt;/a&gt;</code>.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use href="mailto:email@example.com" for email links.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Email Link</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<a\\s+href="mailto:hello@example.com">\\s*Send Email\\s*</a>',
      output: '<a href="mailto:hello@example.com">Send Email</a>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'button-link-trick',
    exerciseName: 'Button Link Trick',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Wrap a button element inside a link to make a styled link that behaves like a button.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create a link containing a button element: <code>&lt;a href="/page"&gt;&lt;button&gt;Click Me&lt;/button&gt;&lt;/a&gt;</code>.</p></body>',
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Put a &lt;button&gt; tag inside an &lt;a&gt; tag.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Button Link</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<a\\s+href="/page">.*<button>.*Click Me.*</button>.*</a>',
      output: '<a href="/page"><button>Click Me</button></a>',
      hintXp: 30,
    },
  },
  // Chapter 6: Images
  {
    courseId: 2,
    exerciseId: 'summon-an-image',
    exerciseName: 'Summon an Image',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Images bring pages to life. The <code>&lt;img&gt;</code> tag displays pictures on your page.</p><p style='margin-bottom:8px;'>Always provide an src attribute pointing to the image file.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add an image with <code>&lt;img src="picture.jpg" alt="A beautiful picture"&gt;</code>.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use &lt;img src="picture.jpg" alt="description"&gt;.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Images</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<img\\s+src="picture.jpg"\\s+alt="A beautiful picture"',
      output: '<img src="picture.jpg" alt="A beautiful picture">',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'vision-for-all',
    exerciseName: 'Vision for All',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Alt text describes images for accessibility. Screen readers read alt text aloud, making images accessible to visually impaired users.</p><p style='margin-bottom:8px;'>Always provide meaningful alt text.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add an image with descriptive alt text that explains what the image shows.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use the alt attribute with a clear, descriptive text.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Accessible Images</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<img\\s+src="[^"]*"\\s+alt="[^"]*"',
      output: '<img src="" alt="">',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'image-grid-challenge',
    exerciseName: 'Image Grid Challenge',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Display multiple images in a grid layout using divs and CSS. HTML provides structure; CSS provides layout.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a grid of three images using a div container and three img tags with alt text.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use a div to wrap three img elements.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Image Grid</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<img.*alt[\\s\\S]*<img.*alt[\\s\\S]*<img.*alt',
      output: '<img alt><img alt><img alt>',
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: 'resize-hero',
    exerciseName: 'Resize Hero',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Control image dimensions with width and height attributes to prevent layout shift and improve page performance.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add an image with <code>width="200"</code> and <code>height="150"</code> attributes.</p></body>',
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use width and height attributes on the img tag.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Sized Image</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<img\\s+[^>]*width="200"[^>]*height="150"',
      output: '<img width="200" height="150">',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'caption-creator',
    exerciseName: 'Caption Creator',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> tags create a semantic image with caption combination.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>&lt;figure&gt;</code> containing an <code>&lt;img&gt;</code> and a <code>&lt;figcaption&gt;</code> with descriptive text.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;figure&gt; with img and &lt;figcaption&gt; inside.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Image Caption</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<figure>.*<img.*alt.*<figcaption>.*</figcaption>.*</figure>',
      output: '<figure><img alt><figcaption></figcaption></figure>',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'broken-image-test',
    exerciseName: 'Broken Image Test',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Test your understanding by fixing a broken image reference.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Fix the img tag so it points to <code>hero.png</code> with proper alt text.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Ensure src="hero.png" and alt="description" are both present.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Fix Image</title>\n</head>\n<body>\n  <img src="" alt="">\n</body>\n</html>',
      },
      regex: '(?i)<img\\s+src="hero.png"\\s+alt="[^"]*"',
      output: '<img src="hero.png" alt="">',
      hintXp: 20,
    },
  },
  // Chapter 7: Lists
  {
    courseId: 2,
    exerciseId: 'bullet-creator',
    exerciseName: 'Bullet Creator',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Unordered lists display items with bullet points. Perfect for features, benefits, or any non-sequential group.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>&lt;ul&gt;</code> with four list items about your favorite things.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;ul&gt; with &lt;li&gt; tags for each item.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Bullet List</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<ul>.*<li>.*</li>.*<li>.*</li>.*<li>.*</li>.*<li>.*</li>.*</ul>',
      output: '<ul><li><li><li><li></ul>',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'number-builder',
    exerciseName: 'Number Builder',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Ordered lists display items with numbers. Use for steps, rankings, or any sequential information.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an <code>&lt;ol&gt;</code> with three steps for making something.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;ol&gt; with &lt;li&gt; tags for numbered items.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Numbered List</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<ol>.*<li>.*</li>.*<li>.*</li>.*<li>.*</li>.*</ol>',
      output: '<ol><li><li><li></ol>',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'nested-list-challenge',
    exerciseName: 'Nested List Challenge',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Nest lists inside lists to show hierarchy and relationships. A list inside a list item creates a powerful organizational structure.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a main <code>&lt;ul&gt;</code> with items, and nest a sub-list inside one of the items.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Put a &lt;ul&gt; inside an &lt;li&gt; element.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Nested Lists</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<ul>.*<li>.*<ul>.*</ul>.*</li>.*</ul>',
      output: '<ul><li><ul></ul></li></ul>',
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: 'description-vault',
    exerciseName: 'Description Vault',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Description lists (<code>&lt;dl&gt;</code>) pair terms with definitions. Perfect for glossaries, specifications, or Q&A.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>&lt;dl&gt;</code> with three term-definition pairs using <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;dl&gt;, &lt;dt&gt; for term, &lt;dd&gt; for definition.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Definition List</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<dl>.*<dt>.*</dt>.*<dd>.*</dd>.*<dt>.*</dt>.*<dd>.*</dd>.*<dt>.*</dt>.*<dd>.*</dd>.*</dl>',
      output: '<dl><dt><dd><dt><dd><dt><dd></dl>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'task-checklist',
    exerciseName: 'Task Checklist',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Create an interactive checklist using input checkboxes inside list items.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Build an unordered list where each item contains a checkbox and label.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use &lt;input type="checkbox"&gt; inside &lt;li&gt; elements.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Checklist</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<ul>.*<input\\s+type="checkbox".*<li>.*</li>',
      output: '<ul><input type="checkbox"><li>',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'navigation-with-lists',
    exerciseName: 'Navigation with Lists',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Combine lists and links to create semantic navigation menus. This is a professional pattern for all major websites.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a navigation menu: a <code>&lt;nav&gt;</code> with an unordered list of links.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;nav&gt;, &lt;ul&gt;, &lt;li&gt;, and &lt;a&gt; elements together.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Nav Menu</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<nav>.*<ul>.*<li>.*<a.*</a>.*</li>.*</ul>.*</nav>',
      output: '<nav><ul><li><a></a></li></ul></nav>',
      hintXp: 35,
    },
  },
  // Chapter 8: Tables
  {
    courseId: 2,
    exerciseId: 'table-blueprint',
    exerciseName: 'Table Blueprint',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Tables organize data in rows and columns. Use <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> for rows, <code>&lt;td&gt;</code> for cells.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a 2x2 table with data cells.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;table&gt;, &lt;tr&gt;, &lt;td&gt; structure.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Table</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<table>.*<tr>.*<td>.*</td>.*<td>.*</td>.*</tr>.*<tr>.*<td>.*</td>.*<td>.*</td>.*</tr>.*</table>',
      output: '<table><tr><td><td></tr><tr><td><td></tr></table>',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'add-column-headers',
    exerciseName: 'Add Column Headers',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Table headers use <code>&lt;th&gt;</code> instead of <code>&lt;td&gt;</code>. Headers improve readability and accessibility.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a table with a header row using <code>&lt;th&gt;</code> elements and a data row with <code>&lt;td&gt;</code> elements.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>First row: &lt;th&gt; for headers. Next row: &lt;td&gt; for data.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Table Headers</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<table>.*<tr>.*<th>.*</th>.*<th>.*</th>.*</tr>.*<tr>.*<td>.*</td>.*<td>.*</td>.*</tr>.*</table>',
      output: '<table><tr><th><th></tr><tr><td><td></tr></table>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'merge-the-cells',
    exerciseName: 'Merge the Cells',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Merge cells using <code>colspan</code> (merge horizontally) and <code>rowspan</code> (merge vertically) attributes.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create a table with a cell that has <code>colspan="2"</code> to span two columns.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add colspan="2" to a &lt;th&gt; or &lt;td&gt; element.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Merged Cells</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<th\\s+colspan="2"',
      output: '<th colspan="2">',
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: 'student-report-table',
    exerciseName: 'Student Report Table',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Create a realistic table displaying student data with multiple columns and rows.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Build a student report table with Name, Age, Grade columns and at least two student data rows.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use headers for Name, Age, Grade and fill in data for two students.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Student Report</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<th>.*Name.*</th>.*<th>.*Age.*</th>.*<th>.*Grade.*</th>',
      output: '<th>Name</th><th>Age</th><th>Grade</th>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'border-styling',
    exerciseName: 'Border Styling',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Add CSS styling to tables to create visible borders and improve appearance. HTML creates structure; CSS adds style.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a table and add a <code>&lt;style&gt;</code> tag with <code>border: 1px solid black;</code> for table, tr, and td.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;style&gt; in head with border CSS rules.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Styled Table</title>\n  <style>\n  </style>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<style>.*border:\\s*1px\\s+solid\\s+black',
      output: '<style>border: 1px solid black',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'header-footer-rows',
    exerciseName: 'Header Footer Rows',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> to structure table sections semantically.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a table with <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> sections.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Wrap header rows in &lt;thead&gt;, body rows in &lt;tbody&gt;, summary rows in &lt;tfoot&gt;.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Structured Table</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<table>.*<thead>.*</thead>.*<tbody>.*</tbody>.*<tfoot>.*</tfoot>.*</table>',
      output: '<table><thead></thead><tbody></tbody><tfoot></tfoot></table>',
      hintXp: 30,
    },
  },
  // Chapter 9: Forms Basics
  {
    courseId: 2,
    exerciseId: 'create-a-login-portal',
    exerciseName: 'Create a Login Portal',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Forms collect user input. The <code>&lt;form&gt;</code> tag wraps inputs, labels, and buttons together.</p><p style='margin-bottom:8px;'>Every form needs input fields and a submit button to send data.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a login form with email and password inputs, labels, and a submit button.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use &lt;form&gt;, &lt;label&gt;, &lt;input type="email"&gt;, &lt;input type="password"&gt;, and &lt;button&gt;.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Login Form</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<form>.*<label>.*</label>.*<input\\s+type="email".*<label>.*</label>.*<input\\s+type="password".*<button',
      output:
        '<form><label></label><input type="email"><label></label><input type="password"><button>',
      hintXp: 40,
    },
  },
  {
    courseId: 2,
    exerciseId: 'design-a-contact-form',
    exerciseName: 'Design a Contact Form',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>A contact form gathers user inquiries. Include fields for name, email, and message.</p><p style='margin-bottom:8px;'>Use <code>&lt;textarea&gt;</code> for multi-line messages.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a contact form with name, email, and message fields, plus a submit button.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use &lt;input type="text"&gt;, &lt;input type="email"&gt;, and &lt;textarea&gt;.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Contact Form</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<form>.*<textarea>.*</textarea>.*<button',
      output: '<form><textarea></textarea><button>',
      hintXp: 45,
    },
  },
  {
    courseId: 2,
    exerciseId: 'placeholder-magic',
    exerciseName: 'Placeholder Magic',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Placeholders show example text inside inputs, guiding users on what to enter.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add an input with <code>placeholder="Enter your name"</code>.</p></body>',
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use the placeholder attribute on &lt;input&gt; tags.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Placeholder</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<input\\s+[^>]*placeholder="Enter your name"',
      output: '<input placeholder="Enter your name">',
      hintXp: 15,
    },
  },
  {
    courseId: 2,
    exerciseId: 'label-linker',
    exerciseName: 'Label Linker',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Link labels to inputs using the <code>for</code> attribute on label and <code>id</code> on input. This improves accessibility and usability.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create a label-input pair: <code>&lt;label for="email"&gt;</code> linked to <code>&lt;input id="email"&gt;</code>.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use for="email" on label and id="email" on input to link them.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Label Link</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<label\\s+for="email">.*</label>.*<input\\s+[^>]*id="email"',
      output: '<label for="email"></label><input id="email">',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'choose-wisely',
    exerciseName: 'Choose Wisely',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Radio buttons and checkboxes let users select options. Radios allow one choice; checkboxes allow multiple.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create two radio buttons with the same name and different values.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use &lt;input type="radio" name="group" value="option1"&gt;.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Radios</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<input\\s+type="radio".*name="[^"]*".*<input\\s+type="radio".*name="[^"]*"',
      output: '<input type="radio" name=""><input type="radio" name="">',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'dropdown-selector',
    exerciseName: 'Dropdown Selector',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Dropdown lists let users select from many options in minimal space. Use <code>&lt;select&gt;</code> and <code>&lt;option&gt;</code> tags.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a dropdown menu with three options using <code>&lt;select&gt;</code> and <code>&lt;option&gt;</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;select&gt; with three &lt;option&gt; children.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Dropdown</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<select>.*<option>.*</option>.*<option>.*</option>.*<option>.*</option>.*</select>',
      output:
        '<select><option></option><option></option><option></option></select>',
      hintXp: 30,
    },
  },
  // Chapter 10: Semantic HTML
  {
    courseId: 2,
    exerciseId: 'build-the-layout',
    exerciseName: 'Build the Layout',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Semantic HTML uses meaningful tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>.</p><p style='margin-bottom:8px;'>These tags describe content purpose, improving accessibility and SEO.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a page layout with <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Structure: header, nav, main, footer in that order.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Semantic Layout</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        '(?i)<body>.*<header>.*</header>.*<nav>.*</nav>.*<main>.*</main>.*<footer>.*</footer>.*</body>',
      output:
        '<body><header></header><nav></nav><main></main><footer></footer></body>',
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: 'blog-structure',
    exerciseName: 'Blog Structure',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>A blog uses <code>&lt;article&gt;</code> for posts and <code>&lt;section&gt;</code> to group related content.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a blog post using <code>&lt;article&gt;</code> with an <code>&lt;h1&gt;</code>, content sections, and metadata.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;article&gt; to wrap the entire post.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Blog Post</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<article>.*<h1>.*</h1>.*<section>.*</section>.*</article>',
      output: '<article><h1></h1><section></section></article>',
      hintXp: 40,
    },
  },
  {
    courseId: 2,
    exerciseId: 'sidebar-creator',
    exerciseName: 'Sidebar Creator',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The <code>&lt;aside&gt;</code> tag marks supplementary content like sidebars, ads, or related links.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a page with <code>&lt;main&gt;</code> content and an <code>&lt;aside&gt;</code> sidebar.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;aside&gt; for sidebar content.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Sidebar</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<main>.*</main>.*<aside>.*</aside>',
      output: '<main></main><aside></aside>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'navigation-map',
    exerciseName: 'Navigation Map',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The <code>&lt;nav&gt;</code> tag marks navigation regions. A site can have multiple nav areas.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create two <code>&lt;nav&gt;</code> elements: one for primary navigation and one for footer links.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use multiple &lt;nav&gt; tags for different navigation areas.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Navigation Areas</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<nav>.*</nav>.*<nav>.*</nav>',
      output: '<nav></nav><nav></nav>',
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: 'figure-and-caption',
    exerciseName: 'Figure & Caption',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> tags create a semantic image-caption unit.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a figure with an image and figcaption describing the image.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Nest &lt;img&gt; and &lt;figcaption&gt; inside &lt;figure&gt;.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Figure Caption</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<figure>.*<img.*<figcaption>.*</figcaption>.*</figure>',
      output: '<figure><img><figcaption></figcaption></figure>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'semantic-rebuild',
    exerciseName: 'Semantic Rebuild',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Convert a div-based layout to use semantic HTML5 elements for better structure and meaning.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Refactor a given div-based layout to use semantic tags: header, nav, main, article, aside, footer.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Replace divs with appropriate semantic tags based on content purpose.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Semantic Rebuild</title>\n</head>\n<body>\n  <div class="header\"></div>\n  <div class="nav\"></div>\n  <div class="content\"></div>\n  <div class="footer\"></div>\n</body>\n</html>',
      },
      regex:
        '(?i)<header>.*</header>.*<nav>.*</nav>.*<main>.*</main>.*<footer>.*</footer>',
      output: '<header></header><nav></nav><main></main><footer></footer>',
      hintXp: 40,
    },
  },
  // Chapter 11: Audio & Video
  {
    courseId: 2,
    exerciseId: 'play-the-sound',
    exerciseName: 'Play the Sound',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Embed audio with the <code>&lt;audio&gt;</code> tag. Browsers provide player controls automatically.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an <code>&lt;audio&gt;</code> element with <code>controls</code> and a source file.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use &lt;audio controls&gt; with a &lt;source&gt; tag inside.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Audio Player</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<audio\\s+controls>.*<source',
      output: '<audio controls><source>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'video-portal',
    exerciseName: 'Video Portal',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Embed video with the <code>&lt;video&gt;</code> tag. Include a poster image and multiple source formats for compatibility.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>&lt;video&gt;</code> element with controls, width, height, and a source file.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use &lt;video controls width="400" height="300"&gt; with &lt;source&gt; inside.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Video Player</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<video\\s+[^>]*controls[^>]*width="400"[^>]*height="300"',
      output: '<video controls width="400" height="300">',
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: 'autoplay-test',
    exerciseName: 'Autoplay Test',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The <code>autoplay</code> attribute makes audio/video play automatically. Use with caution for user experience.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add an <code>&lt;audio autoplay&gt;</code> or <code>&lt;video autoplay&gt;</code> element.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add the autoplay attribute to audio or video tag.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Autoplay</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<(audio|video)\\s+[^>]*autoplay',
      output: '<audio autoplay>',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'add-subtitles',
    exerciseName: 'Add Subtitles',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Add captions or subtitles using the <code>&lt;track&gt;</code> tag. Improves accessibility for deaf/hard of hearing viewers.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create a video with a <code>&lt;track kind="captions" src="captions.vtt"&gt;</code> inside.</p></body>',
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add &lt;track&gt; tag inside &lt;video&gt; element.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Video Captions</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<video.*<track\\s+kind="captions"\\s+src="captions.vtt"',
      output: '<video><track kind="captions" src="captions.vtt">',
      hintXp: 40,
    },
  },
  {
    courseId: 2,
    exerciseId: 'audio-playlist',
    exerciseName: 'Audio Playlist',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Create a music playlist using multiple audio players or a single player with a list of tracks.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create multiple <code>&lt;audio&gt;</code> elements with different songs, or use a list to organize them.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use a list with multiple audio elements inside.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Playlist</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<audio.*</audio>.*<audio.*</audio>',
      output: '<audio></audio><audio></audio>',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'thumbnail-setup',
    exerciseName: 'Thumbnail Setup',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Use the <code>poster</code> attribute on video to show a thumbnail before playback.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add a <code>&lt;video poster="thumbnail.jpg"&gt;</code> element.</p></body>',
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add poster attribute to video tag with image path.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Video Thumbnail</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: '(?i)<video\\s+[^>]*poster="thumbnail.jpg"',
      output: '<video poster="thumbnail.jpg">',
      hintXp: 25,
    },
  },
  // Chapter 12: HTML Best Practices
  {
    courseId: 2,
    exerciseId: 'code-cleanup',
    exerciseName: 'Code Cleanup',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Clean code is readable code. Remove unnecessary elements, fix indentation, and use consistent formatting.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Refactor messy HTML by removing extra spacing, fixing indentation, and improving readability.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Ensure proper indentation and remove unnecessary whitespace.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Messy</title></head><body><h1>Title</h1>   <p>Content</p></body></html>',
      },
      regex: '(?i)<h1>.*</h1>\\s+<p>.*</p>',
      output: '<h1></h1><p></p>',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'accessibility-upgrade',
    exerciseName: 'Accessibility Upgrade',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Accessible HTML includes alt text, proper heading hierarchy, semantic tags, and labeled form inputs.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add alt text to images and labels to form inputs to improve accessibility.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>All images need alt attribute, all inputs need labels.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Accessible</title>\n</head>\n<body>\n  <img src="picture.jpg\">\n  <input type="text\">\n</body>\n</html>',
      },
      regex: '(?i)<img\\s+[^>]*alt="[^"]*".*<label>.*</label>.*<input',
      output: '<img alt=""><label></label><input>',
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: 'alt-text-review',
    exerciseName: 'Alt Text Review',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Good alt text describes the image clearly without being verbose. It's essential for screen readers.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Review and improve alt text on images to be more descriptive and helpful.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Alt text should describe the image purpose, not just say 'image'.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Alt Text Review</title>\n</head>\n<body>\n  <img src=\"photo.jpg\" alt=\"A photo\">\n</body>\n</html>',
      },
      regex: '(?i)<img\\s+[^>]*alt="[^"a]',
      output: '<img alt="">',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'heading-order-fix',
    exerciseName: 'Heading Order Fix',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Heading hierarchy (h1 → h2 → h3) must be logical and sequential. Don't skip levels.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Fix the heading hierarchy to follow proper order: h1, then h2, then h3.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use h1 for main title, h2 for sections, h3 for subsections.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Heading Hierarchy</title>\n</head>\n<body>\n  <h1>Main Title</h1>\n  <h3>Subsection</h3>\n  <h2>Section</h2>\n</body>\n</html>',
      },
      regex: '(?i)<h1>.*</h1>.*<h2>.*</h2>.*<h3>.*</h3>',
      output: '<h1></h1><h2></h2><h3></h3>',
      hintXp: 25,
    },
  },
  {
    courseId: 2,
    exerciseId: 'link-check',
    exerciseName: 'Link Check',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Every link should have meaningful text. Avoid \"click here\" — instead describe the destination.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Review and improve link text to be descriptive of the destination.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Link text should describe where it goes, not say 'click here'.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Links</title>\n</head>\n<body>\n  <a href=\"/about\">Click here</a>\n</body>\n</html>',
      },
      regex: '(?i)<a\\s+href="[^"]*">[^c]',
      output: '<a href="">',
      hintXp: 20,
    },
  },
  {
    courseId: 2,
    exerciseId: 'semantic-improvement',
    exerciseName: 'Semantic Improvement',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Replace generic divs with semantic HTML5 elements for better meaning and accessibility.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Convert a div-based layout to semantic elements like article, section, and aside.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use semantic tags instead of divs for meaningful structure.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Semantic HTML</title>\n</head>\n<body>\n  <div class="article\"></div>\n  <div class="sidebar\"></div>\n</body>\n</html>',
      },
      regex: '(?i)<article>.*</article>.*<aside>.*</aside>',
      output: '<article></article><aside></aside>',
      hintXp: 40,
    },
  },
];

const REACT_DATA = [
  {
    courseId: 1,
    exerciseId: 'meet-react',
    exerciseName: 'Meet React',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Welcome to React! React is a JavaScript library created by Facebook for building user interfaces with reusable components. It transforms how we think about building web applications by breaking them into smaller, manageable pieces called components.</p><p style='margin-bottom:8px;'>Before React, building complex UIs meant managing the DOM manually with jQuery or vanilla JavaScript. This approach became messy quickly as applications grew larger. React solved this by introducing a declarative approach: you describe what the UI should look like, and React handles the rendering.</p><p style='margin-bottom:8px;'>At its core, React uses the Virtual DOM — a lightweight JavaScript representation of the actual DOM. When state changes, React recalculates the Virtual DOM and efficiently updates only the parts that changed in the real DOM. This makes applications faster and more responsive.</p><p style='margin-bottom:8px;'>React's component-based architecture means you can break your application into small, independent, reusable pieces. Each component manages its own logic and rendering, making code easier to understand, test, and maintain. Think of components as LEGO blocks — you build complex structures by combining simple, well-designed pieces.</p><p style='margin-bottom:8px;'>The React ecosystem is vast. Alongside React's core library, you'll encounter tools like React Router for navigation, Redux or Context API for state management, and many others. But the core principle remains: build with components, manage state, and let React handle the UI updates.</p><p style='margin-bottom:8px;'>React uses JSX, a syntax extension that looks like HTML but is actually JavaScript. JSX makes components more readable and intuitive. Behind the scenes, JSX is compiled to JavaScript function calls that React understands.</p><p style='margin-bottom:8px;'>Understanding React opens doors to modern web development. Many companies build their entire UIs with React because it scales well, maintains clean code, and provides excellent developer experience. Learning React is an investment in your development career.</p><p style='margin-bottom:8px;'>React emphasizes one-way data flow: data flows down from parent components to child components through props. This makes applications predictable and easier to debug. When a child needs to communicate with a parent, it uses callback functions passed as props.</p><p style='margin-bottom:8px;'>The learning curve is gentle. You don't need to master all of React immediately. Start with components and props, then gradually add state management, lifecycle hooks, and advanced patterns. Each concept builds on previous knowledge logically.</p><p style='margin-bottom:8px;'>Hooks, introduced in React 16.8, revolutionized functional components. Before hooks, you had to use class components to access state and lifecycle features. Now, functional components with hooks are the standard approach, making code cleaner and more modular.</p><p style='margin-bottom:8px;'>This course takes you from complete beginner to building complex React applications. You'll learn component design, state management, routing, and best practices. By the end, you'll be confident building production-ready React applications.</p><p style='margin-bottom:8px;'>Ready to start your React journey? Let's begin by creating your first component and seeing React in action!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a functional component called <code>App</code> that returns a <code>div</code> containing the text <strong>Welcome to React!</strong>. Export the component as the default export.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a function named <code>App</code> that returns JSX. The returned JSX should be a <code>div</code> with the text inside. Use <code>export default App;</code> to export it.</p></body>",
      starterCode: {
        '/App.js':
          'function App() {\n  return (\n    // Write your code here\n  );\n}\n\nexport default App;',
      },
      regex: 'Welcome to React!',
      output: 'Welcome to React!',
      hintXp: 20,
    },
  },
  {
    courseId: 1,
    exerciseId: 'your-first-component',
    exerciseName: 'Your First Component',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Components are the building blocks of React applications. A component is a JavaScript function that returns JSX (a mix of HTML-like syntax and JavaScript). Components encapsulate UI logic and presentation, making code modular and reusable.</p><p style='margin-bottom:8px;'>There are two types of components: functional components and class components. Functional components are simpler and more popular today. They're just JavaScript functions that return JSX representing the component's UI.</p><p style='margin-bottom:8px;'>A functional component must start with a capital letter. This naming convention helps React distinguish between components (capitalized) and regular HTML elements (lowercase). When you write <code>&lt;MyComponent /&gt;</code>, React knows to call the <code>MyComponent</code> function.</p><p style='margin-bottom:8px;'>The JSX returned by a component can contain HTML elements, other React components, JavaScript expressions (in curly braces), and conditional logic. It all gets compiled to <code>React.createElement()</code> calls that build the component tree.</p><p style='margin-bottom:8px;'>A component must return exactly one root element. If you need multiple elements, wrap them in a parent div or use a React Fragment (<code>&lt;&gt;&lt;/&gt;</code>). This requirement keeps the component structure predictable.</p><p style='margin-bottom:8px;'>Creating your first component teaches you the fundamental pattern you'll repeat throughout React development. Once comfortable, you'll create components almost instinctively to solve UI challenges.</p><p style='margin-bottom:8px;'>Components can be as simple as displaying static text or as complex as managing state, making API calls, and rendering conditional content. Start simple, then add complexity as needed.</p><p style='margin-bottom:8px;'>Exporting components correctly is crucial. You can use <code>export default</code> for the main component or <code>export const</code> for named exports. The export style affects how other files import the component.</p><p style='margin-bottom:8px;'>Your first component is a milestone. It proves you understand the basic React pattern. From here, you'll learn how to make components accept data (props) and manage internal state.</p><p style='margin-bottom:8px;'>React components are reusable. Once you build a component, you can use it multiple times in your application. This reusability is one of React's greatest strengths for building scalable applications.</p><p style='margin-bottom:8px;'>The journey from component creation to building full applications is a natural progression. Each concept builds on this foundation of understanding how components work.</p><p style='margin-bottom:8px;'>Build your first component and unlock the power of component-based development!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a functional component called <code>Greeting</code> that returns a <code>div</code> with a heading <code>&lt;h1&gt;</code> containing <strong>Hello, World!</strong> and a paragraph <code>&lt;p&gt;</code> with <strong>This is my first React component.</strong>. Export it as default.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write: <code>function Greeting() { return (&lt;div&gt;&lt;h1&gt;Hello, World!&lt;/h1&gt;&lt;p&gt;This is my first React component.&lt;/p&gt;&lt;/div&gt;); }</code>. Remember to capitalize the component name and export it.</p></body>",
      starterCode: {
        '/App.js':
          'function Greeting() {\n  // Return JSX here\n}\n\nexport default Greeting;',
      },
      regex: 'Hello, World!|This is my first React component',
      output: 'Hello, World! This is my first React component.',
      hintXp: 25,
    },
  },
  {
    courseId: 1,
    exerciseId: 'jsx-magic',
    exerciseName: 'JSX Magic',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>JSX stands for JavaScript XML. It's a syntax extension that looks like HTML but is actually JavaScript. JSX makes React code more readable and intuitive, but behind the scenes, it compiles to regular JavaScript function calls.</p><p style='margin-bottom:8px;'>When you write <code>&lt;div&gt;Hello&lt;/div&gt;</code> in JSX, it compiles to <code>React.createElement('div', null, 'Hello')</code>. This transformation happens automatically during the build process. Understanding this helps demystify JSX's magic.</p><p style='margin-bottom:8px;'>JSX looks like HTML, but it's embedded in JavaScript. You can write JavaScript expressions inside JSX using curly braces. For example: <code>&lt;div&gt;{5 + 3}&lt;/div&gt;</code> renders the number 8. This blend of HTML and JavaScript is incredibly powerful.</p><p style='margin-bottom:8px;'>One critical rule: JSX attributes use camelCase instead of kebab-case. For example, <code>class</code> becomes <code>className</code>, <code>for</code> becomes <code>htmlFor</code>, and <code>onclick</code> becomes <code>onClick</code>. This is because JSX compiles to JavaScript object properties, which use camelCase.</p><p style='margin-bottom:8px;'>You can nest JSX elements just like HTML. A parent element can contain multiple children. JSX enforces valid nesting rules similar to HTML, which helps catch bugs early.</p><p style='margin-bottom:8px;'>Self-closing tags in JSX must end with a slash. For example: <code>&lt;img /&gt;</code>, <code>&lt;input /&gt;</code>, <code>&lt;br /&gt;</code>. Forgetting the slash is a common mistake that causes parsing errors.</p><p style='margin-bottom:8px;'>Comments in JSX require special syntax. You can't use <code>//</code> inside JSX tags. Instead, use <code>{/* comment */}</code> for multi-line comments. This prevents syntax errors when comments appear in JSX.</p><p style='margin-bottom:8px;'>JSX is stricter than HTML in some ways. Every opening tag must have a closing tag (or be self-closing). Missing closing tags cause compilation errors, which is actually helpful for catching mistakes early.</p><p style='margin-bottom:8px;'>Fragments are a special React feature for grouping elements without adding extra DOM nodes. Instead of wrapping in a div, use <code>&lt;&gt;&lt;/&gt;</code>. This keeps your DOM cleaner and avoids unnecessary nesting.</p><p style='margin-bottom:8px;'>You can conditionally render JSX using ternary operators, logical AND (&&), or if-else statements outside the JSX. Different approaches work in different situations — you'll learn when each is appropriate.</p><p style='margin-bottom:8px;'>JSX makes components declarative. You describe what the UI should look like, and React handles making it happen. This is far more intuitive than imperatively building the DOM step-by-step.</p><p style='margin-bottom:8px;'>Master JSX, and React becomes second nature. It's the syntax you'll use every single day as a React developer.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component that returns JSX with a <code>div</code> containing an <code>&lt;h2&gt;</code> with <strong>JSX is Powerful!</strong> and a paragraph that displays the result of <code>10 * 5</code> (use curly braces to embed the expression). The paragraph should contain the text <strong>The answer is:</strong> followed by the result.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use <code>&lt;p&gt;The answer is: {10 * 5}&lt;/p&gt;</code> to embed a JavaScript expression. Curly braces allow you to write JavaScript inside JSX.</p></body>",
      starterCode: {
        '/App.js':
          'export default function App() {\n  return (\n    <div>\n      {/* Add your JSX here */}\n    </div>\n  );\n}',
      },
      regex: 'JSX is Powerful!|50|The answer is',
      output: 'JSX is Powerful! The answer is: 50',
      hintXp: 25,
    },
  },
  {
    courseId: 1,
    exerciseId: 'react-vs-vanilla-js',
    exerciseName: 'React vs Vanilla JS',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Understanding the difference between React and vanilla JavaScript is crucial for appreciating why React exists. Vanilla JavaScript refers to using pure JavaScript without frameworks or libraries. Both have strengths; understanding when to use each is important.</p><p style='margin-bottom:8px;'>In vanilla JavaScript, you manually select DOM elements using <code>document.getElementById()</code>, <code>querySelector()</code>, etc., then modify them. For simple changes, this works fine. But as applications grow complex, manually managing DOM state becomes error-prone and tedious.</p><p style='margin-bottom:8px;'>React solves this by managing the DOM automatically. You describe the UI as a function of application state. When state changes, React automatically updates the DOM. This declarative approach eliminates entire classes of bugs.</p><p style='margin-bottom:8px;'>In vanilla JavaScript, updating a list means manually creating DOM nodes, adding them to the parent, and removing old ones. In React, you write <code>items.map(item => &lt;div key={item.id}&gt;{item.name}&lt;/div&gt;)</code>. Much cleaner and less error-prone.</p><p style='margin-bottom:8px;'>Vanilla JavaScript excels for small scripts or when you need to add interactivity to existing pages. Simple tasks like form validation or toggling visibility don't need React's overhead. Use the right tool for the job.</p><p style='margin-bottom:8px;'>React's component model encourages reusability and modularity. In vanilla JavaScript, reusing code often means copy-pasting or building custom patterns. React makes reusability the default.</p><p style='margin-bottom:8px;'>Performance: Vanilla JavaScript offers raw speed since there's no library overhead. React adds overhead but provides Virtual DOM optimization. For most applications, React's efficiency gains outweigh the initial overhead.</p><p style='margin-bottom:8px;'>Learning vanilla JavaScript first is valuable. It teaches you how the DOM works, how events propagate, and how browsers work. This foundation makes React more meaningful when you learn it.</p><p style='margin-bottom:8px;'>React's ecosystem is vast. Tools, libraries, and community support make development faster. Vanilla JavaScript puts you on your own for most concerns. For team projects, React's conventions and standards are invaluable.</p><p style='margin-bottom:8px;'>Debugging vanilla JavaScript often means checking the DOM in DevTools and tracing event handlers. React DevTools provides component inspection, making debugging more intuitive.</p><p style='margin-bottom:8px;'>The best developers understand both approaches. They choose React for complex applications and vanilla JavaScript for simple enhancements. This flexibility makes you a versatile engineer.</p><p style='margin-bottom:8px;'>Embrace both worlds. Vanilla JavaScript teaches you fundamentals; React teaches you scalability. Together, they make you a complete web developer.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a React component that displays a counter starting at <strong>0</strong>. The component should show text <strong>Counter: 0</strong> in a div. This demonstrates how React manages UI based on component logic, unlike vanilla JavaScript where you'd manually update the DOM.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a functional component that returns JSX displaying <code>&lt;div&gt;Counter: 0&lt;/div&gt;</code>. React handles rendering this for you, whereas vanilla JavaScript would require manual DOM manipulation.</p></body>",
      starterCode: {
        '/App.js':
          'export default function App() {\n  return (\n    <div>\n      {/* Display the counter here */}\n    </div>\n  );\n}',
      },
      regex: 'Counter:\\s*0',
      output: 'Counter: 0',
      hintXp: 20,
    },
  },
  {
    courseId: 1,
    exerciseId: 'component-detective',
    exerciseName: 'Component Detective',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Becoming a component detective means recognizing when and how to split code into separate, reusable components. This skill is essential for building scalable React applications. A good detective asks: Can this be reused? Does it have a single responsibility?</p><p style='margin-bottom:8px;'>Every component should have a single responsibility. If a component does multiple things, it's usually time to break it into smaller components. This principle, called Single Responsibility Principle (SRP), keeps code clean and testable.</p><p style='margin-bottom:8px;'>Large monolithic components are hard to understand, test, and maintain. Small, focused components are easier to reason about. A detective breaks down complex structures into understandable pieces.</p><p style='margin-bottom:8px;'>Sometimes what looks like a single component is actually multiple components waiting to be extracted. A card component might contain a header, body, and footer — each could be its own component.</p><p style='margin-bottom:8px;'>Think about component boundaries carefully. A component should represent a distinct piece of functionality or UI. Props should flow in and events should flow out. This clear interface makes components reliable building blocks.</p><p style='margin-bottom:8px;'>Naming components well helps readers instantly understand their purpose. <code>UserCard</code> is clearer than <code>Card</code>. <code>LoginForm</code> is better than <code>Form</code>. Names should reveal intent.</p><p style='margin-bottom:8px;'>A detective also looks at component complexity. If a component exceeds a few hundred lines, it probably does too much. Long components are red flags suggesting the need for refactoring.</p><p style='margin-bottom:8px;'>Reusability is the detective's goal. If you find yourself copying a component and changing a few props, that's a signal the component is too specific. Make it more generic.</p><p style='margin-bottom:8px;'>Component composition creates flexibility. Instead of one big component, compose smaller focused components. This approach scales better as requirements change.</p><p style='margin-bottom:8px;'>A well-structured component hierarchy is like a well-organized filing system. Each file contains related documents; each component contains related logic. Finding things is easy.</p><p style='margin-bottom:8px;'>The detective's eye develops over time. Initially, you might over-engineer and create too many components. Eventually, you'll find the sweet spot between granularity and simplicity.</p><p style='margin-bottom:8px;'>Practice component design now, and you'll build applications that remain maintainable as they grow.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Identify the structure: Create an <code>App</code> component that returns a div with the text <strong>I can spot components!</strong> nested inside. This exercise demonstrates understanding that even simple UIs are made of components.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a simple component called <code>App</code> that returns JSX with a div containing the text <strong>I can spot components!</strong>. Every UI element in React is part of a component structure.</p></body>",
      starterCode: {
        '/App.js':
          'function App() {\n  return (\n    // Return your component structure here\n  );\n}\n\nexport default App;',
      },
      regex: 'I can spot components!',
      output: 'I can spot components!',
      hintXp: 20,
    },
  },
  {
    courseId: 1,
    exerciseId: 'build-a-hello-world',
    exerciseName: 'Build a Hello World',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Every programmer's journey begins with Hello World. This timeless exercise teaches the absolute basics of a new language or framework. For React, Hello World means creating a simple component and rendering text.</p><p style='margin-bottom:8px;'>This project-style exercise brings together everything from Chapter 1: components, JSX, exports, and the fundamental pattern of React development. You're not learning new concepts here; you're synthesizing what you've learned.</p><p style='margin-bottom:8px;'>Building Hello World teaches you the workflow: create a component file, write a functional component, return JSX, export the component. This workflow repeats for every component you'll ever create.</p><p style='margin-bottom:8px;'>The component must display a main heading and a welcoming paragraph. These requirements test your understanding of JSX syntax, component structure, and proper element nesting.</p><p style='margin-bottom:8px;'>This is a milestone. Completing Hello World means you understand the foundational concepts of React. Everything from here builds on this knowledge.</p><p style='margin-bottom:8px;'>Pay attention to details: the component name must be capitalized, the export statement must be correct, and the JSX must be valid. These details matter in real React projects.</p><p style='margin-bottom:8px;'>Testing your component means checking that the text appears correctly. In real React development, you'd also test behavior, state changes, and user interactions. Start with the basics here.</p><p style='margin-bottom:8px;'>The Hello World project reinforces best practices: clear component names, proper structure, and clean code. Habits you form now will shape your development style.</p><p style='margin-bottom:8px;'>This exercise is a confidence builder. Successfully completing it shows you can create working React components. That's a real achievement worth celebrating.</p><p style='margin-bottom:8px;'>After Hello World, you're ready for more complex components. Each subsequent chapter builds on this foundation, gradually introducing more sophisticated concepts.</p><p style='margin-bottom:8px;'>Remember: every expert React developer started here. Master Hello World, and you're on your way to becoming a skilled React engineer.</p><p style='margin-bottom:8px;'>Now, build your Hello World and enter the world of React development!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a functional component called <code>App</code> that returns a div containing an <code>&lt;h1&gt;</code> with <strong>Hello, World!</strong> and a <code>&lt;p&gt;</code> with <strong>Welcome to React Development</strong>. Export it as the default export.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create: <code>function App() { return (&lt;div&gt;&lt;h1&gt;Hello, World!&lt;/h1&gt;&lt;p&gt;Welcome to React Development&lt;/p&gt;&lt;/div&gt;); } export default App;</code></p></body>",
      starterCode: {
        '/App.js':
          'function App() {\n  return (\n    // Build your Hello World component here\n  );\n}\n\nexport default App;',
      },
      regex: 'Hello, World!|Welcome to React Development',
      output: 'Hello, World! Welcome to React Development',
      hintXp: 30,
    },
  },

  // CHAPTER 2: Components Basics (6 exercises)
  {
    courseId: 1,
    exerciseId: 'functional-components',
    exerciseName: 'Functional Components',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Functional components are the modern standard in React. They're JavaScript functions that return JSX. Introduced with Hooks, they've largely replaced class components because they're simpler, cleaner, and more flexible.</p><p style='margin-bottom:8px;'>A functional component is just a function. It takes optional props as input and returns JSX. That's it. No inheritance, no lifecycle methods, no <code>this</code> binding. The simplicity is beautiful.</p><p style='margin-bottom:8px;'>Before Hooks (React 16.8), functional components couldn't use state or lifecycle features. Class components were required for these features. Hooks changed everything, making functional components equally powerful.</p><p style='margin-bottom:8px;'>The naming convention is strict: component functions must be capitalized. <code>Button</code> is a component; <code>button</code> is an HTML element. This distinction helps React distinguish between them and is enforced by the framework.</p><p style='margin-bottom:8px;'>Functional components are easy to test. They're pure functions: given the same props, they always return the same output. No hidden state means testing is straightforward and predictable.</p><p style='margin-bottom:8px;'>You can export functional components immediately: <code>export default function Button() { ... }</code> or define first then export: <code>function Button() { ... } export default Button;</code>. Both styles work; choose based on preference.</p><p style='margin-bottom:8px;'>Functional components encourage composition. Since they're just functions, combining them is natural. One component can call another component function, building complex UIs from simple pieces.</p><p style='margin-bottom:8px;'>Performance is identical between functional and class components today. Historical differences have been eliminated. Write functional components for cleaner, more readable code.</p><p style='margin-bottom:8px;'>Hooks enable all React features in functional components. <code>useState</code> for state, <code>useEffect</code> for side effects, <code>useContext</code> for context, and many custom hooks. Each is a simple function call.</p><p style='margin-bottom:8px;'>The React team recommends functional components for all new code. Class components aren't deprecated, but functional components are the future. Invest your learning energy here.</p><p style='margin-bottom:8px;'>Functional components keep your codebase consistent. When everyone writes functional components, the code looks familiar regardless of which file you're reading.</p><p style='margin-bottom:8px;'>Embrace functional components. They're the foundation of modern React development.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a functional component called <code>Welcome</code> that returns a div with the text <strong>This is a functional component</strong>. Then create another functional component called <code>App</code> that renders the <code>Welcome</code> component inside it.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Define two functions: <code>function Welcome() { return &lt;div&gt;This is a functional component&lt;/div&gt;; }</code> and <code>function App() { return &lt;Welcome /&gt;; }</code>. Export the <code>App</code> component.</p></body>",
      starterCode: {
        '/App.js':
          'function Welcome() {\n  return (\n    // Return your JSX here\n  );\n}\n\nfunction App() {\n  return (\n    // Render Welcome here\n  );\n}\n\nexport default App;',
      },
      regex: 'This is a functional component',
      output: 'This is a functional component',
      hintXp: 25,
    },
  },
  {
    courseId: 1,
    exerciseId: 'component-composition',
    exerciseName: 'Component Composition',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Component composition is about building complex UIs by combining simple, focused components. Instead of one large component doing everything, you create many small components and compose them together. This is fundamental to scalable React applications.</p><p style='margin-bottom:8px;'>Composition is more flexible than inheritance. In React, you rarely use inheritance (actually never, for components). Instead, you use composition: components that use other components to build functionality.</p><p style='margin-bottom:8px;'>Think of composition like building with LEGO. You don't build a whole castle in one massive block. You build small pieces (walls, towers, doors) then snap them together. Component composition works the same way.</p><p style='margin-bottom:8px;'>A parent component can render multiple child components. Each child is responsible for its own logic and rendering. The parent orchestrates how children appear and interact.</p><p style='margin-bottom:8px;'>Composition enables reusability. A <code>Button</code> component used in ten places only needs to be defined once. If the design changes, update it once and all usages are fixed.</p><p style='margin-bottom:8px;'>Composition also enables testing. Small components are easier to test in isolation. Once small components are tested, composing them is low-risk because each piece is proven to work.</p><p style='margin-bottom:8px;'>Props flow down the component tree from parent to child. This one-way data flow makes applications predictable and easy to debug. You always know where data comes from.</p><p style='margin-bottom:8px;'>Large components should be broken into smaller ones. This improves readability, reusability, and testability. If you have trouble naming a component, it might be doing too much.</p><p style='margin-bottom:8px;'>Composition patterns become your toolkit for solving problems. The Container pattern, Render Props, Compound Components — these are advanced compositions you'll learn later. Mastering basic composition first is essential.</p><p style='margin-bottom:8px;'>A well-composed component hierarchy reads like a story. Parent components describe the big picture; child components handle details. The structure itself documents how the application works.</p><p style='margin-bottom:8px;'>Avoid prop drilling (passing props through many levels). When a deeply nested component needs data, passing it through every intermediate component gets messy. Context API and state management solve this, but composition-first thinking prevents the problem initially.</p><p style='margin-bottom:8px;'>Master composition early. It's the most powerful tool for building maintainable React applications.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create three components: <code>Header</code> (returns <strong>Header Content</strong>), <code>Main</code> (returns <strong>Main Content</strong>), and <code>App</code> (renders both <code>Header</code> and <code>Main</code>). Each should be in its own functional component.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create: <code>function Header() { return &lt;div&gt;Header Content&lt;/div&gt;; }</code>, <code>function Main() { return &lt;div&gt;Main Content&lt;/div&gt;; }</code>, and <code>function App() { return (&lt;&gt;&lt;Header /&gt;&lt;Main /&gt;&lt;/&gt;); }</code></p></body>",
      starterCode: {
        '/App.js':
          'function Header() {\n  // Return header JSX\n}\n\nfunction Main() {\n  // Return main JSX\n}\n\nfunction App() {\n  // Compose Header and Main here\n}\n\nexport default App;',
      },
      regex: 'Header Content|Main Content',
      output: 'Header Content Main Content',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'export-and-import',
    exerciseName: 'Export and Import',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Exporting and importing components is how you organize React code across multiple files. Each component lives in its own file, but components need to work together. Exports and imports make this possible.</p><p style='margin-bottom:8px;'>JavaScript has two export styles: named exports and default exports. <code>export const Button = () => ...</code> is a named export. <code>export default Button</code> is a default export. Most React components use default exports.</p><p style='margin-bottom:8px;'>A file can have multiple named exports but only one default export. This convention prevents confusion about which component is the main one. Other exports are secondary utilities.</p><p style='margin-bottom:8px;'>Importing is the inverse of exporting. <code>import Button from './Button'</code> imports the default export. <code>import { Button } from './Button'</code> imports a named export. The syntax matches the export style.</p><p style='margin-bottom:8px;'>File paths matter. Relative paths like <code>./Button</code> are relative to the current file. <code>../Button</code> goes up one directory. Using correct paths prevents import errors.</p><p style='margin-bottom:8px;'>The <code>.js</code> extension is optional in imports. <code>import Button from './Button'</code> and <code>import Button from './Button.js'</code> work the same. Omitting the extension is common practice.</p><p style='margin-bottom:8px;'>Organizing components into files keeps projects manageable. A project might have a <code>components/</code> directory with many component files. Each file handles one component, keeping them focused.</p><p style='margin-bottom:8px;'>Circular dependencies happen when file A imports from file B and file B imports from file A. Avoid these by maintaining a clear dependency hierarchy. A depends on B, B doesn't depend on A.</p><p style='margin-bottom:8px;'>Barrel exports (index.js files) aggregate exports from multiple files. Instead of importing from many files, you import everything from one barrel. This simplifies component organization.</p><p style='margin-bottom:8px;'>IDE support for imports is powerful. Most editors auto-complete imports and help you navigate to files. Use these tools to work efficiently.</p><p style='margin-bottom:8px;'>Understanding imports and exports is essential for working with existing React projects. Codebases are organized as modules; you must navigate between them constantly.</p><p style='margin-bottom:8px;'>Practice exporting and importing. This skill is fundamental to real React development.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component called <code>Card</code> that returns a div with <strong>Card Component</strong>. Export it as the default export. Then in <code>App.js</code>, import the <code>Card</code> component and render it.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>In Card.js: <code>export default function Card() { return &lt;div&gt;Card Component&lt;/div&gt;; }</code>. In App.js: <code>import Card from './Card'; export default function App() { return &lt;Card /&gt;; }</code></p></body>",
      starterCode: {
        '/Card.js':
          'function Card() {\n  return (\n    // Return your Card JSX\n  );\n}\n\nexport default Card;',
        '/App.js':
          'function App() {\n  return (\n    // Import and use Card here\n  );\n}\n\nexport default App;',
      },
      regex: 'Card Component',
      output: 'Card Component',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'component-hierarchy',
    exerciseName: 'Component Hierarchy',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Component hierarchy is the tree structure of your application. The root is usually <code>App</code>, with child components branching downward. Understanding and designing this hierarchy is crucial for maintainable applications.</p><p style='margin-bottom:8px;'>A well-designed hierarchy is like a well-organized filing cabinet. Related items are grouped together. Information flows logically from top to bottom. Finding things is intuitive.</p><p style='margin-bottom:8px;'>The hierarchy determines data flow. Parent components pass data to children via props. Children communicate back through callback functions. This structure keeps data flow predictable.</p><p style='margin-bottom:8px;'>Deep hierarchies (many levels) can be problematic. Data flowing through many intermediate components (prop drilling) gets hard to manage. Consider your hierarchy depth when designing components.</p><p style='margin-bottom:8px;'>A flat hierarchy (few levels) might mean components are too large. Each level should add meaningful structure. Components at the same level usually solve related problems.</p><p style='margin-bottom:8px;'>Thinking in terms of hierarchy helps you visualize your application. Sketch the component tree before coding. This planning catches structural issues early.</p><p style='margin-bottom:8px;'>React DevTools shows your component hierarchy visually. You can inspect components, see props, and modify state during debugging. This tool is invaluable for understanding your application's structure.</p><p style='margin-bottom:8px;'>Hierarchy affects performance. When a parent re-renders, children re-render (unless optimized). Understanding which components depend on which data helps you optimize rendering.</p><p style='margin-bottom:8px;'>Reorganizing your hierarchy is sometimes necessary as requirements change. Extracting components or restructuring the tree can improve code organization. Don't be afraid to refactor.</p><p style='margin-bottom:8px;'>The best hierarchies are neither too deep nor too flat. They balance component size (each does one thing) with hierarchy depth (not too many levels). This balance comes with practice.</p><p style='margin-bottom:8px;'>Thinking hierarchically is a core React skill. It affects code organization, data flow, performance, and maintainability. Invest time in learning to design good hierarchies.</p><p style='margin-bottom:8px;'>Build hierarchies that make sense for your application's needs.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a hierarchy: <code>App</code> → <code>Layout</code> → <code>Content</code>. Each component should render the next and display its own name. App renders Layout, Layout renders Content. The final output should show all three names.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create: <code>Content</code> returns <strong>Content</strong>, <code>Layout</code> returns <code>&lt;&gt;Layout &lt;Content /&gt;&lt;/&gt;</code>, <code>App</code> returns <code>&lt;Layout /&gt;</code>. Each component adds its name to the output.</p></body>",
      starterCode: {
        '/App.js':
          'function Content() {\n  return <div>Content</div>;\n}\n\nfunction Layout() {\n  return (\n    <div>\n      {/* Render Content and add Layout text */}\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      {/* Render Layout */}\n    </div>\n  );\n}\n\nexport default App;',
      },
      regex: 'Layout|Content',
      output: 'Layout Content',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'reusable-components',
    exerciseName: 'Reusable Components',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Reusable components are the gold standard in component design. A reusable component can be used in many contexts without modification. This requires flexible design and good use of props.</p><p style='margin-bottom:8px;'>A non-reusable component is tightly coupled to one specific use case. Its content, styling, and behavior are hardcoded. If you need a similar component elsewhere, you copy-paste it and modify it. That's not reusability.</p><p style='margin-bottom:8px;'>Reusable components use props to accept configuration. Instead of hardcoding content, components accept it as props. This allows one component definition to serve many purposes.</p><p style='margin-bottom:8px;'>Generic names signal reusability. <code>Button</code> is reusable. <code>SubmitButton</code> is less so (tied to a specific purpose). <code>Card</code> is reusable. <code>ProductCard</code> might be tied to products. Use general names for reusable components.</p><p style='margin-bottom:8px;'>Composition increases reusability. A <code>Card</code> component that accepts children (<code>props.children</code>) is more reusable than one with hardcoded content. Children can be anything.</p><p style='margin-bottom:8px;'>Default props enhance reusability. If most uses of a component need the same prop value, make it a default. This reduces boilerplate for the common case while allowing customization when needed.</p><p style='margin-bottom:8px;'>Documenting component props is essential for reusability. Developers using your component need to know what props are available and what they do. Clear docs increase adoption.</p><p style='margin-bottom:8px;'>Testing reusable components thoroughly catches edge cases. A Button component used in ten places must work in all of them. Testing prevents surprises when the component is used in unexpected ways.</p><p style='margin-bottom:8px;'>Reusable components form the basis of design systems. Large companies build component libraries where every visual element is a reusable component. These libraries enforce consistency across products.</p><p style='margin-bottom:8px;'>Over-engineering for reusability can lead to overly complex components. Not everything needs to be reused. Make components as simple as their current use case requires, then refactor if you find yourself reusing them.</p><p style='margin-bottom:8px;'>The most valuable skill is knowing when a component is worth making reusable. Copy-paste is sometimes acceptable for one-off components. Identify patterns worth extracting.</p><p style='margin-bottom:8px;'>Design for reusability. Your future self (and your team) will thank you.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a reusable <code>Button</code> component that accepts <code>label</code> prop and renders a button with that label. Then use it in <code>App</code> to render two different buttons with different labels.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create: <code>function Button({label}) { return &lt;button&gt;{label}&lt;/button&gt;; }</code>. In App: <code>&lt;&gt;&lt;Button label="Click Me" /&gt;&lt;Button label="Submit" /&gt;&lt;/&gt;</code></p></body>',
      starterCode: {
        '/App.js':
          'function Button({ label }) {\n  return (\n    // Render button with label prop\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      {/* Use Button component twice with different labels */}\n    </div>\n  );\n}\n\nexport default App;',
      },
      regex: 'Click Me|Submit',
      output: 'Click Me Submit',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'build-a-card-component',
    exerciseName: 'Build a Card Component',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The Card component is a foundational UI pattern used everywhere. It's a reusable container that displays information in an organized, visually distinct box. Cards appear on product pages, dashboards, social networks, and countless other applications.</p><p style='margin-bottom:8px;'>A typical card has a title, description, and optional image or actions. By creating a flexible Card component, you learn composition, prop handling, and reusability — core React skills.</p><p style='margin-bottom:8px;'>This project brings together concepts from Chapter 2: creating components, composing them, and designing for reusability. You're not learning new concepts; you're applying what you know to build something useful.</p><p style='margin-bottom:8px;'>A well-designed Card component accepts props for title and description. This allows one component to render many different cards with different content. Reusability is the goal.</p><p style='margin-bottom:8px;'>The component should structure content logically: a header with the title, a body with the description. This structure is used across countless card implementations.</p><p style='margin-bottom:8px;'>Building a Card teaches you to think about component contracts. What props does a Card need? What does it return? Clear contracts make components predictable and easy to use.</p><p style='margin-bottom:8px;'>This exercise also teaches you about prop documentation. Developers using your Card need to know what props to pass. Clear, obvious prop names help.</p><p style='margin-bottom:8px;'>Testing the Card component means rendering it with different props and verifying the output matches expectations. This kind of testing is normal in real development.</p><p style='margin-bottom:8px;'>The Card component you build here is a starting point. In real projects, cards get styling, images, action buttons, and more. Today, focus on the core component.</p><p style='margin-bottom:8px;'>Completing this project shows you can design and build a practical React component from scratch. That's a significant accomplishment.</p><p style='margin-bottom:8px;'>Your Card component is a building block you'll use in future projects. Good design now saves work later.</p><p style='margin-bottom:8px;'>Build your Card, and you're building your React toolkit.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>Card</code> component that accepts <code>title</code> and <code>description</code> props. The component should render a div with an <code>&lt;h2&gt;</code> containing the title and a <code>&lt;p&gt;</code> containing the description. Then use it in <code>App</code> to display a card with title <strong>My Card</strong> and description <strong>This is a reusable card component</strong>.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create: <code>function Card({title, description}) { return (&lt;div&gt;&lt;h2&gt;{title}&lt;/h2&gt;&lt;p&gt;{description}&lt;/p&gt;&lt;/div&gt;); }</code>. Then use: <code>&lt;Card title="My Card" description="This is a reusable card component" /&gt;</code></p></body>',
      starterCode: {
        '/App.js':
          'function Card({ title, description }) {\n  return (\n    // Create card structure with title and description\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      {/* Render Card component with props */}\n    </div>\n  );\n}\n\nexport default App;',
      },
      regex: 'My Card|This is a reusable card component',
      output: 'My Card This is a reusable card component',
      hintXp: 40,
    },
  },

  // CHAPTER 3: Props (6 exercises)
  {
    courseId: 1,
    exerciseId: 'understanding-props',
    exerciseName: 'Understanding Props',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Props are how components communicate. Props stand for properties — they're data passed from a parent component to a child component. Understanding props is fundamental to React because data flow is how applications work.</p><p style='margin-bottom:8px;'>Props flow one direction: from parent to child. A parent component passes data; a child component receives and uses it. This one-way flow makes applications predictable and easy to debug.</p><p style='margin-bottom:8px;'>In a function component, props is the first parameter. <code>function Welcome(props) { return &lt;h1&gt;{props.name}&lt;/h1&gt;; }</code> accesses the <code>name</code> prop. Props arrive as an object containing all passed values.</p><p style='margin-bottom:8px;'>Props are immutable. A child component cannot modify props it receives. This ensures the parent's data isn't accidentally corrupted by children. If a child needs to change something, it calls a callback function passed as a prop.</p><p style='margin-bottom:8px;'>Any JavaScript value can be a prop: strings, numbers, booleans, objects, arrays, functions, even components themselves. This flexibility makes props incredibly powerful.</p><p style='margin-bottom:8px;'>Props are passed as attributes in JSX. <code>&lt;Greeting name=\"Alice\" /&gt;</code> passes the <code>name</code> prop with value <code>&quot;Alice&quot;</code>. Multiple props can be passed: <code>&lt;Greeting name=\"Alice\" age={25} /&gt;</code>.</p><p style='margin-bottom:8px;'>Default props are values used when a prop isn't passed. <code>function Greeting({name = 'Guest'}) { ... }</code> uses 'Guest' if <code>name</code> isn't provided. This makes components more flexible.</p><p style='margin-bottom:8px;'>Props enable component reusability. One <code>Button</code> component with different <code>label</code> props serves many purposes. Without props, you'd need a different component for each use case.</p><p style='margin-bottom:8px;'>Understanding what props a component needs is crucial. Good component design makes props obvious. Confusing prop requirements make components hard to use.</p><p style='margin-bottom:8px;'>Props vs. state is an important distinction. Props come from outside (parent component). State is internal (managed by the component itself). Props are data, state is memory.</p><p style='margin-bottom:8px;'>Prop validation (checking that props have correct types) is important in large projects. PropTypes library or TypeScript help catch bugs early by validating props at runtime or compile-time.</p><p style='margin-bottom:8px;'>Master props, and you master data flow in React. This knowledge is fundamental to everything else you'll learn.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component <code>Greeting</code> that accepts a <code>name</code> prop and renders <strong>Hello, {name}!</strong>. Then in <code>App</code>, use the <code>Greeting</code> component with the prop value <strong>Alice</strong>.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create: <code>function Greeting({name}) { return &lt;div&gt;Hello, {name}!&lt;/div&gt;; }</code>. Use: <code>&lt;Greeting name="Alice" /&gt;</code></p></body>',
      starterCode: {
        '/App.js':
          'function Greeting({ name }) {\n  return (\n    // Return greeting with name prop\n  );\n}\n\nfunction App() {\n  return (\n    // Use Greeting component with name prop\n  );\n}\n\nexport default App;',
      },
      regex: 'Hello, Alice!',
      output: 'Hello, Alice!',
      hintXp: 25,
    },
  },
  {
    courseId: 1,
    exerciseId: 'passing-props',
    exerciseName: 'Passing Props',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Passing props is how you communicate from parent to child. Every interaction between components involves passing data as props. Mastering this skill is essential.</p><p style='margin-bottom:8px;'>Props are passed as JSX attributes. <code>&lt;Button label=\"Click\" /&gt;</code> passes <code>label</code> as a prop. <code>&lt;Counter initial={10} /&gt;</code> passes <code>initial</code> as a prop with a number value.</p><p style='margin-bottom:8px;'>String props can be passed without curly braces: <code>&lt;Button label=\"Click\" /&gt;</code>. Non-string values need curly braces: <code>&lt;Counter value={42} /&gt;</code>, <code>&lt;Flag enabled={true} /&gt;</code>, <code>&lt;List items={myArray} /&gt;</code>.</p><p style='margin-bottom:8px;'>Objects and arrays are often passed as props. <code>&lt;User data={{name: 'Alice', age: 25}} /&gt;</code> passes an object. <code>&lt;List items={[1, 2, 3]} /&gt;</code> passes an array. This allows passing complex data structures.</p><p style='margin-bottom:8px;'>Function props are powerful. <code>&lt;Button onClick={handleClick} /&gt;</code> passes a function. The child calls this function when appropriate. This enables communication back to the parent.</p><p style='margin-bottom:8px;'>Props drilling occurs when you pass props through intermediate components that don't use them. This gets unwieldy with deep hierarchies. Context API solves this, but understanding the problem first is important.</p><p style='margin-bottom:8px;'>Spreading props is a shortcut. <code>&lt;Button {...buttonProps} /&gt;</code> passes all properties of <code>buttonProps</code> as props. Useful for forwarding unknown props to child components.</p><p style='margin-bottom:8px;'>Named props vs. positional parameters: React uses named props (attributes), not positional parameters. <code>&lt;Greeting name=\"Alice\" /&gt;</code> not <code>&lt;Greeting \"Alice\" /&gt;</code>. This clarity is intentional.</p><p style='margin-bottom:8px;'>Conditional props: sometimes you only pass a prop if a condition is met. <code>{condition && &lt;Component prop={value} /&gt;}</code>. The component either receives the prop or receives <code>undefined</code>.</p><p style='margin-bottom:8px;'>Passing dynamic values from state is common. A parent component holds state and passes it to children. When state changes, children receive new prop values and re-render.</p><p style='margin-bottom:8px;'>Props are read-only at the component level. If the data needs to change, it should be state. The parent owns the state and passes it as props.</p><p style='margin-bottom:8px;'>Passing props correctly is the foundation of component communication. Get this right, and everything else falls into place.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>Product</code> component that accepts <code>name</code> and <code>price</code> props. It should display <strong>{name}: ${price}</strong>. In <code>App</code>, render two products: <strong>Laptop: $999</strong> and <strong>Mouse: $25</strong>.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create: <code>function Product({name, price}) { return &lt;div&gt;{name}: ${price}&lt;/div&gt;; }</code>. Use: <code>&lt;Product name="Laptop" price={999} /&gt;&lt;Product name="Mouse" price={25} /&gt;</code></p></body>',
      starterCode: {
        '/App.js':
          'function Product({ name, price }) {\n  return (\n    // Display product name and price\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      {/* Render Product components with props */}\n    </div>\n  );\n}\n\nexport default App;',
      },
      regex: 'Laptop.*999|Mouse.*25',
      output: 'Laptop: $999 Mouse: $25',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'props-destructuring',
    exerciseName: 'Props Destructuring',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Props destructuring is a JavaScript technique that makes React code cleaner and more readable. Instead of accessing <code>props.name</code> and <code>props.age</code>, you destructure to get <code>name</code> and <code>age</code> directly.</p><p style='margin-bottom:8px;'>Destructuring works because props is an object. JavaScript object destructuring syntax extracts specific properties. <code>const {name, age} = props;</code> creates variables from object properties.</p><p style='margin-bottom:8px;'>Function parameter destructuring is idiomatic React. <code>function User({name, age}) { ... }</code> destructures props directly in the parameter list. This is cleaner than <code>function User(props) { const {name, age} = props; ... }</code>.</p><p style='margin-bottom:8px;'>Default values work with destructuring. <code>function Greeting({name = 'Guest'}) { ... }</code> uses 'Guest' if name isn't provided. This is cleaner than checking <code>props.name || 'Guest'</code> later.</p><p style='margin-bottom:8px;'>Destructuring unknown props: sometimes you want some props explicitly and the rest to be available. <code>function Component({id, ...rest}) { ... }</code> extracts <code>id</code> and puts remaining props in <code>rest</code>. Useful for forwarding props.</p><p style='margin-bottom:8px;'>Renaming props during destructuring: <code>function Component({firstName: first}) { ... }</code> renames <code>firstName</code> to <code>first</code>. Useful when prop names don't match desired variable names.</p><p style='margin-bottom:8px;'>Nested destructuring works for complex prop objects. <code>function User({profile: {name, age}}) { ... }</code> destructures nested properties. Be careful not to over-nest; it hurts readability.</p><p style='margin-bottom:8px;'>Destructuring makes code self-documenting. Reading the function signature immediately shows what props are expected. This clarity is valuable for developers reading your code.</p><p style='margin-bottom:8px;'>Most React code uses destructuring. It's the standard approach. Learning it now makes reading existing code easier.</p><p style='margin-bottom:8px;'>Destructuring is JavaScript, not React-specific. Mastering this syntax benefits all your JavaScript code, not just React.</p><p style='margin-bottom:8px;'>When reading React components, destructuring appears everywhere. Comfort with this syntax is essential for understanding real projects.</p><p style='margin-bottom:8px;'>Use destructuring. It makes your React code cleaner and more professional.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>Person</code> component that destructures <code>name</code> and <code>age</code> from props. It should display <strong>{name} is {age} years old</strong>. Use it in <code>App</code> to show <strong>Bob is 30 years old</strong>.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create: <code>function Person({name, age}) { return &lt;div&gt;{name} is {age} years old&lt;/div&gt;; }</code>. Use: <code>&lt;Person name="Bob" age={30} /&gt;</code></p></body>',
      starterCode: {
        '/App.js':
          'function Person({ /* destructure props here */ }) {\n  return (\n    // Display person info\n  );\n}\n\nfunction App() {\n  return (\n    // Use Person component\n  );\n}\n\nexport default App;',
      },
      regex: 'Bob.*30.*years old',
      output: 'Bob is 30 years old',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'default-props',
    exerciseName: 'Default Props',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Default props provide fallback values when props aren't passed. They make components more flexible and reduce boilerplate code. If most uses of a component need the same prop value, make it a default.</p><p style='margin-bottom:8px;'>Default values make components work well with minimal props. <code>&lt;Button /&gt;</code> without a label might use a default. <code>&lt;Button label=\"Click\" /&gt;</code> overrides the default. Both work without error.</p><p style='margin-bottom:8px;'>Function parameter defaults in destructuring are the modern approach. <code>function Button({label = 'Click'}) { ... }</code> is cleaner than checking <code>if (!label) label = 'Click'</code> later.</p><p style='margin-bottom:8px;'>Multiple defaults work naturally. <code>function Button({label = 'Click', disabled = false, type = 'button'}) { ... }</code> provides defaults for all three props. Only passed values override defaults.</p><p style='margin-bottom:8px;'>Default values should be sensible defaults. A <code>disabled</code> button is unusual; defaulting to <code>false</code> makes sense. A button with no label is strange; providing a default 'Click' is helpful.</p><p style='margin-bottom:8px;'>Complex default values (objects, arrays) need care. <code>function Component({items = []}) { ... }</code> is fine. Creating a new array each render could be inefficient for very complex defaults.</p><p style='margin-bottom:8px;'>Conditional defaults using logic: <code>const {count = 0} = props;</code> only works for simple values. For complex logic, compute outside destructuring: <code>const finalValue = props.value !== undefined ? props.value : computeDefault();</code></p><p style='margin-bottom:8px;'>Default props documentation is important. Developers using your component should know what defaults are available. This helps them use the component effectively.</p><p style='margin-bottom:8px;'>Defaults increase usability. A well-defaulted component works great out-of-the-box but is customizable when needed. This balance is ideal for reusable components.</p><p style='margin-bottom:8px;'>Testing components with defaults means testing both default behavior and overridden behavior. Both scenarios should work correctly.</p><p style='margin-bottom:8px;'>Default props are a simple pattern with big impact. They make components better without much effort.</p><p style='margin-bottom:8px;'>Use default props thoughtfully to improve your component APIs.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create a <code>Greeting</code> component with <code>name</code> prop that defaults to <strong>Guest</strong>. Display <strong>Hello, {name}!</strong>. Use it in <code>App</code> twice: once without the prop (should show <strong>Hello, Guest!</strong>) and once with <code>name="Charlie"</code> (should show <strong>Hello, Charlie!</strong>).</p></body>',
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create: <code>function Greeting({name = 'Guest'}) { return &lt;div&gt;Hello, {name}!&lt;/div&gt;; }</code>. Use: <code>&lt;Greeting /&gt;&lt;Greeting name=\"Charlie\" /&gt;</code></p></body>",
      starterCode: {
        '/App.js':
          'function Greeting({ name = /* provide default */ }) {\n  return (\n    // Display greeting\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      {/* Use Greeting twice: with and without prop */}\n    </div>\n  );\n}\n\nexport default App;',
      },
      regex: 'Hello, Guest!|Hello, Charlie!',
      output: 'Hello, Guest! Hello, Charlie!',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'children-props',
    exerciseName: 'Children Props',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The <code>children</code> prop is special in React. Content placed between opening and closing tags of a component becomes the <code>children</code> prop. This pattern enables powerful composition and flexibility.</p><p style='margin-bottom:8px;'>Using children: <code>&lt;Box&gt;&lt;p&gt;Content here&lt;/p&gt;&lt;/Box&gt;</code> passes the <code>&lt;p&gt;</code> as <code>children</code> to Box. The Box component can use <code>props.children</code> to render it. This is more flexible than passing content as a prop.</p><p style='margin-bottom:8px;'>Children enable composition patterns. A Box component doesn't need to know what's inside. It just provides structure and layout. The parent decides what goes in.</p><p style='margin-bottom:8px;'>Multiple children work naturally. <code>&lt;Container&gt;&lt;h1&gt;Title&lt;/h1&gt;&lt;p&gt;Content&lt;/p&gt;&lt;/Container&gt;</code> passes both as children. The Container can arrange them however it wants.</p><p style='margin-bottom:8px;'>Children can be anything: text, elements, components, expressions. <code>&lt;Box&gt;{isVisible && &lt;Component /&gt;}&lt;/Box&gt;</code> passes conditional content. <code>&lt;Box&gt;{items.map(item => ...)}&lt;/Box&gt;</code> passes mapped content. This flexibility is powerful.</p><p style='margin-bottom:8px;'>Rendering children is simple. <code>function Box({children}) { return &lt;div&gt;{children}&lt;/div&gt;; }</code> renders children inside a div. The children maintain their structure and behavior.</p><p style='margin-bottom:8px;'>Children with multiple elements: <code>&lt;Box&gt;&lt;a&gt;Link&lt;/a&gt;&lt;span&gt;Text&lt;/span&gt;&lt;/Box&gt;</code> passes both. React handles this correctly. No special syntax needed.</p><p style='margin-bottom:8px;'>Fragments help group multiple children without extra wrappers. <code>&lt;Box&gt;&lt;&gt;&lt;h1&gt;Title&lt;/h1&gt;&lt;p&gt;Text&lt;/p&gt;&lt;/&gt;&lt;/Box&gt;</code> groups without adding a parent div.</p><p style='margin-bottom:8px;'>Children enable the Compound Components pattern. Multiple components work together, with children enabling coordination. Advanced pattern, but powerful once mastered.</p><p style='margin-bottom:8px;'>children is React convention. Some frameworks or patterns use different names, but React uses children. Consistency helps.</p><p style='margin-bottom:8px;'>Children prop is one of React's most powerful features. Master it, and you can build incredibly flexible, reusable components.</p><p style='margin-bottom:8px;'>Think in terms of composition using children. It changes how you design components.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>Card</code> component that accepts <code>children</code> and renders them inside a div. In <code>App</code>, use the Card component to wrap <code>&lt;h3&gt;Card Title&lt;/h3&gt;</code> and <code>&lt;p&gt;Card content goes here&lt;/p&gt;</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create: <code>function Card({children}) { return &lt;div&gt;{children}&lt;/div&gt;; }</code>. Use: <code>&lt;Card&gt;&lt;h3&gt;Card Title&lt;/h3&gt;&lt;p&gt;Card content goes here&lt;/p&gt;&lt;/Card&gt;</code></p></body>",
      starterCode: {
        '/App.js':
          'function Card({ children }) {\n  return (\n    // Render children inside a div\n  );\n}\n\nfunction App() {\n  return (\n    // Use Card with children content\n  );\n}\n\nexport default App;',
      },
      regex: 'Card Title|Card content goes here',
      output: 'Card Title Card content goes here',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'build-a-profile-card',
    exerciseName: 'Build a Profile Card',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The profile card is a common UI pattern across social networks, team directories, and user management systems. Building one teaches you to combine props, destructuring, and composition into a practical component.</p><p style='margin-bottom:8px;'>A profile card typically displays a person's name, title, and bio. Some include images or social links. This variety makes it a good learning exercise — you'll design a flexible component that handles different content.</p><p style='margin-bottom:8px;'>This project brings together Chapter 3 concepts: understanding props, passing them correctly, destructuring them cleanly, and using children for flexible content. You're applying everything you've learned.</p><p style='margin-bottom:8px;'>A well-designed ProfileCard accepts name, title, and bio as props, or uses children for flexible content. This dual approach teaches component design trade-offs.</p><p style='margin-bottom:8px;'>Building this component teaches you to think about reusability. A ProfileCard should work for team members, social network users, or any other profile context. Generic design is the goal.</p><p style='margin-bottom:8px;'>Component contracts matter. What props does a ProfileCard need? What's optional? Clear design helps developers use your component effectively.</p><p style='margin-bottom:8px;'>This is a practical skill. ProfileCards appear in countless real-world applications. Building one well teaches patterns you'll use repeatedly.</p><p style='margin-bottom:8px;'>Testing your ProfileCard means rendering it with different prop combinations and verifying output. This practice teaches quality assurance thinking.</p><p style='margin-bottom:8px;'>The component you build here is production-like. With styling added, this could be a real component used in an application. That's the level of quality to aim for.</p><p style='margin-bottom:8px;'>ProfileCard projects teach you to structure components hierarchically. Should it be one component or multiple (Card, CardHeader, CardBody)? Both approaches have merits.</p><p style='margin-bottom:8px;'>Completing this project proves you can design and build a practical React component with solid fundamentals.</p><p style='margin-bottom:8px;'>Build your ProfileCard, and you're building real-world React skills.</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create a <code>ProfileCard</code> component that accepts <code>name</code> and <code>title</code> props. Display them as a heading and subheading. In <code>App</code>, use the component with <code>name="Emma"</code> and <code>title="Software Engineer"</code>. The output should show both the name and title.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Create: <code>function ProfileCard({name, title}) { return (&lt;div&gt;&lt;h2&gt;{name}&lt;/h2&gt;&lt;p&gt;{title}&lt;/p&gt;&lt;/div&gt;); }</code>. Use: <code>&lt;ProfileCard name="Emma" title="Software Engineer" /&gt;</code></p></body>',
      starterCode: {
        '/App.js':
          'function ProfileCard({ name, title }) {\n  return (\n    // Create profile card with name and title\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      {/* Render ProfileCard with props */}\n    </div>\n  );\n}\n\nexport default App;',
      },
      regex: 'Emma|Software Engineer',
      output: 'Emma Software Engineer',
      hintXp: 40,
    },
  },
  // CHAPTER 4: State Management (6 exercises)
  {
    courseId: 1,
    exerciseId: 'introduction-to-state',
    exerciseName: 'Introduction to State',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>State is data that changes over time. Unlike props (which flow from parent), state is internal to a component. State enables components to be dynamic, responding to user interactions and changing application conditions.</p><p style='margin-bottom:8px;'>Props are immutable (read-only), but state is mutable. A component can change its own state. When state changes, React re-renders the component with the new state values, updating the UI automatically.</p><p style='margin-bottom:8px;'>Without state, all UIs would be static. State is what enables interactivity: buttons that respond to clicks, forms that accept input, counters that increment. State makes applications alive.</p><p style='margin-bottom:8px;'>Before Hooks, only class components could have state. Functional components were stateless. Hooks changed this, introducing <code>useState</code>. Now functional components are the norm, with state support built-in.</p><p style='margin-bottom:8px;'>Thinking about state is crucial for React design. Ask: What data needs to change? Where should it live? Who needs access to it? Good state design prevents bugs and simplifies code.</p><p style='margin-bottom:8px;'>State should be minimal. Only store data that can change. Derived data (computed from other state) shouldn't be state. This principle keeps state simple and maintainable.</p><p style='margin-bottom:8px;'>Local state is state within a single component. Global state is shared across many components. Start with local state; only lift to global when necessary. Simpler is better.</p><p style='margin-bottom:8px;'>Re-rendering happens when state changes. React re-runs the component function, returning updated JSX. This re-rendering is automatic and intelligent — React only updates changed parts of the DOM.</p><p style='margin-bottom:8px;'>Updating state correctly is important. You never directly modify state. Instead, you call a setter function. This pattern ensures React knows to re-render and handles batching correctly.</p><p style='margin-bottom:8px;'>State transitions define your component's behavior. A login form goes from empty to filled to submitted. Tracking these transitions in state makes the component predictable.</p><p style='margin-bottom:8px;'>State management is a core skill. Every interactive component uses state. Mastering state makes you effective at building any kind of React application.</p><p style='margin-bottom:8px;'>State is what separates simple components from interactive applications. Learn it well.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component that uses state to track a count starting at <strong>0</strong>. Display the count value in a div. (Don't add buttons yet; just display the state value.)</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use <code>const [count, setCount] = useState(0);</code> to create state. Then display it with <code>&lt;div&gt;Count: {count}&lt;/div&gt;</code>. You'll need to import useState from React.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  // Create state here\n  \n  return (\n    <div>\n      {/* Display state value */}\n    </div>\n  );\n}",
      },
      regex: 'Count:\\s*0',
      output: 'Count: 0',
      hintXp: 25,
    },
  },
  {
    courseId: 1,
    exerciseId: 'usestate-hook',
    exerciseName: 'useState Hook',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The <code>useState</code> Hook is the primary way to add state to functional components. It's a function from React that returns an array: the current state value and a function to update it. This simple API is incredibly powerful.</p><p style='margin-bottom:8px;'>Syntax: <code>const [value, setValue] = useState(initialValue);</code> declares state with an initial value. <code>value</code> is the current state. <code>setValue</code> is the function to update it. The square brackets use array destructuring.</p><p style='margin-bottom:8px;'>Initial state can be any JavaScript value: number, string, boolean, object, array. <code>useState(0)</code> starts with 0. <code>useState('')</code> starts with empty string. <code>useState(false)</code> starts with false.</p><p style='margin-bottom:8px;'>Calling the setter updates state and triggers a re-render. <code>setValue(newValue)</code> updates state to <code>newValue</code> and re-renders the component. The component function runs again with the new state.</p><p style='margin-bottom:8px;'>Multiple state variables are common. <code>const [count, setCount] = useState(0);const [name, setName] = useState('');</code> declares two separate pieces of state. Each has its own setter.</p><p style='margin-bottom:8px;'>useState must be called at the top level of a functional component, not in loops, conditions, or nested functions. This rule ensures React can track state correctly. Hooks Rules are important to learn.</p><p style='margin-bottom:8px;'>Functional updates: instead of <code>setCount(count + 1)</code>, use <code>setCount(prev => prev + 1)</code>. The function receives the previous state and returns the new state. This is safer in certain scenarios, especially with rapid updates.</p><p style='margin-bottom:8px;'>setState is asynchronous. Setting state doesn't immediately change the variable. React batches updates and re-renders. Accessing the state variable right after <code>setValue</code> still gets the old value.</p><p style='margin-bottom:8px;'>useState is one of the most fundamental Hooks. Every interactive component uses it. Mastering it opens the door to building stateful components.</p><p style='margin-bottom:8px;'>The naming convention <code>value</code> and <code>setValue</code> is standard. Others might use <code>count</code> and <code>setCount</code>, <code>isOpen</code> and <code>setIsOpen</code>. The pattern is consistent: state name and corresponding setter.</p><p style='margin-bottom:8px;'>useState simplifies state management compared to class components. No this binding, no constructor boilerplate. Just a function call.</p><p style='margin-bottom:8px;'>Master useState, and you have the foundation for all interactive React components.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with state for a message starting as empty string. Display the message in a div. The output should show <strong>Current message:</strong> with the state value.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const [message, setMessage] = useState('');</code> then render <code>&lt;div&gt;Current message: {message}&lt;/div&gt;</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [message, setMessage] = useState(/* initial value */);\n  \n  return (\n    <div>\n      {/* Display the message state */}\n    </div>\n  );\n}",
      },
      regex: 'Current message:',
      output: 'Current message:',
      hintXp: 25,
    },
  },
  {
    courseId: 1,
    exerciseId: 'updating-state',
    exerciseName: 'Updating State',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Updating state means calling the setter function with a new value. This is how you make components interactive. When state updates, React re-renders, and users see the changes immediately.</p><p style='margin-bottom:8px;'>Simple update: <code>setCount(10)</code> sets count to 10 directly. Use this when you have the exact new value.</p><p style='margin-bottom:8px;'>Functional update: <code>setCount(prev => prev + 1)</code> updates based on the previous state. Use this when the new state depends on the old state. It's safer, especially with async operations.</p><p style='margin-bottom:8px;'>Updating string state: <code>setName('Alice')</code> replaces the string. For concatenation: <code>setName(prev => prev + ' ' + newPart)</code> builds on the previous value.</p><p style='margin-bottom:8px;'>Updating objects and arrays requires care. Objects and arrays are mutable, but React expects immutability. Create a new object/array instead of modifying the old one. <code>setUser({...user, name: 'Bob'})</code> creates a new object with updated properties.</p><p style='margin-bottom:8px;'>Immutability is key to React. Always create new objects/arrays rather than mutating existing ones. This allows React to detect changes and re-render efficiently.</p><p style='margin-bottom:8px;'>Updating nested objects: <code>setUser({...user, profile: {...user.profile, age: 25}})</code> updates nested properties immutably. Spread syntax helps create new objects.</p><p style='margin-bottom:8px;'>Updating arrays: <code>setItems([...items, newItem])</code> adds an item immutably. <code>setItems(items.filter(item => item.id !== idToRemove))</code> removes an item. <code>setItems(items.map(item => item.id === id ? {...item, updated: true} : item))</code> updates one item.</p><p style='margin-bottom:8px;'>Event handlers commonly update state. <code>&lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;</code> updates on click. Handlers are where most state updates happen.</p><p style='margin-bottom:8px;'>Batch updates: React batches multiple setState calls in an event handler and re-renders once. This is an optimization that improves performance.</p><p style='margin-bottom:8px;'>Updating state is how you build interactive components. Every click, keystroke, or change flows through state updates.</p><p style='margin-bottom:8px;'>Master state updates, and you control your component's behavior.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with state initialized to <strong>0</strong>. Add a button that increments the state when clicked. Display the current state value. After clicking, it should show <strong>1</strong>, <strong>2</strong>, etc.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use <code>const [count, setCount] = useState(0);</code>. Create a button: <code>&lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;</code>. Display: <code>&lt;div&gt;{count}&lt;/div&gt;</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      {/* Display count and add button to update it */}\n    </div>\n  );\n}",
      },
      regex: '0|1|2',
      output: '0 (initial), then increments on button click',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'state-vs-props',
    exerciseName: 'State vs Props',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>State and props both hold data, but they're fundamentally different. Props come from the parent and are read-only. State is internal and mutable. Understanding this distinction is crucial for React design.</p><p style='margin-bottom:8px;'>Props flow down: parent passes data to children. State stays local: a component manages its own state. Props connect components hierarchically; state keeps components independent.</p><p style='margin-bottom:8px;'>Props are immutable: a child cannot change props it receives. State is mutable: a component can change its own state. This design enforces proper data flow.</p><p style='margin-bottom:8px;'>When to use props: when data comes from a parent and the child shouldn't change it. A Button receiving a label prop. A Card receiving content props. Props define how components communicate.</p><p style='margin-bottom:8px;'>When to use state: when data is internal to a component and can change. A form's input fields. A dropdown's open/closed status. A counter's current count. State is for component-specific data.</p><p style='margin-bottom:8px;'>Lifting state: sometimes a child component needs to share state with its parent or siblings. The solution: move state to the common parent and pass it down as props. This pattern is fundamental.</p><p style='margin-bottom:8px;'>Props from state: a parent with state passes it to children as props. <code>&lt;Button label={buttonLabel} /&gt;</code> passes state <code>buttonLabel</code> as a prop. This combines state and props naturally.</p><p style='margin-bottom:8px;'>Callbacks as props: a parent passes a function as a prop. The child calls it to communicate back. <code>&lt;Button onClick={handleClick} /&gt;</code>. The child doesn't change parent state directly; it calls a callback.</p><p style='margin-bottom:8px;'>Props make components reusable. A component that only uses props can be used anywhere. State can make components less reusable because they're tied to specific behaviors.</p><p style='margin-bottom:8px;'>State complexity: as an application grows, managing state in many components becomes complex. Context API and state management libraries (Redux, Zustand) help. But start with simple state and props.</p><p style='margin-bottom:8px;'>The relationship between state and props is core to React architecture. Master it, and you understand React's design philosophy.</p><p style='margin-bottom:8px;'>Think of props as inputs and state as memory. Inputs come from outside; memory is internal.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an <code>App</code> component with state for a message. Create a <code>Display</code> component that receives the message as a prop and displays <strong>Message: {message}</strong>. In App, render the Display component and show how state flows to props.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>In App: <code>const [msg, setMsg] = useState('Hello');</code> then <code>&lt;Display message={msg} /&gt;</code>. In Display: <code>function Display({message}) { return &lt;div&gt;Message: {message}&lt;/div&gt;; }</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nfunction Display({ message }) {\n  return (\n    // Display the message prop\n  );\n}\n\nexport default function App() {\n  const [message, setMessage] = useState('Hello');\n  \n  return (\n    <div>\n      {/* Render Display with message state as prop */}\n    </div>\n  );\n}",
      },
      regex: 'Message:.*Hello',
      output: 'Message: Hello',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'build-a-counter',
    exerciseName: 'Build a Counter',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The counter is the classic first stateful component. Every React learner builds one. It teaches state management, event handling, and component interactivity in the simplest possible way.</p><p style='margin-bottom:8px;'>A counter displays a number and provides buttons to increment and decrement it. That's it. Simple, but powerful. It covers essential React patterns you'll use every day.</p><p style='margin-bottom:8px;'>This project brings together Chapter 4 concepts: understanding state, using useState Hook, updating state, and distinguishing state from props. You're synthesizing everything about state.</p><p style='margin-bottom:8px;'>A good counter component manages its own state (the current count) and provides clear buttons for incrementing and decrementing. The logic is straightforward, but the practice is valuable.</p><p style='margin-bottom:8px;'>Building a counter teaches event handling. Buttons call functions on click. These handlers update state. This pattern repeats in every interactive component.</p><p style='margin-bottom:8px;'>You'll practice the pattern: state → display → event → update state → re-render. This cycle is fundamental to React. Master it with a counter, use it in complex applications.</p><p style='margin-bottom:8px;'>A counter is an excellent candidate for testing. Test that it starts at 0, increments correctly, decrements correctly, and handles edge cases. This practice teaches quality thinking.</p><p style='margin-bottom:8px;'>Once you have a working counter, you can extend it: reset button, step size as props, disable buttons at limits, persist to localStorage. Each extension teaches new patterns.</p><p style='margin-bottom:8px;'>This project is your proof that you can build interactive React components. It's simple enough to complete quickly but complete enough to be satisfying.</p><p style='margin-bottom:8px;'>Every React developer has built a counter. It's a rite of passage. Build yours well.</p><p style='margin-bottom:8px;'>Completing this project means you understand React's core: components, state, and interactivity.</p><p style='margin-bottom:8px;'>Build your counter with confidence. You're becoming a React developer.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a counter component with state starting at <strong>0</strong>. Add two buttons: one to increment (+) and one to decrement (-). Display the current count. Clicking buttons should update the count and display the new value.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use <code>useState(0)</code> for state. Create buttons: <code>&lt;button onClick={() => setCount(count + 1)}&gt;+&lt;/button&gt;</code> and <code>&lt;button onClick={() => setCount(count - 1)}&gt;-&lt;/button&gt;</code>. Display the count.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <h1>Counter</h1>\n      {/* Display count and add increment/decrement buttons */}\n    </div>\n  );\n}",
      },
      regex: '0|increment|decrement|\\+|-',
      output: 'Counter with +/- buttons and count display',
      hintXp: 40,
    },
  },
  {
    courseId: 1,
    exerciseId: 'toggle-visibility',
    exerciseName: 'Toggle Visibility',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Toggle visibility is a common UI pattern. A button shows/hides content. This pattern appears in modals, dropdowns, accordions, and countless other components. It's essential to master.</p><p style='margin-bottom:8px;'>A toggle uses boolean state: <code>const [isVisible, setIsVisible] = useState(false);</code>. The button flips the boolean: <code>setIsVisible(!isVisible)</code>. Conditional rendering shows/hides content based on the boolean.</p><p style='margin-bottom:8px;'>Boolean state is common in React. Many UI interactions are on/off, open/closed, expanded/collapsed. Boolean state drives these patterns elegantly.</p><p style='margin-bottom:8px;'>This project teaches conditional rendering combined with state. When to show content? When state is true. When to hide it? When state is false. Conditional rendering is as fundamental as state itself.</p><p style='margin-bottom:8px;'>A toggle button often shows different text based on state. When visible, the button might say 'Hide'. When hidden, it says 'Show'. This user feedback is important for usability.</p><p style='margin-bottom:8px;'>Toggles teach you patterns for managing visibility state. The same pattern scales to complex scenarios: open/closed modals, expanded/collapsed sections, active/inactive tabs.</p><p style='margin-bottom:8px;'>This project is simpler than the counter but equally important. It introduces conditional rendering, which is crucial for dynamic UIs.</p><p style='margin-bottom:8px;'>Building toggle functionality teaches user experience thinking. How should the UI change? What feedback should the user get? These questions matter in real development.</p><p style='margin-bottom:8px;'>Toggle patterns appear everywhere. Learning them now saves time when building complex UIs later.</p><p style='margin-bottom:8px;'>Completing this project shows you understand boolean state and conditional rendering. Core skills for interactive components.</p><p style='margin-bottom:8px;'>Build your toggle well, and you have patterns for countless UI interactions.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with boolean state starting as <strong>false</strong>. Add a button that toggles the state. Conditionally display text: when state is true, show <strong>Content is visible!</strong>. When false, show <strong>Content is hidden!</strong>. Clicking the button should toggle the visibility.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use <code>const [isVisible, setIsVisible] = useState(false);</code>. Button: <code>&lt;button onClick={() => setIsVisible(!isVisible)}&gt;Toggle&lt;/button&gt;</code>. Display: <code>{isVisible ? &lt;p&gt;Content is visible!&lt;/p&gt; : &lt;p&gt;Content is hidden!&lt;/p&gt;}</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [isVisible, setIsVisible] = useState(false);\n  \n  return (\n    <div>\n      <button>Toggle</button>\n      {/* Conditionally display content based on isVisible state */}\n    </div>\n  );\n}",
      },
      regex: 'Content is visible!|Content is hidden!',
      output: 'Toggle button with conditional content display',
      hintXp: 40,
    },
  },

  // CHAPTER 5: Event Handling (6 exercises)
  {
    courseId: 1,
    exerciseId: 'onclick-events',
    exerciseName: 'onClick Events',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Click events are the most common user interactions. When a user clicks a button, link, or other element, an onClick event fires. Handling these events is how you make components interactive.</p><p style='margin-bottom:8px;'>In React, onClick is a prop on interactive elements. <code>&lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;</code> calls <code>handleClick</code> when clicked. The function receives an event object with information about the click.</p><p style='margin-bottom:8px;'>Inline handlers work for simple cases. <code>&lt;button onClick={() => console.log('clicked')}&gt;</code> executes the function immediately when clicked. For complex logic, define a separate function and reference it.</p><p style='margin-bottom:8px;'>Arrow functions in handlers are common. <code>&lt;button onClick={() => setCount(count + 1)}&gt;</code> uses an arrow function to update state. The arrow function ensures <code>this</code> binding is correct (though not needed in functional components).</p><p style='margin-bottom:8px;'>The event object contains details: target (which element was clicked), type (the event type), preventDefault() (prevent default behavior), stopPropagation() (stop event bubbling). Understanding events helps debug issues.</p><p style='margin-bottom:8px;'>Camel case is required for event names in React. onClick, onHover, onSubmit, onFocus. HTML uses lowercase onclick, onhover. React uses camelCase to match JavaScript property names.</p><p style='margin-bottom:8px;'>Multiple handlers can attach to one element. <code>&lt;button onClick={handleClick} onDoubleClick={handleDouble}&gt;</code>. Each event has its own handler. This flexibility handles complex interactions.</p><p style='margin-bottom:8px;'>Conditional handlers: you might want different behavior based on state. <code>&lt;button onClick={isOpen ? close : open}&gt;</code>. Conditionally set the handler function itself.</p><p style='margin-bottom:8px;'>Handlers update state, trigger side effects, navigate pages, submit forms. They're the main way user interactions are processed in React.</p><p style='margin-bottom:8px;'>Event delegation: React uses event delegation internally. Events bubble up the DOM tree. React handles events efficiently by attaching handlers to the root and delegating to components.</p><p style='margin-bottom:8px;'>Click events are your introduction to interactivity. Master them, and you understand how React components respond to users.</p><p style='margin-bottom:8px;'>Every interactive component uses click handlers. This fundamental pattern appears everywhere.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with a button. When clicked, the button should trigger a handler that displays <strong>Button clicked!</strong> in a paragraph below the button. Clicking again should show it again.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a handler function <code>const handleClick = () => { ... }</code>. Attach it to the button: <code>&lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;</code>. Display the message when the button is clicked.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [clicked, setClicked] = useState(false);\n  \n  const handleClick = () => {\n    // Update state when button is clicked\n  };\n  \n  return (\n    <div>\n      <button onClick={handleClick}>Click me</button>\n      {/* Display message when clicked */}\n    </div>\n  );\n}",
      },
      regex: 'Button clicked!',
      output: 'Button clicked!',
      hintXp: 25,
    },
  },
  {
    courseId: 1,
    exerciseId: 'event-object',
    exerciseName: 'Event Object',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The event object contains information about what triggered the event. When a click happens, the event object includes the target element, event type, coordinates, and more. Understanding the event object helps you respond appropriately.</p><p style='margin-bottom:8px;'>Accessing event properties: <code>const handleClick = (e) => { console.log(e.target); }</code>. The event parameter contains the event. e.target is the element that was clicked. e.type is the event type (click, focus, etc.).</p><p style='margin-bottom:8px;'>preventDefault() is crucial for form submission. <code>e.preventDefault();</code> stops the browser's default behavior. For a form submit button, this prevents page reload. For links, it prevents navigation.</p><p style='margin-bottom:8px;'>stopPropagation() prevents events from bubbling up the DOM tree. If you have nested clickable elements, one click triggers multiple handlers. <code>e.stopPropagation();</code> stops this cascading effect.</p><p style='margin-bottom:8px;'>Mouse events include coordinates. <code>e.clientX</code> and <code>e.clientY</code> give mouse position. Useful for drag-and-drop, tooltips, or custom pointer tracking.</p><p style='margin-bottom:8px;'>Keyboard events (onKeyDown, onKeyUp, onKeyPress) have different event properties. <code>e.key</code> is the key pressed, <code>e.code</code> is the physical key location. Understanding keyboard events enables text input handling.</p><p style='margin-bottom:8px;'>Event delegation: since events bubble, a parent can handle events from children. <code>&lt;div onClick={handleAny}&gt;&lt;button&gt;Click&lt;/button&gt;&lt;/div&gt;</code>. The div's onClick fires when the button is clicked. React handles delegation automatically.</p><p style='margin-bottom:8px;'>currentTarget vs target: <code>e.target</code> is the element that triggered the event. <code>e.currentTarget</code> is the element with the handler. Difference matters in delegated events.</p><p style='margin-bottom:8px;'>React pools events for performance. The event object is reused after handlers execute. If you need event data after the handler, extract it into a variable: <code>const clickX = e.clientX;</code></p><p style='margin-bottom:8px;'>Understanding the event object enables advanced interactions: detecting key combinations, tracking mouse movement, validating form input, and responding to user actions meaningfully.</p><p style='margin-bottom:8px;'>The event object is your window into user interactions. Master it, and you can handle any user action.</p><p style='margin-bottom:8px;'>Events are fundamental to interactivity. Invest time learning them well.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a button with an onClick handler that receives the event object. Log the event type and display <strong>Event type: click</strong> in a paragraph to show you've accessed the event object correctly.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create handler: <code>const handleClick = (e) => { console.log(e.type); }</code>. Display: <code>&lt;p&gt;Event type: {e.type}&lt;/p&gt;</code> (store it in state or display directly)</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [eventType, setEventType] = useState('');\n  \n  const handleClick = (e) => {\n    // Capture the event type and update state\n  };\n  \n  return (\n    <div>\n      <button onClick={handleClick}>Click me</button>\n      {/* Display the event type */}\n    </div>\n  );\n}",
      },
      regex: 'Event type:.*click',
      output: 'Event type: click',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'input-events',
    exerciseName: 'Input Events',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Input events (onChange, onInput, onFocus, onBlur) handle text input, dropdown changes, and form interactions. These events are crucial for building forms and capturing user input.</p><p style='margin-bottom:8px;'>onChange fires when an input's value changes. <code>&lt;input onChange={handleChange} /&gt;</code>. The event object contains the new value: <code>e.target.value</code>. This is how you capture user typing.</p><p style='margin-bottom:8px;'>Controlled components connect input value to state. <code>&lt;input value={text} onChange={(e) => setText(e.target.value)} /&gt;</code>. React controls the input value. When the user types, onChange updates state, which updates the input. This is the standard pattern.</p><p style='margin-bottom:8px;'>Uncontrolled components don't connect to state. <code>&lt;input /&gt;</code> manages its own value. You access it with a ref. Controlled components are standard in React; uncontrolled is an edge case.</p><p style='margin-bottom:8px;'>onFocus fires when an input gains focus (user clicks or tabs to it). onBlur fires when it loses focus. These events enable validation timing, tooltips, or auto-save features.</p><p style='margin-bottom:8px;'>Multiple inputs: if you have many inputs, create a single handler and use <code>e.target.name</code> to identify which input changed. <code>[e.target.name] = e.target.value</code> updates the correct state property.</p><p style='margin-bottom:8px;'>Input validation on change: as users type, validate and show errors. <code>if (value.length < 8) setError('Too short');</code>. Real-time feedback improves user experience.</p><p style='margin-bottom:8px;'>Form submission requires onChange handlers for all inputs. Gather input values and process them. Forms without onChange handlers can't capture user input in React.</p><p style='margin-bottom:8px;'>Debouncing input: rapid onChange calls can be expensive (API calls, validation). Debounce the handler to only process after the user stops typing. Common in search, autocomplete.</p><p style='margin-bottom:8px;'>Input events are where users interact with your application. Handling them correctly is essential for every form-based feature.</p><p style='margin-bottom:8px;'>Master input events, and you can build any form-based feature.</p><p style='margin-bottom:8px;'>Input handling is fundamental to interactive applications.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an input field with onChange handler that captures user input. Display the input value in a paragraph below as <strong>You typed: {value}</strong>. As the user types, the display should update in real-time.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const [input, setInput] = useState('');</code>. Input: <code>&lt;input value={input} onChange={(e) => setInput(e.target.value)} /&gt;</code>. Display: <code>&lt;p&gt;You typed: {input}&lt;/p&gt;</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [input, setInput] = useState('');\n  \n  return (\n    <div>\n      <input placeholder=\"Type something...\" />\n      {/* Display the input value */}\n    </div>\n  );\n}",
      },
      regex: 'You typed:',
      output: 'You typed: (user input)',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'form-handling',
    exerciseName: 'Form Handling',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Forms are a core part of web applications. Users enter data, submit, and the application processes it. Form handling in React means managing input state, validating, and submitting correctly.</p><p style='margin-bottom:8px;'>A form has inputs (text, email, password, etc.), validation logic, and submission. In React, form state is managed with useState. Each input connects to state via value and onChange.</p><p style='margin-bottom:8px;'>Form submission: <code>&lt;form onSubmit={handleSubmit}&gt;</code>. The handler receives the submit event. Call <code>e.preventDefault()</code> to stop page reload. Then process the form data.</p><p style='margin-bottom:8px;'>Multiple inputs state: instead of separate state for each input, use an object. <code>const [formData, setFormData] = useState({name: '', email: '', password: ''})</code>. One state variable manages all inputs.</p><p style='margin-bottom:8px;'>Generic onChange handler for multiple inputs: <code>const handleChange = (e) => { setFormData({...formData, [e.target.name]: e.target.value}); }</code>. One handler updates all inputs. Attach to all inputs: <code>onChange={handleChange}</code>.</p><p style='margin-bottom:8px;'>Form validation checks user input. Required fields, email format, password strength. Validation on change provides feedback. Validation on submit prevents invalid submission.</p><p style='margin-bottom:8px;'>Error display: show errors below inputs. <code>{errors.email && &lt;span&gt;{errors.email}&lt;/span&gt;}</code>. Clear errors when input is corrected. Good UX means helpful error messages.</p><p style='margin-bottom:8px;'>Form reset: after successful submission, clear the form. <code>setFormData({name: '', email: '', password: ''})</code> or use <code>formRef.current.reset()</code> with uncontrolled forms.</p><p style='margin-bottom:8px;'>Disabled submit button: disable while submitting (prevent double submission). <code>&lt;button disabled={isSubmitting}&gt;Submit&lt;/button&gt;</code>. Show loading state while processing.</p><p style='margin-bottom:8px;'>Form libraries (React Hook Form, Formik) handle complex forms. But understanding basic React form handling is essential before using libraries.</p><p style='margin-bottom:8px;'>Forms are everywhere in applications: login, registration, settings, search, filters. Mastering form handling is a critical skill.</p><p style='margin-bottom:8px;'>Form handling combines many React concepts: state, events, conditional rendering, and more. It's a practical synthesis of fundamental skills.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a form with two inputs: name and email. Use onChange to capture both. On form submission (prevent default), display <strong>Form submitted: name={name}, email={email}</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use state for form data. onChange handlers update state. onSubmit handler calls <code>e.preventDefault()</code> and displays the submitted data.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [formData, setFormData] = useState({name: '', email: ''});\n  const [submitted, setSubmitted] = useState(false);\n  \n  const handleChange = (e) => {\n    // Update form data\n  };\n  \n  const handleSubmit = (e) => {\n    // Prevent default and handle submission\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Add name and email inputs */}\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}",
      },
      regex: 'Form submitted:',
      output: 'Form submitted: name=..., email=...',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'prevent-default',
    exerciseName: 'Prevent Default',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>preventDefault() stops the browser's default behavior for events. For forms, it prevents page reload. For links, it prevents navigation. For checkboxes, it prevents toggling. Understanding when to use preventDefault is crucial.</p><p style='margin-bottom:8px;'>Form submission default: when you submit a form, the browser reloads the page with form data in the URL. In React, you want to prevent this and handle submission in JavaScript. <code>e.preventDefault();</code> in the form handler does this.</p><p style='margin-bottom:8px;'>Link navigation: <code>&lt;a href=\"/page\"&gt;</code> navigates by default. If you want custom behavior (like client-side routing), prevent default and handle navigation in JavaScript. React Router does this for you.</p><p style='margin-bottom:8px;'>Checkbox toggle: by default, checkboxes toggle when clicked. Prevent default if you want custom toggle logic. <code>const handleCheck = (e) => { e.preventDefault(); setChecked(!checked); }</code>.</p><p style='margin-bottom:8px;'>Drag behavior: some elements have default drag behavior. Prevent it to implement custom drag-and-drop. <code>e.preventDefault();</code> on dragover, then handle drop.</p><p style='margin-bottom:8px;'>Context menu: right-click shows a context menu by default. Prevent it for custom menus. <code>&lt;div onContextMenu={(e) => { e.preventDefault(); ... }}&gt;</code>.</p><p style='margin-bottom:8px;'>Preventing default is important for user experience. When default behavior isn't what you want, override it. But be careful: users expect default behaviors. Override only when necessary.</p><p style='margin-bottom:8px;'>preventDefault() only works on cancelable events. Some events (load, scroll) can't be prevented. Check the event type to know if preventDefault() applies.</p><p style='margin-bottom:8px;'>stopPropagation() vs preventDefault(): preventDefault() stops default behavior. stopPropagation() stops event bubbling. They're different concerns and both have uses.</p><p style='margin-bottom:8px;'>Form handling is the most common preventDefault() use case. Every form submission in React calls preventDefault().</p><p style='margin-bottom:8px;'>Prevent default when you need custom behavior. Respect it when you don't. Good UX respects user expectations.</p><p style='margin-bottom:8px;'>Master preventDefault(), and you control browser behavior precisely.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a form with an input and submit button. On submit, call preventDefault() and display <strong>Form prevented default!</strong>. This shows you can stop the page reload and handle submission in React.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a form onSubmit handler: <code>const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); }</code>. Display a message when submitted.</p></body>",
      starterCode: {
        '/App.js':
          'import { useState } from \'react\';\n\nexport default function App() {\n  const [submitted, setSubmitted] = useState(false);\n  \n  const handleSubmit = (e) => {\n    // Call preventDefault and update state\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input type=\"text\" />\n      <button type=\"submit\">Submit</button>\n      {/* Display message when submitted */}\n    </form>\n  );\n}',
      },
      regex: 'Form prevented default!',
      output: 'Form prevented default!',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'build-a-search-bar',
    exerciseName: 'Build a Search Bar',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>A search bar is a fundamental UI component that appears on nearly every website and application. Users type, the application filters results. Building one teaches input handling, state management, and real-time data filtering.</p><p style='margin-bottom:8px;'>Search bars combine concepts from earlier chapters: input state, onChange handlers, conditional rendering, and filtering logic. It's a practical synthesis of React fundamentals.</p><p style='margin-bottom:8px;'>A basic search bar has an input field and displays filtered results. As users type, results update in real-time. This responsiveness enhances user experience significantly.</p><p style='margin-bottom:8px;'>The implementation: maintain state for the search query and a list of items. Filter items based on the query. Render matching items. <code>items.filter(item => item.name.includes(query))</code>.</p><p style='margin-bottom:8px;'>Search bars teach you data filtering patterns. These patterns apply far beyond search: filtering tables, lists, selecting subsets of data. The fundamental filter operation is everywhere.</p><p style='margin-bottom:8px;'>Case-insensitive search improves usability. <code>item.name.toLowerCase().includes(query.toLowerCase())</code> matches regardless of case.</p><p style='margin-bottom:8px;'>Debouncing search: for large datasets or API calls, debounce the search. Don't filter on every keystroke; wait for the user to stop typing. This improves performance.</p><p style='margin-bottom:8px;'>This project teaches you event handling (onChange), state management (search query), filtering (matching items), and conditional rendering (showing results). All core React skills combined.</p><p style='margin-bottom:8px;'>Search bars are a practical, commonly-needed component. Building one well teaches patterns you'll use repeatedly.</p><p style='margin-bottom:8px;'>Completing this project shows you can build a practical, user-facing component from scratch.</p><p style='margin-bottom:8px;'>Build your search bar, and you have a foundation for countless data-filtering features.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a search bar with an input field and a list of items (e.g., ['Apple', 'Banana', 'Cherry', 'Date']). As users type in the input, filter the list to show only matching items. Display <strong>Results:</strong> followed by the matching items.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use state for query and a static list of items. onChange updates query. Filter with <code>items.filter(item => item.toLowerCase().includes(query.toLowerCase()))</code>. Map and display matching items.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [query, setQuery] = useState('');\n  const items = ['Apple', 'Banana', 'Cherry', 'Date'];\n  \n  // Filter items based on query\n  \n  return (\n    <div>\n      <input\n        placeholder=\"Search...\"\n        value={query}\n        onChange={(e) => setQuery(e.target.value)}\n      />\n      {/* Display results */}\n    </div>\n  );\n}",
      },
      regex: 'Results:|Apple|Banana|Cherry|Date',
      output: 'Search bar with filtered results',
      hintXp: 45,
    },
  },
  // CHAPTER 6: Conditional Rendering (6 exercises)
  {
    courseId: 1,
    exerciseId: 'if-else-in-jsx',
    exerciseName: 'If Else in JSX',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Conditional rendering means displaying different content based on conditions. In React, you often need to show one element or another depending on state, props, or other data. Mastering conditional rendering is essential for dynamic UIs.</p><p style='margin-bottom:8px;'>You can't use if-else statements directly in JSX because JSX is an expression, not a statement. Instead, you use if-else outside JSX, then use the result in JSX. <code>let content; if (isLoggedIn) { content = &lt;Dashboard /&gt;; } else { content = &lt;Login /&gt;; }</code></p><p style='margin-bottom:8px;'>Ternary operator is the most common conditional in JSX. <code>condition ? trueCase : falseCase</code>. Example: <code>&lt;div&gt;{isAdmin ? 'Admin Panel' : 'User Panel'}&lt;/div&gt;</code>. This is concise and readable for simple conditions.</p><p style='margin-bottom:8px;'>Nested ternaries are possible but get hard to read. <code>condition ? a : condition2 ? b : c</code>. For complex logic, use if-else outside JSX instead.</p><p style='margin-bottom:8px;'>Logical AND (&amp;&amp;) operator: <code>condition &amp;&amp; element</code> shows the element only if condition is true. <code>{isVisible &amp;&amp; &lt;p&gt;Visible!&lt;/p&gt;}</code>. Clean and simple for single case rendering.</p><p style='margin-bottom:8px;'>Logical OR (||) for defaults: <code>value || defaultValue</code>. <code>&lt;h1&gt;{title || 'Untitled'}&lt;/h1&gt;</code> shows title or 'Untitled' if title is falsy. Useful for fallbacks.</p><p style='margin-bottom:8px;'>Switch statements work outside JSX. <code>switch(status) { case 'loading': return &lt;Spinner /&gt;; ... }</code>. Not as common as ternary, but useful for multiple cases.</p><p style='margin-bottom:8px;'>Conditional CSS classes: <code>className={isActive ? 'active' : 'inactive'}</code> or <code>className={`base ${isActive ? 'active' : ''}`}</code>. Style changes based on conditions.</p><p style='margin-bottom:8px;'>null and undefined render nothing. <code>{condition ? &lt;Component /&gt; : null}</code> renders nothing when condition is false. This is how you hide elements.</p><p style='margin-bottom:8px;'>Boolean conditional shortcut: <code>{true && &lt;Component /&gt;}</code> renders Component. <code>{false && &lt;Component /&gt;}</code> renders nothing. Note: don't render numbers with &amp;&amp; (0 renders as 0).</p><p style='margin-bottom:8px;'>Conditional rendering is everywhere in React. Every component with state likely renders conditionally. Master these patterns, and you solve countless UI problems.</p><p style='margin-bottom:8px;'>Choose the right pattern: ternary for simple if-else, &amp;&amp; for single case, switch for multiple cases, if-else outside JSX for complex logic.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with a button that toggles a boolean state. Use a ternary operator to conditionally render: when true, show <strong>State is True</strong>, when false, show <strong>State is False</strong>. The text should change when the button is clicked.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const [isTrue, setIsTrue] = useState(true);</code> and render <code>{isTrue ? &lt;p&gt;State is True&lt;/p&gt; : &lt;p&gt;State is False&lt;/p&gt;}</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [isTrue, setIsTrue] = useState(true);\n  \n  return (\n    <div>\n      <button onClick={() => setIsTrue(!isTrue)}>Toggle</button>\n      {/* Use ternary operator for conditional rendering */}\n    </div>\n  );\n}",
      },
      regex: 'State is True|State is False',
      output: 'State is True or State is False based on condition',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'ternary-operators',
    exerciseName: 'Ternary Operators',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Ternary operators are the most common way to write conditionals in JSX. The syntax is simple: <code>condition ? valueIfTrue : valueIfFalse</code>. It's an expression that returns one of two values based on a condition.</p><p style='margin-bottom:8px;'>Example: <code>&lt;div&gt;{age &gt;= 18 ? 'Adult' : 'Minor'}&lt;/div&gt;</code>. If age is 18 or more, show 'Adult'; otherwise show 'Minor'. Clean and inline.</p><p style='margin-bottom:8px;'>Ternary operators work for elements too. <code>&lt;div&gt;{isLoggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;}&lt;/div&gt;</code>. Render different components based on conditions. Very common pattern.</p><p style='margin-bottom:8px;'>Nested ternaries for multiple conditions: <code>score &gt; 80 ? 'A' : score &gt; 70 ? 'B' : score &gt; 60 ? 'C' : 'F'</code>. Works, but gets hard to read quickly. Consider alternatives for complex logic.</p><p style='margin-bottom:8px;'>Ternary with CSS: <code>style={{color: isDanger ? 'red' : 'green'}}</code>. Dynamic styling based on conditions. Common for status indicators, alerts, highlights.</p><p style='margin-bottom:8px;'>Ternary with className: <code>className={isActive ? 'btn active' : 'btn'}</code> or <code>className={isActive &amp;&amp; 'active'}</code>. Toggle classes based on state.</p><p style='margin-bottom:8px;'>Be careful with falsy values. <code>count ? '&lt;span&gt;' + count + '&lt;/span&gt;' : null}</code>. If count is 0, it's falsy, so the false branch executes. Explicitly check if needed: <code>count !== undefined ?...</code></p><p style='margin-bottom:8px;'>Ternary operators are expressions, not statements. You can use them anywhere an expression is valid: in JSX, in function arguments, in assignments.</p><p style='margin-bottom:8px;'>The ternary operator is your go-to for quick if-else in React. It's concise, readable, and idiomatic.</p><p style='margin-bottom:8px;'>Readability matters. If a ternary becomes too complex, extract it into a variable or function outside JSX. Code clarity is more important than brevity.</p><p style='margin-bottom:8px;'>Master ternary operators, and you can handle most conditional rendering scenarios in React.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component that displays a status message. If a user is online, show <strong>User is online</strong>. If offline, show <strong>User is offline</strong>. Use a ternary operator. Include a button to toggle the online status.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const [isOnline, setIsOnline] = useState(true);</code> and <code>{isOnline ? &lt;p&gt;User is online&lt;/p&gt; : &lt;p&gt;User is offline&lt;/p&gt;}</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [isOnline, setIsOnline] = useState(true);\n  \n  return (\n    <div>\n      <button onClick={() => setIsOnline(!isOnline)}>Toggle Status</button>\n      {/* Use ternary for online/offline display */}\n    </div>\n  );\n}",
      },
      regex: 'User is online|User is offline',
      output: 'User is online or User is offline',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'logical-and',
    exerciseName: 'Logical AND',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The logical AND operator (&amp;&amp;) is useful for conditional rendering when you want to show something only if a condition is true. <code>condition &amp;&amp; element</code> renders the element only if the condition is true.</p><p style='margin-bottom:8px;'>Example: <code>{hasError &amp;&amp; &lt;ErrorMessage /&gt;}</code>. Show error message only if there's an error. If no error, render nothing. Clean and idiomatic.</p><p style='margin-bottom:8px;'>How it works: the &amp;&amp; operator evaluates left to right. If the left side is falsy, the right side isn't evaluated, and the falsy value is rendered (which appears as nothing if it's null/undefined).</p><p style='margin-bottom:8px;'>Gotcha with numbers: <code>{count &amp;&amp; &lt;p&gt;Count: {count}&lt;/p&gt;}</code>. If count is 0, the 0 is rendered on screen! Use explicit checks instead: <code>{count &gt; 0 &amp;&amp; &lt;p&gt;Count: {count}&lt;/p&gt;}</code></p><p style='margin-bottom:8px;'>Multiple conditions: <code>{isLoggedIn &amp;&amp; isAdmin &amp;&amp; &lt;AdminPanel /&gt;}</code>. Chain &amp;&amp; for multiple conditions. Shows AdminPanel only if both are true.</p><p style='margin-bottom:8px;'>Combining with ternary: <code>{isLoading ? &lt;Spinner /&gt; : results.length &amp;&amp; &lt;ResultsList /&gt;}</code>. Show spinner while loading, show results if available, show nothing if no results yet.</p><p style='margin-bottom:8px;'>&amp;&amp; is not the same as ternary. &amp;&amp; only has a true case. Ternary has both true and false cases. Choose based on your needs.</p><p style='margin-bottom:8px;'>Negation: <code>{!isLoading &amp;&amp; &lt;Content /&gt;}</code>. Show content when not loading. The ! operator inverts the condition.</p><p style='margin-bottom:8px;'>Short and readable: when you only need to show something if a condition is true, &amp;&amp; is cleaner than ternary with null.</p><p style='margin-bottom:8px;'>Prefer &amp;&amp; for showing/hiding a single element. It's more concise and idiomatic than ternary with null.</p><p style='margin-bottom:8px;'>Master &amp;&amp; operator, and you'll write cleaner conditional rendering code.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with a boolean state for showing details. Use &amp;&amp; operator to conditionally render a details section. Show <strong>Details are visible</strong> only when the state is true. Add a button to toggle visibility.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const [showDetails, setShowDetails] = useState(false);</code> and <code>{showDetails &amp;&amp; &lt;p&gt;Details are visible&lt;/p&gt;}</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [showDetails, setShowDetails] = useState(false);\n  \n  return (\n    <div>\n      <button onClick={() => setShowDetails(!showDetails)}>Toggle Details</button>\n      {/* Use && for conditional rendering */}\n    </div>\n  );\n}",
      },
      regex: 'Details are visible',
      output: 'Details are visible (when toggled on)',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'show-hide-components',
    exerciseName: 'Show Hide Components',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Showing and hiding components is a fundamental UI pattern. Dropdowns, modals, tooltips, accordions — all involve hiding and showing content. React makes this simple with conditional rendering and state.</p><p style='margin-bottom:8px;'>The pattern: boolean state tracks visibility, conditional rendering shows/hides content, button toggles the state. <code>const [visible, setVisible] = useState(false);</code> then <code>{visible &amp;&amp; &lt;Component /&gt;}</code> then <code>&lt;button onClick={() =&gt; setVisible(!visible)}&gt;Toggle&lt;/button&gt;</code></p><p style='margin-bottom:8px;'>Showing/hiding doesn't remove from DOM; it removes from the tree. React unmounts the component. This is cleaner than CSS display:none for most cases. The component doesn't waste resources running if hidden.</p><p style='margin-bottom:8px;'>CSS hiding (display:none) vs. React unmounting: both have uses. For temporary show/hide (modals), unmounting is better. For frequently toggling (tooltips), CSS hiding might be better to avoid re-mount overhead.</p><p style='margin-bottom:8px;'>Multiple components to show/hide: you can conditional render multiple. <code>{visible1 &amp;&amp; &lt;Component1 /&gt;} {visible2 &amp;&amp; &lt;Component2 /&gt;}</code>. Or only one visible at a time with ternary or switch.</p><p style='margin-bottom:8px;'>Show one at a time: use string state. <code>const [activeTab, setActiveTab] = useState('home');</code> then <code>{activeTab === 'home' &amp;&amp; &lt;HomeTab /&gt;} {activeTab === 'about' &amp;&amp; &lt;AboutTab /&gt;}</code></p><p style='margin-bottom:8px;'>Animations on show/hide: conditional rendering is instant. For smooth transitions, use CSS animations or a library like React Spring. Hide after animation completes.</p><p style='margin-bottom:8px;'>Focus management: when hiding a modal, restore focus to the button that opened it. When showing, move focus to the modal. Good accessibility requires managing focus.</p><p style='margin-bottom:8px;'>Keyboard handling: pressing Escape should close modals. Add onKeyDown handler to listen for Escape. useState + conditional rendering handles the visibility.</p><p style='margin-bottom:8px;'>This pattern is used constantly. Mastering it opens doors to building countless UI components.</p><p style='margin-bottom:8px;'>Show/hide patterns are fundamental to interactive applications.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with a button that shows/hides a modal. The modal should display <strong>Modal is open</strong> when visible. Clicking the button should toggle visibility. Display the modal with conditional rendering.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const [isOpen, setIsOpen] = useState(false);</code>. Button: <code>&lt;button onClick={() => setIsOpen(!isOpen)}&gt;Open Modal&lt;/button&gt;</code>. Modal: <code>{isOpen &amp;&amp; &lt;div&gt;Modal is open&lt;/div&gt;}</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <div>\n      <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>\n      {/* Conditionally render modal */}\n    </div>\n  );\n}",
      },
      regex: 'Modal is open',
      output: 'Modal is open (when toggled)',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'loading-states',
    exerciseName: 'Loading States',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Loading states are critical for good UX. When fetching data, show a spinner or skeleton. When done, show the content. When there's an error, show an error message. These states are all managed with conditional rendering.</p><p style='margin-bottom:8px;'>Loading state pattern: <code>const [loading, setLoading] = useState(false);</code>. When fetching starts, set to true. When done, set to false. Conditionally render based on the state.</p><p style='margin-bottom:8px;'>Three state example: <code>{loading ? &lt;Spinner /&gt; : error ? &lt;Error /&gt; : &lt;Content /&gt;}</code>. Show spinner while loading, error if failed, content if successful. Covers all cases.</p><p style='margin-bottom:8px;'>Skeletons improve perceived performance. Instead of a blank screen with spinner, show a gray outline of the content. Users feel the page is faster, even if loading time is the same.</p><p style='margin-bottom:8px;'>Error messages should be helpful. Instead of generic 'Error loading', show 'Failed to fetch user: Connection timeout'. Specific errors help users understand what happened.</p><p style='margin-bottom:8px;'>Retry buttons for errors: let users retry failed requests. <code>{error &amp;&amp; &lt;button onClick={refetch}&gt;Retry&lt;/button&gt;}</code>. Good UX provides recovery paths.</p><p style='margin-bottom:8px;'>Disable interactions while loading: <code>&lt;button disabled={loading}&gt;</code>. Prevent users from triggering actions while one is in progress.</p><p style='margin-bottom:8px;'>Empty states: when no data, show a helpful message, not a blank area. <code>{items.length === 0 ? &lt;EmptyState /&gt; : &lt;ItemList /&gt;}</code>. Empty states improve UX significantly.</p><p style='margin-bottom:8px;'>Loading states are everywhere in real applications. Every data fetch should have loading and error handling. Good habits here prevent poor user experiences.</p><p style='margin-bottom:8px;'>Master loading state patterns, and your applications feel polished and professional.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with a loading state. Display <strong>Loading...</strong> while loading is true, and <strong>Data loaded!</strong> when loading is false. Add a button to toggle the loading state to simulate fetching data.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const [loading, setLoading] = useState(true);</code>. Render: <code>{loading ? &lt;p&gt;Loading...&lt;/p&gt; : &lt;p&gt;Data loaded!&lt;/p&gt;}</code>. Button toggles the state.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [loading, setLoading] = useState(true);\n  \n  return (\n    <div>\n      {/* Conditionally render loading or data */}\n      <button onClick={() => setLoading(!loading)}>Toggle Loading</button>\n    </div>\n  );\n}",
      },
      regex: 'Loading...|Data loaded!',
      output: 'Loading... or Data loaded! based on state',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'build-a-login-gate',
    exerciseName: 'Build a Login Gate',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>A login gate is a component that prevents unauthenticated users from accessing protected content. It's a common pattern in applications with user accounts. Building one teaches conditional rendering, state management, and authentication flow.</p><p style='margin-bottom:8px;'>The pattern: if user is logged in, show the dashboard. If not, show the login form. When the user logs in, change the state and show the dashboard. All with conditional rendering.</p><p style='margin-bottom:8px;'>This project brings together conditional rendering concepts: ternary operators, state management, and user-based content switching. It's a practical, real-world pattern.</p><p style='margin-bottom:8px;'>The component structure: one state for login status, conditional rendering shows login or dashboard based on status. A login handler switches from false to true. A logout handler switches back.</p><p style='margin-bottom:8px;'>Login form accepts credentials (for this exercise, just a username), then calls the login handler. The handler validates and updates state. In real apps, this would call an API.</p><p style='margin-bottom:8px;'>Protected routes use the same pattern. A component checks if logged in; if not, it shows login or redirects. This protects sensitive features from unauthorized access.</p><p style='margin-bottom:8px;'>The user experience: unauthenticated users see a login form. After entering credentials and clicking login, they see the dashboard. Clicking logout returns to login. Simple and clear.</p><p style='margin-bottom:8px;'>Real authentication is more complex (tokens, API calls, secure storage). But the core pattern—conditional rendering based on auth status—is what you're learning here.</p><p style='margin-bottom:8px;'>This project teaches you the fundamental pattern for any protected content. The same logic applies to admin panels, premium features, private messages—anything requiring authentication.</p><p style='margin-bottom:8px;'>Building a login gate proves you understand conditional rendering and state management in a realistic scenario.</p><p style='margin-bottom:8px;'>Complete this project, and you understand a core security pattern used everywhere in web applications.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a login gate component. If a user is logged in (state is true), display <strong>Welcome to Dashboard!</strong>. If not logged in (state is false), display <strong>Please log in</strong>. Add a button to simulate logging in/out that toggles the state.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const [loggedIn, setLoggedIn] = useState(false);</code>. Render: <code>{loggedIn ? &lt;p&gt;Welcome to Dashboard!&lt;/p&gt; : &lt;p&gt;Please log in&lt;/p&gt;}</code>. Button toggles loggedIn.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [loggedIn, setLoggedIn] = useState(false);\n  \n  return (\n    <div>\n      {/* Conditional rendering for login gate */}\n      <button onClick={() => setLoggedIn(!loggedIn)}>\n        {loggedIn ? 'Logout' : 'Login'}\n      </button>\n    </div>\n  );\n}",
      },
      regex: 'Welcome to Dashboard!|Please log in',
      output: 'Dashboard or login prompt based on login state',
      hintXp: 45,
    },
  },
  // CHAPTER 7: Lists & Keys (6 exercises)
  {
    courseId: 1,
    exerciseId: 'map-over-arrays',
    exerciseName: 'Map Over Arrays',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Rendering lists is one of the most common tasks in React. You have an array of data and want to display each item. The <code>map()</code> function transforms the array into JSX elements. This is how you render dynamic lists.</p><p style='margin-bottom:8px;'>Basic pattern: <code>items.map(item =&gt; &lt;div key={item.id}&gt;{item.name}&lt;/div&gt;)</code>. For each item in the array, create a JSX element. React renders all of them. Simple and powerful.</p><p style='margin-bottom:8px;'>Map returns a new array of JSX elements. <code>const listItems = items.map(item =&gt; &lt;li&gt;{item}&lt;/li&gt;);</code>. You can store this and render it in JSX, or render directly: <code>&lt;ul&gt;{listItems}&lt;/ul&gt;</code></p><p style='margin-bottom:8px;'>The second parameter (index) is the array index. <code>items.map((item, index) =&gt; ...)</code>. Don't use index as key (we'll cover that next), but index is useful for numbering: <code>&lt;li&gt;{index + 1}. {item}&lt;/li&gt;</code></p><p style='margin-bottom:8px;'>Nested maps: if you have data like users with posts, nest maps. <code>users.map(user =&gt; &lt;div&gt;{user.posts.map(post =&gt; ...)}&lt;/div&gt;)</code>. Each level maps its data.</p><p style='margin-bottom:8px;'>Filtering before mapping: <code>items.filter(item =&gt; item.active).map(...)</code>. Filter the array first, then map the filtered results. Common pattern for showing subsets of data.</p><p style='margin-bottom:8px;'>Map with components: <code>users.map(user =&gt; &lt;UserCard key={user.id} user={user} /&gt;)</code>. Create component instances for each item. Pass the item as a prop.</p><p style='margin-bottom:8px;'>Complex maps: <code>items.map(item =&gt; ({...item, display: formatValue(item.value)})).map(item =&gt; ...)</code>. Transform data first, then map. Or transform inside the map.</p><p style='margin-bottom:8px;'>Empty lists: if array is empty, map returns empty array, rendering nothing. Check: <code>{items.length &gt; 0 ? items.map(...) : &lt;p&gt;No items&lt;/p&gt;}</code> to show helpful empty state.</p><p style='margin-bottom:8px;'>Performance: mapping is fast for reasonable list sizes. Thousands of items might need optimization (virtualization), but typical lists perform well.</p><p style='margin-bottom:8px;'>Map is essential. Every list you render uses this pattern. Master it, and rendering data becomes natural.</p><p style='margin-bottom:8px;'>Array methods (map, filter, reduce) combined with JSX are powerful. Learn JavaScript array methods thoroughly.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an array of fruit names: ['Apple', 'Banana', 'Orange']. Use map() to render each fruit in a list. Display each fruit with a number: <strong>1. Apple</strong>, <strong>2. Banana</strong>, <strong>3. Orange</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const fruits = ['Apple', 'Banana', 'Orange']; fruits.map((fruit, idx) =&gt; &lt;li key={idx}&gt;{idx + 1}. {fruit}&lt;/li&gt;)</code> inside a &lt;ul&gt;</p></body>",
      starterCode: {
        '/App.js':
          "export default function App() {\n  const fruits = ['Apple', 'Banana', 'Orange'];\n  \n  return (\n    <ul>\n      {/* Map over fruits array and render each */}\n    </ul>\n  );\n}",
      },
      regex: 'Apple|Banana|Orange',
      output: '1. Apple 2. Banana 3. Orange',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'understanding-keys',
    exerciseName: 'Understanding Keys',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Keys help React identify which items have changed, been added, or removed. When rendering lists, always provide a key prop. Keys make list updates efficient and prevent bugs.</p><p style='margin-bottom:8px;'>Without keys, React can't tell if list items reordered, were deleted, or new ones added. It assumes items stay in the same position. This causes bugs: form inputs get wrong values, components don't mount/unmount correctly.</p><p style='margin-bottom:8px;'>Keys should be unique identifiers from your data. <code>items.map(item =&gt; &lt;div key={item.id}&gt;)</code>. Use the item's ID, email, slug—anything unique and stable. Don't use index as key.</p><p style='margin-bottom:8px;'>Why not index as key: if the list reorders, index changes. React loses track of which component is which. Form state and component instances get mixed up. Only use index if the list is static (never reorders, adds, removes).</p><p style='margin-bottom:8px;'>Keys are not rendered: they're only for React's internal tracking. Keys don't appear in the HTML. They help React reconcile the Virtual DOM with real DOM.</p><p style='margin-bottom:8px;'>Examples: <code>key={user.id}</code>, <code>key={post.slug}</code>, <code>key={`${item.id}-${item.version}`}</code>. Use whatever uniquely identifies the item.</p><p style='margin-bottom:8px;'>List reordering: if users drag items to reorder, keys preserve state. Without proper keys, a form input in one item might appear in another after reordering.</p><p style='margin-bottom:8px;'>Keys and filters: when filtering a list, keys still work. <code>items.filter(...).map(...)</code>. Keys ensure correct items are kept/removed.</p><p style='margin-bottom:8px;'>Generating keys: if your data has no IDs, consider using a library (uuid) to generate unique IDs. Don't generate random keys inside render—they change every render.</p><p style='margin-bottom:8px;'>React console warnings appear if keys are missing or duplicated. Listen to these warnings; they indicate bugs waiting to happen.</p><p style='margin-bottom:8px;'>Keys are crucial for correct list behavior. This pattern prevents countless bugs and makes list updates predictable.</p><p style='margin-bottom:8px;'>Always provide proper keys. It's a best practice that saves debugging time.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an array of objects with id and name: [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]. Use map() to render each, using the id as the key. Display: <strong>1: Alice</strong> and <strong>2: Bob</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>users.map(user =&gt; &lt;div key={user.id}&gt;{user.id}: {user.name}&lt;/div&gt;)</code>. The key prop ensures React can track items correctly.</p></body>",
      starterCode: {
        '/App.js':
          "export default function App() {\n  const users = [\n    { id: 1, name: 'Alice' },\n    { id: 2, name: 'Bob' }\n  ];\n  \n  return (\n    <div>\n      {/* Map over users and use id as key */}\n    </div>\n  );\n}",
      },
      regex: 'Alice|Bob|1:|2:',
      output: '1: Alice 2: Bob',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'unique-keys',
    exerciseName: 'Unique Keys',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Keys must be unique within the list. If two items have the same key, React gets confused. It treats them as the same item, causing state to be shared incorrectly. Unique keys are non-negotiable.</p><p style='margin-bottom:8px;'>Unique within scope: keys must be unique among siblings. Item 1 can have key=\"id-1\" in one list and another item can have the same key in a different list. But within one &lt;ul&gt;, all keys must be different.</p><p style='margin-bottom:8px;'>Stable keys: keys should not change. If an item's key changes between renders, React treats it as a new item (unmounts the old, mounts a new one). This causes state loss.</p><p style='margin-bottom:8px;'>Example of bad key: generating random keys. <code>key={Math.random()}</code> changes every render. React can't track items. Form state is lost on every re-render. Never do this.</p><p style='margin-bottom:8px;'>Combining properties: if no single property is unique, combine multiple. <code>key={`${user.id}-${timestamp}`}</code>. As long as the combination is unique and stable.</p><p style='margin-bottom:8px;'>Database IDs are ideal: if your data comes from a database, use the database ID. It's unique and stable. The best choice for keys.</p><p style='margin-bottom:8px;'>User IDs in authentication: for user lists, use the user ID. For comments, use comment ID. Anything that uniquely identifies the entity is a good key.</p><p style='margin-bottom:8px;'>Duplicate key errors: React logs warnings if duplicate keys are detected. These are not just warnings; they indicate actual bugs. Fix them immediately.</p><p style='margin-bottom:8px;'>Testing with keys: when testing, verify that reordering or filtering lists works correctly. If form state persists incorrectly, suspect key problems.</p><p style='margin-bottom:8px;'>Good key practices: always provide keys, use stable unique identifiers, never use index (unless static list), never generate random keys.</p><p style='margin-bottom:8px;'>Keys are simple but critical. Proper use prevents countless subtle bugs.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an array of items with unique ids. Use map() to render a list where each item has a unique, stable key based on its id. Display the content and ensure all keys are different.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use unique IDs from your data as keys: <code>items.map(item =&gt; &lt;div key={item.id}&gt;...&lt;/div&gt;)</code>. Never use Math.random() or index for keys in dynamic lists.</p></body>",
      starterCode: {
        '/App.js':
          "export default function App() {\n  const items = [\n    { id: 'unique-1', text: 'Item One' },\n    { id: 'unique-2', text: 'Item Two' },\n    { id: 'unique-3', text: 'Item Three' }\n  ];\n  \n  return (\n    <div>\n      {/* Map with proper unique keys */}\n    </div>\n  );\n}",
      },
      regex: 'Item One|Item Two|Item Three',
      output: 'Item One Item Two Item Three',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'filter-lists',
    exerciseName: 'Filter Lists',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Filtering lists is common: show only active users, completed tasks, matching search results. The pattern: filter the array, then map the results. <code>items.filter(item =&gt; condition).map(item =&gt; &lt;div&gt;)</code>.</p><p style='margin-bottom:8px;'>Basic filter: <code>items.filter(item =&gt; item.active)</code>. Returns a new array with only items where active is true. Other items are excluded. This filtered array is then mapped to JSX.</p><p style='margin-bottom:8px;'>Search filter: <code>items.filter(item =&gt; item.name.includes(searchTerm))</code>. Show only items whose name contains the search term. Case-sensitive by default; convert to lowercase for case-insensitive.</p><p style='margin-bottom:8px;'>Number filter: <code>items.filter(item =&gt; item.age &gt; 18)</code>. Show items matching a condition. Filter supports any JavaScript expression: comparisons, logical operators, function calls.</p><p style='margin-bottom:8px;'>Complex filter: <code>items.filter(item =&gt; item.active &amp;&amp; item.role === 'admin')</code>. Multiple conditions with logical operators. Show only items matching all conditions.</p><p style='margin-bottom:8px;'>Chaining filters: <code>items.filter(...).filter(...).map(...)</code>. Apply multiple filters sequentially. Each filter reduces the list further.</p><p style='margin-bottom:8px;'>Combined with state: <code>const filtered = items.filter(item =&gt; item.status === activeStatus); filtered.map(...)</code>. Store filtered result in state or variable, then use it.</p><p style='margin-bottom:8px;'>Empty result handling: if filter results in empty array, display empty state message. <code>{filtered.length &gt; 0 ? filtered.map(...) : &lt;p&gt;No results&lt;/p&gt;}</code></p><p style='margin-bottom:8px;'>Filter with search state: <code>const filtered = items.filter(item =&gt; item.name.includes(searchQuery));</code> Update searchQuery on input change; filtered list re-renders automatically.</p><p style='margin-bottom:8px;'>Performance: filtering is fast for reasonable list sizes. For huge lists, consider debouncing (waiting for user to stop typing) before filtering.</p><p style='margin-bottom:8px;'>Filtering combined with maps is incredibly common. Master this pattern, and you handle countless real-world scenarios.</p><p style='margin-bottom:8px;'>Filter lists, and control what users see.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an array of numbers: [1, 2, 3, 4, 5]. Filter to show only even numbers, then map and display them as <strong>Even: 2, 4</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const numbers = [1, 2, 3, 4, 5]; numbers.filter(n =&gt; n % 2 === 0).map(n =&gt; &lt;span key={n}&gt;{n}&lt;/span&gt;)</code></p></body>",
      starterCode: {
        '/App.js':
          'export default function App() {\n  const numbers = [1, 2, 3, 4, 5];\n  \n  return (\n    <div>\n      <p>Even: {/* Filter for even numbers and display */}</p>\n    </div>\n  );\n}',
      },
      regex: 'Even:.*[24]',
      output: 'Even: 2, 4',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'build-a-todo-list',
    exerciseName: 'Build a Todo List',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>A todo list is a classic project that combines list rendering, state management, and event handling. You'll manage a list of todos, add new ones, mark complete, and delete. A practical, real-world component.</p><p style='margin-bottom:8px;'>This project brings together Chapters 4 and 7: state for the todo list, map() to render items, filter to show active/completed, events to add/delete/toggle. It's a synthesis of major concepts.</p><p style='margin-bottom:8px;'>Core features: display list of todos, add new todo (input + button), mark complete (checkbox), delete todo (delete button). These features teach real app development patterns.</p><p style='margin-bottom:8px;'>State structure: array of todos, each with id, text, and completed status. <code>const [todos, setTodos] = useState([{id: 1, text: 'Learn React', completed: false}]);</code></p><p style='margin-bottom:8px;'>Adding todos: create input state, input onChange updates it, button onClick adds to array. <code>setTodos([...todos, {id: newId, text: input, completed: false}]);</code> Create new array with new todo.</p><p style='margin-bottom:8px;'>Completing todos: checkbox onChange calls handler that toggles the completed property. <code>setTodos(todos.map(todo =&gt; todo.id === id ? {...todo, completed: !todo.completed} : todo))</code></p><p style='margin-bottom:8px;'>Deleting todos: button onClick filters out the todo. <code>setTodos(todos.filter(todo =&gt; todo.id !== id))</code> Create new array without the deleted todo.</p><p style='margin-bottom:8px;'>Keys matter: use todo id as key. This ensures React tracks todos correctly when reordering, deleting, or toggling completion.</p><p style='margin-bottom:8px;'>Styling completed todos: apply strikethrough style when completed. <code>className={todo.completed ? 'completed' : ''}</code> CSS class adds visual feedback.</p><p style='margin-bottom:8px;'>Empty state: show helpful message when no todos. <code>{todos.length === 0 ? &lt;p&gt;No todos yet!&lt;/p&gt; : ...}</code></p><p style='margin-bottom:8px;'>This project is a milestone. It proves you can build an interactive component managing real data flows.</p><p style='margin-bottom:8px;'>Build your todo list, and you have a foundation for any CRUD (Create, Read, Update, Delete) application.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a todo list with: a list of todos (start with 2-3 sample todos), an input to add new todos, a button to add, and a delete button for each todo. Display all todos using map(). When a todo is deleted, remove it from the list.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use state for todos array and input. map() to render. onClick handlers to add/delete. Delete: <code>setTodos(todos.filter(todo =&gt; todo.id !== id))</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [todos, setTodos] = useState([\n    { id: 1, text: 'Learn React' },\n    { id: 2, text: 'Build projects' }\n  ]);\n  const [input, setInput] = useState('');\n  \n  const addTodo = () => {\n    // Add new todo to list\n  };\n  \n  const deleteTodo = (id) => {\n    // Remove todo from list\n  };\n  \n  return (\n    <div>\n      <h1>Todo List</h1>\n      {/* Input and add button */}\n      {/* Map and display todos with delete button */}\n    </div>\n  );\n}",
      },
      regex: 'Learn React|Build projects|Todo',
      output: 'Todo list with add/delete functionality',
      hintXp: 50,
    },
  },
  {
    courseId: 1,
    exerciseId: 'dynamic-user-list',
    exerciseName: 'Dynamic User List',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>A user list displays a collection of users with their information. Common in admin panels, team directories, and social networks. Building one teaches practical list rendering and component composition.</p><p style='margin-bottom:8px;'>This project combines list rendering, component reusability, and data management. You'll create user items, display them in a list, and manage the collection. A realistic, production-like component.</p><p style='margin-bottom:8px;'>Component structure: a UserList component that manages the data, and a UserCard component that displays each user. This separation of concerns is a best practice.</p><p style='margin-bottom:8px;'>User data structure: array of users with id, name, email, role. <code>[{id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin'}]</code></p><p style='margin-bottom:8px;'>Rendering users: map over the array, create UserCard for each. Pass user data as props. The card displays the information in a clean layout.</p><p style='margin-bottom:8px;'>Filtering users: maybe show only active users, or admins. <code>users.filter(u =&gt; u.role === 'Admin').map(...)</code> Dynamic filtering based on props or state.</p><p style='margin-bottom:8px;'>Sorting users: by name, by role, by date joined. <code>users.sort((a, b) =&gt; a.name.localeCompare(b.name)).map(...)</code> Ordered display improves usability.</p><p style='margin-bottom:8px;'>Keys and stability: use user id as key. Users array might be refetched; same user should be recognized by id, not index.</p><p style='margin-bottom:8px;'>This project teaches scalable patterns. The same structure works for product lists, article lists, comment threads—anywhere displaying collections.</p><p style='margin-bottom:8px;'>Real applications fetch user data from APIs. This exercise uses static data, but the rendering pattern is identical.</p><p style='margin-bottom:8px;'>Build your user list well, and you have a template for countless features.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a user list component with an array of user objects [{id: 1, name: 'Alice', email: 'alice@example.com'}, ...]. Create a UserCard component that displays name and email. Map over users to display all in the list.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create UserCard: <code>function UserCard({user}) { return &lt;div&gt;&lt;h3&gt;{user.name}&lt;/h3&gt;&lt;p&gt;{user.email}&lt;/p&gt;&lt;/div&gt;; }</code>. Then map: <code>users.map(user =&gt; &lt;UserCard key={user.id} user={user} /&gt;)</code></p></body>",
      starterCode: {
        '/App.js':
          "function UserCard({ user }) {\n  return (\n    // Display user name and email\n  );\n}\n\nexport default function App() {\n  const users = [\n    { id: 1, name: 'Alice', email: 'alice@example.com' },\n    { id: 2, name: 'Bob', email: 'bob@example.com' },\n    { id: 3, name: 'Charlie', email: 'charlie@example.com' }\n  ];\n  \n  return (\n    <div>\n      <h1>User List</h1>\n      {/* Map over users and render UserCard */}\n    </div>\n  );\n}",
      },
      regex: 'Alice|Bob|Charlie',
      output: 'User list with names and emails displayed',
      hintXp: 50,
    },
  },

  // CHAPTER 8: Styling in React (6 exercises)
  {
    courseId: 1,
    exerciseId: 'inline-styles',
    exerciseName: 'Inline Styles',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Inline styles in React are JavaScript objects. Instead of HTML style strings, you pass an object where keys are camelCase CSS properties and values are CSS values. <code>style={{color: 'red', fontSize: '16px'}}</code></p><p style='margin-bottom:8px;'>Keys are camelCase: <code>backgroundColor</code> not <code>background-color</code>, <code>fontSize</code> not <code>font-size</code>. This matches JavaScript property names. Values are strings or numbers (numbers are px units).</p><p style='margin-bottom:8px;'>Dynamic styles: <code>style={{color: isDanger ? 'red' : 'green'}}</code>. Styles change based on state, props, or conditions. This enables responsive, reactive styling.</p><p style='margin-bottom:8px;'>Style objects can be stored in variables or state. <code>const buttonStyle = {backgroundColor: 'blue', color: 'white'}; &lt;button style={buttonStyle}&gt;</code> Reusable style definitions.</p><p style='margin-bottom:8px;'>Merging styles: <code>style={{...baseStyle, ...conditionalStyle}}</code>. Spread operator combines style objects. Build complex styles from simple pieces.</p><p style='margin-bottom:8px;'>Performance: inline styles are computed on every render. For many elements, this might be slower than CSS classes. But for typical applications, it's fine.</p><p style='margin-bottom:8px;'>Gotchas: pseudo-classes (:hover, :focus) don't work with inline styles. Use onMouseEnter/onMouseLeave event handlers instead. Transitions and animations are harder with inline styles.</p><p style='margin-bottom:8px;'>When to use inline styles: dynamic values based on state, quick prototyping, simple styling. For complex styling, CSS or CSS-in-JS libraries are better.</p><p style='margin-bottom:8px;'>Inline styles are useful but limited. They're one tool in your styling toolkit, not a replacement for all styling approaches.</p><p style='margin-bottom:8px;'>Learn inline styles, then explore other approaches: CSS classes, CSS modules, CSS-in-JS libraries.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a div with inline styles: red text, font size 20px, blue background. Display the text <strong>Styled with inline styles!</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>&lt;div style={{color: 'red', fontSize: '20px', backgroundColor: 'blue'}}&gt;Styled with inline styles!&lt;/div&gt;</code></p></body>",
      starterCode: {
        '/App.js':
          'export default function App() {\n  return (\n    <div>\n      {/* Apply inline styles: red text, 20px font, blue background */}\n    </div>\n  );\n}',
      },
      regex: 'Styled with inline styles!',
      output: 'Styled with inline styles! (with colors and sizing)',
      hintXp: 25,
    },
  },
  {
    courseId: 1,
    exerciseId: 'css-classes',
    exerciseName: 'CSS Classes',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>CSS classes are the traditional approach to styling. Define styles in CSS files, apply them with className. In React, you use className (not class) to apply CSS classes.</p><p style='margin-bottom:8px;'>Basic: <code>&lt;button className=\"btn btn-primary\"&gt;</code>. Apply CSS classes defined in your CSS file. React passes className to the HTML class attribute.</p><p style='margin-bottom:8px;'>Dynamic classes: <code>className={isActive ? 'active' : ''}</code>. Toggle classes based on state or props. Conditional styling without inline styles.</p><p style='margin-bottom:8px;'>Multiple classes: <code>className={`btn ${size} ${isDisabled ? 'disabled' : ''}`}</code>. Template strings combine base classes with conditional classes. Or join arrays: <code>className={['btn', size, isDisabled &amp;&amp; 'disabled'].filter(Boolean).join(' ')}</code></p><p style='margin-bottom:8px;'>Libraries like classnames simplify this. <code>className={classNames('btn', size, {disabled: isDisabled})}</code>. Cleaner than string manipulation.</p><p style='margin-bottom:8px;'>Scoping: CSS classes are global by default. To avoid naming conflicts, use CSS modules or naming conventions (BEM: block-element-modifier).</p><p style='margin-bottom:8px;'>Advantages of CSS classes: separation of concerns, reusability, easier to maintain, supports all CSS features (pseudo-classes, animations, media queries).</p><p style='margin-bottom:8px;'>CSS files: create separate .css files, import them. Styles apply to the whole app. Or use CSS modules: .module.css files where styles are scoped to the component.</p><p style='margin-bottom:8px;'>CSS classes are the standard approach. Every React developer should be comfortable with this pattern.</p><p style='margin-bottom:8px;'>Master CSS classes, and you unlock the full power of CSS within React.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with a button. Apply CSS class <code>btn</code> to it. Add another class <code>primary</code> if a state variable is true, otherwise add <code>secondary</code>. Display both button versions.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>className={`btn ${isPrimary ? 'primary' : 'secondary'}`}</code>. Define these classes in CSS with appropriate styles.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\nimport './App.css';\n\nexport default function App() {\n  const [isPrimary, setIsPrimary] = useState(true);\n  \n  return (\n    <div>\n      <button className={/* Apply conditional classes */}>\n        Click me\n      </button>\n      <button onClick={() => setIsPrimary(!isPrimary)}>Toggle Style</button>\n    </div>\n  );\n}",
        '/App.css': '/* Define .btn, .primary, .secondary classes */',
      },
      regex: 'Click me',
      output: 'Button with dynamic CSS classes',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'css-modules',
    exerciseName: 'CSS Modules',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>CSS Modules solve the global scope problem of CSS. Each component has its own CSS file (.module.css) where styles are scoped locally. No name conflicts, predictable styling.</p><p style='margin-bottom:8px;'>Usage: <code>import styles from './Button.module.css'; &lt;button className={styles.primary}&gt;</code>. The import returns an object; class names are properties. Styles apply only to this component.</p><p style='margin-bottom:8px;'>Scoped styles: class names are unique-ified. .primary in Button.module.css doesn't conflict with .primary in Card.module.css. Each gets a unique generated name internally.</p><p style='margin-bottom:8px;'>Dynamic classes: <code>className={styles[isPrimary ? 'primary' : 'secondary']}</code>. Object property access for conditional classes. Or combine: <code>className={`${styles.base} ${isPrimary ? styles.primary : styles.secondary}`}</code></p><p style='margin-bottom:8px;'>Advantages: no naming conflicts, local scope, clear dependencies (CSS is imported like code), all CSS features work, easy to delete unused styles.</p><p style='margin-bottom:8px;'>Disadvantages: more boilerplate (import styles), file per component convention, can't easily share styles (need to extract to separate files).</p><p style='margin-bottom:8px;'>When to use: medium to large projects with many components, when naming conflicts are likely, when you want clear style scoping.</p><p style='margin-bottom:8px;'>Build setup required: webpack or Create React App support CSS Modules. Vite, Next.js also support them. Simple HTML/JS without build tools don't.</p><p style='margin-bottom:8px;'>CSS Modules are a best practice for component-based applications. They scale well and prevent common CSS problems.</p><p style='margin-bottom:8px;'>Master CSS Modules, and you write scalable, maintainable styles.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component that imports styles from a CSS Module file (.module.css). Apply a class from the module to a div. Display text <strong>Styled with CSS Module</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create Button.module.css with <code>.container { ... }</code>. Import: <code>import styles from './Button.module.css';</code>. Use: <code>className={styles.container}</code></p></body>",
      starterCode: {
        '/App.js':
          "import styles from './App.module.css';\n\nexport default function App() {\n  return (\n    <div className={/* Apply module style */}>\n      Styled with CSS Module\n    </div>\n  );\n}",
        '/App.module.css':
          '/* Define scoped styles here */\n.container {\n  /* Add styling */\n}',
      },
      regex: 'Styled with CSS Module',
      output: 'Styled with CSS Module (with module styles)',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'dynamic-styling',
    exerciseName: 'Dynamic Styling',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Dynamic styling means changing styles based on state, props, or conditions. As users interact, the visual appearance updates. This responsiveness makes applications feel alive.</p><p style='margin-bottom:8px;'>Approaches: inline styles, conditional classes, CSS variables, CSS-in-JS libraries. Each has trade-offs. Choose based on complexity and requirements.</p><p style='margin-bottom:8px;'>State-driven styling: <code>style={{color: isDarkMode ? '#fff' : '#000'}}</code>. Update styles when state changes. Component re-renders with new styles applied.</p><p style='margin-bottom:8px;'>Theme switching: store theme in state or context. Components read theme and apply appropriate colors. Users click theme toggle, theme changes, all components update instantly.</p><p style='margin-bottom:8px;'>Responsive styles with media queries: use CSS or CSS-in-JS. JavaScript can't detect viewport size changes (well, not easily). CSS media queries are the standard approach.</p><p style='margin-bottom:8px;'>Animations: CSS transitions/animations or JavaScript-based (react-spring). CSS is simpler for standard animations. JavaScript for complex, interactive animations.</p><p style='margin-bottom:8px;'>Conditional classes for states: <code>className={`input ${isFocused ? 'focused' : ''} ${hasError ? 'error' : ''}`}</code> Multiple states, multiple classes. CSS handles appearance.</p><p style='margin-bottom:8px;'>CSS variables: <code>style={{'--primary-color': theme.primary}}</code> Then in CSS: <code>var(--primary-color)</code>. Powerful for theming.</p><p style='margin-bottom:8px;'>Performance: many dynamic style changes can impact performance. Use will-change, transform (for animations), and other CSS properties that trigger hardware acceleration.</p><p style='margin-bottom:8px;'>Testing dynamic styling: verify styles change when state/props change. Visual regression testing catches unexpected style changes.</p><p style='margin-bottom:8px;'>Dynamic styling is essential for modern UIs. Master it, and you build responsive, interactive experiences.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with a button that toggles a boolean state. Dynamically style a div: when the button is clicked, the background color changes from blue to red. Display <strong>Current color:</strong> with the color name.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>style={{backgroundColor: isRed ? 'red' : 'blue'}}</code>. Update the color name display based on state too.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [isRed, setIsRed] = useState(false);\n  \n  return (\n    <div>\n      <div style={/* Dynamic background color */}>\n        Current color: {isRed ? 'red' : 'blue'}\n      </div>\n      <button onClick={() => setIsRed(!isRed)}>Toggle Color</button>\n    </div>\n  );\n}",
      },
      regex: 'Current color:|blue|red',
      output: 'Color changes dynamically based on state',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'conditional-classes',
    exerciseName: 'Conditional Classes',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Conditional classes are classes applied based on conditions. When a condition is true, the class is applied. When false, it's removed. This is the standard way to toggle styling in React.</p><p style='margin-bottom:8px;'>Pattern: <code>className={isActive ? 'active' : ''}</code>. If true, add 'active' class. If false, empty string (no class). CSS defines .active styling.</p><p style='margin-bottom:8px;'>Multiple conditions: <code>className={`btn ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}</code> Add multiple classes based on different conditions.</p><p style='margin-bottom:8px;'>Template strings: <code>className={`container ${theme}`}</code>. Combine base classes with variable values. Readable and flexible.</p><p style='margin-bottom:8px;'>classnames library: <code>classNames('btn', {active: isActive, disabled: isDisabled})</code>. Cleaner syntax, handles arrays, objects, strings. Highly recommended for complex class logic.</p><p style='margin-bottom:8px;'>Arrays: <code>className={['btn', isActive &amp;&amp; 'active', isDisabled &amp;&amp; 'disabled'].filter(Boolean).join(' ')}</code> Conditional arrays, filtered for truthy values, joined as string.</p><p style='margin-bottom:8px;'>Props controlling classes: <code>&lt;Button type=\"primary\" /&gt;</code> in component <code>className={`btn btn-${type}`}</code>. Props determine which classes apply.</p><p style='margin-bottom:8px;'>State controlling classes: component state drives which classes are applied. User interactions change state, which changes classes, which changes appearance.</p><p style='margin-bottom:8px;'>Gotcha: never output unsanitized values in className. <code>className={userInput}</code> is a security risk if user input is not validated.</p><p style='margin-bottom:8px;'>Conditional classes are fundamental. Every dynamic component uses this pattern.</p><p style='margin-bottom:8px;'>Master conditional classes, and styling becomes natural.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a button with conditional classes. When a state variable is true, apply class <code>active</code>. When false, apply class <code>inactive</code>. Display text that shows which class is active. Include a toggle button to change the class.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>className={isActive ? 'active' : 'inactive'}</code>. Define .active and .inactive in CSS. Display the current class name in text.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\nimport './App.css';\n\nexport default function App() {\n  const [isActive, setIsActive] = useState(false);\n  \n  return (\n    <div>\n      <button className={/* Conditional class */}>\n        {isActive ? 'Active' : 'Inactive'}\n      </button>\n      <p>Current class: {isActive ? 'active' : 'inactive'}</p>\n      <button onClick={() => setIsActive(!isActive)}>Toggle</button>\n    </div>\n  );\n}",
        '/App.css':
          '.active { /* Active style */ }\n.inactive { /* Inactive style */ }',
      },
      regex: 'Active|Inactive|Current class',
      output: 'Button with conditional classes applied',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'build-a-themed-button',
    exerciseName: 'Build a Themed Button',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>A themed button adapts its appearance based on a theme prop. Different themes (primary, secondary, danger) result in different colors. Building one teaches component flexibility and theming patterns.</p><p style='margin-bottom:8px;'>This project combines conditional classes, props handling, and styling. You'll create a reusable button that works in any context with any theme.</p><p style='margin-bottom:8px;'>Button component structure: accept theme as prop, apply conditional class based on theme, handle click events, render children.</p><p style='margin-bottom:8px;'>Theme values: 'primary' (blue), 'secondary' (gray), 'danger' (red). Each theme has distinctive colors and styling.</p><p style='margin-bottom:8px;'>Implementation: <code>&lt;button className={`btn btn-${theme}`}&gt;{children}&lt;/button&gt;</code>. The theme prop determines the CSS class applied.</p><p style='margin-bottom:8px;'>Reusability: the same Button component works everywhere with different themes. One definition, infinite uses. That's the power of good component design.</p><p style='margin-bottom:8px;'>CSS organization: define base .btn styles, then theme-specific .btn-primary, .btn-secondary, .btn-danger. Cascading styles reduce duplication.</p><p style='margin-bottom:8px;'>Props flexibility: accept additional props (disabled, size) to modify appearance further. A well-designed button component is highly configurable.</p><p style='margin-bottom:8px;'>This project teaches theming patterns. Large applications often have many themed components. Mastering this pattern scales to complex design systems.</p><p style='margin-bottom:8px;'>Real design systems use this approach: buttons, cards, inputs, all themed consistently.</p><p style='margin-bottom:8px;'>Build your themed button, and you have a foundation for building design systems.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a Button component that accepts a <code>theme</code> prop ('primary', 'secondary', 'danger'). Apply conditional class based on theme. Use it to display three buttons with different themes. Each button should have distinct colors.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create: <code>function Button({theme, children}) { return &lt;button className={`btn btn-${theme}`}&gt;{children}&lt;/button&gt;; }</code>. Define CSS classes for each theme with different colors.</p></body>",
      starterCode: {
        '/App.js':
          "import './App.css';\n\nfunction Button({ theme, children }) {\n  return (\n    <button className={/* Apply theme class */}>\n      {children}\n    </button>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      {/* Render Button with different themes */}\n    </div>\n  );\n}",
        '/App.css': '/* Define .btn base styles and theme classes */',
      },
      regex: 'Primary|Secondary|Danger',
      output: 'Three buttons with different theme colors',
      hintXp: 45,
    },
  },
  // CHAPTER 9: useEffect Hook (6 exercises)
  {
    courseId: 1,
    exerciseId: 'introduction-to-useeffect',
    exerciseName: 'Introduction to useEffect',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>useEffect is a Hook for handling side effects in functional components. Side effects are operations that interact with the outside world: fetching data, subscriptions, timers, logging. useEffect runs them at appropriate times.</p><p style='margin-bottom:8px;'>Before Hooks, side effects required lifecycle methods in class components (componentDidMount, componentDidUpdate). useEffect unifies these in one simple API.</p><p style='margin-bottom:8px;'>Syntax: <code>useEffect(() => { /* side effect code */ }, [dependencies]);</code> The function runs when the component mounts or when dependencies change. The dependency array controls when it runs.</p><p style='margin-bottom:8px;'>No dependency array: <code>useEffect(() => { ... })</code> runs after every render. Usually not what you want (causes infinite loops with data fetching).</p><p style='margin-bottom:8px;'>Empty array: <code>useEffect(() => { ... }, [])</code> runs once on mount. Perfect for initialization: fetching initial data, setting up subscriptions.</p><p style='margin-bottom:8px;'>With dependencies: <code>useEffect(() => { ... }, [userId])</code> runs when userId changes. If userId changes, the effect runs again. Dependency array tracks what matters.</p><p style='margin-bottom:8px;'>Cleanup function: <code>useEffect(() => { return () => { /* cleanup */ }; })</code> Runs when component unmounts or before re-running. Cleanup subscriptions, timers, event listeners.</p><p style='margin-bottom:8px;'>Common patterns: fetch data on mount, subscribe/unsubscribe on mount/unmount, update title when data changes, refetch when ID changes.</p><p style='margin-bottom:8px;'>Rules of Hooks: useEffect must be called at the top level of the component, not in loops or conditions. This allows React to track effects correctly.</p><p style='margin-bottom:8px;'>useEffect is powerful but easy to misuse. Common mistake: forgetting dependencies, causing stale closures or infinite loops. Careful dependency management is key.</p><p style='margin-bottom:8px;'>Master useEffect, and you handle all side effects elegantly in functional components.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with useEffect that runs on mount (empty dependency array). In the effect, set a message to <strong>Effect ran on mount!</strong>. Display the message in the component.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>useEffect(() => { setMessage('Effect ran on mount!'); }, []);</code> The empty array ensures it runs only once on mount.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState, useEffect } from 'react';\n\nexport default function App() {\n  const [message, setMessage] = useState('');\n  \n  useEffect(() => {\n    // Update message on mount\n  }, []);\n  \n  return <div>{message}</div>;\n}",
      },
      regex: 'Effect ran on mount!',
      output: 'Effect ran on mount!',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'dependency-array',
    exerciseName: 'Dependency Array',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>The dependency array controls when useEffect runs. It's crucial for correctness: wrong dependencies cause bugs, missing dependencies cause warnings.</p><p style='margin-bottom:8px;'>No array (bad): <code>useEffect(() => { setCount(count + 1); })</code> Runs after every render. If effect updates state, state updates trigger re-render, which triggers effect again. Infinite loop.</p><p style='margin-bottom:8px;'>Empty array (mount only): <code>useEffect(() => { ... }, [])</code> Runs once on mount. Perfect for one-time setup: initialization, fetch initial data.</p><p style='margin-bottom:8px;'>With dependencies: <code>useEffect(() => { fetchUser(userId); }, [userId])</code> Runs when userId changes. If userId changes, effect runs. If other state changes, effect doesn't run. Precise control.</p><p style='margin-bottom:8px;'>Multiple dependencies: <code>useEffect(() => { ... }, [userId, theme])</code> Effect runs if userId OR theme changes. All dependencies are watched.</p><p style='margin-bottom:8px;'>Object/array dependencies: objects and arrays are compared by reference, not value. <code>useEffect(() => { ... }, [user])</code> If user object is recreated every render, effect runs every render. Use individual properties: <code>[user.id]</code></p><p style='margin-bottom:8px;'>Missing dependency warning: ESLint warns if you reference a value in the effect but don't list it in dependencies. This catches stale closures and ensures correct behavior.</p><p style='margin-bottom:8px;'>The linter is usually right. If it warns, fix the dependencies. Ignoring warnings leads to bugs.</p><p style='margin-bottom:8px;'>Stale closure: if you reference state/props in an effect but don't list them as dependencies, the effect uses old values. Confusing behavior results.</p><p style='margin-bottom:8px;'>Dependency array mastery prevents countless bugs. Take time to understand it thoroughly.</p><p style='margin-bottom:8px;'>Master dependencies, and your effects behave predictably.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with state for a user ID. Use useEffect with userId in the dependency array. When userId changes, update a message showing <strong>User {userId} data fetched</strong>. Display two buttons to change userId.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>useEffect(() => { setMessage(`User ${userId} data fetched`); }, [userId]);</code> The effect runs when userId changes.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState, useEffect } from 'react';\n\nexport default function App() {\n  const [userId, setUserId] = useState(1);\n  const [message, setMessage] = useState('');\n  \n  useEffect(() => {\n    // Fetch data for current userId\n  }, [userId]);\n  \n  return (\n    <div>\n      {message}\n      <button onClick={() => setUserId(1)}>User 1</button>\n      <button onClick={() => setUserId(2)}>User 2</button>\n    </div>\n  );\n}",
      },
      regex: 'User.*data fetched',
      output: 'User ID data fetched',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'cleanup-functions',
    exerciseName: 'Cleanup Functions',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Cleanup functions in useEffect run before the effect runs again or when the component unmounts. They clean up side effects: unsubscribe from subscriptions, clear timers, remove event listeners.</p><p style='margin-bottom:8px;'>Syntax: <code>useEffect(() => { /* setup */ return () => { /* cleanup */ }; })</code> Return a function from the effect. React calls it for cleanup.</p><p style='margin-bottom:8px;'>Example: subscribe to data, return a function that unsubscribes. <code>useEffect(() => { const unsub = subscribe(); return unsub; }, [])</code> On unmount, unsubscribe is called.</p><p style='margin-bottom:8px;'>Timers: <code>useEffect(() => { const id = setTimeout(() => { ... }); return () => clearTimeout(id); })</code> Clear the timer on cleanup to prevent memory leaks.</p><p style='margin-bottom:8px;'>Event listeners: <code>useEffect(() => { window.addEventListener('resize', handler); return () => window.removeEventListener('resize', handler); })</code> Remove listener on cleanup.</p><p style='margin-bottom:8px;'>Why cleanup matters: without cleanup, resources leak. Listeners pile up, timers run forever, subscriptions multiply. Memory grows, performance degrades. Cleanup prevents this.</p><p style='margin-bottom:8px;'>When cleanup runs: before the effect runs again (if dependencies changed) and when the component unmounts. Cleanup ensures the previous effect is cleaned up before starting a new one.</p><p style='margin-bottom:8px;'>Multiple effects: each effect can have its own cleanup. If you have multiple useEffect hooks, each manages its own resources.</p><p style='margin-bottom:8px;'>Not all effects need cleanup. Logging, analytics, DOM updates don't need cleanup. Data fetches and subscriptions do.</p><p style='margin-bottom:8px;'>Cleanup is essential for production-quality code. Applications without proper cleanup accumulate bugs.</p><p style='margin-bottom:8px;'>Master cleanup functions, and you write leak-free React applications.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component with useEffect that sets up a timer (setTimeout) on mount. The timer should update a message after 2 seconds to <strong>Timer fired!</strong>. Include a cleanup function that clears the timer if the component unmounts before it fires.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>useEffect(() => { const id = setTimeout(() => setMessage('Timer fired!'), 2000); return () => clearTimeout(id); }, []);</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState, useEffect } from 'react';\n\nexport default function App() {\n  const [message, setMessage] = useState('');\n  \n  useEffect(() => {\n    // Set up timer on mount\n    // Return cleanup function\n  }, []);\n  \n  return <div>{message || 'Waiting...'}</div>;\n}",
      },
      regex: 'Timer fired!',
      output: 'Timer fired! (after 2 seconds)',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'fetch-data',
    exerciseName: 'Fetch Data',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Fetching data is the most common useEffect use case. On component mount, fetch data from an API, update state with the result. Show loading while fetching, error if it fails, content when done.</p><p style='margin-bottom:8px;'>Pattern: <code>useEffect(() => { fetch('/api/data').then(r => r.json()).then(data => setData(data)); }, [])</code> Fetch on mount, set state with result.</p><p style='margin-bottom:8px;'>Loading state: set loading to true before fetch, false after. Display spinner while loading, content when done. <code>const [loading, setLoading] = useState(true); useEffect(() => { setLoading(true); fetch(...).then(...).finally(() => setLoading(false)); }, [])</code></p><p style='margin-bottom:8px;'>Error handling: wrap fetch in try-catch or use .catch(). <code>.catch(err => setError(err.message))</code> Show error message if fetch fails.</p><p style='margin-bottom:8px;'>Async/await syntax: cleaner than .then() chains. <code>const fetchData = async () => { const res = await fetch(...); const data = await res.json(); setData(data); }; useEffect(() => { fetchData(); }, [])</code></p><p style='margin-bottom:8px;'>Dependencies for refetch: <code>useEffect(() => { fetchData(userId); }, [userId])</code> If userId changes, refetch data for the new user. Common pattern.</p><p style='margin-bottom:8px;'>Cleanup for fetch: if the component unmounts before fetch completes, ignore the result (avoid state update on unmounted component). <code>let isMounted = true; useEffect(() => { ... fetch(...).then(...).then(data => { if (isMounted) setData(data); }); return () => { isMounted = false; }; }, [])</code></p><p style='margin-bottom:8px;'>AbortController: modern approach to cancel fetch. <code>const controller = new AbortController(); fetch(..., {signal: controller.signal}); return () => controller.abort();</code></p><p style='margin-bottom:8px;'>Data fetching is critical for real applications. Master this pattern, and you can build data-driven features.</p><p style='margin-bottom:8px;'>Fetch data correctly, and your applications are responsive and error-resilient.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component that fetches data on mount using useEffect. Simulate a fetch with a setTimeout that sets data to <strong>Data loaded</strong>. Display a loading message while fetching, then display the data when done.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>useEffect(() => { setTimeout(() => setData('Data loaded'), 1000); }, []);</code> Show loading state before data arrives.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState, useEffect } from 'react';\n\nexport default function App() {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    // Simulate fetching data\n  }, []);\n  \n  return (\n    <div>\n      {loading ? <p>Loading...</p> : <p>{data}</p>}\n    </div>\n  );\n}",
      },
      regex: 'Data loaded|Loading',
      output: 'Loading then Data loaded',
      hintXp: 40,
    },
  },
  {
    courseId: 1,
    exerciseId: 'timer-and-intervals',
    exerciseName: 'Timer and Intervals',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Timers (setTimeout) and intervals (setInterval) are common side effects. Updating a countdown, polling for updates, animations—all use timers. useEffect manages them correctly.</p><p style='margin-bottom:8px;'>setTimeout: <code>useEffect(() => { const id = setTimeout(() => { setMessage('Done'); }, 1000); return () => clearTimeout(id); }, [])</code> Schedule an action for later. Cleanup clears it if component unmounts.</p><p style='margin-bottom:8px;'>setInterval: <code>useEffect(() => { const id = setInterval(() => { setSecond(s => s + 1); }, 1000); return () => clearInterval(id); }, [])</code> Repeat an action periodically. Cleanup stops the interval.</p><p style='margin-bottom:8px;'>Countdown timer: start with a number, decrement every second until 0. <code>useEffect(() => { if (seconds <= 0) return; const id = setInterval(() => setSeconds(s => s - 1), 1000); return () => clearInterval(id); }, [seconds])</code></p><p style='margin-bottom:8px;'>Stop condition: intervals continue forever unless stopped. Include logic to stop when appropriate. Prevent infinite loops and wasted resources.</p><p style='margin-bottom:8px;'>Functional state updates: when updating state based on previous state in intervals, use the function form. <code>setSeconds(prev => prev - 1)</code> Ensures correct value.</p><p style='margin-bottom:8px;'>Animation loop: <code>requestAnimationFrame</code> is better than setInterval for animations. More efficient, syncs with browser refresh rate.</p><p style='margin-bottom:8px;'>Memory leaks: forgetting to clear timeout/interval leaks memory. Multiple intervals from multiple re-renders waste resources. Always cleanup.</p><p style='margin-bottom:8px;'>Testing timers: harder to test than synchronous code. Use jest.useFakeTimers() to control time in tests.</p><p style='margin-bottom:8px;'>Timers are powerful but easy to misuse. Use them carefully with proper cleanup.</p><p style='margin-bottom:8px;'>Master timers, and you add temporal dimension to your applications.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a stopwatch component with a counter starting at 0. Use setInterval to increment the counter every second. Display the current count. Add a button to clear/reset the counter. Include cleanup to stop the interval.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>useEffect(() => { const id = setInterval(() => setCount(c => c + 1), 1000); return () => clearInterval(id); }, []);</code> Display count and reset button.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState, useEffect } from 'react';\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    // Set up interval to increment count\n  }, []);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(0)}>Reset</button>\n    </div>\n  );\n}",
      },
      regex: 'Count:|Reset',
      output: 'Incrementing counter with reset button',
      hintXp: 40,
    },
  },
  {
    courseId: 1,
    exerciseId: 'build-a-data-fetcher',
    exerciseName: 'Build a Data Fetcher',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>A data fetcher component loads data from an API or source and displays it. Central to data-driven applications. Building one synthesizes useEffect, state management, error handling, and loading states.</p><p style='margin-bottom:8px;'>This project brings together Chapter 9 concepts: useEffect for fetching, dependency array for refetching, cleanup for cancellation, loading/error states. A realistic, production-like component.</p><p style='margin-bottom:8px;'>Features: fetch data on mount, show loading spinner while fetching, display data when loaded, show error if fetch fails, allow refetch/reload.</p><p style='margin-bottom:8px;'>Implementation: useEffect with empty array fetches on mount. State for loading, error, data. Show appropriate message based on state.</p><p style='margin-bottom:8px;'>Refetch trigger: button to manually refetch. Or change a prop/state that's in dependencies to refetch automatically.</p><p style='margin-bottom:8px;'>Error recovery: show error message and retry button. Retry button triggers refetch. Users can recover from failures.</p><p style='margin-bottom:8px;'>Data structure: assume API returns an object with properties. Display the data cleanly. Could be users, posts, products, anything.</p><p style='margin-bottom:8px;'>This pattern repeats everywhere in real applications. Master it here, reuse it constantly.</p><p style='margin-bottom:8px;'>Real fetching would call an actual API. This exercise uses simulated data, but the pattern is identical.</p><p style='margin-bottom:8px;'>Build a data fetcher, and you have a foundation for every data-loading feature.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a data fetcher component that simulates fetching user data. Show loading state initially, then display fetched data: <strong>User data: name=John, email=john@example.com</strong>. Include a refetch button to reload the data.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use useEffect with useState for loading, data, error. Simulate fetch with setTimeout. Show loading message initially, then data. Add refetch button in dependency array or with a refetch state.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState, useEffect } from 'react';\n\nexport default function App() {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    // Simulate fetching data\n  }, []);\n  \n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Error: {error}</p>;\n  \n  return (\n    <div>\n      {/* Display data */}\n      <button>Refetch</button>\n    </div>\n  );\n}",
      },
      regex: 'User data:|Loading|Refetch',
      output: 'Loading then user data display with refetch button',
      hintXp: 50,
    },
  },

  // CHAPTER 10: Forms in React (6 exercises)
  {
    courseId: 1,
    exerciseId: 'controlled-inputs',
    exerciseName: 'Controlled Inputs',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Controlled inputs connect to React state. The input value comes from state, onChange updates state. React controls the input value at all times. This is the standard approach in React.</p><p style='margin-bottom:8px;'>Uncontrolled: <code>&lt;input /&gt;</code> manages its own value. You access it with refs. Controlled: <code>&lt;input value={name} onChange={e => setName(e.target.value)} /&gt;</code> State controls the value.</p><p style='margin-bottom:8px;'>Controlled pattern: <code>const [email, setEmail] = useState(''); &lt;input value={email} onChange={e => setEmail(e.target.value)} /&gt;</code> Value always reflects state. Typing updates state, which updates input. Single source of truth.</p><p style='margin-bottom:8px;'>Controlled enables many things: real-time validation, clear button, character count, preventing certain characters. Access the value in state whenever you need it.</p><p style='margin-bottom:8px;'>Validation while typing: <code>const handleChange = e => { const value = e.target.value; if (value.length < 20) setEmail(value); }</code> Prevent input longer than 20 chars.</p><p style='margin-bottom:8px;'>Character counter: <code>{email.length}/100</code> Show how many characters typed. The value is in state, so you can compute anything based on it.</p><p style='margin-bottom:8px;'>Selects and textareas: <code>&lt;select value={size} onChange={e => setSize(e.target.value)}&gt;</code> Same pattern as text inputs. Controlled by state.</p><p style='margin-bottom:8px;'>Checkboxes: <code>&lt;input type=\"checkbox\" checked={agreed} onChange={e => setAgreed(e.target.checked)} /&gt;</code> checked prop instead of value. Boolean state instead of string.</p><p style='margin-bottom:8px;'>Radio buttons: <code>&lt;input type=\"radio\" value=\"option1\" checked={choice === 'option1'} onChange={e => setChoice(e.target.value)} /&gt;</code> Set value when selected.</p><p style='margin-bottom:8px;'>Controlled inputs are fundamental to form handling. Every form input should be controlled.</p><p style='margin-bottom:8px;'>Master controlled inputs, and form building becomes natural.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an input field that's controlled by state. As the user types, display the input value below with character count. Show <strong>You typed: {value} ({count} characters)</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const [input, setInput] = useState('');</code>. Input: <code>&lt;input value={input} onChange={e => setInput(e.target.value)} /&gt;</code>. Display: <code>You typed: {input} ({input.length} characters)</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [input, setInput] = useState('');\n  \n  return (\n    <div>\n      <input placeholder=\"Type something...\" />\n      {/* Display value and character count */}\n    </div>\n  );\n}",
      },
      regex: 'You typed:|characters',
      output: 'You typed: ... (X characters)',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'multiple-inputs',
    exerciseName: 'Multiple Inputs',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Handling multiple form inputs means managing state for each. Options: separate state variables or one object. Object approach scales better for many inputs.</p><p style='margin-bottom:8px;'>Separate state: <code>const [name, setName] = useState(''); const [email, setEmail] = useState('');</code> Works for few inputs, gets messy with many.</p><p style='margin-bottom:8px;'>Object state: <code>const [form, setForm] = useState({name: '', email: ''});</code> One state manages all inputs. Cleaner, more scalable.</p><p style='margin-bottom:8px;'>Generic handler: <code>const handleChange = e => { setForm({...form, [e.target.name]: e.target.value}); }</code> One handler for all inputs. Spread syntax updates one property, keeps others.</p><p style='margin-bottom:8px;'>Input names must match state keys: <code>&lt;input name=\"name\" /&gt;</code> Updates form.name. <code>&lt;input name=\"email\" /&gt;</code> Updates form.email. Clear mapping.</p><p style='margin-bottom:8px;'>Validation per input: <code>const errors = {}; if (!form.name) errors.name = 'Required';</code> Compute errors object. Display error under each input.</p><p style='margin-bottom:8px;'>Grouping inputs: organize inputs logically. Maybe personal details section, contact details section. Each section can have its own state or be part of one large object.</p><p style='margin-bottom:8px;'>Disabled submit: <code>&lt;button disabled={!isValid}&gt;Submit&lt;/button&gt;</code> Can't submit if form invalid. Prevent bad data.</p><p style='margin-bottom:8px;'>Form reset: <code>setForm({name: '', email: ''});</code> Clear all inputs after submission. Or use form ref and call reset().</p><p style='margin-bottom:8px;'>This pattern handles any number of inputs. Whether 2 or 20, the approach is the same.</p><p style='margin-bottom:8px;'>Master multiple input handling, and complex forms become manageable.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a form with three inputs: name, email, and message. Use one state object to manage all. Display all three values when typed. Show <strong>Form data: name=..., email=..., message=...</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const [form, setForm] = useState({name: '', email: '', message: ''});</code> Generic handler: <code>const handleChange = e => setForm({...form, [e.target.name]: e.target.value});</code></p></body>",
      starterCode: {
        '/App.js':
          'import { useState } from \'react\';\n\nexport default function App() {\n  const [form, setForm] = useState({name: \'\', email: \'\', message: \'\'});\n  \n  const handleChange = (e) => {\n    // Update form state\n  };\n  \n  return (\n    <div>\n      <input name=\"name\" placeholder=\"Name\" />\n      <input name=\"email\" placeholder=\"Email\" />\n      <textarea name=\"message\" placeholder=\"Message\"></textarea>\n      {/* Display form data */}\n    </div>\n  );\n}',
      },
      regex: 'Form data:|name=|email=|message=',
      output: 'Form data: name=..., email=..., message=...',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'form-validation',
    exerciseName: 'Form Validation',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Form validation checks user input. Required fields, email format, password strength, matching passwords. Validation prevents invalid data from being submitted.</p><p style='margin-bottom:8px;'>Validation on change: validate as users type. Show errors immediately. Prevents wasted validation on final submit. React makes this easy.</p><p style='margin-bottom:8px;'>Validation on submit: validate only when form is submitted. Less intrusive, but errors appear late. Hybrid: show some errors on change (required), others on submit (format).</p><p style='margin-bottom:8px;'>Pattern: <code>const errors = {}; if (!name) errors.name = 'Required'; if (!email.includes('@')) errors.email = 'Invalid email';</code> Compute errors object. Display below each input.</p><p style='margin-bottom:8px;'>Displaying errors: <code>{errors.email && &lt;span style={{color: 'red'}}&gt;{errors.email}&lt;/span&gt;}</code> Show error if it exists. Red text signals problem.</p><p style='margin-bottom:8px;'>Valid state: <code>const isValid = Object.keys(errors).length === 0;</code> Form is valid if no errors. Disable submit if invalid.</p><p style='margin-bottom:8px;'>Custom validation: write functions for specific checks. <code>const isValidEmail = email => email.includes('@') &amp;&amp; email.includes('.');</code> Reusable validation logic.</p><p style='margin-bottom:8px;'>Regex for format validation: <code>const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;</code> Match email format. But simple checks often enough.</p><p style='margin-bottom:8px;'>Server-side validation: always validate on the server too. Client validation is for UX, server validation prevents security issues.</p><p style='margin-bottom:8px;'>Libraries (Formik, React Hook Form) handle validation. But understanding manual validation teaches fundamentals.</p><p style='margin-bottom:8px;'>Good validation improves user experience significantly. Helpful error messages guide users to valid input.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a form with email input that validates. Show error <strong>Invalid email</strong> if email doesn't contain @. Validate as user types. Show <strong>Email valid</strong> when correct format entered.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Validate: <code>const isValid = email.includes('@');</code> Show error/success conditionally based on validity.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [email, setEmail] = useState('');\n  \n  const isValid = email.includes('@');\n  \n  return (\n    <div>\n      <input\n        value={email}\n        onChange={e => setEmail(e.target.value)}\n        placeholder=\"Email\"\n      />\n      {/* Show validation message */}\n    </div>\n  );\n}",
      },
      regex: 'Invalid email|Email valid',
      output: 'Validation feedback based on input',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'checkbox-and-radio',
    exerciseName: 'Checkbox and Radio',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Checkboxes and radio buttons are special form inputs. Checkboxes let users select multiple options. Radio buttons let users select one option. Both connect to state differently than text inputs.</p><p style='margin-bottom:8px;'>Checkbox: use <code>checked</code> prop with boolean state, not value. <code>&lt;input type=\"checkbox\" checked={agreed} onChange={e => setAgreed(e.target.checked)} /&gt;</code> Checked/unchecked toggles boolean.</p><p style='margin-bottom:8px;'>Multiple checkboxes: <code>const [interests, setInterests] = useState({sports: false, music: false, reading: false});</code> State tracks which are checked. Handler updates the relevant one.</p><p style='margin-bottom:8px;'>Radio buttons: only one can be selected at a time. Group with same name. <code>&lt;input type=\"radio\" name=\"size\" value=\"small\" checked={size === 'small'} onChange={e => setSize(e.target.value)} /&gt;</code> Value is the string, checked is boolean.</p><p style='margin-bottom:8px;'>Checkbox with multiple selections: <code>const handleCheck = e => { setInterests({...interests, [e.target.name]: e.target.checked}); }</code> Each checkbox has a name that matches a state key.</p><p style='margin-bottom:8px;'>Arrays for multiple selections: <code>const [selected, setSelected] = useState([]);</code> Then toggle: <code>const toggle = value => { if (selected.includes(value)) setSelected(selected.filter(s => s !== value)); else setSelected([...selected, value]); }</code></p><p style='margin-bottom:8px;'>Labels: connect labels to inputs with htmlFor. <code>&lt;label htmlFor=\"agreed\"&gt;I agree&lt;/label&gt; &lt;input id=\"agreed\" type=\"checkbox\" /&gt;</code> Click label checks the input. Better UX.</p><p style='margin-bottom:8px;'>Displaying selected values: <code>Object.keys(interests).filter(k => interests[k])</code> Get selected checkbox names. <code>selected.join(', ')</code> Join selected array items.</p><p style='margin-bottom:8px;'>Form submission: include selected values in submitted data. They're in state, so include them like any other form field.</p><p style='margin-bottom:8px;'>Checkboxes and radio buttons are everywhere in forms. Master them, and form building becomes fluid.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create checkboxes for interests: Sports, Music, Reading. Track which are checked in state. Display selected interests: <strong>Selected: Sports, Music</strong> (only checked ones).</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use object state: <code>const [interests, setInterests] = useState({sports: false, music: false, reading: false});</code> Handler: <code>setInterests({...interests, [e.target.name]: e.target.checked})</code></p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [interests, setInterests] = useState({\n    sports: false,\n    music: false,\n    reading: false\n  });\n  \n  const handleCheck = (e) => {\n    // Update interest state\n  };\n  \n  return (\n    <div>\n      {/* Checkboxes */}\n      {/* Display selected */}\n    </div>\n  );\n}",
      },
      regex: 'Selected:|Sports|Music|Reading',
      output: 'Selected: (checked interests)',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'select-dropdown',
    exerciseName: 'Select Dropdown',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Select dropdowns let users choose from a list. Controlled by state like other inputs. <code>&lt;select value={color} onChange={e => setColor(e.target.value)}&gt;&lt;option value=\"red\"&gt;Red&lt;/option&gt;&lt;/select&gt;</code></p><p style='margin-bottom:8px;'>Value prop: the selected option's value goes in state. <code>value={color}</code> matches the selected option's value. <code>onChange</code> updates state with the selected value.</p><p style='margin-bottom:8px;'>Option groups: organize options logically. <code>&lt;optgroup label=\"Warm\"&gt;&lt;option&gt;Red&lt;/option&gt;&lt;/optgroup&gt;</code> Groups appear in the dropdown. Visual organization.</p><p style='margin-bottom:8px;'>Dynamic options: map over an array to generate options. <code>colors.map(color => &lt;option key={color} value={color}&gt;{color}&lt;/option&gt;)</code> Options come from data, not hardcoded.</p><p style='margin-bottom:8px;'>Multiple select: <code>&lt;select multiple value={selected} onChange={e => setSelected(Array.from(e.target.selectedOptions, option => option.value))}&gt;</code> Users hold Ctrl/Cmd to select multiple. selectedOptions gets all selected.</p><p style='margin-bottom:8px;'>Placeholder option: <code>&lt;option value=\"\"&gt;Choose...&lt;/option&gt;</code> Empty initial option. Prevents selecting the first real option by default. Good UX.</p><p style='margin-bottom:8px;'>Disabled option: <code>&lt;option disabled value=\"\"&gt;Choose...&lt;/option&gt;</code> Disabled options can't be selected. Useful for placeholders.</p><p style='margin-bottom:8px;'>Form submission: selected value is in state, include it in submitted data like any other field.</p><p style='margin-bottom:8px;'>Accessibility: label dropdowns properly. <code>&lt;label htmlFor=\"color\"&gt;Color&lt;/label&gt;&lt;select id=\"color\"&gt;</code> Screen readers announce the label.</p><p style='margin-bottom:8px;'>Dropdowns are common in forms. Master them for complete form handling.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a select dropdown with color options: Red, Green, Blue. Use state to track selected color. Display <strong>Selected color: Red</strong> (or whatever is selected).</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const [color, setColor] = useState('red');</code>. Dropdown: <code>&lt;select value={color} onChange={e => setColor(e.target.value)}&gt;&lt;option value=\"red\"&gt;Red&lt;/option&gt;...&lt;/select&gt;</code></p></body>",
      starterCode: {
        '/App.js':
          'import { useState } from \'react\';\n\nexport default function App() {\n  const [color, setColor] = useState(\'red\');\n  \n  return (\n    <div>\n      <select value={color} onChange={e => setColor(e.target.value)}>\n        <option value=\"red\">Red</option>\n        <option value=\"green\">Green</option>\n        <option value=\"blue\">Blue</option>\n      </select>\n      {/* Display selected color */}\n    </div>\n  );\n}',
      },
      regex: 'Selected color:',
      output: 'Selected color: (chosen color)',
      hintXp: 30,
    },
  },
  {
    courseId: 1,
    exerciseId: 'build-a-registration-form',
    exerciseName: 'Build a Registration Form',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>A registration form is a complete form combining all form concepts. Users enter details, form validates, submission is prevented until valid. Building one synthesizes all Chapter 10 concepts.</p><p style='margin-bottom:8px;'>This project uses: controlled inputs, multiple inputs, validation, checkboxes, selects, event handling, form submission. A realistic, production-like form.</p><p style='margin-bottom:8px;'>Fields: name, email, password, confirm password, country (select), agree to terms (checkbox). Complete registration flow.</p><p style='margin-bottom:8px;'>Validation: name required, valid email format, password at least 8 chars, passwords match, terms must be agreed. Show specific error messages.</p><p style='margin-bottom:8px;'>State structure: form object with all fields, errors object with all errors. Compute errors whenever form changes.</p><p style='margin-bottom:8px;'>Submission: prevent default, validate, show success message if valid. On success, could save to database or navigate to login.</p><p style='margin-bottom:8px;'>Real applications would send data to a server. This exercise validates locally. The same form easily extends to server submission.</p><p style='margin-bottom:8px;'>This project demonstrates complete form handling. The pattern applies to any form in any application.</p><p style='margin-bottom:8px;'>Completing this project proves you can build production-ready forms.</p><p style='margin-bottom:8px;'>Build your registration form well, and you're ready for real-world form development.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a registration form with fields: name, email, password. Validate: name required, valid email, password at least 6 chars. Show errors below each field. Display <strong>Validation passed!</strong> when all fields are valid.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use state for form data and errors. Validate onChange. Show errors conditionally. Display success message when no errors.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState } from 'react';\n\nexport default function App() {\n  const [form, setForm] = useState({name: '', email: '', password: ''});\n  const [errors, setErrors] = useState({});\n  \n  const validate = () => {\n    // Validate form data\n  };\n  \n  const handleChange = (e) => {\n    // Update form and validate\n  };\n  \n  const handleSubmit = (e) => {\n    // Validate and show message\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Form inputs and error displays */}\n      <button type=\"submit\">Register</button>\n    </form>\n  );\n}",
      },
      regex: 'Validation passed!|Register',
      output: 'Form with validation and submit button',
      hintXp: 50,
    },
  },
  // CHAPTER 11: React Router Basics (6 exercises)
  {
    courseId: 1,
    exerciseId: 'setup-router',
    exerciseName: 'Setup Router',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>React Router enables client-side routing: navigate between pages without full page reload. It maps URL paths to components, creating a single-page application experience.</p><p style='margin-bottom:8px;'>Setup: install react-router-dom, wrap your app with BrowserRouter. <code>import { BrowserRouter } from 'react-router-dom'; &lt;BrowserRouter&gt;&lt;App /&gt;&lt;/BrowserRouter&gt;</code> Now routing is available.</p><p style='margin-bottom:8px;'>Routes component: defines the route mappings. <code>&lt;Routes&gt;&lt;Route path=\"/\" element={&lt;Home /&gt;} /&gt;&lt;Route path=\"/about\" element={&lt;About /&gt;} /&gt;&lt;/Routes&gt;</code> Each route maps a path to a component.</p><p style='margin-bottom:8px;'>The path: URL path for the route. <code>path=\"/\"</code> is the home page. <code>path=\"/about\"</code> matches /about URL. Paths are matched in order.</p><p style='margin-bottom:8px;'>The element: the component to render when path matches. Can be any component. Receives match and location in props if needed.</p><p style='margin-bottom:8px;'>Navigation: use Link component to navigate. <code>&lt;Link to=\"/about\"&gt;About&lt;/Link&gt;</code> Clicking navigates to /about. No page reload, smooth SPA experience.</p><p style='margin-bottom:8px;'>URL changes: when route changes, URL updates. Users can bookmark/share URLs. Browser back button works. URL and UI stay in sync.</p><p style='margin-bottom:8px;'>Nested routes: routes can be nested. <code>&lt;Route path=\"/dashboard\" element={&lt;Dashboard /&gt;&gt;&lt;Route path=\"settings\" element={&lt;Settings /&gt;} /&gt;&lt;/Route&gt;</code> Composing routes hierarchically.</p><p style='margin-bottom:8px;'>Dynamic segments: <code>path=\"/user/:id\"</code> matches /user/123. Extract with useParams Hook. Powerful for data-driven pages.</p><p style='margin-bottom:8px;'>React Router is essential for multi-page React applications. Master setup, and you can build full-featured SPAs.</p><p style='margin-bottom:8px;'>Routing is fundamental to modern web applications.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set up a basic router with two routes: <strong>/home</strong> (displays 'Home Page') and <strong>/about</strong> (displays 'About Page'). Include navigation links to switch between pages without page reload.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use BrowserRouter, Routes, Route, and Link components from react-router-dom. Define two routes with different paths and components.</p></body>",
      starterCode: {
        '/App.js':
          "import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction Home() {\n  return <h1>Home Page</h1>;\n}\n\nfunction About() {\n  return <h1>About Page</h1>;\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        {/* Add navigation links */}\n      </nav>\n      <Routes>\n        {/* Define routes */}\n      </Routes>\n    </BrowserRouter>\n  );\n}",
      },
      regex: 'Home Page|About Page|Link',
      output: 'Router with navigation between pages',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'route-components',
    exerciseName: 'Route Components',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Route components render when their path matches the URL. Each route has its own component that displays unique content. Organizing components by route is a clean architecture pattern.</p><p style='margin-bottom:8px;'>Page components: components designed to be rendered at a route. Often in a pages/ directory. Home.js, About.js, Dashboard.js, etc. Each represents a page in the application.</p><p style='margin-bottom:8px;'>Component structure: each page component has its own layout, logic, styling. Completely independent from other pages. Promotes modular code organization.</p><p style='margin-bottom:8px;'>Shared layout: often pages share a common layout (header, footer, sidebar). A parent component wraps pages. Only the main content changes per route.</p><p style='margin-bottom:8px;'>Nested routes: a page might have sub-pages. Dashboard with Settings sub-page. Nested routes handle this. The parent renders an outlet for children.</p><p style='margin-bottom:8px;'>Dynamic pages: pages might receive dynamic data. A User page shows different content for /user/1 vs /user/2. useParams extracts the dynamic segment from URL.</p><p style='margin-bottom:8px;'>Lazy loading: code-split pages with React.lazy(). <code>const Home = lazy(() => import('./pages/Home'));</code> Each page loads only when needed. Improves initial load time.</p><p style='margin-bottom:8px;'>Not found: a fallback route for unmatched paths. <code>&lt;Route path=\"*\" element={&lt;NotFound /&gt;} /&gt;</code> Shows 404 page for invalid URLs.</p><p style='margin-bottom:8px;'>This organization scales well. Applications with 10 or 100 pages use the same pattern.</p><p style='margin-bottom:8px;'>Master route components, and you scale to large applications.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create three separate page components: HomePage, ProfilePage, and SettingsPage. Each displays its own content. Set up routes for each. Navigation should switch between pages.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create separate component files for each page. Define routes for each path. Include Links for navigation between pages.</p></body>",
      starterCode: {
        '/App.js':
          "import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction HomePage() {\n  return <h1>Home</h1>;\n}\n\nfunction ProfilePage() {\n  return <h1>Profile</h1>;\n}\n\nfunction SettingsPage() {\n  return <h1>Settings</h1>;\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <nav>{/* Links */}</nav>\n      <Routes>{/* Routes */}</Routes>\n    </BrowserRouter>\n  );\n}",
      },
      regex: 'Home|Profile|Settings',
      output: 'Multiple page components with routing',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'link-navigation',
    exerciseName: 'Link Navigation',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Link component navigates between routes. <code>&lt;Link to=\"/about\"&gt;About&lt;/Link&gt;</code> No page reload, smooth SPA navigation. Link is preferred over &lt;a&gt; tags for internal navigation.</p><p style='margin-bottom:8px;'>Difference from &lt;a&gt;: &lt;a href&gt; causes full page reload. Link prevents default and uses React Router. User sees smooth transition.</p><p style='margin-bottom:8px;'>Active links: highlight the current page's link. useLocation Hook gets current path. <code>const loc = useLocation(); className={loc.pathname === '/about' ? 'active' : ''}</code> Style active links differently.</p><p style='margin-bottom:8px;'>NavLink component: built-in active highlighting. <code>&lt;NavLink to=\"/about\" className={({isActive}) => isActive ? 'active' : ''}&gt;About&lt;/NavLink&gt;</code> Automatically provides isActive in className function.</p><p style='margin-bottom:8px;'>Relative links: <code>&lt;Link to=\"../parent\"&gt;</code> Navigate relative to current location. Useful in nested routes.</p><p style='margin-bottom:8px;'>useNavigate Hook: programmatically navigate. <code>const navigate = useNavigate(); navigate('/home');</code> Navigate after action, like form submission.</p><p style='margin-bottom:8px;'>Replace history: <code>&lt;Link to=\"/home\" replace&gt;</code> Don't add to history, replace current entry. Back button skips this page.</p><p style='margin-bottom:8px;'>Link state: <code>&lt;Link to=\"/about\" state={{from: 'home'}}&gt;</code> Pass data to the linked page. Access with useLocation().state.</p><p style='margin-bottom:8px;'>Building navigation is a primary use case for Links. Menus, breadcrumbs, pagination—all use Links.</p><p style='margin-bottom:8px;'>Master navigation, and your apps feel responsive and snappy.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a navigation menu with Links to different pages. Highlight the currently active link with styling (e.g., bold or colored). Navigate between pages and see the active link change.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use NavLink with className function to conditionally apply active class. Or use useLocation() to check current path.</p></body>",
      starterCode: {
        '/App.js':
          'import { BrowserRouter, Routes, Route, NavLink } from \'react-router-dom\';\n\nfunction Home() {\n  return <h1>Home</h1>;\n}\n\nfunction About() {\n  return <h1>About</h1>;\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        {/* Use NavLink with active styling */}\n      </nav>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}',
      },
      regex: 'NavLink|active|Home|About',
      output: 'Navigation with active link highlighting',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'url-parameters',
    exerciseName: 'URL Parameters',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>URL parameters capture dynamic values in the path. <code>path=\"/user/:id\"</code> matches /user/123, /user/456, etc. Extract the id with useParams Hook.</p><p style='margin-bottom:8px;'>Defining parameters: <code>&lt;Route path=\"/user/:userId\" element={&lt;UserPage /&gt;} /&gt;</code> The :userId is a parameter. Can have multiple: <code>/post/:userId/:postId</code></p><p style='margin-bottom:8px;'>Extracting parameters: <code>const {userId} = useParams();</code> Get the userId value from URL. <code>/user/42</code> gives userId=42.</p><p style='margin-bottom:8px;'>Navigating with parameters: <code>&lt;Link to={`/user/${user.id}`}&gt;</code> Build the URL dynamically. Useful in lists: each item links to its detail page.</p><p style='margin-bottom:8px;'>Parameter types: parameters are always strings. <code>parseInt(userId)</code> to convert to number if needed.</p><p style='margin-bottom:8px;'>Validation: check if parameter exists and is valid. <code>if (!userId) return &lt;NotFound /&gt;;</code> Show error for invalid IDs.</p><p style='margin-bottom:8px;'>Query strings: <code>/search?query=react</code> Different from parameters. Use useSearchParams Hook. <code>const [params] = useSearchParams(); const query = params.get('query');</code></p><p style='margin-bottom:8px;'>Optional parameters: <code>path=\"/post/:id?\"</code> The ? makes id optional. Matches /post/ and /post/123.</p><p style='margin-bottom:8px;'>Dynamic content pages common: user profiles, product pages, blog posts. All use URL parameters to identify the resource.</p><p style='margin-bottom:8px;'>Master URL parameters, and you build data-driven applications.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a user detail page route with URL parameter <code>/user/:id</code>. When visiting /user/1, display <strong>User ID: 1</strong>. Links should navigate to different user IDs.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use <code>useParams()</code> to extract the id from URL. Display it in the component. Create links like <code>&lt;Link to={'/user/' + id}&gt;</code></p></body>",
      starterCode: {
        '/App.js':
          'import { BrowserRouter, Routes, Route, Link, useParams } from \'react-router-dom\';\n\nfunction UserPage() {\n  const { id } = useParams();\n  \n  return (\n    <div>\n      {/* Display user ID */}\n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <nav>{/* Links to different users */}</nav>\n      <Routes>\n        <Route path=\"/user/:id\" element={<UserPage />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}',
      },
      regex: 'User ID:|useParams',
      output: 'User detail page with dynamic ID',
      hintXp: 40,
    },
  },
  {
    courseId: 1,
    exerciseId: 'nested-routes',
    exerciseName: 'Nested Routes',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Nested routes organize pages hierarchically. A parent route renders a layout, child routes render specific content. <code>&lt;Route path=\"/dashboard\" element={&lt;Dashboard /&gt;}&gt;&lt;Route path=\"settings\" element={&lt;Settings /&gt;} /&gt;&lt;/Route&gt;</code></p><p style='margin-bottom:8px;'>Parent layout: the parent component renders common structure (header, sidebar). <code>&lt;Outlet /&gt;</code> component shows where child routes render.</p><p style='margin-bottom:8px;'>Child paths: relative to parent. /dashboard/settings matches the nested route above. If parent is /admin, children are /admin/users, /admin/settings, etc.</p><p style='margin-bottom:8px;'>Outlet Hook: <code>import { Outlet } from 'react-router-dom'; &lt;Outlet /&gt;</code> in parent renders the matched child route.</p><p style='margin-bottom:8px;'>Nested navigation: navigate to /dashboard/settings with Link. <code>&lt;Link to=\"settings\"&gt;</code> Relative links work in nested routes.</p><p style='margin-bottom:8px;'>Multiple levels: routes can nest multiple levels deep. /admin/users/detail/123. As many levels as needed.</p><p style='margin-bottom:8px;'>Shared layout: nested structure keeps common layout without repeating it. One parent layout, many child pages.</p><p style='margin-bottom:8px;'>Tab-like navigation: parent renders tabs, children render tab content. Nested routes handle this elegantly.</p><p style='margin-bottom:8px;'>Advanced pattern: nested routes are more complex than flat routes. Use when the hierarchy makes sense.</p><p style='margin-bottom:8px;'>Master nested routes, and you structure complex applications cleanly.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a dashboard with nested routes. Dashboard has a sidebar showing links to Profile and Settings sub-pages. Navigating to /dashboard/profile shows 'Profile Page', /dashboard/settings shows 'Settings Page'.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use nested Route tags. Parent renders Layout with Outlet. Children render specific content. Use relative Link paths in children.</p></body>",
      starterCode: {
        '/App.js':
          'import { BrowserRouter, Routes, Route, Link, Outlet } from \'react-router-dom\';\n\nfunction Dashboard() {\n  return (\n    <div>\n      <nav>{/* Sub-navigation */}</nav>\n      {/* Render child routes here */}\n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/dashboard\" element={<Dashboard />}>\n          {/* Nested routes */}\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  );\n}',
      },
      regex: 'Dashboard|Profile|Settings',
      output: 'Nested routing with sub-pages',
      hintXp: 45,
    },
  },
  {
    courseId: 1,
    exerciseId: 'build-a-multi-page-app',
    exerciseName: 'Build a Multi-Page App',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Building a multi-page app synthesizes all routing concepts: routes, navigation, parameters, nested routes. This project creates a complete SPA with multiple interconnected pages.</p><p style='margin-bottom:8px;'>This project combines routing and previous concepts: components, state, event handling. A realistic application with multiple features across different pages.</p><p style='margin-bottom:8px;'>Pages: Home, Products (list), Product Detail, About, Contact. Each page has different content and purpose.</p><p style='margin-bottom:8px;'>Navigation: header with links to all pages. Products page links to individual product details. Clear navigation hierarchy.</p><p style='margin-bottom:8px;'>Product detail: demonstrates URL parameters. /products/:id shows product with that ID. Click a product, navigate to its detail page.</p><p style='margin-bottom:8px;'>State: product list in state or fetched. Detail page retrieves product from the list by ID. Managing data across pages.</p><p style='margin-bottom:8px;'>Real applications use APIs and databases. This exercise uses static data, but architecture is identical. Replace static data with API calls.</p><p style='margin-bottom:8px;'>This project demonstrates a complete multi-page architecture. The same patterns scale to large applications.</p><p style='margin-bottom:8px;'>Completing this project proves you can build real, multi-page React applications.</p><p style='margin-bottom:8px;'>Build your multi-page app, and you're ready for production React development.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a multi-page app with: Home page, Products list page, and Product detail page. Products list shows all products with links. Clicking a product navigates to /product/:id showing that product's details. Include navigation menu to switch between pages.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use BrowserRouter, Routes, Route for pages. useParams to get product ID. useState to store products list. NavLink for navigation menu.</p></body>",
      starterCode: {
        '/App.js':
          "import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';\nimport { useState } from 'react';\n\nfunction Home() {\n  return <h1>Home</h1>;\n}\n\nfunction ProductsList() {\n  const products = [\n    { id: 1, name: 'Product 1', price: 99 },\n    { id: 2, name: 'Product 2', price: 149 }\n  ];\n  return (\n    <div>\n      <h1>Products</h1>\n      {/* List products with links */}\n    </div>\n  );\n}\n\nfunction ProductDetail() {\n  const { id } = useParams();\n  return (\n    <div>\n      {/* Show product details */}\n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      {/* Navigation and Routes */}\n    </BrowserRouter>\n  );\n}",
      },
      regex: 'Home|Products|Product Detail|Product',
      output: 'Multi-page app with routing and navigation',
      hintXp: 50,
    },
  },

  // CHAPTER 12: React Best Practices (6 exercises)
  {
    courseId: 1,
    exerciseId: 'component-organization',
    exerciseName: 'Component Organization',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Organizing components well keeps large projects manageable. Good folder structure makes finding code fast. Consistency across teams ensures code feels familiar everywhere.</p><p style='margin-bottom:8px;'>Folder structure: src/components/ for reusable components, src/pages/ for page components, src/hooks/ for custom hooks, src/utils/ for utilities, src/styles/ for global styles.</p><p style='margin-bottom:8px;'>Feature-based structure: group by feature. src/features/auth/, src/features/products/, src/features/dashboard/. Each feature self-contained with its components, hooks, utilities.</p><p style='margin-bottom:8px;'>File naming: use PascalCase for components (Button.js), camelCase for utilities (formatDate.js). Consistent naming makes code predictable.</p><p style='margin-bottom:8px;'>Component files: component code in same file as export. Related components in same folder. index.js for barrel exports simplifies imports.</p><p style='margin-bottom:8px;'>Separation of concerns: component file has component only. Tests in separate file (Button.test.js). Styles in separate file (Button.css or Button.module.css).</p><p style='margin-bottom:8px;'>Scalability: good organization scales. 10 components or 1000, same structure works. Growth doesn't require massive refactoring.</p><p style='margin-bottom:8px;'>Team consistency: teams must agree on structure. Document it. New developers can find files quickly without asking.</p><p style='margin-bottom:8px;'>Avoid god components: don't put everything in one component. Break down into focused, single-purpose components.</p><p style='margin-bottom:8px;'>Avoid god folders: don't put everything in one folder. Spread across logical, semantic folders.</p><p style='margin-bottom:8px;'>Good organization reduces cognitive load. Less time finding files, more time building features.</p><p style='margin-bottom:8px;'>Master organization, and your projects stay clean as they grow.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component organization structure. Set up folders: components/, pages/, hooks/, utils/. Within components/, create subfolders for Button, Card, Header. Show how this structure organizes a medium-sized app.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create folder hierarchy following feature-based or component-based organization. Document the structure explaining why each folder exists.</p></body>",
      starterCode: {
        '/project-structure.md':
          '# Project Structure\n\nsrc/\n├── components/\n│   ├── Button/\n│   │   ├── Button.js\n│   │   ├── Button.css\n│   │   └── Button.test.js\n│   ├── Card/\n│   └── Header/\n├── pages/\n├── hooks/\n├── utils/\n└── styles/\n\nDocument why each folder exists.',
      },
      regex: 'components|pages|hooks|utils',
      output: 'Well-organized folder structure',
      hintXp: 25,
    },
  },
  {
    courseId: 1,
    exerciseId: 'avoid-prop-drilling',
    exerciseName: 'Avoid Prop Drilling',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Prop drilling passes props through many intermediate components. A deeply nested component needs data from a parent. Data flows through all components in between, even if they don't use it. This clutters component signatures.</p><p style='margin-bottom:8px;'>Example problem: Theme prop flows through App → Page → Layout → Header → Button. Only Button uses it. Header, Layout, Page don't.</p><p style='margin-bottom:8px;'>Solution 1: Context API. Provide theme at top, consume at bottom. <code>&lt;ThemeContext.Provider value={theme}&gt;&lt;App /&gt;&lt;/ThemeContext.Provider&gt;</code> Then <code>const theme = useContext(ThemeContext)</code> in Button.</p><p style='margin-bottom:8px;'>Solution 2: Custom hooks. Create a hook that uses context. <code>const useTheme = () => useContext(ThemeContext);</code> Simpler than accessing context everywhere.</p><p style='margin-bottom:8px;'>Solution 3: State management library (Redux, Zustand). Centralized state, components access what they need. Scales to complex state.</p><p style='margin-bottom:8px;'>When to solve: if data passes through more than 2 levels, consider a solution. If only 1 level, prop drilling is fine.</p><p style='margin-bottom:8px;'>Identify drilling early: if you find yourself passing props unused, it's a smell. Refactor before it gets worse.</p><p style='margin-bottom:8px;'>Context for simple data: theme, language, user. Redux for complex state with many interactions.</p><p style='margin-bottom:8px;'>Trade-off: Context is simpler but less powerful. Redux is complex but handles sophisticated state. Choose based on needs.</p><p style='margin-bottom:8px;'>Prevention is easier than cure. Design component hierarchy considering data flow.</p><p style='margin-bottom:8px;'>Avoid prop drilling, and your component APIs stay clean.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a Context to store a theme value. Provide it at the top-level App. Consume the theme in a deeply nested component (at least 3 levels deep) using useContext. Display <strong>Current theme: light</strong> or similar from the context.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use createContext() to create ThemeContext. Wrap app with Context.Provider. Use useContext(ThemeContext) to consume in nested components.</p></body>",
      starterCode: {
        '/App.js':
          "import { createContext, useContext, useState } from 'react';\n\nconst ThemeContext = createContext();\n\nfunction Level3() {\n  const theme = useContext(ThemeContext);\n  return <p>Current theme: {theme}</p>;\n}\n\nfunction Level2() {\n  return <Level3 />;\n}\n\nfunction Level1() {\n  return <Level2 />;\n}\n\nexport default function App() {\n  const [theme, setTheme] = useState('light');\n  \n  return (\n    <ThemeContext.Provider value={theme}>\n      <Level1 />\n    </ThemeContext.Provider>\n  );\n}",
      },
      regex: 'Current theme:|useContext',
      output: 'Context used to avoid prop drilling',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'memoization',
    exerciseName: 'Memoization',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Memoization prevents unnecessary re-renders. A component re-renders when parent re-renders, even if props haven't changed. React.memo wraps a component, skipping re-render if props are the same.</p><p style='margin-bottom:8px;'>Pattern: <code>const Button = React.memo(function Button({label}) { return &lt;button&gt;{label}&lt;/button&gt;; });</code> If label prop doesn't change, Button won't re-render.</p><p style='margin-bottom:8px;'>useMemo Hook: memoize expensive computations. <code>const expensiveValue = useMemo(() => complexCalculation(data), [data]);</code> Recalculate only if data changes.</p><p style='margin-bottom:8px;'>useCallback Hook: memoize functions. <code>const handleClick = useCallback(() => { doSomething(id); }, [id]);</code> Function identity stays same if dependencies don't change. Prevents unnecessary re-renders of children receiving the function.</p><p style='margin-bottom:8px;'>When to memoize: profile first, memoize if performance issue. Premature memoization adds complexity. Use when you have slow re-renders.</p><p style='margin-bottom:8px;'>Memoization is not free: React.memo, useMemo, useCallback have overhead. Only worth it if the re-render cost exceeds the memoization overhead.</p><p style='margin-bottom:8px;'>Object/array dependencies: <code>const items = []; const memoizedList = useMemo(() => items, [items]);</code> Objects/arrays created fresh every render break memoization. Memoize them or use stable references.</p><p style='margin-bottom:8px;'>Custom comparison: <code>React.memo(Component, (prevProps, nextProps) => {...})</code> Custom logic to determine if props changed.</p><p style='margin-bottom:8px;'>Profiling: Chrome DevTools, React DevTools profiler. Measure before and after memoization to verify improvement.</p><p style='margin-bottom:8px;'>Memoization is a tool for performance optimization. Use when needed, not by default.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a component wrapped with React.memo() to prevent unnecessary re-renders. Parent component has state that changes. The memoized child only re-renders when its props change, not when parent updates.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use React.memo() to wrap a component. Pass props that determine when it should re-render. When parent state changes but props stay same, child won't re-render.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState, memo } from 'react';\n\nconst MemoChild = memo(function Child({name}) {\n  console.log('Child rendering');\n  return <p>Hello {name}</p>;\n});\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <MemoChild name=\"Alice\" />\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}",
      },
      regex: 'memo|Hello|Increment',
      output: 'Memoized component preventing unnecessary renders',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'code-splitting',
    exerciseName: 'Code Splitting',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Code splitting breaks your app into chunks. Only load code needed for current page. Improves initial load time significantly. Users with fast connections might not notice, but slow connections see huge improvement.</p><p style='margin-bottom:8px;'>Dynamic imports: <code>const Component = React.lazy(() => import('./Component'));</code> Load component only when needed. Webpack automatically creates separate chunk.</p><p style='margin-bottom:8px;'>Suspense: <code>&lt;Suspense fallback={&lt;Spinner /&gt;}&gt;&lt;LazyComponent /&gt;&lt;/Suspense&gt;</code> Show loading while chunk loads. Provides good UX during load.</p><p style='margin-bottom:8px;'>Route-based splitting: split by route. <code>const Home = lazy(() => import('./pages/Home'));</code> Each page loads only when visited. Common pattern in SPAs.</p><p style='margin-bottom:8px;'>Bundle analysis: analyze what's in the bundle. Use webpack-bundle-analyzer. Identify large dependencies, remove unused code.</p><p style='margin-bottom:8px;'>Lazy loading heavy components: large charts, rich editors, 3D libraries. Load only when needed. Don't burden initial load.</p><p style='margin-bottom:8px;'>Error boundaries: lazy loading can fail (network error). Error boundary catches and shows fallback UI. <code>&lt;ErrorBoundary fallback={&lt;Error /&gt;}&gt;&lt;LazyComponent /&gt;&lt;/ErrorBoundary&gt;</code></p><p style='margin-bottom:8px;'>Build tools support: Create React App, Vite, Next.js all support code splitting. No extra config in many cases.</p><p style='margin-bottom:8px;'>Trade-off: multiple chunks mean multiple requests. Not optimal for LAN/fast connections. Balance loading time vs request overhead.</p><p style='margin-bottom:8px;'>Code splitting is essential for large applications. It's an easy win for performance.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use React.lazy() and Suspense to lazy-load a component. Show a loading message while the component loads. Display the component once loaded with text <strong>Lazy loaded component!</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>const LazyComp = lazy(() => import('./LazyComponent'));</code> Wrap with &lt;Suspense fallback={...}&gt; to show loading.</p></body>",
      starterCode: {
        '/App.js':
          "import { lazy, Suspense } from 'react';\n\nconst LazyComponent = lazy(() => import('./LazyComponent'));\n\nexport default function App() {\n  return (\n    <div>\n      <Suspense fallback={<p>Loading...</p>}>\n        {/* Lazy loaded component */}\n      </Suspense>\n    </div>\n  );\n}",
        '/LazyComponent.js':
          'export default function LazyComponent() {\n  return <p>Lazy loaded component!</p>;\n}',
      },
      regex: 'Loading|Lazy loaded component!',
      output: 'Lazy-loaded component with Suspense',
      hintXp: 35,
    },
  },
  {
    courseId: 1,
    exerciseId: 'error-boundaries',
    exerciseName: 'Error Boundaries',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Error boundaries catch JavaScript errors in React components. Without them, a crash in one component crashes the entire app. Error boundaries show graceful fallback UI instead.</p><p style='margin-bottom:8px;'>Implementation: class component with componentDidCatch lifecycle method. <code>componentDidCatch(error, info) { setHasError(true); }</code> Catches errors in child components.</p><p style='margin-bottom:8px;'>Scope: error boundary catches errors in children, not itself. Won't catch async errors (callbacks, timers), server-side rendering errors. Use try-catch for those.</p><p style='margin-bottom:8px;'>Multiple boundaries: use multiple boundaries at different levels. Top-level catches everything. Feature-level boundaries show specific errors. Granular error handling.</p><p style='margin-bottom:8px;'>Fallback UI: show meaningful error message. <code>&lt;ErrorBoundary fallback={&lt;ErrorPage /&gt;}&gt;&lt;Component /&gt;&lt;/ErrorBoundary&gt;</code> Users know something went wrong.</p><p style='margin-bottom:8px;'>Logging: send errors to logging service. <code>logErrorToServer(error, info);</code> Monitor application health, identify issues.</p><p style='margin-bottom:8px;'>Recovery: offer users way to recover. Reload button, navigate home, retry action. Don't trap users in broken state.</p><p style='margin-bottom:8px;'>Production consideration: show friendly error message in production. Show detailed stack trace in development for debugging.</p><p style='margin-bottom:8px;'>Libraries: React Error Boundary library simplifies implementation. Functional component syntax wrapper instead of class component.</p><p style='margin-bottom:8px;'>Error boundaries are safety net. Not replacement for good error handling everywhere else.</p><p style='margin-bottom:8px;'>Master error boundaries, and your apps stay resilient.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an Error Boundary component that catches errors from children. When a child throws an error, the boundary shows <strong>Something went wrong!</strong> instead of crashing the app.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Implement Error Boundary as a class component with componentDidCatch. Check state and show fallback UI if error occurred.</p></body>",
      starterCode: {
        '/App.js':
          "import React from 'react';\n\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n  \n  componentDidCatch(error, info) {\n    // Handle error\n  }\n  \n  render() {\n    if (this.state.hasError) {\n      return <p>Something went wrong!</p>;\n    }\n    return this.props.children;\n  }\n}\n\nfunction BuggyComponent() {\n  throw new Error('Test error');\n}\n\nexport default function App() {\n  return (\n    <ErrorBoundary>\n      <BuggyComponent />\n    </ErrorBoundary>\n  );\n}",
      },
      regex: 'Something went wrong!',
      output: 'Error boundary catching and displaying errors',
      hintXp: 40,
    },
  },
  {
    courseId: 1,
    exerciseId: 'optimize-performance',
    exerciseName: 'Optimize Performance',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Performance optimization makes applications faster. Faster apps mean better user experience, better SEO, higher engagement. Performance is a feature, not afterthought.</p><p style='margin-bottom:8px;'>Identify bottlenecks: don't optimize blindly. Profile with React DevTools, Chrome DevTools. Measure slow renders, large bundles, network waterfalls. Data guides optimization.</p><p style='margin-bottom:8px;'>Quick wins: lazy loading, code splitting, memoization. These often provide biggest improvements. Measure impact.</p><p style='margin-bottom:8px;'>Bundle size: analyze what's in bundle. Webpack-bundle-analyzer shows breakdown. Remove unused packages, replace heavy libraries with lighter alternatives.</p><p style='margin-bottom:8px;'>Rendering performance: useCallback, useMemo, React.memo prevent unnecessary re-renders. Profile to find slow renders. Optimize only slow ones.</p><p style='margin-bottom:8px;'>Image optimization: compress images, use modern formats (WebP). Lazy load images below the fold. Images are often largest assets.</p><p style='margin-bottom:8px;'>Network optimization: use CDN for static assets. Minify and compress code. Service workers for offline support and caching.</p><p style='margin-bottom:8px;'>Monitoring: use tools like Google Lighthouse, WebPageTest. Continuous monitoring catches regressions. Performance budgets prevent bloat.</p><p style='margin-bottom:8px;'>Performance culture: team prioritizes it. Design and development consider performance. Code reviews check for regressions.</p><p style='margin-bottom:8px;'>Iterative approach: performance is ongoing. Monitor, identify issues, fix incrementally. Don't expect perfection.</p><p style='margin-bottom:8px;'>Master performance, and build applications users love.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Implement a performance optimization: either lazy load a component, memoize an expensive render, or implement code splitting. Demonstrate the optimization with before/after logging showing when components render.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add console.log() to show when components render. Implement one optimization technique. Show the difference in render frequency.</p></body>",
      starterCode: {
        '/App.js':
          "import { useState, memo } from 'react';\n\nconst OptimizedComponent = memo(function Component({count}) {\n  console.log('OptimizedComponent rendered');\n  return <p>Count: {count}</p>;\n});\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState('');\n  \n  console.log('App rendered');\n  \n  return (\n    <div>\n      <OptimizedComponent count={count} />\n      <p>Name: {name}</p>\n      <button onClick={() => setCount(count + 1)}>Inc Count</button>\n      <input value={name} onChange={e => setName(e.target.value)} />\n    </div>\n  );\n}",
      },
      regex: 'rendered|optimization|performance',
      output: 'Performance optimization implemented',
      hintXp: 45,
    },
  },
];

const CSS_DATA = [
  {
    courseId: 3,
    exerciseId: 'what-is-css',
    exerciseName: 'What is CSS',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>CSS stands for Cascading Style Sheets, the language that transforms plain HTML into beautiful, visually appealing web pages. While HTML provides structure, CSS provides presentation and styling, making the difference between a boring document and an engaging experience.</p><p style='margin-bottom:8px;'>Before CSS, people styled web pages using HTML attributes and tables, which made code messy and hard to maintain. CSS solved this by separating content from presentation. You write clean, semantic HTML while styling it separately with CSS.</p><p style='margin-bottom:8px;'>CSS works by targeting HTML elements and applying visual properties to them. You select elements using selectors (element names, classes, IDs, or more complex patterns) and declare properties like color, size, spacing, and positioning.</p><p style='margin-bottom:8px;'>The word \"Cascading\" is important. CSS rules cascade from general to specific. If multiple rules apply to an element, the more specific rule wins. This cascading nature is powerful but requires understanding specificity to avoid conflicts.</p><p style='margin-bottom:8px;'>CSS syntax is simple: selector { property: value; }. For example: h1 { color: blue; } makes all h1 elements blue. Properties control everything from text appearance to layout, animations, and responsive design.</p><p style='margin-bottom:8px;'>There are three ways to add CSS to HTML: inline styles (style attribute), internal stylesheets (style tag), and external stylesheets (linked CSS files). External stylesheets are the best practice for large projects.</p><p style='margin-bottom:8px;'>CSS enables responsive design, allowing websites to look good on phones, tablets, and desktops. With media queries, you can apply different styles at different screen sizes, creating adaptive experiences.</p><p style='margin-bottom:8px;'>Modern CSS is powerful and flexible. You can create complex layouts with flexbox and grid, add animations and transitions, apply filters and transformations, and build sophisticated visual effects all with CSS.</p><p style='margin-bottom:8px;'>CSS is fundamental to web development. Whether you're building simple websites or complex web applications, CSS skills are essential. Understanding CSS well makes you a better developer overall.</p><p style='margin-bottom:8px;'>Learning CSS opens creative possibilities. With CSS, you control how users see and interact with your content. Good CSS makes websites fast, accessible, and delightful to use.</p><p style='margin-bottom:8px;'>CSS is forgiving — invalid properties are simply ignored, not causing errors. This makes it easy to experiment and learn through trial and error, though understanding why things work is important.</p><p style='margin-bottom:8px;'>Ready to master CSS and transform plain HTML into stunning web pages? Let's begin your CSS journey!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an external stylesheet and link it to your HTML file. In the CSS file, add a rule to make all <code>&lt;h1&gt;</code> elements <strong>blue</strong> and set their font size to <strong>32px</strong>.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>In your CSS file, write: <code>h1 { color: blue; font-size: 32px; }</code>. Link it with <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> in the HTML head.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html>\n<head>\n  <!-- Link your CSS file here -->\n</head>\n<body>\n  <h1>Welcome to CSS</h1>\n  <p>Style this page with CSS!</p>\n</body>\n</html>',
        '/style.css': '/* Add your CSS rules here */',
      },
      regex: 'color:\\s*blue|color:\\s*#0000ff',
      output: 'h1 { color: blue; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'link-a-stylesheet',
    exerciseName: 'Link a Stylesheet',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Linking an external stylesheet is the standard way to style websites. An external stylesheet is a separate .css file that contains all your styling rules. This approach keeps HTML clean and CSS organized.</p><p style='margin-bottom:8px;'>The link tag in HTML's head section tells the browser to fetch and apply the CSS file. The <code>rel=\"stylesheet\"</code> attribute indicates the relationship between the HTML and CSS files. The <code>href</code> attribute points to the CSS file location.</p><p style='margin-bottom:8px;'>Using external stylesheets offers many advantages: your CSS is separate from HTML (better organization), the browser caches the CSS file (better performance), and one CSS file can style multiple HTML pages (consistency and maintainability).</p><p style='margin-bottom:8px;'>The order of link tags matters. Links at the top of the head are processed first. If you have multiple stylesheets, later ones override earlier ones for conflicting properties.</p><p style='margin-bottom:8px;'>External stylesheets should be linked in the head section, not the body. This ensures styles are loaded before the page renders, preventing the \"flash of unstyled content\" where users see unstyled HTML briefly.</p><p style='margin-bottom:8px;'>The href attribute can be an absolute URL or a relative path. For local files, use relative paths like <code>\"./style.css\"</code> or <code>\"./css/main.css\"</code>. For external stylesheets from CDNs, use full URLs.</p><p style='margin-bottom:8px;'>Web browsers recognize the link tag and automatically fetch CSS files. This happens in the background. You don't need to manually include the CSS code — just reference it correctly.</p><p style='margin-bottom:8px;'>Common mistakes include incorrect file paths (check that your CSS file exists in the right location), misspelled rel attributes, or placing the link tag outside the head section.</p><p style='margin-bottom:8px;'>Once your stylesheet is linked, all CSS rules in it apply to your HTML. Every element targeted by your CSS rules will receive those styles automatically.</p><p style='margin-bottom:8px;'>Linking stylesheets is a fundamental skill. Almost every website you build will use this pattern. Mastering it sets you up for success in web development.</p><p style='margin-bottom:8px;'>In this exercise, you'll practice linking a stylesheet and verifying that your styles are applied correctly.</p><p style='margin-bottom:8px;'>Link your stylesheet and watch your page transform!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add a proper link tag to connect the <code>style.css</code> file to your HTML. Then in the CSS file, style the <code>&lt;p&gt;</code> element with a <strong>red</strong> text color and <strong>18px</strong> font size.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> in the head. Then in CSS: <code>p { color: red; font-size: 18px; }</code></p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CSS Linking</title>\n  <!-- Add your link tag here -->\n</head>\n<body>\n  <p>This paragraph should be styled red.</p>\n</body>\n</html>',
        '/style.css': '/* Write your CSS rules here */',
      },
      regex: 'href=.*style\\.css',
      output: '<link rel="stylesheet" href="style.css">',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'inline-vs-external',
    exerciseName: 'Inline vs External',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>There are multiple ways to apply CSS to HTML elements: inline styles, internal stylesheets, and external stylesheets. Understanding the differences helps you choose the best approach for each situation.</p><p style='margin-bottom:8px;'>Inline styles use the style attribute directly on HTML elements. Example: <code>&lt;p style=\"color: blue;\"&gt;Text&lt;/p&gt;</code>. This is quick but not recommended for production code because styles are mixed with HTML content, making maintenance difficult.</p><p style='margin-bottom:8px;'>Internal stylesheets use a style tag in the HTML head. All CSS rules go inside the style tag. This keeps styles separate from HTML elements but only applies to that specific HTML file.</p><p style='margin-bottom:8px;'>External stylesheets are separate .css files linked to HTML. This is the best practice for production websites. Styles are completely separate from HTML, making code clean and maintainable.</p><p style='margin-bottom:8px;'>Inline styles have high specificity, meaning they override styles from internal and external stylesheets. This can create conflicts when you need to change styling later. Avoiding inline styles prevents these conflicts.</p><p style='margin-bottom:8px;'>Internal stylesheets work well for small HTML files or when you need page-specific styles. However, as projects grow, managing styles scattered across many HTML files becomes difficult.</p><p style='margin-bottom:8px;'>External stylesheets scale beautifully. One CSS file can style multiple HTML pages. Changes to the CSS file apply everywhere automatically. This is why it's the standard approach in professional development.</p><p style='margin-bottom:8px;'>Browser caching is another advantage of external stylesheets. The browser downloads the CSS file once and reuses it for all pages, improving overall performance.</p><p style='margin-bottom:8px;'>The cascading order matters: inline styles override internal styles, which override external styles (unless overridden by specificity). Understanding this cascade is crucial for debugging style conflicts.</p><p style='margin-bottom:8px;'>In modern web development, you might also encounter CSS-in-JS libraries that write CSS inside JavaScript files. These are advanced techniques for special scenarios, but external stylesheets remain the standard.</p><p style='margin-bottom:8px;'>Best practice: avoid inline styles, use internal stylesheets sparingly, and rely on external stylesheets for your main styling. This pattern creates clean, maintainable code.</p><p style='margin-bottom:8px;'>Understanding these three approaches helps you make informed decisions about your styling architecture.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create both an inline style and an external stylesheet rule for a <code>&lt;div&gt;</code> element. The div should have a <strong>green</strong> background color. Observe which style takes precedence.</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Use <code>&lt;div style="background-color: green;"&gt;</code> for inline and <code>div { background-color: blue; }</code> in CSS. Inline will win.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <!-- Add inline style and external style here -->\n  <div>Which style wins?</div>\n</body>\n</html>',
        '/style.css': '/* Add a background-color rule for div here */',
      },
      regex: 'style=.*background',
      output: 'Inline style takes precedence',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'css-syntax',
    exerciseName: 'CSS Syntax',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>CSS syntax follows a simple, consistent pattern. A CSS rule consists of a selector, properties, and values. Understanding this syntax is fundamental to writing CSS correctly.</p><p style='margin-bottom:8px;'>The basic structure is: <code>selector { property: value; }</code>. The selector identifies which HTML elements to style. The property specifies what aspect to change. The value specifies how to change it.</p><p style='margin-bottom:8px;'>Example: <code>h1 { color: red; }</code> selects all h1 elements and sets their text color to red. Multiple properties can be in one rule: <code>h1 { color: red; font-size: 24px; }</code>.</p><p style='margin-bottom:8px;'>Semicolons separate properties. Each property: value pair should end with a semicolon. Forgetting the last semicolon won't break your code, but it's bad practice. Always include them for consistency.</p><p style='margin-bottom:8px;'>Curly braces contain the declaration block. Everything between the opening brace and closing brace is part of the rule. Missing braces cause the entire rule to fail.</p><p style='margin-bottom:8px;'>Comments in CSS use /* */ syntax. Comments are ignored by browsers and help you document your code: <code>/* This makes all paragraphs blue */</code>. Comments can span multiple lines.</p><p style='margin-bottom:8px;'>CSS is case-sensitive for some parts and case-insensitive for others. Element selectors are case-insensitive (h1 and H1 are the same), but property values might be case-sensitive depending on context.</p><p style='margin-bottom:8px;'>Whitespace (spaces, tabs, line breaks) is mostly ignored in CSS. You can write rules on one line or spread them across multiple lines for readability. Consistent formatting makes code easier to read.</p><p style='margin-bottom:8px;'>Property names must be exact. <code>font-size</code> works, but <code>fontsize</code> or <code>fontSize</code> won't. CSS uses hyphens in property names, not camelCase.</p><p style='margin-bottom:8px;'>Values must match the property type. Color values use names, hex codes, or rgb values. Size values use numbers with units like px, em, or %. Invalid values are ignored.</p><p style='margin-bottom:8px;'>Mastering CSS syntax is prerequisite to writing effective styles. Correct syntax ensures your styles apply as intended.</p><p style='margin-bottom:8px;'>Practice writing correct CSS syntax and you'll avoid many common errors.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write a CSS rule for <code>&lt;span&gt;</code> elements that sets the text color to <strong>purple</strong>, font size to <strong>16px</strong>, and adds a yellow <strong>background-color</strong>. Use correct CSS syntax with all semicolons.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write: <code>span { color: purple; font-size: 16px; background-color: yellow; }</code>. Make sure each property ends with a semicolon.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Write your CSS rule here */\n  </style>\n</head>\n<body>\n  <span>Styled span element</span>\n</body>\n</html>',
        '/style.css': '',
      },
      regex: 'span\\s*{',
      output:
        'span { color: purple; font-size: 16px; background-color: yellow; }',
      hintXp: 15,
    },
  },
  {
    courseId: 3,
    exerciseId: 'your-first-style',
    exerciseName: 'Your First Style',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Your first CSS rule is a milestone. It's the moment CSS transforms from abstract concept to concrete visual reality. You'll select an element and apply styles that immediately change how it appears.</p><p style='margin-bottom:8px;'>Let's start simple: styling text color. The color property controls text color. You can use color names (red, blue, green), hex codes (#FF0000), or RGB values (rgb(255, 0, 0)).</p><p style='margin-bottom:8px;'>Color names are easiest for beginners. CSS supports about 140 named colors. Common ones include red, blue, green, yellow, black, white, purple, orange, and many more.</p><p style='margin-bottom:8px;'>Font size controls text size. Values typically use pixels (px) for fixed sizing. For example, <code>font-size: 20px;</code> makes text 20 pixels tall. Larger values make text bigger, smaller values make text smaller.</p><p style='margin-bottom:8px;'>Text styling is fundamental. Nearly every website changes colors and sizes to create visual hierarchy and guide user attention. Mastering these basics prepares you for advanced styling.</p><p style='margin-bottom:8px;'>When you write your first CSS rule and see it work, the connection between code and visual result becomes clear. This is the foundation for all future CSS learning.</p><p style='margin-bottom:8px;'>Browsers apply your styles immediately. Edit your CSS and refresh the page to see changes. This rapid feedback loop makes learning CSS enjoyable and intuitive.</p><p style='margin-bottom:8px;'>Seeing your styles work builds confidence. What seemed abstract (CSS) becomes concrete (visible changes). This confidence propels you forward in learning more advanced techniques.</p><p style='margin-bottom:8px;'>Your first style is simple but powerful. A few lines of CSS can completely transform how content appears. Imagine what you'll create with more advanced knowledge.</p><p style='margin-bottom:8px;'>This exercise teaches you the essential pattern: select an element, declare a property, set a value. You'll repeat this pattern thousands of times in your development career.</p><p style='margin-bottom:8px;'>Ready to apply your first style? Create a rule that changes text color and size. Watch the magic happen!</p><p style='margin-bottom:8px;'>This is the beginning of your journey from plain HTML to beautifully styled web pages.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write a CSS rule for <code>&lt;p&gt;</code> elements that sets text color to <strong>navy</strong> and font size to <strong>20px</strong>. Apply it to your HTML page and watch the transformation.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use: <code>p { color: navy; font-size: 20px; }</code>. Add this to your internal or external stylesheet.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Write your first CSS rule here */\n  </style>\n</head>\n<body>\n  <p>This paragraph will be styled navy and 20px.</p>\n</body>\n</html>',
        '/style.css': '',
      },
      regex: 'p\\s*{[^}]*color:\\s*navy',
      output: 'p { color: navy; font-size: 20px; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'style-detective',
    exerciseName: 'Style Detective',
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Debugging CSS is an important skill. When styles don't apply as expected, you need to think like a detective: identify the problem, trace the cause, and apply the fix. This exercise trains your debugging mindset.</p><p style='margin-bottom:8px;'>Common CSS problems include incorrect selectors (targeting the wrong element), misspelled properties or values, missing semicolons, and cascade conflicts (another rule overrides your rule).</p><p style='margin-bottom:8px;'>The browser's developer tools are your detective kit. Right-click an element and select \"Inspect\" to see what styles apply to it. You can see which CSS rules apply, which are overridden, and why.</p><p style='margin-bottom:8px;'>In this exercise, you'll receive HTML with incorrect CSS and determine what's wrong. Is the selector wrong? The property? The value? Your job is to fix it.</p><p style='margin-bottom:8px;'>Debugging teaches you CSS more thoroughly than writing from scratch. When you fix a problem, you understand CSS mechanics deeply. This knowledge helps you write correct CSS the first time later.</p><p style='margin-bottom:8px;'>Common selector mistakes: using a class selector for an element that has no class, using an ID selector for an element with different ID, or misspelling the element name.</p><p style='margin-bottom:8px;'>Common property mistakes: using a property that doesn't exist or using invalid values like <code>color: largered;</code> instead of <code>color: red; font-size: large;</code>.</p><p style='margin-bottom:8px;'>CSS is forgiving. Invalid rules are silently ignored. The page doesn't break; styles just don't apply. This requires you to carefully verify your code works as intended.</p><p style='margin-bottom:8px;'>Learning to debug CSS prepares you for real-world development where complex stylesheets contain hundreds of rules. Debugging skills are invaluable.</p><p style='margin-bottom:8px;'>This detective work is detective puzzle. Find what's wrong and fix it. Your detective skills will serve you well throughout your development career.</p><p style='margin-bottom:8px;'>Debug carefully and you'll become a CSS expert.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Find and fix the CSS error in the provided code. The <code>&lt;h2&gt;</code> element should be <strong>orange</strong> and <strong>24px</strong> large, but the CSS is incorrect. Identify the problem and provide the correct CSS rule.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Check if the selector matches the HTML element. Check if property names are spelled correctly. The correct rule is: <code>h2 { color: orange; font-size: 24px; }</code></p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    h2 { clor: orange; fontsize: 24px; }\n  </style>\n</head>\n<body>\n  <h2>This should be orange and 24px</h2>\n</body>\n</html>',
        '/style.css': '',
      },
      regex: 'color:\\s*orange',
      output: 'h2 { color: orange; font-size: 24px; }',
      hintXp: 25,
    },
  },
  // Chapter 2: CSS Selectors (6 exercises)
  {
    courseId: 3,
    exerciseId: 'element-selector',
    exerciseName: 'Element Selector',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>CSS selectors are the foundation of styling. An element selector targets all instances of a specific HTML tag, like <code>p</code>, <code>h1</code>, or <code>div</code>.</p><p style='margin-bottom:8px;'>When you write <code>p { color: blue; }</code>, every paragraph on the page turns blue. This applies the style to all matching elements at once.</p><p style='margin-bottom:8px;'>Element selectors are the simplest and most straightforward way to style elements. They work globally across the entire page.</p><p style='margin-bottom:8px;'>This approach is perfect for setting default styles for common elements before adding more specific rules.</p><p style='margin-bottom:8px;'>For example, styling all <code>h1</code> tags with a larger font size ensures consistency throughout your site.</p><p style='margin-bottom:8px;'>Element selectors have lower specificity than class or ID selectors, so they can be overridden by more specific rules.</p><p style='margin-bottom:8px;'>Understanding element selectors prepares you for more complex selector techniques like classes and IDs.</p><p style='margin-bottom:8px;'>In this exercise, you will use the element selector to style all paragraph tags with a specific color.</p><p style='margin-bottom:8px;'>The syntax is simple: write the tag name followed by curly braces containing your CSS properties.</p><p style='margin-bottom:8px;'>Master element selectors and you have the key to styling entire categories of content uniformly.</p><p style='margin-bottom:8px;'>This is the starting point for all CSS styling knowledge.</p><p style='margin-bottom:8px;'>Begin by styling the paragraphs and watch the magic of CSS unfold!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use an element selector to style all <code>&lt;p&gt;</code> tags with the color <code>#00ff00</code> (green).</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>p { color: #00ff00; }</code> in your CSS file. This targets all paragraph elements on the page.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Element Selector</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <p>This paragraph should be green.</p>\n  <p>This one too!</p>\n</body>\n</html>',
        '/style.css': '/* Write your element selector here */',
      },
      regex: 'p\\s*\\{[^}]*color\\s*:\\s*#00ff00',
      output: 'p { color: #00ff00; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'class-selector',
    exerciseName: 'Class Selector',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Class selectors target elements with a specific class attribute. They begin with a dot (.) followed by the class name.</p><p style='margin-bottom:8px;'>Classes allow you to style multiple different elements with the same rules, even if they are different tag types.</p><p style='margin-bottom:8px;'>You can apply a class to any element by adding the <code>class</code> attribute to the HTML tag.</p><p style='margin-bottom:8px;'>A single element can have multiple classes, giving you flexibility in your styling strategy.</p><p style='margin-bottom:8px;'>Classes have higher specificity than element selectors, meaning they override global element styles when both apply.</p><p style='margin-bottom:8px;'>The class name should be descriptive, like <code>highlight</code>, <code>button-primary</code>, or <code>text-center</code>.</p><p style='margin-bottom:8px;'>Using classes is the recommended way to style components and sections of your site.</p><p style='margin-bottom:8px;'>In this exercise, you will target elements with a specific class and apply styling to them.</p><p style='margin-bottom:8px;'>The syntax is: <code>.classname { property: value; }</code> where the dot indicates a class selector.</p><p style='margin-bottom:8px;'>Class selectors are reusable and maintainable, making them ideal for building scalable stylesheets.</p><p style='margin-bottom:8px;'>Learn to use classes and your CSS will become more organized and efficient.</p><p style='margin-bottom:8px;'>Target the class and apply your first custom styling rule!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a class selector called <code>highlight</code> that sets the background color to <code>#ffff00</code> (yellow).</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.highlight { background-color: #ffff00; }</code> in your CSS. The dot prefix indicates a class selector.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Class Selector</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <p class="highlight">This text should have a yellow background.</p>\n  <span class="highlight">This too!</span>\n</body>\n</html>',
        '/style.css': '/* Create a class selector for .highlight */',
      },
      regex: '\\.highlight\\s*\\{[^}]*background-color\\s*:\\s*#ffff00',
      output: '.highlight { background-color: #ffff00; }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'id-selector',
    exerciseName: 'ID Selector',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>ID selectors target a unique element with a specific ID attribute. They begin with a hash (#) symbol.</p><p style='margin-bottom:8px;'>IDs should be unique on a page — each ID value should be used only once in your HTML.</p><p style='margin-bottom:8px;'>ID selectors have the highest specificity among basic selectors, making them very powerful for overriding other styles.</p><p style='margin-bottom:8px;'>The syntax is: <code>#idname { property: value; }</code> where the hash indicates an ID selector.</p><p style='margin-bottom:8px;'>Use IDs for styling major page sections like headers, footers, or the main content area.</p><p style='margin-bottom:8px;'>While powerful, overusing IDs can make your CSS harder to maintain, so use them sparingly.</p><p style='margin-bottom:8px;'>IDs are often used for JavaScript targeting as well, not just styling.</p><p style='margin-bottom:8px;'>In this exercise, you will target a single element by its ID and apply specific styling.</p><p style='margin-bottom:8px;'>Remember that the ID attribute in HTML and the selector in CSS must match exactly.</p><p style='margin-bottom:8px;'>ID selectors are useful for styling individual, prominent elements that appear only once on the page.</p><p style='margin-bottom:8px;'>Learn when to use IDs versus classes to keep your CSS organized and efficient.</p><p style='margin-bottom:8px;'>Apply your ID selector and see the unique styling take effect!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an ID selector called <code>header</code> that sets the font size to <code>32px</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>#header { font-size: 32px; }</code> in your CSS. The hash prefix indicates an ID selector.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>ID Selector</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div id="header">This should be large text!</div>\n</body>\n</html>',
        '/style.css': '/* Create an ID selector for #header */',
      },
      regex: '#header\\s*\\{[^}]*font-size\\s*:\\s*32px',
      output: '#header { font-size: 32px; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'descendant-selector',
    exerciseName: 'Descendant Selector',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Descendant selectors target elements that are nested inside other elements. They use a space between selectors.</p><p style='margin-bottom:8px;'>For example, <code>div p</code> targets all paragraphs that are inside any div, regardless of depth.</p><p style='margin-bottom:8px;'>This selector is powerful for styling elements based on their context or parent container.</p><p style='margin-bottom:8px;'>Descendant selectors work with any combination of selectors: elements, classes, and IDs.</p><p style='margin-bottom:8px;'>The syntax is: <code>parent child { property: value; }</code> with a space separating parent and child.</p><p style='margin-bottom:8px;'>This approach allows you to style the same element differently depending on where it appears on the page.</p><p style='margin-bottom:8px;'>For instance, <code>.container p</code> styles paragraphs only within elements with the container class.</p><p style='margin-bottom:8px;'>In this exercise, you will target elements nested inside a specific parent and apply styling.</p><p style='margin-bottom:8px;'>Understanding descendant selectors helps you write CSS that adapts to your page structure.</p><p style='margin-bottom:8px;'>This is essential for creating component-based stylesheets that are maintainable and scalable.</p><p style='margin-bottom:8px;'>Master descendant selectors and you gain control over context-aware styling.</p><p style='margin-bottom:8px;'>Target the nested elements and watch your CSS adapt to the HTML structure!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a descendant selector that targets all <code>&lt;p&gt;</code> tags inside a <code>&lt;div&gt;</code> with class <code>content</code> and set their color to <code>#0099ff</code> (blue).</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.content p { color: #0099ff; }</code> in your CSS. This targets paragraphs nested inside elements with the content class.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Descendant Selector</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="content">\n    <p>This paragraph is inside the content div.</p>\n    <p>This one too!</p>\n  </div>\n  <p>This paragraph is outside, so it should not be blue.</p>\n</body>\n</html>',
        '/style.css': '/* Create a descendant selector */',
      },
      regex: '\\.content\\s+p\\s*\\{[^}]*color\\s*:\\s*#0099ff',
      output: '.content p { color: #0099ff; }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'attribute-selector',
    exerciseName: 'Attribute Selector',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Attribute selectors target elements based on their attributes and values. They use square brackets in the syntax.</p><p style='margin-bottom:8px;'>For example, <code>input[type=\"text\"]</code> targets only text input fields, not checkboxes or radio buttons.</p><p style='margin-bottom:8px;'>Attribute selectors can match exact values, partial values, or the presence of an attribute alone.</p><p style='margin-bottom:8px;'>This is incredibly useful for styling forms, links with specific properties, or any element with particular attributes.</p><p style='margin-bottom:8px;'>Common attribute selectors include <code>[attr]</code>, <code>[attr=\"value\"]</code>, and <code>[attr*=\"value\"]</code>.</p><p style='margin-bottom:8px;'>The syntax <code>[attr=\"exact\"]</code> matches elements where the attribute equals the exact value.</p><p style='margin-bottom:8px;'>Using <code>[attr*=\"partial\"]</code> matches attributes containing that partial string.</p><p style='margin-bottom:8px;'>In this exercise, you will target elements based on their HTML attributes and apply CSS styling.</p><p style='margin-bottom:8px;'>Attribute selectors give you fine-grained control without adding extra classes to your HTML.</p><p style='margin-bottom:8px;'>This technique is especially powerful for styling links with specific targets or form inputs with particular types.</p><p style='margin-bottom:8px;'>Learn attribute selectors and your CSS becomes more semantic and cleaner.</p><p style='margin-bottom:8px;'>Select elements by their attributes and unlock advanced styling capabilities!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an attribute selector that targets all <code>&lt;a&gt;</code> tags with <code>href</code> starting with <code>https</code> and set their color to <code>#00cc00</code> (green).</p></body>",
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Write <code>a[href^="https"]</code> to match links starting with https. Use the syntax <code>a[href^="https"] { color: #00cc00; }</code>.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Attribute Selector</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <a href="https://example.com">Secure link</a>\n  <a href="http://example.com">Insecure link</a>\n</body>\n</html>',
        '/style.css': '/* Create an attribute selector for https links */',
      },
      regex: 'a\\[href\\^="https"\\]\\s*\\{[^}]*color\\s*:\\s*#00cc00',
      output: 'a[href^="https"] { color: #00cc00; }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'selector-challenge',
    exerciseName: 'Selector Challenge',
    chapterId: 2,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Now it is time to combine your selector knowledge in a practical challenge. You have learned element, class, ID, descendant, and attribute selectors.</p><p style='margin-bottom:8px;'>In real-world CSS, you often need to use multiple selectors together to achieve the exact styling you want.</p><p style='margin-bottom:8px;'>This challenge asks you to apply multiple selector types to style different parts of a page correctly.</p><p style='margin-bottom:8px;'>Think about specificity: IDs override classes, which override elements. Use the right selector for the right job.</p><p style='margin-bottom:8px;'>You might need to style a heading differently than other headings, or highlight certain links while leaving others plain.</p><p style='margin-bottom:8px;'>Combining selectors shows that you understand CSS strategy and can write maintainable stylesheets.</p><p style='margin-bottom:8px;'>This exercise tests your ability to choose appropriate selectors and apply them correctly.</p><p style='margin-bottom:8px;'>Pay attention to the HTML structure and the desired visual outcome when planning your CSS.</p><p style='margin-bottom:8px;'>A well-written stylesheet uses the minimum specificity needed — avoid unnecessary IDs when classes will do.</p><p style='margin-bottom:8px;'>This challenge brings together all the selector concepts from this chapter.</p><p style='margin-bottom:8px;'>Complete this and you will have mastered the fundamentals of CSS selectors.</p><p style='margin-bottom:8px;'>Rise to the challenge and prove your CSS selector expertise!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Style the page using the following rules: 1) All <code>&lt;p&gt;</code> tags should have color <code>#ffffff</code> (white). 2) Elements with class <code>featured</code> should have background-color <code>#ff6600</code> (orange). 3) The element with id <code>special</code> should have font-size <code>24px</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use three rules: <code>p { color: #ffffff; }</code>, <code>.featured { background-color: #ff6600; }</code>, and <code>#special { font-size: 24px; }</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Selector Challenge</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <p>Regular paragraph.</p>\n  <p class="featured">Featured paragraph.</p>\n  <p id="special">Special paragraph.</p>\n</body>\n</html>',
        '/style.css': '/* Apply all three selector rules */',
      },
      regex: 'p\\s*\\{[^}]*color\\s*:\\s*#ffffff|#ffffff|255,255,255',
      output:
        'p { color: #ffffff; } .featured { background-color: #ff6600; } #special { font-size: 24px; }',
      hintXp: 35,
    },
  },
  // Chapter 3: Colors & Backgrounds (6 exercises)
  {
    courseId: 3,
    exerciseId: 'text-colors',
    exerciseName: 'Text Colors',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Color is one of the most powerful tools in web design. The <code>color</code> property changes the text color of an element.</p><p style='margin-bottom:8px;'>You can specify colors using named colors like <code>red</code>, <code>blue</code>, or <code>green</code>, but this limits your palette.</p><p style='margin-bottom:8px;'>Hex color codes like <code>#FF0000</code> give you access to millions of colors. They consist of # followed by six hexadecimal digits.</p><p style='margin-bottom:8px;'>Each pair of digits represents red, green, and blue intensity: <code>#RRGGBB</code>.</p><p style='margin-bottom:8px;'>RGB notation like <code>rgb(255, 0, 0)</code> also works, using decimal values from 0 to 255 for each color channel.</p><p style='margin-bottom:8px;'>Choosing the right text colors is crucial for readability and accessibility. High contrast between text and background is essential.</p><p style='margin-bottom:8px;'>Dark text on light backgrounds and light text on dark backgrounds work best for most readers.</p><p style='margin-bottom:8px;'>In this exercise, you will apply text colors to various elements using hex color codes.</p><p style='margin-bottom:8px;'>Understanding color values and their representations is fundamental to all CSS work.</p><p style='margin-bottom:8px;'>Color psychology also matters: blues feel calming, reds energetic, greens natural and restful.</p><p style='margin-bottom:8px;'>Master text colors and your designs will immediately feel more polished and intentional.</p><p style='margin-bottom:8px;'>Apply vibrant colors and watch your text come alive on the page!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set the text color of all <code>&lt;h1&gt;</code> tags to <code>#FF0000</code> (red) and all paragraphs to <code>#00FF00</code> (green).</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>h1 { color: #FF0000; }</code> and <code>p { color: #00FF00; }</code> in your CSS file.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Text Colors</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Red Heading</h1>\n  <p>Green paragraph text.</p>\n</body>\n</html>',
        '/style.css': '/* Set text colors for h1 and p */',
      },
      regex: 'h1\\s*\\{[^}]*color\\s*:\\s*#FF0000',
      output: 'h1 { color: #FF0000; } p { color: #00FF00; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'background-colors',
    exerciseName: 'Background Colors',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The <code>background-color</code> property fills the background of an element with color. It works on any element, not just the page background.</p><p style='margin-bottom:8px;'>Background colors can highlight important content, create visual sections, or make buttons and cards stand out.</p><p style='margin-bottom:8px;'>You can apply background colors to divs, paragraphs, buttons, or any other HTML element.</p><p style='margin-bottom:8px;'>The syntax is the same as text color: use named colors, hex codes, or RGB values.</p><p style='margin-bottom:8px;'>Creating contrast between foreground and background is essential for readability and visual hierarchy.</p><p style='margin-bottom:8px;'>A common pattern is to use a background color with complementary text color for emphasis.</p><p style='margin-bottom:8px;'>You can also use transparent or semi-transparent backgrounds with <code>rgba()</code> for overlay effects.</p><p style='margin-bottom:8px;'>In this exercise, you will apply background colors to create visual separation and emphasis.</p><p style='margin-bottom:8px;'>Background colors are often combined with padding to create nice spacing around content.</p><p style='margin-bottom:8px;'>Thoughtful use of background colors improves user experience and visual appeal.</p><p style='margin-bottom:8px;'>Learn to balance background colors with other design elements for a cohesive look.</p><p style='margin-bottom:8px;'>Fill your page with color and create visual interest!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set the background color of the <code>&lt;body&gt;</code> to <code>#333333</code> and create a class <code>highlight-box</code> with background color <code>#FFFF00</code> (yellow).</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>body { background-color: #333333; }</code> and <code>.highlight-box { background-color: #FFFF00; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Background Colors</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="highlight-box">This box has a yellow background.</div>\n</body>\n</html>',
        '/style.css': '/* Set background colors for body and .highlight-box */',
      },
      regex: 'body\\s*\\{[^}]*background-color\\s*:\\s*#333333',
      output:
        'body { background-color: #333333; } .highlight-box { background-color: #FFFF00; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'rgb-and-hex',
    exerciseName: 'RGB & Hex',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Hex and RGB are two ways to specify colors in CSS. Both give you access to the same millions of possible colors.</p><p style='margin-bottom:8px;'>Hex format uses six hexadecimal digits: <code>#RRGGBB</code> where each pair ranges from 00 to FF.</p><p style='margin-bottom:8px;'>Hex <code>#FF0000</code> is pure red, <code>#00FF00</code> is pure green, and <code>#0000FF</code> is pure blue.</p><p style='margin-bottom:8px;'>RGB format uses three decimal numbers: <code>rgb(red, green, blue)</code> where each ranges from 0 to 255.</p><p style='margin-bottom:8px;'>The conversion is simple: FF in hex equals 255 in decimal, 00 equals 0, and 80 equals 128.</p><p style='margin-bottom:8px;'>Modern CSS also supports RGBA, which adds an alpha channel for transparency: <code>rgba(red, green, blue, alpha)</code>.</p><p style='margin-bottom:8px;'>The alpha value ranges from 0 (completely transparent) to 1 (completely opaque).</p><p style='margin-bottom:8px;'>In this exercise, you will practice using both hex and RGB color formats.</p><p style='margin-bottom:8px;'>Choosing between them is mostly a matter of preference; both are equally valid and widely supported.</p><p style='margin-bottom:8px;'>Understanding both formats makes you adaptable to any codebase or designer preference.</p><p style='margin-bottom:8px;'>Learn to convert between formats and you will have complete color control.</p><p style='margin-bottom:8px;'>Explore both color systems and become a color master!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a style rule where an element with class <code>hex-color</code> uses hex color <code>#FF6600</code> and a class <code>rgb-color</code> uses RGB equivalent <code>rgb(255, 102, 0)</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.hex-color { color: #FF6600; }</code> and <code>.rgb-color { color: rgb(255, 102, 0); }</code>. Both are the same orange color.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>RGB & Hex</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <p class="hex-color">Hex color text</p>\n  <p class="rgb-color">RGB color text</p>\n</body>\n</html>',
        '/style.css': '/* Define hex-color and rgb-color classes */',
      },
      regex: '\\.hex-color\\s*\\{[^}]*color\\s*:\\s*#FF6600',
      output:
        '.hex-color { color: #FF6600; } .rgb-color { color: rgb(255, 102, 0); }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'background-images',
    exerciseName: 'Background Images',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Beyond solid colors, CSS allows you to use images as backgrounds. The <code>background-image</code> property takes a URL to an image file.</p><p style='margin-bottom:8px;'>Background images can be photos, patterns, textures, or illustrations that enhance your design.</p><p style='margin-bottom:8px;'>The syntax is <code>background-image: url('path/to/image.jpg')</code> with the URL in quotes.</p><p style='margin-bottom:8px;'>By default, background images repeat (tile) across the element. You can control this with <code>background-repeat</code>.</p><p style='margin-bottom:8px;'>Setting <code>background-repeat: no-repeat</code> displays the image once. <code>background-repeat: repeat-x</code> tiles horizontally only.</p><p style='margin-bottom:8px;'>You can also control image positioning with <code>background-position</code> and size with <code>background-size</code>.</p><p style='margin-bottom:8px;'>The shorthand <code>background</code> property lets you set color, image, position, and repeat all at once.</p><p style='margin-bottom:8px;'>In this exercise, you will apply background images to create visual interest and depth.</p><p style='margin-bottom:8px;'>Background images work on any element, not just the body, allowing creative layering.</p><p style='margin-bottom:8px;'>Combining background images with text requires careful contrast and possibly semi-transparent overlays.</p><p style='margin-bottom:8px;'>Master background images and your designs will take on professional depth.</p><p style='margin-bottom:8px;'>Set images as backgrounds and transform your page into a visual masterpiece!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set a background image on the <code>&lt;body&gt;</code> using the URL <code>'background.jpg'</code>. Make it not repeat with <code>background-repeat: no-repeat</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>body { background-image: url('background.jpg'); background-repeat: no-repeat; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Background Images</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Page with Background Image</h1>\n</body>\n</html>',
        '/style.css': '/* Apply a background image to body */',
      },
      regex: 'background-image\\s*:\\s*url\\([\'"]?background\\.jpg[\'"]?\\)',
      output:
        "body { background-image: url('background.jpg'); background-repeat: no-repeat; }",
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'gradients',
    exerciseName: 'Gradients',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Gradients are smooth transitions between two or more colors. CSS supports linear and radial gradients, creating beautiful visual effects.</p><p style='margin-bottom:8px;'>A linear gradient flows in a direction like top-to-bottom or left-to-right. The syntax is <code>linear-gradient(direction, color1, color2)</code>.</p><p style='margin-bottom:8px;'>For example, <code>linear-gradient(to right, red, blue)</code> creates a smooth transition from red on the left to blue on the right.</p><p style='margin-bottom:8px;'>You can specify more than two colors and control where color transitions occur using percentages.</p><p style='margin-bottom:8px;'>Radial gradients emanate from a center point, useful for spotlight effects or circular designs.</p><p style='margin-bottom:8px;'>The syntax for radial is <code>radial-gradient(shape size at position, color-stop1, color-stop2)</code>.</p><p style='margin-bottom:8px;'>Gradients can be used on any element with a background property, creating depth and visual interest.</p><p style='margin-bottom:8px;'>In this exercise, you will create linear and radial gradients to enhance your designs.</p><p style='margin-bottom:8px;'>Gradients are resolution-independent and scale beautifully on any device.</p><p style='margin-bottom:8px;'>Using gradients instead of image files can reduce file size and improve performance.</p><p style='margin-bottom:8px;'>Master gradients and you will unlock professional design capabilities with minimal code.</p><p style='margin-bottom:8px;'>Blend colors smoothly and create stunning visual transitions!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a linear gradient background on an element with class <code>gradient-box</code> that transitions from <code>#FF0000</code> (red) to <code>#0000FF</code> (blue) from left to right.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.gradient-box { background: linear-gradient(to right, #FF0000, #0000FF); }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Gradients</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="gradient-box" style="width: 200px; height: 100px;"></div>\n</body>\n</html>',
        '/style.css': '/* Create a gradient background */',
      },
      regex:
        'linear-gradient\\s*\\(\\s*to\\s+right\\s*,\\s*#FF0000\\s*,\\s*#0000FF',
      output:
        '.gradient-box { background: linear-gradient(to right, #FF0000, #0000FF); }',
      hintXp: 35,
    },
  },
  {
    courseId: 3,
    exerciseId: 'create-a-hero-section',
    exerciseName: 'Create a Hero Section',
    chapterId: 3,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>A hero section is the prominent area at the top of a webpage, typically featuring a large image or gradient, bold headline, and call-to-action.</p><p style='margin-bottom:8px;'>Hero sections grab attention and set the tone for the entire page. They are crucial for first impressions.</p><p style='margin-bottom:8px;'>You can create a hero section using colors, gradients, images, or combinations of these techniques.</p><p style='margin-bottom:8px;'>The hero section usually spans the full width and height of the viewport, making it the dominant visual element.</p><p style='margin-bottom:8px;'>Layering text over background images or gradients creates visual hierarchy and improves readability.</p><p style='margin-bottom:8px;'>In this exercise, you will combine your knowledge of colors, backgrounds, and gradients to create a professional hero section.</p><p style='margin-bottom:8px;'>A well-designed hero section establishes brand identity and encourages user engagement.</p><p style='margin-bottom:8px;'>You will need to use padding, text colors, and background styling to create a polished appearance.</p><p style='margin-bottom:8px;'>Consider the contrast between text and background when designing your hero section.</p><p style='margin-bottom:8px;'>Modern hero sections often use overlays (semi-transparent colors) over images for better text readability.</p><p style='margin-bottom:8px;'>This project brings together all concepts from Chapter 3 into a real-world application.</p><p style='margin-bottom:8px;'>Build a stunning hero section and impress your users with professional design!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a hero section with class <code>hero</code> that has: 1) A linear gradient background from <code>#667eea</code> (purple) to <code>#764ba2</code> (darker purple), 2) Text color <code>#FFFFFF</code> (white), 3) Padding of <code>100px 20px</code>, 4) Text alignment center.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write the CSS rule with <code>background: linear-gradient(to right, #667eea, #764ba2)</code>, <code>color: #FFFFFF</code>, <code>padding: 100px 20px</code>, and <code>text-align: center</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Hero Section</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <section class="hero">\n    <h1>Welcome to My Website</h1>\n    <p>This is a professional hero section.</p>\n  </section>\n</body>\n</html>',
        '/style.css':
          '/* Style the hero section with gradient and text formatting */',
      },
      regex: '\\.hero\\s*\\{[^}]*linear-gradient.*#667eea.*#764ba2',
      output:
        '.hero { background: linear-gradient(to right, #667eea, #764ba2); color: #FFFFFF; padding: 100px 20px; text-align: center; }',
      hintXp: 40,
    },
  },
  // Chapter 4: Text Styling (6 exercises)
  {
    courseId: 3,
    exerciseId: 'font-family',
    exerciseName: 'Font Family',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Font choice dramatically affects how your content is perceived. The <code>font-family</code> property controls which typeface displays your text.</p><p style='margin-bottom:8px;'>Web-safe fonts like Arial, Georgia, and Times New Roman are available on most devices without requiring external files.</p><p style='margin-bottom:8px;'>You can specify multiple fonts as a fallback list: if the first is unavailable, the browser uses the next in line.</p><p style='margin-bottom:8px;'>Generic families like serif, sans-serif, monospace, and cursive provide a final fallback if none of your specified fonts load.</p><p style='margin-bottom:8px;'>Modern web design often uses custom fonts loaded from services like Google Fonts to match brand identity.</p><p style='margin-bottom:8px;'>Font selection affects readability, brand perception, and overall user experience.</p><p style='margin-bottom:8px;'>Serif fonts (with decorative lines) feel traditional and formal; sans-serif fonts feel modern and clean.</p><p style='margin-bottom:8px;'>In this exercise, you will apply different font families to create visual distinction and personality.</p><p style='margin-bottom:8px;'>Limiting your font choices to 2-3 typefaces creates a cohesive, professional appearance.</p><p style='margin-bottom:8px;'>Pairing complementary fonts (like a serif for headings and sans-serif for body text) is a classic design technique.</p><p style='margin-bottom:8px;'>Learn to choose fonts that match your content and audience to enhance communication.</p><p style='margin-bottom:8px;'>Master font selection and your designs will immediately feel more refined and intentional!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set the font family of all <code>&lt;h1&gt;</code> tags to <code>Georgia, serif</code> and all paragraphs to <code>Arial, sans-serif</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>h1 { font-family: Georgia, serif; }</code> and <code>p { font-family: Arial, sans-serif; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Font Family</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Elegant Heading</h1>\n  <p>Clean paragraph text with a different font.</p>\n</body>\n</html>',
        '/style.css': '/* Set font families for headings and paragraphs */',
      },
      regex: 'h1\\s*\\{[^}]*font-family\\s*:\\s*Georgia\\s*,\\s*serif',
      output:
        'h1 { font-family: Georgia, serif; } p { font-family: Arial, sans-serif; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'font-size-and-weight',
    exerciseName: 'Font Size & Weight',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Font size controls how large text appears; font weight controls how bold it is. Both are essential for creating visual hierarchy.</p><p style='margin-bottom:8px;'>Font size can be specified in pixels (px), ems (em), rems (rem), percentages (%), or other units.</p><p style='margin-bottom:8px;'>Pixels are fixed sizes, while ems scale relative to parent elements and rems scale relative to the root element.</p><p style='margin-bottom:8px;'>Font weight values range from 100 (thin) to 900 (extra bold), with 400 being normal and 700 being bold.</p><p style='margin-bottom:8px;'>You can also use keywords like <code>normal</code>, <code>bold</code>, <code>lighter</code>, and <code>bolder</code> for font weight.</p><p style='margin-bottom:8px;'>Proper size and weight create readability and guide the user's attention through your content.</p><p style='margin-bottom:8px;'>Headings are typically larger and bolder than body text, establishing a clear visual hierarchy.</p><p style='margin-bottom:8px;'>In this exercise, you will create size and weight contrasts to organize content effectively.</p><p style='margin-bottom:8px;'>Responsive design often uses relative units (em, rem, %) rather than fixed pixels for better scalability.</p><p style='margin-bottom:8px;'>Bold text draws attention but overuse can make pages feel overwhelming and hard to read.</p><p style='margin-bottom:8px;'>Finding the right balance between size and weight creates professional, readable designs.</p><p style='margin-bottom:8px;'>Master size and weight and your typography will instantly improve!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set <code>&lt;h1&gt;</code> font-size to <code>48px</code> and font-weight to <code>bold</code>. Set <code>&lt;p&gt;</code> font-size to <code>16px</code> and font-weight to <code>normal</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>h1 { font-size: 48px; font-weight: bold; }</code> and <code>p { font-size: 16px; font-weight: normal; }</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Font Size & Weight</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Large Bold Heading</h1>\n  <p>Normal weight paragraph text.</p>\n</body>\n</html>',
        '/style.css': '/* Set font size and weight */',
      },
      regex:
        'h1\\s*\\{[^}]*font-size\\s*:\\s*48px[^}]*font-weight\\s*:\\s*bold',
      output:
        'h1 { font-size: 48px; font-weight: bold; } p { font-size: 16px; font-weight: normal; }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'text-alignment',
    exerciseName: 'Text Alignment',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Text alignment controls how text is positioned within its container: left, center, right, or justified.</p><p style='margin-bottom:8px;'>The <code>text-align</code> property takes values of <code>left</code>, <code>center</code>, <code>right</code>, or <code>justify</code>.</p><p style='margin-bottom:8px;'>Left alignment is the default and most readable for body text in left-to-right languages.</p><p style='margin-bottom:8px;'>Center alignment is useful for headings, calls-to-action, and special content to draw attention.</p><p style='margin-bottom:8px;'>Right alignment is rarely used except in right-to-left languages or specific design contexts.</p><p style='margin-bottom:8px;'>Justified alignment stretches text to both left and right edges, creating a formal appearance but sometimes affecting readability.</p><p style='margin-bottom:8px;'>Text alignment affects not just positioning but also visual flow and how users scan your content.</p><p style='margin-bottom:8px;'>In this exercise, you will use different alignments for different elements to create visual structure.</p><p style='margin-bottom:8px;'>Consistent alignment choices contribute to a polished, professional appearance.</p><p style='margin-bottom:8px;'>Different sections may use different alignments; for example, centered headings with left-aligned body text.</p><p style='margin-bottom:8px;'>Proper alignment improves scannability and helps users navigate your content more easily.</p><p style='margin-bottom:8px;'>Master text alignment and create well-organized, readable pages!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set all <code>&lt;h1&gt;</code> tags to <code>text-align: center</code> and paragraphs to <code>text-align: left</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>h1 { text-align: center; }</code> and <code>p { text-align: left; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Text Alignment</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Centered Heading</h1>\n  <p>Left-aligned paragraph text.</p>\n</body>\n</html>',
        '/style.css': '/* Set text alignment for headings and paragraphs */',
      },
      regex: 'h1\\s*\\{[^}]*text-align\\s*:\\s*center',
      output: 'h1 { text-align: center; } p { text-align: left; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'line-height-and-spacing',
    exerciseName: 'Line Height & Spacing',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Line height is the vertical space between lines of text. Proper line height dramatically improves readability.</p><p style='margin-bottom:8px;'>The <code>line-height</code> property can be a unitless number (multiplier), a length (px, em), or a percentage.</p><p style='margin-bottom:8px;'>A line height of 1.6 means 1.6 times the font size, providing comfortable breathing room between lines.</p><p style='margin-bottom:8px;'>Body text typically uses line heights between 1.4 and 1.8 for optimal readability on screens.</p><p style='margin-bottom:8px;'>Letter spacing controls horizontal space between characters. The <code>letter-spacing</code> property uses length units like px or em.</p><p style='margin-bottom:8px;'>Word spacing controls horizontal space between words. The <code>word-spacing</code> property uses similar length units.</p><p style='margin-bottom:8px;'>Proper spacing improves scannability and reduces eye strain, especially for long passages of text.</p><p style='margin-bottom:8px;'>In this exercise, you will adjust line and letter spacing to create comfortable reading experiences.</p><p style='margin-bottom:8px;'>Too-tight spacing makes text feel claustrophobic; too-loose spacing makes it hard to follow.</p><p style='margin-bottom:8px;'>Professional typography balances white space with text density for optimal reading comfort.</p><p style='margin-bottom:8px;'>Heading text often uses tighter line heights than body text since lines are typically shorter.</p><p style='margin-bottom:8px;'>Master spacing and create text that is not just readable but genuinely enjoyable to read!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set paragraphs to have <code>line-height: 1.8</code> and <code>letter-spacing: 0.5px</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>p { line-height: 1.8; letter-spacing: 0.5px; }</code> in your CSS file.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Line Height & Spacing</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <p>This paragraph should have comfortable line height and letter spacing for easy reading.</p>\n</body>\n</html>',
        '/style.css': '/* Set line height and letter spacing */',
      },
      regex:
        'p\\s*\\{[^}]*line-height\\s*:\\s*1\\.8[^}]*letter-spacing\\s*:\\s*0\\.5px',
      output: 'p { line-height: 1.8; letter-spacing: 0.5px; }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'text-decoration',
    exerciseName: 'Text Decoration',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Text decoration includes underlines, overlines, and strikethrough effects. The <code>text-decoration</code> property controls these effects.</p><p style='margin-bottom:8px;'>Values include <code>none</code> (no decoration), <code>underline</code>, <code>overline</code>, and <code>line-through</code>.</p><p style='margin-bottom:8px;'>By default, links appear underlined to indicate they are clickable. You can remove this with <code>text-decoration: none</code>.</p><p style='margin-bottom:8px;'>Strikethrough text indicates deleted or outdated content. Overline is rarely used but available for special effects.</p><p style='margin-bottom:8px;'>You can also control the style and color of text decoration with <code>text-decoration-style</code> and <code>text-decoration-color</code>.</p><p style='margin-bottom:8px;'>Decoration styles include solid, double, dotted, dashed, and wavy for creative emphasis.</p><p style='margin-bottom:8px;'>Text decoration can be combined with other text effects for sophisticated typography.</p><p style='margin-bottom:8px;'>In this exercise, you will apply and customize text decorations for various elements.</p><p style='margin-bottom:8px;'>Be cautious with overusing decorations; they should enhance readability, not distract from it.</p><p style='margin-bottom:8px;'>Removing underlines from links requires careful design to maintain clear clickability indicators.</p><p style='margin-bottom:8px;'>Modern web design often uses underlines sparingly, preferring color and other cues for emphasis.</p><p style='margin-bottom:8px;'>Master text decoration and add subtle polish to your typography!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Remove the default underline from links (set <code>text-decoration: none</code>) and add underline to text with class <code>emphasized</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>a { text-decoration: none; }</code> and <code>.emphasized { text-decoration: underline; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Text Decoration</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <a href="#">Link without underline</a>\n  <p class="emphasized">Emphasized text with underline</p>\n</body>\n</html>',
        '/style.css':
          '/* Remove link underlines and add emphasis decoration */',
      },
      regex: 'a\\s*\\{[^}]*text-decoration\\s*:\\s*none',
      output:
        'a { text-decoration: none; } .emphasized { text-decoration: underline; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'typography-challenge',
    exerciseName: 'Typography Challenge',
    chapterId: 4,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>This challenge combines all typography concepts: font family, size, weight, alignment, spacing, and decoration.</p><p style='margin-bottom:8px;'>Professional typography is about harmony — multiple design decisions that work together cohesively.</p><p style='margin-bottom:8px;'>You will create a page with varied typography that guides readers through the content effectively.</p><p style='margin-bottom:8px;'>Different text elements serve different purposes: headlines grab attention, body text informs, accents emphasize.</p><p style='margin-bottom:8px;'>Typography hierarchy helps users quickly understand content structure without reading every word.</p><p style='margin-bottom:8px;'>This challenge tests your ability to make strategic typography choices that balance aesthetics and functionality.</p><p style='margin-bottom:8px;'>You will need to choose complementary fonts, sizes, weights, and spacing that work together.</p><p style='margin-bottom:8px;'>Consistency in typography choices creates a polished, professional appearance.</p><p style='margin-bottom:8px;'>Think about your audience and content when making typography decisions.</p><p style='margin-bottom:8px;'>A successful typography system makes content easy to scan, read, and understand.</p><p style='margin-bottom:8px;'>This exercise brings together all Chapter 4 concepts into a cohesive design.</p><p style='margin-bottom:8px;'>Create sophisticated typography and establish yourself as a design-conscious developer!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a complete typography system: 1) <code>h1</code> with Arial, 48px, bold, centered. 2) <code>p</code> with Georgia, 16px, normal, left-aligned, 1.6 line-height. 3) <code>.highlight</code> with yellow background-color and text-decoration underline.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write separate rules for h1, p, and .highlight with all specified properties. Use the syntax from previous exercises.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Typography Challenge</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Typography Challenge</h1>\n  <p>This page demonstrates a complete <span class="highlight">typography system</span> with multiple elements.</p>\n</body>\n</html>',
        '/style.css': '/* Create a complete typography system */',
      },
      regex: 'h1\\s*\\{[^}]*Arial[^}]*48px[^}]*bold[^}]*center',
      output:
        'h1 { font-family: Arial; font-size: 48px; font-weight: bold; text-align: center; } p { font-family: Georgia; font-size: 16px; font-weight: normal; text-align: left; line-height: 1.6; } .highlight { background-color: #FFFF00; text-decoration: underline; }',
      hintXp: 35,
    },
  },
  // Chapter 5: Box Model (6 exercises)
  {
    courseId: 3,
    exerciseId: 'understanding-the-box',
    exerciseName: 'Understanding the Box',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The CSS box model is fundamental to understanding how HTML elements are sized and spaced. Every element is a rectangular box.</p><p style='margin-bottom:8px;'>The box model consists of four layers: content, padding, border, and margin, from inner to outer.</p><p style='margin-bottom:8px;'>The content area contains the actual text, images, or other element content. Its size is set by width and height properties.</p><p style='margin-bottom:8px;'>Padding is the space inside the element, between the content and the border. It uses the same background color as content.</p><p style='margin-bottom:8px;'>The border is a line around the padding. It can be solid, dashed, dotted, or have various styles.</p><p style='margin-bottom:8px;'>Margin is the space outside the element, between the border and adjacent elements. It does not have a background color.</p><p style='margin-bottom:8px;'>Understanding these layers is essential for creating proper spacing and layouts in CSS.</p><p style='margin-bottom:8px;'>In this exercise, you will explore how each box model layer affects element appearance and spacing.</p><p style='margin-bottom:8px;'>The box-sizing property controls whether padding and border are included in the width and height calculations.</p><p style='margin-bottom:8px;'>Using <code>box-sizing: border-box</code> makes sizing more predictable and is often applied globally.</p><p style='margin-bottom:8px;'>Mastering the box model is crucial for creating layouts that look good and behave consistently.</p><p style='margin-bottom:8px;'>Learn the layers and you have the foundation for professional web design!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>.box</code> class with: width 200px, height 100px, padding 20px, border 2px solid #000000, and margin 10px.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.box { width: 200px; height: 100px; padding: 20px; border: 2px solid #000000; margin: 10px; }</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Box Model</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="box">This is a box with all layers.</div>\n</body>\n</html>',
        '/style.css':
          '/* Define the .box class with all box model properties */',
      },
      regex:
        '\\.box\\s*\\{[^}]*width\\s*:\\s*200px[^}]*height\\s*:\\s*100px[^}]*padding\\s*:\\s*20px[^}]*border\\s*:\\s*2px\\s+solid\\s+#000000[^}]*margin\\s*:\\s*10px',
      output:
        '.box { width: 200px; height: 100px; padding: 20px; border: 2px solid #000000; margin: 10px; }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'padding-power',
    exerciseName: 'Padding Power',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Padding is internal spacing inside an element, creating breathing room between content and edges.</p><p style='margin-bottom:8px;'>The <code>padding</code> property can take one value (all sides), two values (vertical/horizontal), or four values (top/right/bottom/left).</p><p style='margin-bottom:8px;'><code>padding: 10px</code> applies 10px to all sides. <code>padding: 10px 20px</code> applies 10px vertical and 20px horizontal.</p><p style='margin-bottom:8px;'><code>padding: 10px 15px 12px 20px</code> applies different values to each side (TRBL: top, right, bottom, left).</p><p style='margin-bottom:8px;'>You can also use individual properties: <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, <code>padding-left</code>.</p><p style='margin-bottom:8px;'>Proper padding makes buttons, cards, and containers visually appealing and improves user experience.</p><p style='margin-bottom:8px;'>Too little padding makes content feel cramped; too much makes layouts look spread out and inefficient.</p><p style='margin-bottom:8px;'>In this exercise, you will use padding to create comfortable spacing within elements.</p><p style='margin-bottom:8px;'>Padding respects the background color and becomes part of the clickable area for buttons.</p><p style='margin-bottom:8px;'>Using consistent padding values throughout your design creates visual harmony and professionalism.</p><p style='margin-bottom:8px;'>Padding is a powerful tool for improving the feel and usability of your pages.</p><p style='margin-bottom:8px;'>Master padding and transform cramped designs into spacious, comfortable interfaces!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a class <code>card</code> with padding of 20px on all sides and a background color of #f0f0f0.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.card { padding: 20px; background-color: #f0f0f0; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Padding</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="card">This card has comfortable internal spacing.</div>\n</body>\n</html>',
        '/style.css': '/* Create a card class with padding */',
      },
      regex:
        '\\.card\\s*\\{[^}]*padding\\s*:\\s*20px[^}]*background-color\\s*:\\s*#f0f0f0',
      output: '.card { padding: 20px; background-color: #f0f0f0; }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'margin-magic',
    exerciseName: 'Margin Magic',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Margin is external spacing outside an element, controlling distance between elements and the page edges.</p><p style='margin-bottom:8px;'>Like padding, the <code>margin</code> property accepts one, two, or four values following the same patterns.</p><p style='margin-bottom:8px;'>Unlike padding, margins can be negative, allowing elements to overlap or adjust relative positioning.</p><p style='margin-bottom:8px;'>Margins can also be set to <code>auto</code>, which is useful for centering elements horizontally.</p><p style='margin-bottom:8px;'>A common pattern is <code>margin: 0 auto</code> to center a block element with a set width.</p><p style='margin-bottom:8px;'>Margin collapse is a CSS behavior where adjacent vertical margins combine into the largest value instead of adding.</p><p style='margin-bottom:8px;'>Understanding margin collapse is important for avoiding unexpected spacing issues in layouts.</p><p style='margin-bottom:8px;'>In this exercise, you will use margins to create proper spacing between elements.</p><p style='margin-bottom:8px;'>Margins are often used to add breathing room around key page sections and components.</p><p style='margin-bottom:8px;'>Consistent margin spacing creates visual rhythm and organization throughout your design.</p><p style='margin-bottom:8px;'>Margins and padding work together to create professional, well-spaced layouts.</p><p style='margin-bottom:8px;'>Master margin magic and your layouts will feel spacious and well-organized!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set margin on <code>&lt;p&gt;</code> tags to 0 for top/bottom and 10px for left/right, then use margin auto to center a <code>.centered</code> class.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>p { margin: 0 10px; }</code> and <code>.centered { margin: 0 auto; width: 50%; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Margin</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <p>Paragraph with side margins.</p>\n  <div class="centered" style="background-color:#ddd;padding:20px;\">Centered with auto margin</div>\n</body>\n</html>',
        '/style.css': '/* Set margins for spacing */',
      },
      regex: 'p\\s*\\{[^}]*margin\\s*:\\s*0\\s+10px',
      output: 'p { margin: 0 10px; } .centered { margin: 0 auto; }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'border-styles',
    exerciseName: 'Border Styles',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Borders draw lines around elements, defining boundaries and creating visual separation.</p><p style='margin-bottom:8px;'>The <code>border</code> property accepts three values: width, style, and color.</p><p style='margin-bottom:8px;'>Border styles include solid, dashed, dotted, double, groove, ridge, inset, and outset.</p><p style='margin-bottom:8px;'>Like padding and margin, borders can take one, two, or four values to apply to all sides or specific sides.</p><p style='margin-bottom:8px;'>Individual properties like <code>border-width</code>, <code>border-style</code>, and <code>border-color</code> give precise control.</p><p style='margin-bottom:8px;'>Borders can have different styles for each side: <code>border-top: 2px solid red</code>.</p><p style='margin-bottom:8px;'>Border radius creates rounded corners using the <code>border-radius</code> property with length values.</p><p style='margin-bottom:8px;'>In this exercise, you will create various border styles to add visual interest and definition.</p><p style='margin-bottom:8px;'>Subtle borders improve visual hierarchy and help users distinguish different sections.</p><p style='margin-bottom:8px;'>Combined with other properties, borders are essential for card designs and component styling.</p><p style='margin-bottom:8px;'>Border color can match or contrast with background for emphasis or subtlety.</p><p style='margin-bottom:8px;'>Master borders and add professional definition to your designs!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>.bordered-box</code> class with a 3px solid border in color #333333 and rounded corners with border-radius 10px.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.bordered-box { border: 3px solid #333333; border-radius: 10px; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Border Styles</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="bordered-box" style="padding:20px;">This box has a border and rounded corners.</div>\n</body>\n</html>',
        '/style.css': '/* Create bordered box with rounded corners */',
      },
      regex:
        '\\.bordered-box\\s*\\{[^}]*border\\s*:\\s*3px\\s+solid\\s+#333333[^}]*border-radius\\s*:\\s*10px',
      output:
        '.bordered-box { border: 3px solid #333333; border-radius: 10px; }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'width-and-height',
    exerciseName: 'Width & Height',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Width and height control the size of elements. You can specify them in pixels, percentages, ems, or other CSS units.</p><p style='margin-bottom:8px;'>Fixed widths (like 300px) are useful for precise layouts but can be problematic on small screens.</p><p style='margin-bottom:8px;'>Percentage widths (like 50%) are relative to the parent container, making them responsive and flexible.</p><p style='margin-bottom:8px;'>Max-width and min-width provide constraints while allowing flexible sizing within limits.</p><p style='margin-bottom:8px;'>A common responsive pattern is <code>width: 100%; max-width: 1200px</code> for containers.</p><p style='margin-bottom:8px;'>Height is often set to auto to allow content to determine element size, preventing overflow issues.</p><p style='margin-bottom:8px;'>Fixed heights can cause problems if content exceeds the space; overflow handling is important.</p><p style='margin-bottom:8px;'>In this exercise, you will set appropriate widths and heights for different layout scenarios.</p><p style='margin-bottom:8px;'>Understanding the interaction between width, padding, border, and margin (the box model) is crucial.</p><p style='margin-bottom:8px;'>Different elements have different sizing strategies depending on their role in the layout.</p><p style='margin-bottom:8px;'>Responsive design often uses relative units and max-width constraints rather than fixed pixels.</p><p style='margin-bottom:8px;'>Master sizing and create layouts that adapt beautifully to any screen size!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>.container</code> class with width 90%, max-width 1000px, and height set to auto.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.container { width: 90%; max-width: 1000px; height: auto; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Width & Height</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="container">Responsive container with flexible sizing.</div>\n</body>\n</html>',
        '/style.css': '/* Set width and height for responsive sizing */',
      },
      regex:
        '\\.container\\s*\\{[^}]*width\\s*:\\s*90%[^}]*max-width\\s*:\\s*1000px[^}]*height\\s*:\\s*auto',
      output: '.container { width: 90%; max-width: 1000px; height: auto; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'build-a-card-layout',
    exerciseName: 'Build a Card Layout',
    chapterId: 5,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Card layouts are ubiquitous in modern web design, used everywhere from product listings to blog posts.</p><p style='margin-bottom:8px;'>A card typically contains an image, title, description, and a call-to-action button, all contained in a bordered box.</p><p style='margin-bottom:8px;'>This exercise combines all box model concepts: padding for internal spacing, margins for separation, borders for definition.</p><p style='margin-bottom:8px;'>Cards usually have fixed widths with controlled heights for consistent appearance across multiple cards.</p><p style='margin-bottom:8px;'>Subtle shadows or borders make cards stand out from the background and appear elevated.</p><p style='margin-bottom:8px;'>Good card design balances information density with whitespace for scannability.</p><p style='margin-bottom:8px;'>In this project, you will create a reusable card component with professional styling.</p><p style='margin-bottom:8px;'>Multiple cards arranged in grids are common in e-commerce and portfolio sites.</p><p style='margin-bottom:8px;'>Hover effects on cards improve interactivity and user feedback, which we will explore in later chapters.</p><p style='margin-bottom:8px;'>This exercise tests your mastery of the box model in a real-world context.</p><p style='margin-bottom:8px;'>Professional card layouts look polished and guide users naturally through information.</p><p style='margin-bottom:8px;'>Build a stunning card component and establish a foundation for professional designs!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>.card</code> class with: width 300px, padding 15px, margin 10px, border 1px solid #cccccc, border-radius 8px, and background-color #ffffff. Then style <code>.card h3</code> with 20px font-size and margin-bottom 10px, and <code>.card p</code> with 14px font-size and color #666666.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create three rules: .card with all box properties, .card h3 with font-size 20px and margin-bottom 10px, and .card p with font-size 14px and gray color.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Card Layout</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="card">\n    <h3>Card Title</h3>\n    <p>This is the card description with some useful information.</p>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Create a professional card layout */',
      },
      regex:
        '\\.card\\s*\\{[^}]*width\\s*:\\s*300px[^}]*padding\\s*:\\s*15px[^}]*margin\\s*:\\s*10px[^}]*border\\s*:\\s*1px\\s+solid\\s+#cccccc[^}]*border-radius\\s*:\\s*8px[^}]*background-color\\s*:\\s*#ffffff',
      output:
        '.card { width: 300px; padding: 15px; margin: 10px; border: 1px solid #cccccc; border-radius: 8px; background-color: #ffffff; } .card h3 { font-size: 20px; margin-bottom: 10px; } .card p { font-size: 14px; color: #666666; }',
      hintXp: 40,
    },
  },
  // Chapter 6: Display & Positioning (6 exercises)
  {
    courseId: 3,
    exerciseId: 'display-property',
    exerciseName: 'Display Property',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The <code>display</code> property is one of the most important CSS properties, controlling how elements are rendered and laid out.</p><p style='margin-bottom:8px;'>Block elements (default for divs, paragraphs, headings) take up full width and start on new lines.</p><p style='margin-bottom:8px;'>Inline elements (default for spans, links, images) flow within text and only take up necessary width.</p><p style='margin-bottom:8px;'>Inline-block elements flow like inline but respect width, height, padding, and margin like block elements.</p><p style='margin-bottom:8px;'>Flex creates a flexible layout system with powerful alignment and distribution capabilities.</p><p style='margin-bottom:8px;'>Grid creates a two-dimensional layout system with rows and columns.</p><p style='margin-bottom:8px;'>None removes the element from the layout completely, as if it does not exist.</p><p style='margin-bottom:8px;'>In this exercise, you will explore how different display values change element behavior.</p><p style='margin-bottom:8px;'>Changing display is often how you make elements arrange horizontally or vertically.</p><p style='margin-bottom:8px;'>Flex and Grid are modern approaches; understanding them is essential for contemporary web design.</p><p style='margin-bottom:8px;'>The display property is fundamental to building responsive, well-organized layouts.</p><p style='margin-bottom:8px;'>Master the display property and unlock the full power of CSS layout systems!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set <code>&lt;span&gt;</code> elements to <code>display: inline-block</code> and create a <code>.flex-container</code> with <code>display: flex</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>span { display: inline-block; }</code> and <code>.flex-container { display: flex; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Display Property</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <span>Inline block</span><span>Elements</span>\n  <div class="flex-container">\n    <div>Flex item 1</div>\n    <div>Flex item 2</div>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Set display properties */',
      },
      regex: 'span\\s*\\{[^}]*display\\s*:\\s*inline-block',
      output:
        'span { display: inline-block; } .flex-container { display: flex; }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'block-vs-inline',
    exerciseName: 'Block vs Inline',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Understanding the difference between block and inline elements is fundamental to CSS.</p><p style='margin-bottom:8px;'>Block elements create new rows and take up full available width. Examples: div, p, h1-h6, section, article.</p><p style='margin-bottom:8px;'>Inline elements flow within text, taking only necessary width. Examples: span, a, strong, em, img.</p><p style='margin-bottom:8px;'>Block elements respect all box model properties: width, height, padding, margin, border.</p><p style='margin-bottom:8px;'>Inline elements ignore top and bottom padding and margin; only left and right work.</p><p style='margin-bottom:8px;'>This behavior can be surprising and is a common source of layout issues for beginners.</p><p style='margin-bottom:8px;'>You can override default behavior by setting display to block, inline, or inline-block.</p><p style='margin-bottom:8px;'>In this exercise, you will explore how block and inline elements behave and interact.</p><p style='margin-bottom:8px;'>Understanding these defaults helps you write more predictable CSS.</p><p style='margin-bottom:8px;'>Many modern layouts ignore these defaults in favor of flex or grid, but knowledge of them is still valuable.</p><p style='margin-bottom:8px;'>The foundation of CSS layout rests on understanding block and inline behavior.</p><p style='margin-bottom:8px;'>Master this distinction and you will avoid many common layout problems!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create rules where <code>&lt;div&gt;</code> has <code>display: block</code>, <code>&lt;span&gt;</code> has <code>display: inline</code>, and <code>.inline-block-item</code> has <code>display: inline-block</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>div { display: block; }</code>, <code>span { display: inline; }</code>, and <code>.inline-block-item { display: inline-block; }</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Block vs Inline</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div>Block element</div>\n  <span>Inline element</span>\n  <div class="inline-block-item">Inline-block element</div>\n</body>\n</html>',
        '/style.css':
          '/* Show differences between block, inline, and inline-block */',
      },
      regex: 'div\\s*\\{[^}]*display\\s*:\\s*block',
      output:
        'div { display: block; } span { display: inline; } .inline-block-item { display: inline-block; }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'position-static',
    exerciseName: 'Position Static',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The <code>position</code> property controls how elements are positioned in the layout.</p><p style='margin-bottom:8px;'>Static is the default position value. Elements with position static flow normally in the document.</p><p style='margin-bottom:8px;'>Static positioned elements cannot use top, bottom, left, or right properties; they are ignored.</p><p style='margin-bottom:8px;'>Static positioning is predictable and follows the normal document flow.</p><p style='margin-bottom:8px;'>Other position values (relative, absolute, fixed, sticky) allow overriding normal flow.</p><p style='margin-bottom:8px;'>Understanding static positioning is the foundation for understanding all other position values.</p><p style='margin-bottom:8px;'>Most elements on a page should remain static positioned; use other values sparingly.</p><p style='margin-bottom:8px;'>In this exercise, you will see how static positioning is the baseline behavior.</p><p style='margin-bottom:8px;'>Static elements respect margins and participate in normal layout flow like usual.</p><p style='margin-bottom:8px;'>This exercise sets the stage for exploring advanced positioning techniques.</p><p style='margin-bottom:8px;'>Understanding static is important before moving to relative, absolute, or fixed positioning.</p><p style='margin-bottom:8px;'>Build your positioning knowledge from the foundation of static positioning!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set <code>&lt;div&gt;</code> elements to have <code>position: static</code> explicitly.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>div { position: static; }</code> in your CSS. This is the default but can be set explicitly.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Position Static</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div>Static element 1</div>\n  <div>Static element 2</div>\n</body>\n</html>',
        '/style.css': '/* Set position to static */',
      },
      regex: 'div\\s*\\{[^}]*position\\s*:\\s*static',
      output: 'div { position: static; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'relative-positioning',
    exerciseName: 'Relative Positioning',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Relative positioning moves elements from their normal position without affecting the layout of other elements.</p><p style='margin-bottom:8px;'>With <code>position: relative</code>, you can use top, bottom, left, and right to offset the element.</p><p style='margin-bottom:8px;'>The element still occupies its original space in the document flow; it is just visually offset.</p><p style='margin-bottom:8px;'>This creates a layer of invisible spacing that other elements do not account for.</p><p style='margin-bottom:8px;'>Relative positioning is useful for fine-tuning element positions without restructuring HTML.</p><p style='margin-bottom:8px;'>Common uses include adjusting icon positions or creating subtle animations.</p><p style='margin-bottom:8px;'>In this exercise, you will offset elements using relative positioning.</p><p style='margin-bottom:8px;'>Remember that the offset is relative to the element's normal position.</p><p style='margin-bottom:8px;'>Other elements do not shift to fill the gap created by relative positioning.</p><p style='margin-bottom:8px;'>Relative positioning is less disruptive to layouts than absolute positioning.</p><p style='margin-bottom:8px;'>This positioning method is valuable for precise visual adjustments.</p><p style='margin-bottom:8px;'>Master relative positioning and fine-tune your layouts with precision!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set a <code>.box</code> class with <code>position: relative</code>, <code>top: 20px</code>, and <code>left: 20px</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.box { position: relative; top: 20px; left: 20px; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Relative Positioning</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="box">Relatively positioned element</div>\n</body>\n</html>',
        '/style.css': '/* Apply relative positioning with offset */',
      },
      regex:
        '\\.box\\s*\\{[^}]*position\\s*:\\s*relative[^}]*top\\s*:\\s*20px[^}]*left\\s*:\\s*20px',
      output: '.box { position: relative; top: 20px; left: 20px; }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'absolute-positioning',
    exerciseName: 'Absolute Positioning',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Absolute positioning removes elements from the normal document flow and positions them relative to a reference point.</p><p style='margin-bottom:8px;'>The reference point is the nearest positioned ancestor (or the viewport if none exists).</p><p style='margin-bottom:8px;'>With <code>position: absolute</code>, use top, bottom, left, and right to position the element precisely.</p><p style='margin-bottom:8px;'>Absolutely positioned elements do not occupy space in the layout; they float above or below other content.</p><p style='margin-bottom:8px;'>This is powerful for creating overlays, tooltips, and floating elements.</p><p style='margin-bottom:8px;'>A common pattern is to set a parent to <code>position: relative</code> and children to <code>position: absolute</code>.</p><p style='margin-bottom:8px;'>This creates a scoped positioning context where children position relative to the parent.</p><p style='margin-bottom:8px;'>In this exercise, you will use absolute positioning to place elements at specific coordinates.</p><p style='margin-bottom:8px;'>Z-index controls layering when elements overlap; higher z-index appears on top.</p><p style='margin-bottom:8px;'>Absolute positioning requires careful planning to avoid layout problems and overlapping issues.</p><p style='margin-bottom:8px;'>This positioning method is powerful but should be used strategically.</p><p style='margin-bottom:8px;'>Master absolute positioning and create sophisticated layered layouts!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a parent with <code>position: relative</code> and child with <code>position: absolute</code>, <code>top: 50px</code>, <code>left: 50px</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a parent class with <code>position: relative</code> and a child class with <code>position: absolute; top: 50px; left: 50px;</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Absolute Positioning</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="parent" style="width:200px;height:200px;border:1px solid #000;\">\n    <div class="child">Absolutely positioned</div>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Set up absolute positioning context */',
      },
      regex:
        '\\.parent\\s*\\{[^}]*position\\s*:\\s*relative|position:\\s*absolute[^}]*top:\\s*50px',
      output:
        '.parent { position: relative; } .child { position: absolute; top: 50px; left: 50px; }',
      hintXp: 35,
    },
  },
  {
    courseId: 3,
    exerciseId: 'fixed-and-sticky',
    exerciseName: 'Fixed & Sticky',
    chapterId: 6,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Fixed positioning removes elements from the document flow and fixes them to the viewport.</p><p style='margin-bottom:8px;'>Fixed elements stay in place even as users scroll the page, useful for navigation bars and floating buttons.</p><p style='margin-bottom:8px;'>Sticky positioning is a hybrid: elements scroll normally until they reach a threshold, then stick to that position.</p><p style='margin-bottom:8px;'>Sticky elements are perfect for section headers that stay visible while scrolling through content.</p><p style='margin-bottom:8px;'>Both fixed and sticky require top, bottom, left, or right to define where they stick.</p><p style='margin-bottom:8px;'>Fixed positioning is viewport-relative; sticky is relative to the nearest scrolling ancestor.</p><p style='margin-bottom:8px;'>Fixed elements have z-index layering to control whether they appear above or below other content.</p><p style='margin-bottom:8px;'>In this exercise, you will create both fixed and sticky positioned elements.</p><p style='margin-bottom:8px;'>Common uses: fixed navigation bars, sticky table headers, floating shopping cart icons.</p><p style='margin-bottom:8px;'>These positioning methods enhance user experience by keeping important elements accessible.</p><p style='margin-bottom:8px;'>Use them strategically to improve navigation and information visibility.</p><p style='margin-bottom:8px;'>Master fixed and sticky positioning and create interfaces that keep users on track!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>.fixed-nav</code> with <code>position: fixed</code>, <code>top: 0</code>, and a <code>.sticky-header</code> with <code>position: sticky</code>, <code>top: 0</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.fixed-nav { position: fixed; top: 0; }</code> and <code>.sticky-header { position: sticky; top: 0; }</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Fixed & Sticky</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <nav class="fixed-nav\">Fixed navigation</nav>\n  <div class="sticky-header\">Sticky header</div>\n</body>\n</html>',
        '/style.css': '/* Create fixed and sticky positioned elements */',
      },
      regex: '\\.fixed-nav\\s*\\{[^}]*position\\s*:\\s*fixed[^}]*top\\s*:\\s*0',
      output:
        '.fixed-nav { position: fixed; top: 0; } .sticky-header { position: sticky; top: 0; }',
      hintXp: 40,
    },
  },
  // Chapter 7: Flexbox (6 exercises)
  {
    courseId: 3,
    exerciseId: 'flex-container',
    exerciseName: 'Flex Container',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Flexbox is a powerful one-dimensional layout system designed for distributing space and aligning items.</p><p style='margin-bottom:8px;'>Setting <code>display: flex</code> on a container transforms it into a flex container with special alignment properties.</p><p style='margin-bottom:8px;'>Child elements of a flex container become flex items, automatically sized and positioned by flex rules.</p><p style='margin-bottom:8px;'>The flex container has a main axis (horizontal by default) and a cross axis (vertical).</p><p style='margin-bottom:8px;'>Flexbox is perfect for navigation bars, button groups, and flexible layouts that adapt to content.</p><p style='margin-bottom:8px;'>Key flex container properties include flex-direction, justify-content, align-items, and flex-wrap.</p><p style='margin-bottom:8px;'>Flex items can grow, shrink, and take up space through flex-grow, flex-shrink, and flex-basis.</p><p style='margin-bottom:8px;'>In this exercise, you will create a flex container and observe how it arranges child items.</p><p style='margin-bottom:8px;'>Flexbox handles responsive design elegantly by automatically adjusting item sizes.</p><p style='margin-bottom:8px;'>The flex shorthand property combines flex-grow, flex-shrink, and flex-basis concisely.</p><p style='margin-bottom:8px;'>Understanding flex containers is the foundation for mastering flexbox layout.</p><p style='margin-bottom:8px;'>Master flexbox and create responsive layouts with minimal code!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>.flex-container</code> with <code>display: flex</code> and set flex items to have <code>flex: 1</code> so they share equal space.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.flex-container { display: flex; }</code> and <code>.flex-item { flex: 1; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Flex Container</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="flex-container">\n    <div class="flex-item">Item 1</div>\n    <div class="flex-item">Item 2</div>\n    <div class="flex-item">Item 3</div>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Create flex container and items */',
      },
      regex: '\\.flex-container\\s*\\{[^}]*display\\s*:\\s*flex',
      output: '.flex-container { display: flex; } .flex-item { flex: 1; }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'flex-direction',
    exerciseName: 'Flex Direction',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The <code>flex-direction</code> property controls whether items flow horizontally or vertically.</p><p style='margin-bottom:8px;'>Default value is <code>row</code>, which arranges items left-to-right horizontally.</p><p style='margin-bottom:8px;'><code>column</code> stacks items vertically, top-to-bottom, useful for navigation menus and vertical layouts.</p><p style='margin-bottom:8px;'><code>row-reverse</code> arranges items right-to-left, and <code>column-reverse</code> arranges bottom-to-top.</p><p style='margin-bottom:8px;'>Flex direction fundamentally changes how space is distributed and items are aligned.</p><p style='margin-bottom:8px;'>Changing flex-direction is a simple way to create responsive layouts that switch between row and column.</p><p style='margin-bottom:8px;'>For example, a row layout on desktop can become a column layout on mobile.</p><p style='margin-bottom:8px;'>In this exercise, you will experiment with different flex directions.</p><p style='margin-bottom:8px;'>The main axis follows the flex direction; the cross axis is perpendicular.</p><p style='margin-bottom:8px;'>Understanding flex direction is crucial for controlling layout flow in flexbox.</p><p style='margin-bottom:8px;'>Many responsive patterns use flex-direction to adapt layouts to screen size.</p><p style='margin-bottom:8px;'>Master flex direction and create layouts that adapt naturally to any situation!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>.row-container</code> with <code>flex-direction: row</code> and a <code>.column-container</code> with <code>flex-direction: column</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.row-container { display: flex; flex-direction: row; }</code> and <code>.column-container { display: flex; flex-direction: column; }</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Flex Direction</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="row-container">\n    <div>Row 1</div>\n    <div>Row 2</div>\n  </div>\n  <div class="column-container">\n    <div>Col 1</div>\n    <div>Col 2</div>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Set flex direction for row and column containers */',
      },
      regex: '\\.row-container\\s*\\{[^}]*flex-direction\\s*:\\s*row',
      output:
        '.row-container { display: flex; flex-direction: row; } .column-container { display: flex; flex-direction: column; }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'justify-content',
    exerciseName: 'Justify Content',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The <code>justify-content</code> property controls how flex items are distributed along the main axis.</p><p style='margin-bottom:8px;'><code>flex-start</code> (default) aligns items to the start of the main axis.</p><p style='margin-bottom:8px;'><code>center</code> centers items along the main axis.</p><p style='margin-bottom:8px;'><code>flex-end</code> aligns items to the end of the main axis.</p><p style='margin-bottom:8px;'><code>space-between</code> distributes items with equal space between them.</p><p style='margin-bottom:8px;'><code>space-around</code> distributes items with equal space around them.</p><p style='margin-bottom:8px;'><code>space-evenly</code> distributes items with equal space everywhere.</p><p style='margin-bottom:8px;'>In this exercise, you will experiment with different justify-content values.</p><p style='margin-bottom:8px;'>Justify-content is essential for creating well-spaced navigation bars and button groups.</p><p style='margin-bottom:8px;'>Different values create different visual effects and user experiences.</p><p style='margin-bottom:8px;'>Understanding justify-content helps you align content exactly as designed.</p><p style='margin-bottom:8px;'>This property solves many alignment challenges elegantly.</p><p style='margin-bottom:8px;'>Master justify-content and align items perfectly along any axis!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create three containers: one with <code>justify-content: center</code>, one with <code>justify-content: space-between</code>, and one with <code>justify-content: flex-end</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write three separate rules for three different containers, each with different justify-content values.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Justify Content</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="center-container"><div>Item</div><div>Item</div></div>\n  <div class="space-container"><div>Item</div><div>Item</div></div>\n  <div class="end-container"><div>Item</div><div>Item</div></div>\n</body>\n</html>',
        '/style.css': '/* Set different justify-content values */',
      },
      regex: 'justify-content\\s*:\\s*center|space-between|flex-end',
      output:
        '.center-container { display: flex; justify-content: center; } .space-container { display: flex; justify-content: space-between; } .end-container { display: flex; justify-content: flex-end; }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'align-items',
    exerciseName: 'Align Items',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The <code>align-items</code> property controls how flex items are aligned along the cross axis.</p><p style='margin-bottom:8px;'><code>stretch</code> (default) stretches items to fill the cross axis.</p><p style='margin-bottom:8px;'><code>center</code> centers items along the cross axis.</p><p style='margin-bottom:8px;'><code>flex-start</code> aligns items to the start, and <code>flex-end</code> to the end of the cross axis.</p><p style='margin-bottom:8px;'><code>baseline</code> aligns items along their text baseline.</p><p style='margin-bottom:8px;'>Align-items is perfect for vertically centering content within containers.</p><p style='margin-bottom:8px;'>Combined with justify-content, align-items enables centering in both dimensions.</p><p style='margin-bottom:8px;'>In this exercise, you will use align-items to position items on the cross axis.</p><p style='margin-bottom:8px;'>This property solves the classic challenge of centering content vertically.</p><p style='margin-bottom:8px;'>Understanding align-items gives you full control over two-dimensional alignment.</p><p style='margin-bottom:8px;'>The combination of justify-content and align-items is the key to flexbox mastery.</p><p style='margin-bottom:8px;'>Master align-items and center content with ease!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a flex container with <code>align-items: center</code> and set height to 200px so you can see vertical centering.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.container { display: flex; align-items: center; height: 200px; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Align Items</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="container">\n    <div>Centered content</div>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Set align-items to center */',
      },
      regex: '\\.container\\s*\\{[^}]*align-items\\s*:\\s*center',
      output:
        '.container { display: flex; align-items: center; height: 200px; }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'flex-wrap',
    exerciseName: 'Flex Wrap',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>By default, flex items try to fit on one line, shrinking if necessary. The <code>flex-wrap</code> property changes this behavior.</p><p style='margin-bottom:8px;'><code>nowrap</code> (default) keeps all items on one line even if they overflow.</p><p style='margin-bottom:8px;'><code>wrap</code> allows items to wrap to multiple lines if they cannot fit.</p><p style='margin-bottom:8px;'><code>wrap-reverse</code> wraps items to multiple lines but in reverse order.</p><p style='margin-bottom:8px;'>Wrapping is essential for responsive design, allowing layouts to adapt to container width.</p><p style='margin-bottom:8px;'>Without wrapping, items shrink uncomfortably; with wrapping, they maintain their size and wrap naturally.</p><p style='margin-bottom:8px;'>In this exercise, you will enable flex wrapping to create responsive grid-like layouts.</p><p style='margin-bottom:8px;'>The gap property adds space between wrapped rows and columns.</p><p style='margin-bottom:8px;'>Flex wrap combined with appropriate item sizes creates efficient responsive layouts.</p><p style='margin-bottom:8px;'>This property is crucial for creating layouts that work across all screen sizes.</p><p style='margin-bottom:8px;'>Understanding flex wrap is essential for responsive flexbox layouts.</p><p style='margin-bottom:8px;'>Master flex wrap and create responsive layouts that adapt to any container width!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a flex container with <code>flex-wrap: wrap</code> and set flex items to have <code>min-width: 150px</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.container { display: flex; flex-wrap: wrap; }</code> and <code>.item { min-width: 150px; }</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Flex Wrap</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="container">\n    <div class="item">Item 1</div>\n    <div class="item">Item 2</div>\n    <div class="item">Item 3</div>\n    <div class="item">Item 4</div>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Enable flex wrapping with minimum item width */',
      },
      regex: '\\.container\\s*\\{[^}]*flex-wrap\\s*:\\s*wrap',
      output:
        '.container { display: flex; flex-wrap: wrap; } .item { min-width: 150px; }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'build-a-navigation-bar',
    exerciseName: 'Build a Navigation Bar',
    chapterId: 7,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Navigation bars are one of the most common uses for flexbox. They must be responsive and visually balanced.</p><p style='margin-bottom:8px;'>A typical nav bar has a logo on the left and menu items distributed across, either left or right.</p><p style='margin-bottom:8px;'>This project combines flex-direction, justify-content, align-items, and proper spacing.</p><p style='margin-bottom:8px;'>Mobile nav bars often collapse to a vertical layout or hamburger menu, which flex direction handles elegantly.</p><p style='margin-bottom:8px;'>The nav container should span full width with appropriate padding and background color.</p><p style='margin-bottom:8px;'>Links should be vertically centered and properly spaced apart.</p><p style='margin-bottom:8px;'>In this project, you will create a professional navigation bar using flexbox principles.</p><p style='margin-bottom:8px;'>This exercise brings together all flexbox concepts from this chapter.</p><p style='margin-bottom:8px;'>A well-designed nav bar improves usability and creates a professional first impression.</p><p style='margin-bottom:8px;'>This real-world project tests your flexbox mastery comprehensively.</p><p style='margin-bottom:8px;'>Professional navigation bars are essential for all websites.</p><p style='margin-bottom:8px;'>Build a stunning navigation bar and impress with your flexbox skills!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a navigation bar: 1) <code>.navbar</code> with display flex, background-color #333333, padding 15px, and height 60px. 2) <code>.navbar a</code> with color #ffffff, padding 0 15px, and text decoration none. 3) Use <code>justify-content: space-between</code> and <code>align-items: center</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write navbar rule with flex container properties, space-between, and center alignment. Style links with white color and padding.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Navigation Bar</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <nav class="navbar">\n    <a href="#">Logo</a>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </nav>\n</body>\n</html>',
        '/style.css': '/* Create a professional navigation bar with flexbox */',
      },
      regex:
        '\\.navbar\\s*\\{[^}]*display\\s*:\\s*flex[^}]*justify-content\\s*:\\s*space-between[^}]*align-items\\s*:\\s*center',
      output:
        '.navbar { display: flex; background-color: #333333; padding: 15px; height: 60px; justify-content: space-between; align-items: center; } .navbar a { color: #ffffff; padding: 0 15px; text-decoration: none; }',
      hintXp: 45,
    },
  },
  // Chapter 8: CSS Grid (6 exercises)
  {
    courseId: 3,
    exerciseId: 'grid-container',
    exerciseName: 'Grid Container',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>CSS Grid is a powerful two-dimensional layout system for creating complex page layouts.</p><p style='margin-bottom:8px;'>Setting <code>display: grid</code> on a container creates a grid layout for its children.</p><p style='margin-bottom:8px;'>Grid containers define rows and columns that child items snap to and fill.</p><p style='margin-bottom:8px;'>Unlike flexbox, which is one-dimensional, Grid handles alignment in both dimensions simultaneously.</p><p style='margin-bottom:8px;'>Grid is perfect for dashboard layouts, gallery grids, and complex page structures.</p><p style='margin-bottom:8px;'>Key grid properties include grid-template-columns, grid-template-rows, gap, and grid-auto-flow.</p><p style='margin-bottom:8px;'>The <code>fr</code> unit (fractional) is unique to Grid and represents a fraction of available space.</p><p style='margin-bottom:8px;'>In this exercise, you will create a basic grid container and observe how items are placed.</p><p style='margin-bottom:8px;'>Grid automatically flows items into defined grid cells.</p><p style='margin-bottom:8px;'>Understanding grid containers is the foundation for mastering grid layouts.</p><p style='margin-bottom:8px;'>Grid is modern CSS that simplifies layouts that would be complex with older methods.</p><p style='margin-bottom:8px;'>Master grid containers and unlock sophisticated layout possibilities!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a <code>.grid-container</code> with <code>display: grid</code>, <code>grid-template-columns: 1fr 1fr 1fr</code> (three equal columns), and <code>gap: 20px</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.grid-container { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Grid Container</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="grid-container">\n    <div>Grid Item 1</div>\n    <div>Grid Item 2</div>\n    <div>Grid Item 3</div>\n    <div>Grid Item 4</div>\n    <div>Grid Item 5</div>\n    <div>Grid Item 6</div>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Create a grid container with three equal columns */',
      },
      regex:
        '\\.grid-container\\s*\\{[^}]*display\\s*:\\s*grid[^}]*grid-template-columns\\s*:\\s*1fr\\s+1fr\\s+1fr[^}]*gap\\s*:\\s*20px',
      output:
        '.grid-container { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }',
      hintXp: 35,
    },
  },
  {
    courseId: 3,
    exerciseId: 'grid-template',
    exerciseName: 'Grid Template',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Grid-template-columns and grid-template-rows define the structure of the grid.</p><p style='margin-bottom:8px;'>You can specify fixed sizes (100px), flexible sizes (1fr), percentages (50%), or combinations.</p><p style='margin-bottom:8px;'>The repeat() function simplifies defining multiple tracks: <code>repeat(3, 1fr)</code> equals <code>1fr 1fr 1fr</code>.</p><p style='margin-bottom:8px;'>The auto-fit and auto-fill keywords enable responsive grids that adjust column count automatically.</p><p style='margin-bottom:8px;'>The minmax() function defines minimum and maximum track sizes for responsive flexibility.</p><p style='margin-bottom:8px;'>A common responsive pattern is <code>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))</code>.</p><p style='margin-bottom:8px;'>Grid templates allow precise control over page layout structure and spacing.</p><p style='margin-bottom:8px;'>In this exercise, you will define custom grid structures with different template values.</p><p style='margin-bottom:8px;'>Understanding templates is crucial for creating intentional grid layouts.</p><p style='margin-bottom:8px;'>Grid templates provide the flexibility to handle any layout requirement.</p><p style='margin-bottom:8px;'>This property is the foundation of grid-based design.</p><p style='margin-bottom:8px;'>Master grid templates and create responsive layouts that adapt elegantly!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a grid with <code>grid-template-columns: repeat(2, 1fr)</code> and <code>grid-template-rows: auto 100px auto</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.grid { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto 100px auto; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Grid Template</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="grid">\n    <div>Item 1</div>\n    <div>Item 2</div>\n    <div>Item 3</div>\n    <div>Item 4</div>\n    <div>Item 5</div>\n    <div>Item 6</div>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Define grid structure with templates */',
      },
      regex: 'grid-template-columns\\s*:\\s*repeat\\(2\\s*,\\s*1fr\\)',
      output:
        '.grid { display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: auto 100px auto; }',
      hintXp: 40,
    },
  },
  {
    courseId: 3,
    exerciseId: 'grid-gap',
    exerciseName: 'Grid Gap',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The <code>gap</code> property (formerly grid-gap) controls spacing between grid items.</p><p style='margin-bottom:8px;'>Gap applies space between both columns and rows, creating uniform breathing room.</p><p style='margin-bottom:8px;'>You can set one value for both row and column gap or two values: <code>gap: row-gap column-gap</code>.</p><p style='margin-bottom:8px;'>Gap is cleaner than adding margins to items, which would double up at boundaries.</p><p style='margin-bottom:8px;'>Gap values can be any CSS length unit: px, em, rem, or percentage.</p><p style='margin-bottom:8px;'>Row-gap and column-gap can be set separately for more control.</p><p style='margin-bottom:8px;'>Proper gap creates visual structure and improves content scannability.</p><p style='margin-bottom:8px;'>In this exercise, you will use gap to create proper spacing in grids.</p><p style='margin-bottom:8px;'>Gap simplifies grid styling by handling boundaries automatically.</p><p style='margin-bottom:8px;'>This property is essential for creating well-organized grid layouts.</p><p style='margin-bottom:8px;'>Gap works in both flexbox and grid, improving layout control everywhere.</p><p style='margin-bottom:8px;'>Master gap and create perfectly spaced layouts effortlessly!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a grid with <code>gap: 30px</code> or set <code>row-gap: 20px</code> and <code>column-gap: 30px</code> separately.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.grid { gap: 30px; }</code> or <code>.grid { row-gap: 20px; column-gap: 30px; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Grid Gap</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="grid">\n    <div>Item 1</div>\n    <div>Item 2</div>\n    <div>Item 3</div>\n    <div>Item 4</div>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Set gap for grid spacing */',
      },
      regex:
        'gap\\s*:\\s*30px|row-gap\\s*:\\s*20px[^}]*column-gap\\s*:\\s*30px',
      output: '.grid { display: grid; gap: 30px; }',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'grid-areas',
    exerciseName: 'Grid Areas',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Grid areas allow you to assign names to grid regions and place items within them semantically.</p><p style='margin-bottom:8px;'>The <code>grid-template-areas</code> property defines a visual layout map with named areas.</p><p style='margin-bottom:8px;'>The <code>grid-area</code> property on items assigns them to named areas.</p><p style='margin-bottom:8px;'>Grid areas make complex layouts readable by using meaningful names like header, sidebar, footer.</p><p style='margin-bottom:8px;'>This approach is particularly useful for page layouts with multiple named sections.</p><p style='margin-bottom:8px;'>The visual representation in the CSS mirrors the actual page layout, making it intuitive.</p><p style='margin-bottom:8px;'>In this exercise, you will create named grid areas and assign items to them.</p><p style='margin-bottom:8px;'>Grid areas can span multiple rows and columns within the defined regions.</p><p style='margin-bottom:8px;'>This feature makes grid layouts expressive and maintainable.</p><p style='margin-bottom:8px;'>Understanding grid areas unlocks the full semantic potential of CSS Grid.</p><p style='margin-bottom:8px;'>Grid areas are perfect for creating traditional page layouts with header, main, sidebar, footer.</p><p style='margin-bottom:8px;'>Master grid areas and create semantic, maintainable page layouts!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Define grid areas: <code>grid-template-areas: 'header header' 'sidebar main'</code> and assign items with <code>grid-area: header</code>, <code>grid-area: sidebar</code>, etc.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write grid-template-areas with named regions quoted as strings, then use grid-area on items to assign them to areas.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Grid Areas</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="grid">\n    <header>Header</header>\n    <aside>Sidebar</aside>\n    <main>Main Content</main>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Define and assign grid areas */',
      },
      regex:
        'grid-template-areas\\s*:\\s*[\'"]header\\s+header[\'"]\\s+[\'"]sidebar\\s+main[\'"]',
      output:
        '.grid { display: grid; grid-template-areas: \"header header\" \"sidebar main\"; grid-template-columns: 1fr 3fr; } header { grid-area: header; } aside { grid-area: sidebar; } main { grid-area: main; }',
      hintXp: 45,
    },
  },
  {
    courseId: 3,
    exerciseId: 'responsive-grid',
    exerciseName: 'Responsive Grid',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Responsive grids automatically adjust column count based on container width.</p><p style='margin-bottom:8px;'>The pattern <code>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))</code> is a modern responsive grid.</p><p style='margin-bottom:8px;'>Auto-fit adjusts the number of columns to fit available space, perfect for product galleries.</p><p style='margin-bottom:8px;'>Minmax sets minimum item width (250px) and maximum (1fr), allowing items to grow.</p><p style='margin-bottom:8px;'>This approach eliminates the need for media queries for many responsive layouts.</p><p style='margin-bottom:8px;'>Items automatically reflow when the container resizes, maintaining optimal spacing.</p><p style='margin-bottom:8px;'>In this exercise, you will create a responsive grid that adapts to container width.</p><p style='margin-bottom:8px;'>This is one of the most practical grid patterns for modern web design.</p><p style='margin-bottom:8px;'>Responsive grids simplify media query logic and improve user experience across devices.</p><p style='margin-bottom:8px;'>This technique is essential for e-commerce and content gallery layouts.</p><p style='margin-bottom:8px;'>Modern CSS Grid eliminates many responsive design challenges.</p><p style='margin-bottom:8px;'>Master responsive grids and create layouts that adapt naturally to any width!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a responsive grid with <code>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))</code> and <code>gap: 15px</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Responsive Grid</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="grid">\n    <div>Item 1</div>\n    <div>Item 2</div>\n    <div>Item 3</div>\n    <div>Item 4</div>\n    <div>Item 5</div>\n    <div>Item 6</div>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Create a responsive grid layout */',
      },
      regex: 'repeat\\(auto-fit\\s*,\\s*minmax\\(200px\\s*,\\s*1fr\\)\\)',
      output:
        '.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }',
      hintXp: 40,
    },
  },
  {
    courseId: 3,
    exerciseId: 'build-a-dashboard-layout',
    exerciseName: 'Build a Dashboard Layout',
    chapterId: 8,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Dashboard layouts are complex two-dimensional structures with varying sized components.</p><p style='margin-bottom:8px;'>This project combines grid templates, areas, gap, and responsive design principles.</p><p style='margin-bottom:8px;'>A typical dashboard has a header, sidebar, main content area, and multiple cards.</p><p style='margin-bottom:8px;'>Grid excels at this task, allowing semantic layout definition with grid areas.</p><p style='margin-bottom:8px;'>This exercise brings together all Grid concepts from this chapter into a real-world application.</p><p style='margin-bottom:8px;'>Dashboard layouts demonstrate why Grid is superior for complex multi-dimensional layouts.</p><p style='margin-bottom:8px;'>In this project, you will create a professional dashboard appearance.</p><p style='margin-bottom:8px;'>Proper grid structure makes dashboard layouts maintainable and adaptable.</p><p style='margin-bottom:8px;'>This exercise tests your mastery of CSS Grid comprehensively.</p><p style='margin-bottom:8px;'>Professional dashboards are crucial for data visualization and analytics platforms.</p><p style='margin-bottom:8px;'>This real-world project showcases Grid's power and flexibility.</p><p style='margin-bottom:8px;'>Build a stunning dashboard layout and demonstrate Grid mastery!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a dashboard grid: 1) <code>grid-template-columns: 250px 1fr</code> (sidebar + main), 2) <code>grid-template-areas</code> with header spanning both columns, 3) Sidebar and main content areas, 4) Gap 20px, 5) Style header with background #333333 and padding 20px.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Define a grid with 2 columns, create areas for header (spanning both), sidebar, and main. Use grid-area to assign sections.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Dashboard</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="dashboard">\n    <header>Dashboard Header</header>\n    <aside>Sidebar</aside>\n    <main>Main Content</main>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Create a professional dashboard layout using Grid */',
      },
      regex: 'grid-template-columns\\s*:\\s*250px\\s+1fr|grid-template-areas',
      output:
        '.dashboard { display: grid; grid-template-columns: 250px 1fr; grid-template-areas: \"header header\" \"sidebar main\"; gap: 20px; } header { grid-area: header; background-color: #333333; padding: 20px; color: #ffffff; } aside { grid-area: sidebar; background-color: #f0f0f0; padding: 20px; } main { grid-area: main; padding: 20px; }',
      hintXp: 50,
    },
  },
  // Chapter 9: Responsive Design (6 exercises)
  {
    courseId: 3,
    exerciseId: 'viewport-meta-tag',
    exerciseName: 'Viewport Meta Tag',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The viewport meta tag is essential for responsive web design on mobile devices.</p><p style='margin-bottom:8px;'>It tells browsers how to render the page and scale content for different screen sizes.</p><p style='margin-bottom:8px;'>The standard viewport meta tag is: <code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code>.</p><p style='margin-bottom:8px;'><code>width=device-width</code> makes the viewport width match the device width.</p><p style='margin-bottom:8px;'><code>initial-scale=1.0</code> sets the initial zoom level to 100% (no zoom).</p><p style='margin-bottom:8px;'>Without this tag, mobile browsers default to a desktop-sized viewport and zoom out.</p><p style='margin-bottom:8px;'>This tag is placed in the <code>&lt;head&gt;</code> section of your HTML document.</p><p style='margin-bottom:8px;'>In this exercise, you will include the viewport meta tag in your HTML.</p><p style='margin-bottom:8px;'>This single line of HTML is crucial for mobile-first responsive design.</p><p style='margin-bottom:8px;'>Every modern website should include this meta tag.</p><p style='margin-bottom:8px;'>The viewport meta tag is the foundation of responsive web design.</p><p style='margin-bottom:8px;'>Master this tag and ensure your sites work properly on all devices!</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add the viewport meta tag to the <code>&lt;head&gt;</code>: <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>.</p></body>',
      hint: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Place <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> inside the <code>&lt;head&gt;</code> section.</p></body>',
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Responsive Design</title>\n</head>\n<body>\n  <h1>Responsive Page</h1>\n</body>\n</html>',
      },
      regex:
        '<meta\\s+name="viewport"\\s+content="width=device-width\\s*,\\s*initial-scale=1\\.0"',
      output:
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      hintXp: 20,
    },
  },
  {
    courseId: 3,
    exerciseId: 'media-queries',
    exerciseName: 'Media Queries',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Media queries allow you to apply different styles based on device characteristics like screen width.</p><p style='margin-bottom:8px;'>The basic syntax is: <code>@media (condition) { CSS rules }</code>.</p><p style='margin-bottom:8px;'>Common conditions include <code>(max-width: 768px)</code> for tablets and <code>(max-width: 480px)</code> for phones.</p><p style='margin-bottom:8px;'>You can also use <code>min-width</code> for mobile-first approaches, starting styles and adding to them.</p><p style='margin-bottom:8px;'>Other media features include orientation (portrait/landscape), device-type, and color capabilities.</p><p style='margin-bottom:8px;'>Multiple conditions can be combined with <code>and</code>: <code>@media (min-width: 768px) and (orientation: landscape)</code>.</p><p style='margin-bottom:8px;'>In this exercise, you will create media queries to adapt layouts for different screen sizes.</p><p style='margin-bottom:8px;'>Media queries are the foundation of responsive design, allowing one HTML to work on all devices.</p><p style='margin-bottom:8px;'>Proper media query breakpoints make sites usable on any screen size.</p><p style='margin-bottom:8px;'>Mobile-first media queries (using min-width) are considered a best practice.</p><p style='margin-bottom:8px;'>Understanding media queries is essential for responsive web design.</p><p style='margin-bottom:8px;'>Master media queries and make your sites responsive and mobile-friendly!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a media query: <code>@media (max-width: 768px) { body { font-size: 14px; } }</code> to make text smaller on tablets.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write the complete media query block in your CSS file, applying different styles when the viewport is 768px or smaller.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Media Queries</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Responsive Text</h1>\n  <p>This text changes size on different devices.</p>\n</body>\n</html>',
        '/style.css': '/* Add a media query for tablets */',
      },
      regex:
        '@media\\s*\\(max-width\\s*:\\s*768px\\)\\s*\\{[^}]*body\\s*\\{[^}]*font-size\\s*:\\s*14px',
      output: '@media (max-width: 768px) { body { font-size: 14px; } }',
      hintXp: 35,
    },
  },
  {
    courseId: 3,
    exerciseId: 'breakpoints',
    exerciseName: 'Breakpoints',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Breakpoints are specific screen widths where you change CSS to adapt layouts for different devices.</p><p style='margin-bottom:8px;'>Common breakpoints are: 480px (mobile), 768px (tablet), 1024px (desktop), 1440px (large desktop).</p><p style='margin-bottom:8px;'>Choose breakpoints based on your content and actual device usage, not arbitrary numbers.</p><p style='margin-bottom:8px;'>Mobile-first approach: start with mobile styles, then add breakpoints for larger screens with <code>min-width</code>.</p><p style='margin-bottom:8px;'>This approach improves performance since mobile styles are delivered first.</p><p style='margin-bottom:8px;'>You might need 3-5 breakpoints for most sites, matching common device sizes.</p><p style='margin-bottom:8px;'>In this exercise, you will define breakpoints and adjust layouts accordingly.</p><p style='margin-bottom:8px;'>Proper breakpoint strategy ensures usability across the entire device spectrum.</p><p style='margin-bottom:8px;'>Testing at breakpoints is crucial to ensure designs work at all sizes.</p><p style='margin-bottom:8px;'>Breakpoints are where your responsive design proves itself.</p><p style='margin-bottom:8px;'>Understanding breakpoints is essential for professional responsive design.</p><p style='margin-bottom:8px;'>Master breakpoints and create seamlessly responsive experiences!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create breakpoints for: mobile (max-width: 480px), tablet (min-width: 481px, max-width: 768px), and desktop (min-width: 769px). Apply different styles to a container at each breakpoint.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write three media queries with different width ranges and apply different background colors or widths to test the breakpoints.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Breakpoints</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="container">Responsive container</div>\n</body>\n</html>',
        '/style.css': '/* Define breakpoints for different device sizes */',
      },
      regex:
        '@media.*max-width.*480px|@media.*min-width.*481px|@media.*min-width.*769px',
      output:
        '@media (max-width: 480px) { .container { width: 100%; } } @media (min-width: 481px) and (max-width: 768px) { .container { width: 90%; } } @media (min-width: 769px) { .container { width: 80%; max-width: 1200px; } }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'fluid-layouts',
    exerciseName: 'Fluid Layouts',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Fluid layouts use percentage widths and flexible sizing instead of fixed pixels.</p><p style='margin-bottom:8px;'>A container with <code>width: 90%</code> adapts to screen size, staying usable across all devices.</p><p style='margin-bottom:8px;'>Combining fluid widths with max-width creates a best-of-both approach: scales down on small screens but maxes out on large ones.</p><p style='margin-bottom:8px;'>The pattern <code>width: 100%; max-width: 1200px</code> is extremely common and effective.</p><p style='margin-bottom:8px;'>Fluid layouts are more natural than trying to create a fixed layout for every device.</p><p style='margin-bottom:8px;'>Combined with flexbox and grid, fluid layouts create truly responsive designs.</p><p style='margin-bottom:8px;'>In this exercise, you will create fluid layouts that adapt smoothly to any screen width.</p><p style='margin-bottom:8px;'>Fluid layouts reduce the number of breakpoints needed in your CSS.</p><p style='margin-bottom:8px;'>This approach is more maintenance-friendly and scalable.</p><p style='margin-bottom:8px;'>Modern responsive design emphasizes fluid layouts over fixed breakpoints.</p><p style='margin-bottom:8px;'>Fluid layouts are the foundation of elastic, adaptive web design.</p><p style='margin-bottom:8px;'>Master fluid layouts and create sites that adapt naturally to any width!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a fluid layout with <code>width: 90%; max-width: 1200px; margin: 0 auto;</code> for a main container.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Apply width: 90%, max-width: 1200px, and margin: 0 auto to a container class for a centered fluid layout.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Fluid Layout</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="container">\n    <h1>Fluid Layout</h1>\n    <p>This container adapts to screen size with fluid width.</p>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Create a fluid layout container */',
      },
      regex:
        'width\\s*:\\s*90%[^}]*max-width\\s*:\\s*1200px[^}]*margin\\s*:\\s*0\\s+auto|width\\s*:\\s*90%;[^}]*max-width\\s*:\\s*1200px;[^}]*margin\\s*:\\s*0\\s+auto',
      output: '.container { width: 90%; max-width: 1200px; margin: 0 auto; }',
      hintXp: 35,
    },
  },
  {
    courseId: 3,
    exerciseId: 'mobile-first-design',
    exerciseName: 'Mobile First Design',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Mobile-first design means building for mobile devices first, then progressively enhancing for larger screens.</p><p style='margin-bottom:8px;'>Start with a simple, mobile-optimized layout, then use <code>min-width</code> breakpoints to add features.</p><p style='margin-bottom:8px;'>This approach improves performance since mobile devices get smaller, optimized CSS.</p><p style='margin-bottom:8px;'>It also encourages simplicity and focus on essential content and features.</p><p style='margin-bottom:8px;'>Mobile-first media queries look like: <code>@media (min-width: 768px) { ... more complex layout ... }</code>.</p><p style='margin-bottom:8px;'>This is the opposite of desktop-first, which starts complex then simplifies for mobile.</p><p style='margin-bottom:8px;'>In this exercise, you will structure CSS using mobile-first principles.</p><p style='margin-bottom:8px;'>Most modern frameworks and methodologies follow mobile-first approach.</p><p style='margin-bottom:8px;'>Mobile-first design aligns with how users actually access the web.</p><p style='margin-bottom:8px;'>This methodology has become industry standard best practice.</p><p style='margin-bottom:8px;'>Understanding mobile-first design is essential for contemporary web development.</p><p style='margin-bottom:8px;'>Master mobile-first design and build future-proof responsive websites!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Structure your CSS: 1) Base mobile styles (no media query), 2) <code>@media (min-width: 768px) { ... tablet and up changes ... }</code>, 3) <code>@media (min-width: 1024px) { ... desktop changes ... }</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write mobile styles first outside any media queries, then add @media blocks with min-width for larger screens.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Mobile First</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="grid">\n    <div>Item 1</div>\n    <div>Item 2</div>\n    <div>Item 3</div>\n  </div>\n</body>\n</html>',
        '/style.css':
          '/* Mobile first: start with mobile styles, enhance for larger screens */',
      },
      regex:
        '@media\\s*\\(min-width\\s*:\\s*768px\\)|@media\\s*\\(min-width\\s*:\\s*1024px\\)',
      output:
        '.grid { display: grid; grid-template-columns: 1fr; gap: 10px; } @media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); gap: 15px; } } @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }',
      hintXp: 40,
    },
  },
  {
    courseId: 3,
    exerciseId: 'build-a-responsive-page',
    exerciseName: 'Build a Responsive Page',
    chapterId: 9,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>This project combines all responsive design concepts: viewport tag, media queries, breakpoints, and fluid layouts.</p><p style='margin-bottom:8px;'>You will create a complete responsive page that works beautifully on mobile, tablet, and desktop.</p><p style='margin-bottom:8px;'>The page should include responsive navigation, flexible content areas, and adaptive typography.</p><p style='margin-bottom:8px;'>This exercise demonstrates that responsive design is not hard with proper planning.</p><p style='margin-bottom:8px;'>A well-executed responsive page provides excellent user experience on any device.</p><p style='margin-bottom:8px;'>This project brings together all Chapter 9 concepts into a cohesive, working site.</p><p style='margin-bottom:8px;'>In this exercise, you will build a real-world responsive page.</p><p style='margin-bottom:8px;'>Professional websites must be responsive; this is non-negotiable in modern web design.</p><p style='margin-bottom:8px;'>This project tests your understanding of responsive design comprehensively.</p><p style='margin-bottom:8px;'>A responsive page demonstrates your mastery of crucial web development skills.</p><p style='margin-bottom:8px;'>This is a milestone project that proves you understand modern web design.</p><p style='margin-bottom:8px;'>Build a responsive page and demonstrate your web design expertise!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a responsive page with: 1) Viewport meta tag, 2) Fluid container (90% width, max 1200px), 3) Responsive navigation (flex, column on mobile, row on desktop), 4) Media queries for mobile/tablet/desktop breakpoints, 5) Responsive typography that scales with screen size.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Build a complete HTML file with CSS that includes all responsive design patterns: viewport tag, mobile-first CSS, media queries at 768px and 1024px breakpoints.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Responsive Page</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <nav class="navbar">\n    <a href="#">Logo</a>\n    <div class="nav-items">\n      <a href="#">Home</a>\n      <a href="#">About</a>\n      <a href="#">Contact</a>\n    </div>\n  </nav>\n  <div class="container">\n    <h1>Responsive Website</h1>\n    <p>This site adapts to any screen size.</p>\n  </div>\n</body>\n</html>',
        '/style.css':
          '/* Build a complete responsive page with all patterns */',
      },
      regex: '<meta\\s+name="viewport"|@media|fluid|responsive|container',
      output:
        'Complete responsive page with viewport tag, media queries, fluid layout, and responsive typography',
      hintXp: 50,
    },
  },
  // Chapter 10: Transitions & Animations (6 exercises)
  {
    courseId: 3,
    exerciseId: 'css-transitions',
    exerciseName: 'CSS Transitions',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>CSS transitions smoothly animate property changes over a specified duration.</p><p style='margin-bottom:8px;'>The <code>transition</code> property specifies which properties to animate and how long the animation lasts.</p><p style='margin-bottom:8px;'>Basic syntax: <code>transition: property duration timing-function delay;</code>.</p><p style='margin-bottom:8px;'>Common timing functions: ease (default, slow start/end), linear (constant speed), ease-in, ease-out, ease-in-out.</p><p style='margin-bottom:8px;'>You can transition multiple properties: <code>transition: color 0.3s, background 0.5s;</code>.</p><p style='margin-bottom:8px;'>Or apply to all properties: <code>transition: all 0.3s;</code>.</p><p style='margin-bottom:8px;'>Transitions require a state change: hover, active, class change from JavaScript, etc.</p><p style='margin-bottom:8px;'>In this exercise, you will create smooth transitions on user interaction.</p><p style='margin-bottom:8px;'>Well-executed transitions improve perceived performance and user satisfaction.</p><p style='margin-bottom:8px;'>Subtle transitions feel more polished than instant changes.</p><p style='margin-bottom:8px;'>Transitions are the simplest form of animation and should be your first choice.</p><p style='margin-bottom:8px;'>Master transitions and add polish to your interactive elements!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a button with <code>transition: all 0.3s ease;</code> and change its background-color and text color on hover.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>button { transition: all 0.3s ease; }</code> and <code>button:hover { background-color: #new-color; }</code> in your CSS.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Transitions</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <button>Hover me</button>\n</body>\n</html>',
        '/style.css': '/* Add transition to button */',
      },
      regex: 'transition\\s*:\\s*all\\s+0\\.3s\\s+ease',
      output:
        'button { transition: all 0.3s ease; background-color: #007bff; } button:hover { background-color: #0056b3; }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'hover-effects',
    exerciseName: 'Hover Effects',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Hover effects provide visual feedback that elements are interactive and clickable.</p><p style='margin-bottom:8px;'>The <code>:hover</code> pseudo-class applies styles when a user hovers over an element.</p><p style='margin-bottom:8px;'>Common hover effects include color changes, scaling, shadows, and background transitions.</p><p style='margin-bottom:8px;'>Scaling with <code>transform: scale(1.1)</code> makes elements grow slightly on hover.</p><p style='margin-bottom:8px;'>Shadow effects with <code>box-shadow</code> create depth and elevation.</p><p style='margin-bottom:8px;'>Combined with transitions, hover effects feel smooth and professional.</p><p style='margin-bottom:8px;'>In this exercise, you will create engaging hover effects on interactive elements.</p><p style='margin-bottom:8px;'>Well-designed hover effects improve user experience and encourage interaction.</p><p style='margin-bottom:8px;'>Hover effects should be subtle enough not to distract but obvious enough to notice.</p><p style='margin-bottom:8px;'>Buttons, links, and cards are prime targets for hover effect enhancement.</p><p style='margin-bottom:8px;'>Hover effects are a key part of modern, interactive web design.</p><p style='margin-bottom:8px;'>Master hover effects and make your interactive elements delightful!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a link with <code>:hover</code> that changes color to #ff6600 and adds <code>text-decoration: underline</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>a { transition: all 0.3s; }</code> and <code>a:hover { color: #ff6600; text-decoration: underline; }</code>.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Hover Effects</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <a href="#">Hover over this link</a>\n</body>\n</html>',
        '/style.css': '/* Add hover effects to links */',
      },
      regex:
        'a:hover\\s*\\{[^}]*color\\s*:\\s*#ff6600[^}]*text-decoration\\s*:\\s*underline',
      output:
        'a { transition: all 0.3s; } a:hover { color: #ff6600; text-decoration: underline; }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'transform-property',
    exerciseName: 'Transform Property',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The <code>transform</code> property applies 2D and 3D transformations to elements.</p><p style='margin-bottom:8px;'><code>translate()</code> moves elements: <code>transform: translateX(50px)</code> moves right.</p><p style='margin-bottom:8px;'><code>scale()</code> resizes elements: <code>transform: scale(1.2)</code> makes 20% larger.</p><p style='margin-bottom:8px;'><code>rotate()</code> spins elements: <code>transform: rotate(45deg)</code> rotates 45 degrees.</p><p style='margin-bottom:8px;'><code>skew()</code> skews elements: <code>transform: skewX(10deg)</code> skews horizontally.</p><p style='margin-bottom:8px;'>Multiple transforms can be combined: <code>transform: scale(1.1) rotate(5deg)</code>.</p><p style='margin-bottom:8px;'>Transforms are GPU-accelerated, making them performant even for animations.</p><p style='margin-bottom:8px;'>In this exercise, you will use various transform functions creatively.</p><p style='margin-bottom:8px;'>Transforms enable sophisticated visual effects without changing HTML structure.</p><p style='margin-bottom:8px;'>Combined with transitions, transforms create smooth animations.</p><p style='margin-bottom:8px;'>Understanding transforms unlocks creative design possibilities.</p><p style='margin-bottom:8px;'>Master transforms and create visually impressive interactive effects!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a box that scales with <code>transform: scale(1.1)</code> on hover and rotates with <code>transform: rotate(5deg)</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write <code>.box:hover { transform: scale(1.1) rotate(5deg); }</code> with a transition for smooth animation.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Transform</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="box">Hover for transform</div>\n</body>\n</html>',
        '/style.css': '/* Apply transforms on hover */',
      },
      regex: 'transform\\s*:\\s*scale\\(1\\.1\\)\\s+rotate\\(5deg\\)',
      output:
        '.box { transition: transform 0.3s ease; } .box:hover { transform: scale(1.1) rotate(5deg); }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'keyframe-animations',
    exerciseName: 'Keyframe Animations',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Keyframe animations allow complex, multi-step animations beyond simple transitions.</p><p style='margin-bottom:8px;'>Define animations with <code>@keyframes name { ... }</code> and apply with <code>animation: name duration</code>.</p><p style='margin-bottom:8px;'>Keyframes use percentages (0%, 50%, 100%) or keywords (from, to) to define animation stages.</p><p style='margin-bottom:8px;'><code>0% { property: value; }</code> defines the starting state, <code>100% { ... }</code> the ending state.</p><p style='margin-bottom:8px;'>Intermediate keyframes (like 50%) create complex motions and effects.</p><p style='margin-bottom:8px;'>Animation properties include duration, timing-function, delay, and iteration-count.</p><p style='margin-bottom:8px;'><code>animation-iteration-count: infinite</code> loops the animation forever.</p><p style='margin-bottom:8px;'>In this exercise, you will create engaging keyframe animations.</p><p style='margin-bottom:8px;'>Keyframe animations enable sophisticated visual storytelling and engagement.</p><p style='margin-bottom:8px;'>Common animations include fade-in, slide-in, bounce, and rotating effects.</p><p style='margin-bottom:8px;'>Keyframe animations are essential for creating modern, dynamic websites.</p><p style='margin-bottom:8px;'>Master keyframe animations and create compelling visual experiences!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a fade-in animation: <code>@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }</code> and apply to an element.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write the @keyframes fadeIn block and apply with <code>animation: fadeIn 1s;</code> on your element.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Animations</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="box">Animated box</div>\n</body>\n</html>',
        '/style.css': '/* Create a keyframe animation */',
      },
      regex:
        '@keyframes\\s+fadeIn\\s*\\{\\s*0%\\s*\\{[^}]*opacity\\s*:\\s*0[^}]*\\}\\s*100%\\s*\\{[^}]*opacity\\s*:\\s*1',
      output:
        '@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } } .box { animation: fadeIn 1s; }',
      hintXp: 40,
    },
  },
  {
    courseId: 3,
    exerciseId: 'animation-timing',
    exerciseName: 'Animation Timing',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Animation timing controls the speed and feel of animations through timing functions and delays.</p><p style='margin-bottom:8px;'>Timing functions like ease, linear, ease-in, ease-out control acceleration and deceleration.</p><p style='margin-bottom:8px;'><code>animation-timing-function: ease-in-out</code> creates natural-feeling animations.</p><p style='margin-bottom:8px;'><code>animation-delay</code> staggers animations, making them appear sequentially.</p><p style='margin-bottom:8px;'><code>animation-duration</code> controls how long the animation lasts.</p><p style='margin-bottom:8px;'>Cubic-bezier functions allow precise control: <code>cubic-bezier(0.25, 0.1, 0.25, 1)</code>.</p><p style='margin-bottom:8px;'>In this exercise, you will fine-tune animation timing for optimal visual effect.</p><p style='margin-bottom:8px;'>Proper timing makes animations feel natural and intentional.</p><p style='margin-bottom:8px;'>Timing functions are crucial for creating professional animations.</p><p style='margin-bottom:8px;'>Delays can create cascading effects that feel coordinated and sophisticated.</p><p style='margin-bottom:8px;'>Understanding animation timing elevates your animation craft.</p><p style='margin-bottom:8px;'>Master animation timing and create smooth, professional animations!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create animations with different timing: <code>animation: move 1s ease-in-out;</code> and use <code>animation-delay: 0.2s</code> to stagger multiple elements.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Apply different animation-delay values to multiple elements to create staggered animations.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Animation Timing</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="box">Box 1</div>\n  <div class="box">Box 2</div>\n  <div class="box">Box 3</div>\n</body>\n</html>',
        '/style.css': '/* Control animation timing and delays */',
      },
      regex: 'animation-delay|animation-timing-function',
      output:
        '.box { animation: move 1s ease-in-out; } .box:nth-child(1) { animation-delay: 0s; } .box:nth-child(2) { animation-delay: 0.2s; } .box:nth-child(3) { animation-delay: 0.4s; }',
      hintXp: 35,
    },
  },
  {
    courseId: 3,
    exerciseId: 'build-an-animated-button',
    exerciseName: 'Build an Animated Button',
    chapterId: 10,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>This project combines transitions, transforms, and hover effects to create an engaging animated button.</p><p style='margin-bottom:8px;'>A professional animated button provides visual feedback and encourages user interaction.</p><p style='margin-bottom:8px;'>This exercise brings together all transition and animation concepts from this chapter.</p><p style='margin-bottom:8px;'>Animated buttons can include multiple effects: color change, scale, shadow, glow.</p><p style='margin-bottom:8px;'>A well-designed button animation feels responsive and delightful.</p><p style='margin-bottom:8px;'>In this project, you will create a button with smooth, layered animations.</p><p style='margin-bottom:8px;'>This real-world project tests your animation and transition skills.</p><p style='margin-bottom:8px;'>Great buttons are a hallmark of polished, professional web design.</p><p style='margin-bottom:8px;'>This project demonstrates mastery of CSS animation and interaction design.</p><p style='margin-bottom:8px;'>Animated buttons significantly improve perceived quality and user satisfaction.</p><p style='margin-bottom:8px;'>This is a signature project that showcases your CSS skills.</p><p style='margin-bottom:8px;'>Build a stunning animated button and impress with your design skills!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create an animated button: 1) Base styles: background #007bff, color white, padding 12px 24px, border none, border-radius 5px. 2) Transition: all 0.3s ease. 3) Hover: background #0056b3, transform: scale(1.05), box-shadow with offset. 4) Active: transform: scale(0.95) for click feedback.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create button styles with transition, then add :hover and :active states with transform and box-shadow changes.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Animated Button</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <button class="btn">Click Me</button>\n</body>\n</html>',
        '/style.css': '/* Create a professional animated button */',
      },
      regex: 'transition.*all|:hover|:active|transform',
      output:
        '.btn { background-color: #007bff; color: white; padding: 12px 24px; border: none; border-radius: 5px; transition: all 0.3s ease; } .btn:hover { background-color: #0056b3; transform: scale(1.05); box-shadow: 0 4px 8px rgba(0,0,0,0.2); } .btn:active { transform: scale(0.95); }',
      hintXp: 45,
    },
  },
  // Chapter 11: Advanced Selectors (6 exercises)
  {
    courseId: 3,
    exerciseId: 'pseudo-classes',
    exerciseName: 'Pseudo-Classes',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Pseudo-classes are keywords that define special states of elements without modifying HTML.</p><p style='margin-bottom:8px;'>The syntax is <code>selector:pseudo-class { ... }</code>, starting with a colon.</p><p style='margin-bottom:8px;'><code>:hover</code> applies styles when users hover over elements.</p><p style='margin-bottom:8px;'><code>:active</code> applies styles when elements are clicked or pressed.</p><p style='margin-bottom:8px;'><code>:focus</code> applies styles when elements receive keyboard focus, important for accessibility.</p><p style='margin-bottom:8px;'><code>:visited</code> applies styles to visited links, helping users track browsing history.</p><p style='margin-bottom:8px;'><code>:nth-child(n)</code> selects specific children based on position.</p><p style='margin-bottom:8px;'>In this exercise, you will use various pseudo-classes for interactive styling.</p><p style='margin-bottom:8px;'>Pseudo-classes enable responsive, interactive styling without JavaScript.</p><p style='margin-bottom:8px;'>They are essential for form styling and user feedback.</p><p style='margin-bottom:8px;'>Understanding pseudo-classes unlocks sophisticated selector capabilities.</p><p style='margin-bottom:8px;'>Proper pseudo-class usage improves accessibility and user experience.</p><p style='margin-bottom:8px;'>Master pseudo-classes and create fully interactive, accessible experiences!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create styles for: 1) <code>a:hover</code> with color change, 2) <code>a:visited</code> with different color, 3) <code>input:focus</code> with border highlight.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write three separate rules using :hover, :visited, and :focus pseudo-classes with different style properties.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Pseudo-Classes</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <a href="#">Link</a>\n  <input type="text" placeholder="Focus here">\n</body>\n</html>',
        '/style.css': '/* Apply pseudo-class styles */',
      },
      regex: 'a:hover|a:visited|input:focus',
      output:
        'a:hover { color: #ff6600; } a:visited { color: #800080; } input:focus { border: 2px solid #007bff; outline: none; }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'first-and-last-child',
    exerciseName: 'First & Last Child',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The <code>:first-child</code> pseudo-class selects the first child element of its parent.</p><p style='margin-bottom:8px;'>The <code>:last-child</code> pseudo-class selects the last child element.</p><p style='margin-bottom:8px;'>These are useful for removing borders or margins from first/last items in lists.</p><p style='margin-bottom:8px;'>Example: <code>li:first-child { margin-top: 0; }</code> removes top margin from first list item.</p><p style='margin-bottom:8px;'>Similarly, <code>li:last-child { margin-bottom: 0; }</code> removes bottom margin from last item.</p><p style='margin-bottom:8px;'>This prevents accumulated padding that makes layouts look off-balance.</p><p style='margin-bottom:8px;'>These pseudo-classes are simpler and more reliable than adding special classes in HTML.</p><p style='margin-bottom:8px;'>In this exercise, you will use first-child and last-child for layout refinement.</p><p style='margin-bottom:8px;'>These pseudo-classes solve common styling challenges elegantly.</p><p style='margin-bottom:8px;'>Proper use of these selectors improves design precision.</p><p style='margin-bottom:8px;'>Understanding them is fundamental to advanced CSS.</p><p style='margin-bottom:8px;'>Master first-child and last-child and refine your layouts perfectly!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Remove margin from first and last items in a list: <code>li:first-child { margin-top: 0; }</code> and <code>li:last-child { margin-bottom: 0; }</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write two rules using :first-child and :last-child to clean up list spacing at boundaries.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>First & Last Child</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</body>\n</html>',
        '/style.css': '/* Style first and last children */',
      },
      regex: 'li:first-child|li:last-child',
      output:
        'li { margin: 10px 0; } li:first-child { margin-top: 0; } li:last-child { margin-bottom: 0; }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'nth-child',
    exerciseName: 'Nth-Child',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The <code>:nth-child(n)</code> pseudo-class selects elements based on their position among siblings.</p><p style='margin-bottom:8px;'><code>:nth-child(2)</code> selects the second child, <code>:nth-child(3)</code> the third, etc.</p><p style='margin-bottom:8px;'><code>:nth-child(2n)</code> selects every even child (2, 4, 6, ...).</p><p style='margin-bottom:8px;'><code>:nth-child(2n+1)</code> selects every odd child (1, 3, 5, ...).</p><p style='margin-bottom:8px;'>A common pattern is striped tables: alternating row colors improve readability.</p><p style='margin-bottom:8px;'>Example: <code>tr:nth-child(even) { background-color: #f0f0f0; }</code> for alternating rows.</p><p style='margin-bottom:8px;'>In this exercise, you will create alternating styles using nth-child.</p><p style='margin-bottom:8px;'>Nth-child selectors are powerful for pattern-based styling without HTML changes.</p><p style='margin-bottom:8px;'>This is essential for styling tables and lists in complex patterns.</p><p style='margin-bottom:8px;'>Understanding nth-child opens up sophisticated styling possibilities.</p><p style='margin-bottom:8px;'>This pseudo-class is invaluable for data-heavy interfaces.</p><p style='margin-bottom:8px;'>Master nth-child and create beautiful patterned layouts!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create alternating row colors: <code>tr:nth-child(odd) { background-color: #ffffff; }</code> and <code>tr:nth-child(even) { background-color: #f0f0f0; }</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write rules using :nth-child(odd) and :nth-child(even) to create striped table styling.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Nth Child</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <table>\n    <tr><td>Row 1</td></tr>\n    <tr><td>Row 2</td></tr>\n    <tr><td>Row 3</td></tr>\n    <tr><td>Row 4</td></tr>\n  </table>\n</body>\n</html>',
        '/style.css': '/* Create alternating row colors */',
      },
      regex: 'nth-child\\(odd\\)|nth-child\\(even\\)',
      output:
        'tr:nth-child(odd) { background-color: #ffffff; } tr:nth-child(even) { background-color: #f0f0f0; }',
      hintXp: 35,
    },
  },
  {
    courseId: 3,
    exerciseId: 'pseudo-elements',
    exerciseName: 'Pseudo-Elements',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Pseudo-elements are keywords that create virtual elements without HTML changes.</p><p style='margin-bottom:8px;'>The syntax is <code>selector::pseudo-element { ... }</code>, using double colons.</p><p style='margin-bottom:8px;'><code>::first-line</code> styles the first line of text in an element.</p><p style='margin-bottom:8px;'><code>::first-letter</code> styles the first letter, useful for drop caps.</p><p style='margin-bottom:8px;'><code>::selection</code> styles text highlighted by users.</p><p style='margin-bottom:8px;'><code>::before</code> and <code>::after</code> create virtual elements for decoration.</p><p style='margin-bottom:8px;'>Pseudo-elements improve visual design without cluttering HTML.</p><p style='margin-bottom:8px;'>In this exercise, you will use pseudo-elements for styling enhancements.</p><p style='margin-bottom:8px;'>Pseudo-elements are essential for advanced CSS techniques.</p><p style='margin-bottom:8px;'>Creative use of pseudo-elements solves many design challenges.</p><p style='margin-bottom:8px;'>Understanding pseudo-elements unlocks sophisticated styling capabilities.</p><p style='margin-bottom:8px;'>They are particularly useful for typography and decoration.</p><p style='margin-bottom:8px;'>Master pseudo-elements and create beautiful, sophisticated designs!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Style pseudo-elements: 1) <code>p::first-letter { font-size: 2em; font-weight: bold; }</code>, 2) <code>::selection { background-color: #ffff00; }</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write rules for ::first-letter to enlarge the first letter and ::selection to highlight selected text.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Pseudo-Elements</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <p>This paragraph has special first-letter styling.</p>\n</body>\n</html>',
        '/style.css': '/* Apply pseudo-element styles */',
      },
      regex: '::first-letter|::selection',
      output:
        'p::first-letter { font-size: 2em; font-weight: bold; color: #ff6600; } ::selection { background-color: #ffff00; color: #000000; }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'before-and-after',
    exerciseName: 'Before & After',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>The <code>::before</code> and <code>::after</code> pseudo-elements create virtual content before and after elements.</p><p style='margin-bottom:8px;'>They require the <code>content</code> property to display anything: <code>content: \"text\";</code>.</p><p style='margin-bottom:8px;'>Before and After elements can hold icons, decorations, or text without HTML changes.</p><p style='margin-bottom:8px;'>Example: <code>a::before { content: \"→ \"; }</code> adds an arrow before links.</p><p style='margin-bottom:8px;'>They can be styled with all CSS properties: color, size, position, animation.</p><p style='margin-bottom:8px;'>Common uses include quote marks, icons, separators, and decorative borders.</p><p style='margin-bottom:8px;'>In this exercise, you will create decorative content with before and after.</p><p style='margin-bottom:8px;'>Before and After are powerful for reducing HTML bloat and improving maintainability.</p><p style='margin-bottom:8px;'>These pseudo-elements enable sophisticated design without modifying markup.</p><p style='margin-bottom:8px;'>Understanding them is essential for modern, clean CSS.</p><p style='margin-bottom:8px;'>Creative use of before and after creates elegant, efficient designs.</p><p style='margin-bottom:8px;'>Master before and after and add polish without HTML clutter!</p></body>",
      task: '<body style=\'font-family:Arial,sans-serif;padding:10px;\'><p>Add decorative content: 1) <code>h1::before { content: "▸ "; }</code> adds a marker before headings, 2) <code>p::after { content: " ‡"; }</code> adds a symbol after paragraphs.</p></body>',
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use ::before and ::after with content property to add decorative elements before and after elements.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Before & After</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Heading with marker</h1>\n  <p>Paragraph with trailing symbol.</p>\n</body>\n</html>',
        '/style.css': '/* Add decorative content with ::before and ::after */',
      },
      regex: 'content\\s*:\\s*["\'].*["\']',
      output:
        'h1::before { content: \"▸ \"; color: #ff6600; } p::after { content: \" ‡\"; font-weight: bold; }',
      hintXp: 40,
    },
  },
  {
    courseId: 3,
    exerciseId: 'advanced-selector-challenge',
    exerciseName: 'Advanced Selector Challenge',
    chapterId: 11,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>This challenge combines all advanced selector concepts: pseudo-classes, pseudo-elements, and complex selectors.</p><p style='margin-bottom:8px;'>You will style a complex page structure using only CSS selectors, without adding classes to HTML.</p><p style='margin-bottom:8px;'>This exercise demonstrates true CSS mastery and semantic selector design.</p><p style='margin-bottom:8px;'>Using advanced selectors reduces HTML bloat and creates maintainable, clean code.</p><p style='margin-bottom:8px;'>This project brings together all Chapter 11 concepts into a sophisticated styling task.</p><p style='margin-bottom:8px;'>Complex selector chains enable precise targeting of specific elements.</p><p style='margin-bottom:8px;'>In this exercise, you will prove your advanced selector proficiency.</p><p style='margin-bottom:8px;'>Professional developers use advanced selectors to write efficient CSS.</p><p style='margin-bottom:8px;'>This challenge tests your understanding comprehensively.</p><p style='margin-bottom:8px;'>Mastering selectors is the foundation of CSS expertise.</p><p style='margin-bottom:8px;'>This is a capstone project for selector knowledge.</p><p style='margin-bottom:8px;'>Complete this challenge and establish yourself as a CSS selector expert!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a complex selector solution: 1) Style links differently based on state (normal, :hover, :active, :visited), 2) Apply alternating row colors with :nth-child, 3) Add decorative markers with ::before, 4) Style form inputs with :focus.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write comprehensive selector rules combining pseudo-classes, pseudo-elements, and nth-child patterns.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Advanced Selectors</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <a href="#">Link 1</a>\n  <a href="#">Link 2</a>\n  <table>\n    <tr><td>Row 1</td></tr>\n    <tr><td>Row 2</td></tr>\n  </table>\n  <input type="text">\n</body>\n</html>',
        '/style.css': '/* Master all advanced selectors */',
      },
      regex: '::before|:nth-child|:focus|:hover|:visited',
      output:
        'a { color: #0066cc; text-decoration: none; } a:hover { color: #ff6600; text-decoration: underline; } a:visited { color: #800080; } a::before { content: \"→ \"; } tr:nth-child(odd) { background-color: #f0f0f0; } input:focus { border: 2px solid #007bff; outline: none; }',
      hintXp: 45,
    },
  },
  // Chapter 12: CSS Best Practices (6 exercises)
  {
    courseId: 3,
    exerciseId: 'css-organization',
    exerciseName: 'CSS Organization',
    chapterId: 12,
    exercisesContent: {
      content: `<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Well-organized CSS is easier to maintain, understand, and collaborate on.</p><p style='margin-bottom:8px;'>Common organization strategies: group by component, by type (typography, layout, colors), or by page section.</p><p style='margin-bottom:8px;'>Using comments to separate sections makes large stylesheets navigable: <code>/* === Header === */</code>.</p><p style='margin-bottom:8px;'>Consistent property ordering (box model, typography, colors) makes rules predictable.</p><p style='margin-bottom:8px;'>Separate files for different concerns (layout.css, components.css, utilities.css) improve scalability.</p><p style='margin-bottom:8px;'>A table of contents at the top of CSS files helps developers find sections quickly.</p><p style='margin-bottom:8px;'>In this exercise, you will organize CSS following best practices.</p><p style='margin-bottom:8px;'>Good organization is a hallmark of professional development.</p><p style='margin-bottom:8px;'>Well-organized code is easier to debug and modify.</p><p style='margin-bottom:8px;'>Organization improves team collaboration and onboarding.</p><p style='margin-bottom:8px;'>This is essential for maintaining large projects.</p><p style='margin-bottom:8px;'>Master CSS organization and write maintainable stylesheets!</p></body>`,
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Organize CSS with sections: 1) Variables (--primary-color: #007bff), 2) Base styles (body, html), 3) Typography (h1-h6, p), 4) Components (buttons, cards), 5) Utilities (spacing, alignment). Add comments before each section.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use comment headers to organize CSS into logical sections with clear separation and organization.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Organization</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Organized CSS Example</h1>\n  <button>Click me</button>\n</body>\n</html>',
        '/style.css': '/* Write organized, well-structured CSS */',
      },
      regex: '/\\*.*===|:root|variables|base|typography|components',
      output:
        '/* === VARIABLES === */ :root { --primary: #007bff; } /* === BASE === */ body { font-family: Arial; } /* === TYPOGRAPHY === */ h1 { font-size: 32px; } /* === COMPONENTS === */ button { background: var(--primary); }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'bem-methodology',
    exerciseName: 'BEM Methodology',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>BEM (Block Element Modifier) is a naming convention for CSS classes that improves maintainability.</p><p style='margin-bottom:8px;'>A Block is a standalone component: <code>.button</code>, <code>.card</code>, <code>.navbar</code>.</p><p style='margin-bottom:8px;'>An Element is a part of a block: <code>.button__text</code>, <code>.card__title</code>.</p><p style='margin-bottom:8px;'>A Modifier is a variation: <code>.button--primary</code>, <code>.button--large</code>.</p><p style='margin-bottom:8px;'>BEM naming makes relationships clear and CSS more predictable.</p><p style='margin-bottom:8px;'>The convention is strict but worth learning for professional projects.</p><p style='margin-bottom:8px;'>Example: <code>.card { } .card__title { } .card--featured { }</code>.</p><p style='margin-bottom:8px;'>In this exercise, you will practice BEM naming conventions.</p><p style='margin-bottom:8px;'>BEM reduces specificity wars and makes cascading predictable.</p><p style='margin-bottom:8px;'>Many large projects use BEM or similar conventions.</p><p style='margin-bottom:8px;'>Understanding BEM prepares you for professional team environments.</p><p style='margin-bottom:8px;'>BEM is a best practice for scalable CSS architecture.</p><p style='margin-bottom:8px;'>Master BEM and write scalable, maintainable CSS!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Apply BEM naming: 1) <code>.card { }</code> (block), 2) <code>.card__title { }</code> and <code>.card__content { }</code> (elements), 3) <code>.card--featured { }</code> and <code>.card--small { }</code> (modifiers). Ensure all selectors follow BEM pattern.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use double underscore for elements, double hyphen for modifiers. Keep naming consistent and semantic.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>BEM Methodology</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="card card--featured">\n    <h2 class="card__title">Card Title</h2>\n    <p class="card__content">Content here</p>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Apply BEM naming conventions */',
      },
      regex: '__\\w+|--\\w+',
      output:
        '.card { padding: 20px; border: 1px solid #ccc; } .card__title { font-size: 20px; margin-bottom: 10px; } .card__content { font-size: 14px; } .card--featured { border-color: #ff6600; background-color: #fff9f0; } .card--small { padding: 10px; }',
      hintXp: 35,
    },
  },
  {
    courseId: 3,
    exerciseId: 'css-variables',
    exerciseName: 'CSS Variables',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>CSS Variables (custom properties) store reusable values, reducing repetition and improving maintainability.</p><p style='margin-bottom:8px;'>Define variables in :root for global scope: <code>--primary-color: #007bff;</code>.</p><p style='margin-bottom:8px;'>Use variables with <code>var(--primary-color)</code> anywhere in CSS.</p><p style='margin-bottom:8px;'>Variables can be overridden in specific scopes, creating theme variations.</p><p style='margin-bottom:8px;'>Common variables: colors, spacing units, font sizes, z-index values.</p><p style='margin-bottom:8px;'>Changing a variable globally updates all uses automatically.</p><p style='margin-bottom:8px;'>This enables easy theme switching and maintenance.</p><p style='margin-bottom:8px;'>In this exercise, you will use CSS variables for theming.</p><p style='margin-bottom:8px;'>Variables improve code consistency and reduce errors.</p><p style='margin-bottom:8px;'>They enable professional design systems and theme management.</p><p style='margin-bottom:8px;'>Variables are essential for modern CSS architecture.</p><p style='margin-bottom:8px;'>Understanding variables prepares you for professional workflows.</p><p style='margin-bottom:8px;'>Master CSS variables and build flexible, themeable designs!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Define and use CSS variables: 1) <code>:root { --primary: #007bff; --secondary: #6c757d; --spacing: 16px; }</code>, 2) Apply: <code>button { background: var(--primary); padding: var(--spacing); }</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Define variables in :root and use them with var() throughout your CSS. Keep naming consistent and descriptive.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Variables</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <button class="btn">Primary Button</button>\n  <button class="btn btn--secondary">Secondary Button</button>\n</body>\n</html>',
        '/style.css': '/* Define and use CSS variables */',
      },
      regex: '--\\w+\\s*:|var\\(--',
      output:
        ':root { --primary: #007bff; --secondary: #6c757d; --spacing: 16px; } button { background: var(--primary); padding: var(--spacing); color: white; } .btn--secondary { background: var(--secondary); }',
      hintXp: 30,
    },
  },
  {
    courseId: 3,
    exerciseId: 'performance-optimization',
    exerciseName: 'Performance Optimization',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>CSS performance impacts page load speed and user experience.</p><p style='margin-bottom:8px;'>Minimize CSS file size by removing unused rules and reducing duplication.</p><p style='margin-bottom:8px;'>Avoid overly specific selectors (too many classes/IDs) which increase file size.</p><p style='margin-bottom:8px;'>Use shorthand properties where possible: <code>margin: 10px</code> vs four separate rules.</p><p style='margin-bottom:8px;'>Avoid expensive selectors like universal selectors or long descendant chains.</p><p style='margin-bottom:8px;'>Use transform and opacity for animations as they are GPU-accelerated.</p><p style='margin-bottom:8px;'>Critical CSS (above-the-fold styles) should load first for faster rendering.</p><p style='margin-bottom:8px;'>In this exercise, you will optimize CSS for performance.</p><p style='margin-bottom:8px;'>Performance optimization is crucial for modern web standards.</p><p style='margin-bottom:8px;'>Fast-loading sites have better user experience and SEO rankings.</p><p style='margin-bottom:8px;'>CSS performance is often overlooked but significantly impacts results.</p><p style='margin-bottom:8px;'>Professional developers prioritize optimization.</p><p style='margin-bottom:8px;'>Master performance optimization and build lightning-fast sites!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Optimize CSS: 1) Use shorthand: <code>margin: 10px 20px</code> vs four separate rules, 2) Avoid specificity wars: <code>.btn { }</code> instead of <code>.header .nav .btn</code>, 3) Use transforms for animations: <code>transform: translateX()</code> instead of <code>left:</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Write efficient CSS using shorthand properties, simple selectors, and GPU-accelerated properties.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Performance</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="box">Optimized</div>\n</body>\n</html>',
        '/style.css': '/* Write optimized, efficient CSS */',
      },
      regex: 'shorthand|transform|efficient|optimized',
      output:
        '.box { padding: 20px; margin: 10px 20px; transition: all 0.3s; } .box:hover { transform: translateX(10px); }',
      hintXp: 40,
    },
  },
  {
    courseId: 3,
    exerciseId: 'browser-compatibility',
    exerciseName: 'Browser Compatibility',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Browser compatibility ensures sites work across different browsers and versions.</p><p style='margin-bottom:8px;'>Vendor prefixes (-webkit-, -moz-, -ms-) provide compatibility for newer CSS features.</p><p style='margin-bottom:8px;'>Example: <code>-webkit-transform: rotate(45deg);</code> for older Safari versions.</p><p style='margin-bottom:8px;'>Use fallback properties for unsupported features: <code>display: grid;</code> with <code>display: flex;</code> fallback.</p><p style='margin-bottom:8px;'>Feature detection helps identify browser capabilities before using advanced CSS.</p><p style='margin-bottom:8px;'>Test on real devices and browsers or use tools like BrowserStack.</p><p style='margin-bottom:8px;'>Modern CSS (Grid, Flexbox) has broad support but always check compatibility.</p><p style='margin-bottom:8px;'>In this exercise, you will add vendor prefixes and fallbacks.</p><p style='margin-bottom:8px;'>Browser compatibility is a professional requirement.</p><p style='margin-bottom:8px;'>Ignoring compatibility limits your audience.</p><p style='margin-bottom:8px;'>Professional sites support multiple browsers.</p><p style='margin-bottom:8px;'>Understanding compatibility makes you a responsible developer.</p><p style='margin-bottom:8px;'>Master browser compatibility and reach all users!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Add vendor prefixes and fallbacks: 1) <code>display: -webkit-flex; display: flex;</code>, 2) <code>-webkit-transform: rotate(45deg); transform: rotate(45deg);</code>, 3) Provide fallback colors for older browsers.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Include vendor prefixes before standard properties. Add fallback values for unsupported features.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Compatibility</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="flex-container">\n    <div class="item">Item</div>\n  </div>\n</body>\n</html>',
        '/style.css': '/* Add vendor prefixes and fallbacks */',
      },
      regex: '-webkit-|-moz-|-ms-|fallback',
      output:
        '.flex-container { display: -webkit-flex; display: -moz-flex; display: flex; } .item { -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); transform: rotate(45deg); }',
      hintXp: 25,
    },
  },
  {
    courseId: 3,
    exerciseId: 'code-refactoring',
    exerciseName: 'Code Refactoring',
    chapterId: 12,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;color:#e0e0e0;'><p style='margin-bottom:8px;'>Code refactoring improves CSS quality without changing functionality.</p><p style='margin-bottom:8px;'>Eliminate duplication by creating reusable classes and variables.</p><p style='margin-bottom:8px;'>Simplify selectors and reduce specificity conflicts.</p><p style='margin-bottom:8px;'>Extract common patterns into utility classes or component styles.</p><p style='margin-bottom:8px;'>Rename classes and variables to be more semantic and descriptive.</p><p style='margin-bottom:8px;'>Break large CSS files into smaller, logical modules.</p><p style='margin-bottom:8px;'>Remove dead code that is no longer used in the project.</p><p style='margin-bottom:8px;'>In this final exercise, you will refactor poorly written CSS.</p><p style='margin-bottom:8px;'>Refactoring is an ongoing process in professional development.</p><p style='margin-bottom:8px;'>Regular refactoring keeps codebases healthy and maintainable.</p><p style='margin-bottom:8px;'>This exercise is the capstone for all CSS best practices.</p><p style='margin-bottom:8px;'>Refactoring skills separate junior from senior developers.</p><p style='margin-bottom:8px;'>Master refactoring and become a truly professional CSS developer!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Refactor CSS: 1) Extract duplicated properties into shared classes, 2) Rename vague classes (.blue-button) to semantic ones (.btn-primary), 3) Use variables for repeated values, 4) Remove unused rules, 5) Simplify selectors and reduce nesting depth.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Review CSS for duplication, redundancy, and opportunities to simplify. Apply DRY (Don't Repeat Yourself) principles throughout.</p></body>",
      starterCode: {
        '/index.html':
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Refactoring</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <button class="btn">Button 1</button>\n  <button class="btn">Button 2</button>\n  <div class="box">Box</div>\n</body>\n</html>',
        '/style.css':
          '/* Refactor this CSS to be cleaner and more maintainable */',
      },
      regex: 'variable|shorthand|DRY|refactor|semantic',
      output:
        ':root { --primary: #007bff; --padding: 12px; } .btn { background: var(--primary); padding: var(--padding); border: none; cursor: pointer; } .box { padding: var(--padding); border: 1px solid #ccc; }',
      hintXp: 45,
    },
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = parseInt(searchParams.get('courseId') || '2');

  let DATA;
  let courseName;

  switch (courseId) {
    case 1:
      DATA = REACT_DATA;
      courseName = 'React';
      break;
    case 2:
      DATA = HTML_DATA;
      courseName = 'HTML';
      break;
    case 3:
      DATA = CSS_DATA;
      courseName = 'CSS';
      break;
    default:
      return NextResponse.json({ error: 'Invalid courseId' }, { status: 400 });
  }

  DATA.forEach(async (item) => {
    await db.insert(ExerciseTable).values({
      courseId: item?.courseId,
      chapterId: item.chapterId,
      exerciseId: item?.exerciseId,
      exerciseName: item?.exerciseName,
      exerciseContent: item?.exercisesContent,
    });
  });

  return NextResponse.json({
    success: true,
    message: `Successfully inserted ${DATA.length} ${courseName} exercises`,
  });
}
