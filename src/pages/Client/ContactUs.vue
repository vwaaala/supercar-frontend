<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader :title="$t('menu.contact_us')" background="/images/category-bg.jpg"/>
    <ContactUsForm/>

    <ListingFooter/>
  </div>
</template>

<script>
import ClientHeader from "@/components/Client/ClientHeader";
import ListingFooter from "@/components/Client/Listing/ListingFooter";
import ListingHeader from "@/components/Client/Listing/ListingHeader";
import ContactUsForm from "@/pages/Client/ContactUsForm";

export default {
  name: "ContactUs",
  components: {ContactUsForm, ListingHeader, ListingFooter, ClientHeader}
}
</script>

