import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from "@/pages/Admin/NotFound";
import TableData from "@/components/Admin/TableData";
import GroupTableData from "@/components/Admin/GroupTableData";
import SubGroupTableData from "@/components/Admin/SubGroupTableData";
import BrandTableData from "@/components/Admin/BrandTableData";
import ModelTableData from "@/components/Admin/ModelTableData";
import TechStateTableData from "@/components/Admin/TechStateTableData";
import ItemViewer from "@/components/Admin/ItemViewer";
import ItemEditor from "@/components/Admin/ItemEditor";
import ItemEditorMachine from "@/components/Admin/ItemEditorMachine";
import DashBoard from "@/pages/Admin/DashBoard";
import {authenticate_before_entry} from "@/services/auth";

Vue.use(VueRouter);
import CarService from "@/services/car";
import TruckService from "@/services/truck";
import MachineryService from "@/services/machinery";
import MasterDataService from "@/services/master_data";


const routes = [
    {path: '/', component: DashBoard},

    {path: '/cars', component: TableData, props: {service: CarService}},
    {path: '/cars/add', component: ItemEditor, props: {service: CarService, create: true}},
    {path: '/cars/:id', component: ItemViewer, props: {service: CarService}},
    {path: '/cars/edit/:id', component: ItemEditor, props: {service: CarService}},


    {path: '/trucks', component: TableData, props: {service: TruckService}},
    {path: '/trucks/add', component: ItemEditor, props: {service: TruckService, create: true}},
    {path: '/trucks/:id', component: ItemViewer, props: {service: TruckService}},
    {path: '/trucks/edit/:id', component: ItemEditor, props: {service: TruckService}},


    {path: '/machinery', component: TableData, props: {service: MachineryService}},
    {path: '/machinery/add', component: ItemEditorMachine, props: {service: MachineryService, create: true}},
    {path: '/machinery/:id', component: ItemViewer, props: {service: MachineryService}},
    {path: '/machinery/edit/:id', component: ItemEditorMachine, props: {service: MachineryService}},

    {path: '/master-data-group', component: GroupTableData, props: {service: MasterDataService}},
    {path: '/master-data-sub-group', component: SubGroupTableData, props: {service: MasterDataService}},
    {path: '/master-data-brand', component: BrandTableData, props: {service: MasterDataService}},
    {path: '/master-data-model', component: ModelTableData, props: {service: MasterDataService}},
    {path: '/master-data-tech-state', component: TechStateTableData, props: {service: MasterDataService}},

    {path: '*', name: 'NotFound', component: NotFound},
];

const router = new VueRouter({
    mode: 'history',
    base: '/admin',
    linkActiveClass: 'active',
    routes
})
router.beforeEach((to, from, next) => {
    authenticate_before_entry(next)
})

export default router
