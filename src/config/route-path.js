import Home from "views/Home/Home";
import RestaurantDetail from "views/RestaurantDetail/RestaurantDetail";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/:id",
        component: RestaurantDetail,
    },

];

export default routes;
