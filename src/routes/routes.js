import Home from "../pages/Home";
import RSVP from "../pages/RSVP";
import WeddingDay from "../pages/WeddingDay";
import AfterParty from "../pages/AfterParty";
import Responses from "../pages/Responses";

const HOME = {
      path: "/",
      title: "Home",
      component: Home

};

const RSVP_ROUTE = {
      path: "/rsvp",
      title: "RSVP",
      component: RSVP

};

const WEDDING_DAY = {
      path: "/wedding",
      title: "Wedding Day",
      component: WeddingDay

};

const AFTER_PARTY = {
      path: "/after",
      title: "After Party",
      component: AfterParty

};

const RESPONSES = {
      path: "/responses",
      title: "Responses",
      component: Responses

};

const ALL_ROUTES = [HOME, RSVP_ROUTE, WEDDING_DAY, AFTER_PARTY, RESPONSES];

const getTitleByPath = pathname => {
      const matchingRoute = ALL_ROUTES.find(route => route.path === pathname);
    if (matchingRoute) {
            return matchingRoute.title;

    }

      return "";

};

export {
      HOME,
      RSVP_ROUTE,
      WEDDING_DAY,
      AFTER_PARTY,
      RESPONSES,
      getTitleByPath

};