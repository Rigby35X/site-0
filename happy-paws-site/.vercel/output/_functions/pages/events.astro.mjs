import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DxW1KWNy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CfKLfJFf.mjs';
import { $ as $$CTA } from '../chunks/CTA_DO8n3P-Q.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Events = createComponent(($$result, $$props, $$slots) => {
  const upcomingEvents = [
    {
      id: "adoption-day-march",
      title: "Super Adoption Saturday",
      date: "2024-03-15",
      time: "10:00 AM - 4:00 PM",
      location: "Happy Paws Dog Rescue Facility",
      address: "123 Rescue Lane, Dog City, CA",
      description: "Join us for our biggest adoption event of the month! Meet dozens of amazing animals looking for their forever homes. Adoption fees reduced by 50%.",
      image: "/assets/images/events/adoption-day.jpg",
      type: "adoption",
      featured: true
    },
    {
      id: "fundraiser-gala",
      title: "Paws & Hearts Annual Gala",
      date: "2024-04-20",
      time: "6:00 PM - 10:00 PM",
      location: "Denver Convention Center",
      address: "700 14th St, Denver, CO 80202",
      description: "Our annual fundraising gala featuring dinner, silent auction, and inspiring stories of rescue and recovery. Formal attire requested.",
      image: "/assets/images/events/gala.jpg",
      type: "fundraiser",
      featured: true
    },
    {
      id: "volunteer-orientation",
      title: "New Volunteer Orientation",
      date: "2024-03-22",
      time: "2:00 PM - 4:00 PM",
      location: "Happy Paws Dog Rescue Training Room",
      address: "123 Rescue Lane, Dog City, CA",
      description: "Learn about volunteer opportunities and get started helping animals in need. Training provided for all volunteer positions.",
      image: "/assets/images/events/volunteer-orientation.jpg",
      type: "volunteer",
      featured: false
    },
    {
      id: "pet-photos",
      title: "Professional Pet Photos with Santa",
      date: "2024-12-14",
      time: "11:00 AM - 3:00 PM",
      location: "Happy Paws Dog Rescue Facility",
      address: "123 Rescue Lane, Dog City, CA",
      description: "Bring your pets for professional holiday photos with Santa! $20 donation includes digital photos. All proceeds benefit our animals.",
      image: "/assets/images/events/pet-photos.jpg",
      type: "fundraiser",
      featured: false
    }
  ];
  const pastEvents = [
    {
      id: "valentine-adoption",
      title: "Valentine's Day Adoption Special",
      date: "2024-02-14",
      description: "Our Valentine's adoption event found homes for 25 animals!",
      image: "/assets/images/events/valentine-past.jpg",
      results: "25 animals adopted"
    },
    {
      id: "winter-fundraiser",
      title: "Winter Warmth Fundraiser",
      date: "2024-01-15",
      description: "Community came together to raise funds for heating and winter supplies.",
      image: "/assets/images/events/winter-past.jpg",
      results: "$15,000 raised"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Happy Paws Dog Rescue - Events", "description": "Join Happy Paws Dog Rescue for upcoming adoption events, fundraisers, and volunteer opportunities. Help us save more animal lives.", "data-astro-cid-ro7pgs3h": true }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<section id="page-header" data-astro-cid-ro7pgs3h> <div class="cs-container" data-astro-cid-ro7pgs3h> <h1 class="cs-title" data-astro-cid-ro7pgs3h>Upcoming Events</h1> <p class="cs-text" data-astro-cid-ro7pgs3h>
Join us for adoption events, fundraisers, and volunteer opportunities. 
        Every event helps us save more animal lives and build our community of animal lovers.
</p> </div> </section>    <section id="featured-events" data-astro-cid-ro7pgs3h> <div class="cs-container" data-astro-cid-ro7pgs3h> <h2 class="cs-section-title" data-astro-cid-ro7pgs3h>Don't Miss These Events</h2> <div class="cs-featured-grid" data-astro-cid-ro7pgs3h> ${upcomingEvents.filter((event) => event.featured).map((event) => renderTemplate`<div class="cs-featured-event" data-astro-cid-ro7pgs3h> <div class="cs-event-image" data-astro-cid-ro7pgs3h> <img${addAttribute(event.image, "src")}${addAttribute(event.title, "alt")} width="600" height="400" loading="lazy" data-astro-cid-ro7pgs3h> <div class="cs-event-type cs-type-{event.type}" data-astro-cid-ro7pgs3h> ${event.type.charAt(0).toUpperCase() + event.type.slice(1)} </div> </div> <div class="cs-event-content" data-astro-cid-ro7pgs3h> <h3 class="cs-event-title" data-astro-cid-ro7pgs3h>${event.title}</h3> <div class="cs-event-details" data-astro-cid-ro7pgs3h> <div class="cs-detail" data-astro-cid-ro7pgs3h> <strong data-astro-cid-ro7pgs3h>Date:</strong> ${new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </div> <div class="cs-detail" data-astro-cid-ro7pgs3h> <strong data-astro-cid-ro7pgs3h>Time:</strong> ${event.time} </div> <div class="cs-detail" data-astro-cid-ro7pgs3h> <strong data-astro-cid-ro7pgs3h>Location:</strong> ${event.location} </div> <div class="cs-detail" data-astro-cid-ro7pgs3h> <strong data-astro-cid-ro7pgs3h>Address:</strong> ${event.address} </div> </div> <p class="cs-event-description" data-astro-cid-ro7pgs3h>${event.description}</p> <div class="cs-event-actions" data-astro-cid-ro7pgs3h> <a${addAttribute(`/events/${event.id}`, "href")} class="cs-button-solid" data-astro-cid-ro7pgs3h>Learn More</a> <a href="/contact" class="cs-button-transparent" data-astro-cid-ro7pgs3h>RSVP</a> </div> </div> </div>`)} </div> </div> </section>    <section id="all-events" data-astro-cid-ro7pgs3h> <div class="cs-container" data-astro-cid-ro7pgs3h> <h2 class="cs-section-title" data-astro-cid-ro7pgs3h>All Upcoming Events</h2> <div class="cs-event-filters" data-astro-cid-ro7pgs3h> <button class="cs-filter-btn active" data-filter="all" data-astro-cid-ro7pgs3h>All Events</button> <button class="cs-filter-btn" data-filter="adoption" data-astro-cid-ro7pgs3h>Adoption Events</button> <button class="cs-filter-btn" data-filter="fundraiser" data-astro-cid-ro7pgs3h>Fundraisers</button> <button class="cs-filter-btn" data-filter="volunteer" data-astro-cid-ro7pgs3h>Volunteer</button> </div> <div class="cs-events-grid" data-astro-cid-ro7pgs3h> ${upcomingEvents.map((event) => renderTemplate`<div class="cs-event-card"${addAttribute(event.type, "data-type")} data-astro-cid-ro7pgs3h> <div class="cs-card-image" data-astro-cid-ro7pgs3h> <img${addAttribute(event.image, "src")}${addAttribute(event.title, "alt")} width="400" height="250" loading="lazy" data-astro-cid-ro7pgs3h> <div class="cs-event-date" data-astro-cid-ro7pgs3h> <div class="cs-month" data-astro-cid-ro7pgs3h>${new Date(event.date).toLocaleDateString("en-US", { month: "short" })}</div> <div class="cs-day" data-astro-cid-ro7pgs3h>${new Date(event.date).getDate()}</div> </div> </div> <div class="cs-card-content" data-astro-cid-ro7pgs3h> <div class="cs-event-type cs-type-{event.type}" data-astro-cid-ro7pgs3h> ${event.type.charAt(0).toUpperCase() + event.type.slice(1)} </div> <h3 class="cs-card-title" data-astro-cid-ro7pgs3h>${event.title}</h3> <div class="cs-card-details" data-astro-cid-ro7pgs3h> <div class="cs-time" data-astro-cid-ro7pgs3h>${event.time}</div> <div class="cs-location" data-astro-cid-ro7pgs3h>${event.location}</div> </div> <p class="cs-card-description" data-astro-cid-ro7pgs3h>${event.description}</p> <div class="cs-card-actions" data-astro-cid-ro7pgs3h> <a${addAttribute(`/events/${event.id}`, "href")} class="cs-learn-more" data-astro-cid-ro7pgs3h>Learn More →</a> </div> </div> </div>`)} </div> </div> </section>    <section id="past-events" data-astro-cid-ro7pgs3h> <div class="cs-container" data-astro-cid-ro7pgs3h> <h2 class="cs-section-title" data-astro-cid-ro7pgs3h>Recent Event Highlights</h2> <div class="cs-past-grid" data-astro-cid-ro7pgs3h> ${pastEvents.map((event) => renderTemplate`<div class="cs-past-event" data-astro-cid-ro7pgs3h> <div class="cs-past-image" data-astro-cid-ro7pgs3h> <img${addAttribute(event.image, "src")}${addAttribute(event.title, "alt")} width="400" height="300" loading="lazy" data-astro-cid-ro7pgs3h> </div> <div class="cs-past-content" data-astro-cid-ro7pgs3h> <h3 data-astro-cid-ro7pgs3h>${event.title}</h3> <div class="cs-past-date" data-astro-cid-ro7pgs3h>${new Date(event.date).toLocaleDateString()}</div> <p data-astro-cid-ro7pgs3h>${event.description}</p> <div class="cs-results" data-astro-cid-ro7pgs3h>${event.results}</div> </div> </div>`)} </div> </div> </section>    <section id="event-newsletter" data-astro-cid-ro7pgs3h> <div class="cs-container" data-astro-cid-ro7pgs3h> <div class="cs-newsletter-content" data-astro-cid-ro7pgs3h> <h2 data-astro-cid-ro7pgs3h>Stay Updated on Events</h2> <p data-astro-cid-ro7pgs3h>
Subscribe to our newsletter to be the first to know about upcoming adoption events, 
          fundraisers, and volunteer opportunities.
</p> <form class="cs-newsletter-form" data-astro-cid-ro7pgs3h> <input type="email" placeholder="Enter your email address" required class="cs-email-input" data-astro-cid-ro7pgs3h> <button type="submit" class="cs-subscribe-btn" data-astro-cid-ro7pgs3h>Subscribe</button> </form> <div class="cs-newsletter-benefits" data-astro-cid-ro7pgs3h> <div class="cs-benefit" data-astro-cid-ro7pgs3h> <strong data-astro-cid-ro7pgs3h>Early Access:</strong> Get notified about events before they're posted publicly
</div> <div class="cs-benefit" data-astro-cid-ro7pgs3h> <strong data-astro-cid-ro7pgs3h>Special Invites:</strong> Receive invitations to exclusive donor and volunteer events
</div> <div class="cs-benefit" data-astro-cid-ro7pgs3h> <strong data-astro-cid-ro7pgs3h>Event Reminders:</strong> Never miss an important adoption event or fundraiser
</div> </div> </div> </div> </section> ${renderComponent($$result2, "CTA", $$CTA, { "data-astro-cid-ro7pgs3h": true })} ` })}  ${renderScript($$result, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/pages/events.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/pages/events.astro", void 0);

const $$file = "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
