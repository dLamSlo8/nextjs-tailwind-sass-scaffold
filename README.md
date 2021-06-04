# Context
This is a basic frontend project scaffold created with technologies I currently enjoy using. Here's why:
## NextJS
NextJS provides a nice, quick DX with little to no configuration out the gate. It also emphasizes performance in terms of both page load (i.e. through static pre-rendering, page-based code-splitting) and general page interaction (i.e. through link pre-fetching, optimized image component). I enjoy that I don't have to go through this manual configuration, but also recognize that I should do more research into all the optimizations NextJS provides and why such optimizations exist, but for a quick project setup, this is the way
to go for me.
## TailwindCSS
I thoroughly enjoy using a utility-based approach to CSS. Given the right design tokens, mockups can be coded out quickly. I do recognize shortcomings that are described in many cases against Tailwind, like its often un-readability and inability to handle some features of CSS, like pseudo-elements, nicely. In these cases, I would prefer using a standard method of CSS using SASS, as I describe below.
## SASS
Honestly I'm sure I'm not using SASS to its fullest extent with functions, math functions, etc, but I do value several features that I use regularly, like using parent selectors and nesting and using media queries within rules. I'm still trying to find the right balance between using utility-based CSS and standard usage of CSS (preferably
some combination of [BEM CSS](https://en.bem.info/methodology/css/) and [CUBE CSS](https://cube.fyi/)), or maybe find out that there isn't one and that I should go with one or the other, but for now, I feel that both are necessary for me. As such, this project may become obsolete to me as I continue to learn and grow as a frontend developer, but
I'm okay with that.

# Contents
- Bootstrapped NextJS Project
- SASS with abstracts and base styles baked in (I prefer using some variant of the [SASS 7-in-1 architecture](https://sass-guidelin.es/#architecture))
- TailwindCSS with Just-in-Time compiler installed 
# Setup
1. Clone this repository
2. Create a separate repository for the new project
3. Set the local, cloned repository's 'origin' remote to this new separate repository
