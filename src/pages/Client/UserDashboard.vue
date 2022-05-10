<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader :title="'DASHBOARD'" :background="'/images/machineries-bg.jpg'"/>

    <Sidebar/>

    <AccountInfo/>
    <ListingFooter/>
  </div>
</template>

<script>
import ClientHeader from "@/components/Client/ClientHeader";
import ListingHeader from "@/components/Client/Listing/ListingHeader";
import ListingFooter from "@/components/Client/Listing/ListingFooter";
import AccountInfo from "@/components/Client/UserDashboard/AccountInfo";
import Sidebar from "@/components/Client/UserDashboard/Sidebar";

export default {
  name: "UserDashboard",
  components: {
    Sidebar,
    AccountInfo,
    ListingHeader,
    ListingFooter,
    ClientHeader
  }
}
</script>

