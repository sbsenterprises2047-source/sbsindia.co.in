# SBS Enterprises — Solar Ka Badshah

Responsive Hindi/Hinglish marketing website starter for SBS Enterprises.

## Included
- `index.html`: landing page, about, services, PM Surya Ghar information, social responsibility, locations, enquiry and contact sections.
- `styles.css`: responsive styling for mobile and desktop.
- `app.js`: enquiry validation; opens WhatsApp as a fallback. Optional Supabase insert integration.
- `supabase-schema.sql`: table and Row Level Security insert policy.
- `assets/sbs-logo.jpeg`: logo image supplied by the business.

## Business details used from supplied documents
- Legal status: Proprietary firm
- Address: Ward 25, Opposite Khadi Bhandar, Bairagania, District Sitamarhi, Bihar 843313
- Phone: +91 99733 37998
- Email: sbsenterprises@gmail.com
- GSTIN: 10FDPPD7073B1ZW
- Udyam: UDYAM-BR-34-0004363
- Proprietor / authorised signatory in documents: Punam Devi

## Before publishing
1. Verify whether the vendor empanelment is approved and active. The submitted letter states the firm applied for empanelment; do not advertise confirmed approval until the portal status/document supports it.
2. This site intentionally does not claim to be an official government website and does not promise a zero electricity bill or guaranteed subsidy.
3. Confirm all services, service locations, brand relationships, warranties and installation/maintenance commitments before publishing.
4. The submitted documents list `sbsenterprises2047@gmail.com` as an empanelment contact email and `sbsenterprises@gmail.com` on the letterhead. Confirm which email should be public.
5. Add approved/appropriately licensed photographs and any official scheme assets you have permission to use. The current hero illustration is CSS artwork; no official government/person photograph is implied.
6. Add a privacy policy and data-retention/contact process before collecting live customer data.

## Run locally
Open `index.html` in a browser. For a more accurate local preview, serve this folder with any static server.

## Connect Supabase
1. Open your Supabase project dashboard.
2. Go to SQL Editor and run `supabase-schema.sql`.
3. In `app.js`, set `SUPABASE_URL` to the project URL and `SUPABASE_ANON_KEY` to the public anon/publishable key.
4. Never place a `service_role` secret in browser code.
5. Submit a test enquiry and confirm it appears in `public.enquiries`.

## Deploy to Cloudflare Pages using GitHub
1. Create a GitHub repository and upload the contents of this folder.
2. In Cloudflare Dashboard, open Workers & Pages > Create > Pages > Connect to Git.
3. Select the repository. For a static site, leave build command blank and set the output directory to `/` (or the repository root, depending on the dashboard prompt).
4. Deploy, test the live URL, then configure your custom domain in Cloudflare when ready.

Cloudflare, GitHub and Supabase have not been connected or deployed automatically by this starter package.
