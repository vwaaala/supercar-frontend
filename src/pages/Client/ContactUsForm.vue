<template>
  <div class="main-container col2-right-layout">
    <div class="main container">
      <div class="row">
        <div class="col-main col-sm-12 wow bounceInUp animated animated" style="visibility: visible;">
          <div id="messages_product_view"></div>
          <form action="#" id="contactForm" method="post">
            <div class="static-contain">
              <fieldset class="group-select">
                <ul>
                  <li id="billing-new-address-form">
                    <fieldset class="">
                      <ul>
                        <li>
                          <div class="customer-name">
                            <div class="input-box name-firstname">
                              <label for="name"><em class="required">*</em>{{
                                $t('login.register_full_name')
                                }}</label>
                              <br>
                              <input name="name" id="name" title="Name" value="john doe"
                                     class="input-text required-entry" type="text">
                            </div>
                            <div class="input-box name-firstname">
                              <label for="email"><em class="required">*</em>{{ $t('login.login_email') }}</label>
                              <br>
                              <input name="email" id="email" title="Email" value="john.doe@gmail.com"
                                     class="input-text required-entry validate-email" type="text">
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="customer-name">
                            <div class="input-box name-firstname">
                              <label for="telephone"><em class="required">*</em>{{ $t('contact_us.telephone') }}</label>
                              <br>
                              <input name="telephone" id="telephone" title="Telephone" value="" class="input-text"
                                     type="text">
                            </div>
                            <div class="input-box name-firstname">

                              <label for="telephone">Offer ID</label>
                              <br>
                              <input name="telephone" id="offer-id" title="Offer ID" value="" class="input-text"
                                     type="text">

                            </div>
                          </div>
                        </li>

                        <li>
                          <label for="comment"><em class="required">*</em>{{ $t('contact_us.comment') }}</label>
                          <br>
                          <textarea name="comment" id="comment" title="Comment" class="required-entry input-text"
                                    cols="5" rows="3"></textarea>
                        </li>
                      </ul>
                    </fieldset>
                  </li>
                  <p class="require"><em class="required">* </em>{{ $t('contact_us.required') }}</p>
                  <input type="text" name="hideit" id="hideit" value="" style="display:none !important;">
                  <div class="buttons-set">
                    <button type="submit" title="Submit" class="button submit"><span><span
                        v-t="'contact_us.submit'"></span></span>
                    </button>
                  </div>
                </ul>
              </fieldset>
            </div>
          </form>

        </div>
        <!--col-right sidebar-->
      </div>
      <!--row-->
    </div>
    <!--main-container-inner-->
  </div>
</template>
<script>
export default {
  name: 'ContactUsForm'
}
</script>
