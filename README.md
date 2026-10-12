# Team Novaris — B2 Promotional Website

A responsive promotional website created for **Team Novaris** as part of the **CET257 Assignment 2 (B2)** deliverable.

The website introduces Team Novaris, promotes its featured **SafeLearn** workplace-safety learning concept, presents the proposed **Spot the Hazard** zero-budget marketing campaign, and provides a Netlify-powered demo request form.

## Website Purpose

The website is designed to communicate the Novaris brand and demonstrate how interactive digital experiences can support workplace health and safety learning, particularly within logistics and warehousing environments.

**Novaris tagline:** *Where Innovation Meets Protection.*

## Main Pages

- `index.html` — **Home**  
  Introduces Novaris, the SafeLearn concept, the Novaris approach, featured product information, the Spot the Hazard campaign, key project statistics, and calls to action.

- `about.html` — **About Us**  
  Presents the Novaris mission, vision, values, project team and target audience. The **Our Audience** section identifies people involved in workplace safety, including Health & Safety, Operations, Training & L&D, and HR teams.

- `platform.html` — **Platform & Services**  
  Presents SafeLearn as an interactive browser-based workplace-safety learning concept for logistics and warehousing. It highlights learning modules, quizzes, games and challenges, progress tracking, incident reporting, admin monitoring, and the digital services demonstrated by Team Novaris.

- `campaign.html` — **Spot the Hazard**  
  Explains the proposed zero-budget organic marketing campaign. The campaign invites audiences to identify hazards in warehouse scenarios and is clearly presented as a marketing concept rather than a current SafeLearn application feature.

- `contact.html` — **Contact / Request a Demo**  
  Contains the SafeLearn demonstration request form. The form is configured for **Netlify Forms** and includes a honeypot field for basic spam protection.

- `thank-you.html` — **Submission Confirmation**  
  Displays a confirmation message after a successful demo request submission.

- `404.html` — **Custom Page Not Found**  
  Provides a branded error page for invalid or unavailable URLs and directs visitors back to the Novaris home page.

## Supporting Files

- `css/style.css` — Main responsive website styling.
- `js/main.js` — Navigation, reveal effects and other front-end interactions.
- `assets/novaris-logo.svg` — Novaris logo.
- `assets/novaris-icon.svg` — Novaris favicon/icon.
- `assets/safelearn-logo.svg` — SafeLearn branding asset.
- `assets/safelearn-icon.png` — SafeLearn icon asset.
- `netlify.toml` — Netlify configuration file.
- `UPDATED_DESIGN_DOCUMENTATION.md` — Supporting design documentation.
- `ZERO_BUDGET_MARKETING_PLAN.md` — Supporting marketing-plan documentation.

## SafeLearn and B2 Website Distinction

The **SafeLearn prototype is a separate B6 deliverable**. This B2 website promotes and demonstrates the SafeLearn concept but should not be interpreted as the SafeLearn application itself.

Similarly, **Spot the Hazard** is the proposed marketing campaign from the A6 strategy. It is presented as promotional campaign content and is not claimed as a current SafeLearn application feature.

## Target Audience

The promotional website is designed for people involved in workplace safety and employee learning, including:

- Health & Safety managers
- Operations managers and supervisors
- Training and Learning & Development teams
- Human Resources teams

The primary sector focus is **logistics and warehousing**, where hazards such as manual handling, unsafe acts, near misses, working at height and warehouse risks require effective safety awareness and training.

## Technology

This is a static front-end website developed using:

- HTML5
- CSS3
- Vanilla JavaScript
- Netlify Forms

No framework, package manager, database or build process is required.

## Running the Website Locally

1. Extract the project folder.
2. Open `NovarisWebsiteWork`.
3. Open `index.html` in a modern web browser.

For the best testing experience, the folder can also be served using a local web server such as VS Code Live Server.

## Deployment

A recommended deployment workflow is:

1. Upload the `NovarisWebsiteWork` folder to a GitHub repository.
2. Import the repository into Netlify.
3. Set the publish directory to the folder containing `index.html` if required.
4. No build command is necessary.
5. Deploy the site.

The included `404.html` provides the custom not-found page for suitable static-hosting environments.

## Netlify Forms

The demo request form in `contact.html` uses:

- `data-netlify="true"`
- Form name: `demo-request`
- Netlify honeypot spam protection
- `thank-you.html` as the successful submission destination

After deployment, confirm that **form detection** is enabled in the Netlify project settings. Submitted demo requests can then be reviewed through the Netlify dashboard, and form notifications can be configured if required.

## Project Structure

```text
NovarisWebsiteWork/
├── index.html
├── about.html
├── platform.html
├── campaign.html
├── contact.html
├── thank-you.html
├── 404.html
├── netlify.toml
├── README.md
├── UPDATED_DESIGN_DOCUMENTATION.md
├── ZERO_BUDGET_MARKETING_PLAN.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── novaris-logo.svg
    ├── novaris-icon.svg
    ├── safelearn-logo.svg
    └── safelearn-icon.png
```

## Current Website Notes

- The previous black promotional top bar has been removed.
- The **Our Audience — Designed for people involved in workplace safety** section is located on the **About Us** page.
- The custom `404.html` page remains included in the project.
- The website is responsive and uses a consistent Novaris visual identity across its main pages.

---

**Team Novaris**  
*Where Innovation Meets Protection.*
