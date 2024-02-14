// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  call_to_action: defineAsyncComponent(
    () => import("./CallToAction/index.vue"),
  ),
  features: defineAsyncComponent(() => import("./Features/index.vue")),
  gym_customers: defineAsyncComponent(() => import("./GymCustomers/index.vue")),
  hero: defineAsyncComponent(() => import("./Hero/index.vue")),
  price: defineAsyncComponent(() => import("./Price/index.vue")),
  rich_text: defineAsyncComponent(() => import("./RichText/index.vue")),
  testimonial: defineAsyncComponent(() => import("./Testimonial/index.vue")),
  text_with_image: defineAsyncComponent(
    () => import("./TextWithImage/index.vue"),
  ),
  title: defineAsyncComponent(() => import("./Title/index.vue")),
});
