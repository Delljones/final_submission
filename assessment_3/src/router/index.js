import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView";
import About from "@/views/AboutView";
import Contact from "@/views/ContactView";
import Blog from "@/views/BlogView";
import Community from '@/views/CommunityView';
import SignUp from '@/views/SignUp';

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/blog", name: "blog", component: Blog },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/community", name: "community", component: Community},
  { path: "/signup", name: "signup", component: SignUp},
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
