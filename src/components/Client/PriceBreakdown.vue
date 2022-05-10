<template>
  <div id="summarySpecs" class="spec-row">
    <h2 v-t="'car_details.finance_purchase'">Finance Your Purchase</h2>
    <div class="finance-row">
      <div class="finance-column">
        <div class="finance-title cash-bg" v-t="'price_breakdown.cash'"></div>
        <div class="finance-body">
          <ul>
            <li>Odbiór w dniu zakupu</li>
            <li>Sprawdzony zakupu</li>
            <li>Płatności przelewem lub gotówką</li>
          </ul>
          <div class="middle-title">{{ $t('price_breakdown.net_price') }}:</div>
          <div class="price finance-price cash-color">{{ cash }} PLN</div>
          <div class="btn-wrapper">
            <a href="/contact-us" class="btn btn-lg cash-bg choose-btn" v-t="'price_breakdown.choose'"></a>
          </div>
        </div>
      </div>
      <div class="finance-column">
        <div class="finance-title leasing-bg" v-t="'price_breakdown.leasing'"></div>
        <div class="finance-body">
          <ul>
            <li>Błyskawiczna decyzja</li>
            <li>Korzyści podatkowe</li>
            <li>Pierwsza wpłata 1%</li>
          </ul>
          <div class="middle-title">{{ $t('price_breakdown.net_price') }}:</div>
          <div class="price finance-price leasing-color">{{ leasing }} PLN</div>
          <div class="btn-wrapper">
            <a href="/contact-us" class="btn btn-lg leasing-bg choose-btn" v-t="'price_breakdown.choose'"></a>
          </div>
        </div>
      </div>
      <div class="finance-column">
        <div class="finance-title credit-bg" v-t="'price_breakdown.credit'"></div>
        <div class="finance-body">
          <ul>
            <li>Bez pierwszej wpłaty</li>
            <li>0% prowizji bankowej</li>
            <li>Minimum formalności</li>
          </ul>
          <div class="middle-title">{{ $t('price_breakdown.net_price') }}:</div>
          <div class="price finance-price credit-color">{{ credit }} PLN</div>
          <div class="btn-wrapper">
            <a href="/contact-us" class="btn btn-lg credit-bg choose-btn" v-t="'price_breakdown.choose'"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PriceBreakdown',
  props: ['cash', 'leasing', 'credit']
}
</script>

<style scoped>
ul {
  font-size: 1.2rem;
  height: 140px;
}

.finance-row {
  margin-top: 2px;
  display: flex;
  width: 100%;
  flex-direction: row;
}

.finance-column {
  width: 33.33%;
}

.finance-title {
  padding: 10px;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
}

.cash-color {
  color: #eaab59 !important;
}

.cash-bg {
  background: #eaab59;
}

.leasing-color {
  color: #2BCFE7 !important;
}

.leasing-bg {
  background: #2BCFE7;
}

.credit-color {
  color: #69985e !important;
}

.credit-bg {
  background: #91d47f;
}

.finance-column {

}

.middle-title {
  text-align: center;
  width: 100%;
  font-weight: 600;
  margin-bottom: 10px;
  color: #425269;
  font-size: 1.4rem;
}

.finance-price {
  text-align: center;
}

.finance-body {
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.choose-btn {
  text-align: center;
  color: white;
  font-size: 1.7rem;
  font-weight: 600;
}

.btn-wrapper {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

button {
  border-bottom: 2px #d7d7d7 solid;
}
</style>