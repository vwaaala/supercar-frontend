<template>
  <aside class="col-right sidebar col-sm-3 col-xs-12 wow bounceInUp animated animated"
         style="visibility: visible;">
    <div class="block block-account">
      <div class="block-title"> My Account</div>
      <div class="block-content">
        <ul>
          <li><a href="/admin"><span> My Ads</span></a></li>
          <li><a href="#"><span> Account Information</span></a></li>
          <li><a href="#"><span> Address Book</span></a></li>
          <li><a href="#"><span> My Orders</span></a></li>
          <li><a href="/wishlist"><span> My Wishlist</span></a></li>
        </ul>
      </div>
      <!--block-content-->
    </div>
    <!--block block-account-->
  </aside>
</template>
<script>
export default {
  name: 'Sidebar'
}
</script>