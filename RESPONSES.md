# Responses
My AI workflow worked best when I treated the model as a coding partner, not an autopilot. I first used Figma MCP to extract concrete design details such as spacing, colors, typography, card dimensions, and component hierarchy. Then I kept prompts scoped: data/state first, then leaf components, then layout, instead of asking AI to build the whole app at once.

What did not work well was assuming the Figma link would be readable immediately. MCP access depended on the correct account, file ownership, and seat permissions, so I had to duplicate the file before the tool could inspect it. The static mock also had inconsistent filter state, so I had to make an engineering judgment instead of blindly matching it.

Next time, I would verify MCP access before coding, define the default state earlier, and use smaller AI iterations with more frequent visual checks against Figma.