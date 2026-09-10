BOOKNEST WEBSITE — README
==========================

WHAT'S INSIDE THIS ZIP
-----------------------
index.html      -> the website (all sections: hero, about, contents, pricing, FAQ, contact)
styles.css      -> all styling (light theme, red/black accents matching your cover)
script.js       -> all interactivity (menu, FAQ accordion, payment popup, animations)
assets/
  cover.png                                  -> your book cover image
  payment-qr.png                             -> your UPI payment QR code
  100-Game-Changing-AI-Tools-for-Creators.pdf -> your ebook file (for you to send to buyers)

HOW TO VIEW IT
---------------
Just double-click index.html — it opens directly in any browser (Chrome, Edge, etc).
No installation, no server needed.

HOW TO PUT IT LIVE ON THE INTERNET (free options)
---------------------------------------------------
1. Netlify Drop: go to https://app.netlify.com/drop and drag this whole folder in.
   You get a live link in seconds.
2. GitHub Pages: upload the folder to a GitHub repo and enable Pages in settings.
3. Or ask any hosting provider (Hostinger, GoDaddy etc.) to upload it under your domain
   (e.g. www.booknest.com) via their File Manager / FTP — no coding needed, it's a
   plain HTML site.

HOW PAYMENT WORKS ON THIS SITE
--------------------------------
There's no payment gateway wired in (that needs a business account with Razorpay/
Instamojo/Cashfree etc. and takes a few days of setup + KYC). Instead, the site uses
a direct-UPI flow that works immediately and needs no backend:

1. Visitor clicks "Buy eBook / Audiobook / Bundle"
2. A popup shows your QR code and the price
3. They scan and pay with any UPI app (PhonePe, GPay, Paytm...)
4. They tap "I've paid — send proof on WhatsApp" — this opens WhatsApp with a
   ready-made message to YOUR number (7088910225), where they attach their
   payment screenshot
5. You then reply with the download link manually (or set up an auto-reply)

This is the same flow most solo authors and small creators use before they set up
a full payment gateway. When you're ready for automatic delivery, look into
Razorpay Payment Links, Gumroad, or Payhip — happy to help wire one of those in later.

WHAT YOU'LL WANT TO EDIT
---------------------------
Open script.js and look at the CONFIG block at the top:

  whatsappNumber: "917088910225"   -> your WhatsApp number (country code + number)
  email: "sumitmishra9058@gmail.com"
  items: { ebook, audiobook, bundle } -> edit the "price" numbers here to change
         prices EVERYWHERE on the site at once (hero buttons, pricing cards, popup)

To change the cover image, replace assets/cover.png with a new file of the same name.
To change the QR code, replace assets/payment-qr.png the same way.

Prices currently used as placeholders — update them to your real prices:
  eBook: ₹299 (was shown at ₹599)
  Audiobook: ₹399 (was shown at ₹799)
  Bundle: ₹549 (was shown at ₹1198)

WHAT'S FUNCTIONAL ON THIS SITE
---------------------------------
- Mobile-friendly menu (hamburger icon)
- Smooth scroll to every section
- FAQ accordion (click a question to expand/collapse)
- "Buy" buttons on 3 pricing cards + hero + footer, all open the payment popup
- Payment popup shows QR + pre-fills a WhatsApp message with order + price
- "or send proof by email instead" opens a pre-filled email to you
- Scroll progress bar at the top, back-to-top button, subtle entrance animations
- Fully responsive: looks correct on phones, tablets and desktops

Questions? Just message me in the same chat where this was built.
