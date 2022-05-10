import Vue from 'vue';
import VueRouter from 'vue-router';
import Cars from "./pages/Client/Cars";
import Machinery from "@/pages/Client/Machinery";
import NotFound from "@/pages/Client/NotFound";
import CarListings from "@/components/Client/Car/CarListings";
import MachineryListings from "@/components/Client/Machinery/MachineryListings";
import MachineryDetail from "@/pages/Client/MachineryDetail";
import Login from "@/pages/Client/Login";
import {authenticate_before_entry} from "@/services/auth";
import CarTruckDetail from "@/components/Client/ItemDetails/CarTruckDetail";
import Trucks from "@/pages/Client/Trucks";
import TruckListings from "@/components/Client/Truck/TruckListings";
import ContactUs from "@/pages/Client/ContactUs";
import UserDashboard from "@/pages/Client/UserDashboard";


import CarService from '@/services/car'
import TruckService from '@/services/truck'
import who_is_this_loan_for from "@/pages/Client/credit/who_is_this_loan_for";
import type_of_credit from "@/pages/Client/credit/type_of_credit";
import credit_advantages from "@/pages/Client/credit/credit_advantages";
import credit_simplified_procedure from "@/pages/Client/credit/credit_simplified_procedure";
import required_documents from "@/pages/Client/credit/required_documents";
import who_is_leasing_for from "@/pages/Client/leasing/who_is_leasing_for";
import what_can_we_lease from "@/pages/Client/leasing/what_can_we_lease";
import types_of_leasing from "@/pages/Client/leasing/types_of_leasing";
import advantage_of_leasing from "@/pages/Client/leasing/advantage_of_leasing";
import leasing_simplified_procedure from "@/pages/Client/leasing/leasing_simplified_procedure";
import leased_cars from "@/pages/Client/leasing/leased_cars";
import proven_service from "@/pages/Client/sale/proven_service";
import authorized_used_car_dealer from "@/pages/Client/sale/authorized_used_car_dealer";
import why_is_it_worth_buying_from_us from "@/pages/Client/sale/why_is_it_worth_buying_from_us";
import auction from "@/pages/Client/auction";
import WishList from "@/pages/Client/WishList";
import Register from "@/pages/Client/Register";
import Home from "@/pages/Client/Home";
import about_us from "@/pages/Client/about_us";

Vue.use(VueRouter);
const routes = [
    {
        path: '/cars',
        component: Cars,
        children: [
            {path: ':id', component: CarTruckDetail, props: {service: CarService}},
            {path: '', component: CarListings},
        ]
    },
    {path: '/login', name: 'Login', component: Login},
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: UserDashboard,
        beforeEnter: (to, from, next) => {
            authenticate_before_entry(next)
        }
    },
    {path: '/register', name: 'Register', component: Register},
    {
        path: '/wishlist',
        name: 'Wishlist',
        component: WishList,
        beforeEnter: (to, from, next) => {
            authenticate_before_entry(next)
        }
    },
    {
        path: '/machinery',
        name: 'Machinery',
        component: Machinery,
        children: [
            {path: ':id', component: MachineryDetail},
            {path: '', component: MachineryListings},
        ]
    },
    {
        path: '/trucks',
        name: 'Trucks',
        component: Trucks,
        children: [
            {path: ':id', component: CarTruckDetail, props: {service: TruckService}},
            {path: '', component: TruckListings},
        ]
    },
    {path: '/contact-us', component: ContactUs},

    {path: '/credit/for_who', component: who_is_this_loan_for},
    {path: '/credit/type_of_credit', component: type_of_credit},
    {path: '/credit/credit_advantages', component: credit_advantages},
    {path: '/credit/simplified_procedure', component: credit_simplified_procedure},
    {path: '/credit/required_documents', component: required_documents},

    {path: '/leasing/who_is_leasing_for', component: who_is_leasing_for},
    {path: '/leasing/what_can_we_lease', component: what_can_we_lease},
    {path: '/leasing/types_of_leasing', component: types_of_leasing},
    {path: '/leasing/advantage_of_leasing', component: advantage_of_leasing},
    {path: '/leasing/simplified_procedure', component: leasing_simplified_procedure},
    {path: '/leasing/required_documents', component: required_documents},
    {path: '/leasing/leased_cars', component: leased_cars},

    {path: '/sale/proven_service', component: proven_service},
    {path: '/sale/authorized_used_car_dealer', component: authorized_used_car_dealer},
    {path: '/sale/why_is_it_worth_buying_from_us', component: why_is_it_worth_buying_from_us},

    {path: '/about-us', component: about_us},

    {path: '/auction', component: auction},
    {path: '/', name: 'Home', component: Home},

    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes,

})


export default router
