<template>
  <ul >

    <li  class="level0 parent drop-menu"><a class="level-top" href="#">
      <span style="border: 1px solid gray;border-radius: 8px; font-size: 1.1em" v-t="'menu.post_ad'"></span>
    </a>
      <ul class="level1">
        <li><a class="level-top" href="/admin/cars/add"><span v-t="'menu.passenger_car'"></span></a>
        </li>
        <li><a class="level-top" href="/admin/trucks/add"><span v-t="'menu.truck'"></span></a></li>
        <li><a class="level-top" href="/admin/machinery/add"><span v-t="'menu.machinery'"></span></a>
        <li><a class="level-top" href="/admin/machinery/add"><span v-t="'menu.post_ad_other'"></span></a>
        </li>
      </ul>
    </li>

    <li class="active"><a class="level-top" href="/"><span v-t="'menu.home'"></span></a></li>

    <li class="level0 parent drop-menu"><a class="level-top" href="#"><span>Category</span></a>
      <ul class="level1">
        <li><a class="level-top" href="/cars"><span v-t="'menu.passenger_car'"></span></a>
        </li>
        <li><a class="level-top" href="/trucks"><span v-t="'menu.truck'"></span></a></li>
        <li><a class="level-top" href="/machinery"><span v-t="'menu.machinery'"></span></a>
        </li>
      </ul>
    </li>



    <li class="level0 parent drop-menu"><a class="level-top" href="#"><span v-t="'misc.loan'"></span></a>
      <ul class="level1">
        <li><a class="level-top" href='/credit/for_who'><span>Dla kogo kredyt?</span></a>
        </li>
        <li><a class="level-top"
               href='/credit/type_of_credit'><span>Rodzaje kredytu</span></a></li>
        <li><a class="level-top" href='/credit/credit_advantages'><span>Zalety kredytu</span></a>
        </li>
        <li><a class="level-top"
               href='/credit/simplified_procedure'><span>Procedura uproszczona</span></a>
        </li>
        <li><a class="level-top"
               href='/credit/required_documents'><span>Wymagane dokumenty</span></a></li>
      </ul>
    </li>


    <li class="level0 parent drop-menu"><a class="level-top" href="#"><span v-t="'misc.lease'"></span></a>
      <ul class="level1">
        <li><a class="level-top"
               href='/leasing/who_is_leasing_for'><span>Dla kogo jest leasing?</span></a>
        </li>
        <li><a class="level-top" href='/leasing/what_can_we_lease'><span>Co możemy leasingować?</span></a>
        </li>
        <li><a class="level-top"
               href='/leasing/types_of_leasing'><span>Rodzaje leasingu</span></a></li>
        <li><a class="level-top"
               href='/leasing/advantage_of_leasing'><span>Zalety leasingu</span></a></li>
        <li><a class="level-top"
               href='/leasing/simplified_procedure'><span>Procedura uproszczona</span></a>
        </li>
        <li><a class="level-top"
               href='/leasing/required_documents'><span>Wymagane dokumenty</span></a></li>
        <li><a class="level-top"
               href='/leasing/leased_cars'><span>Samochody po leasingu</span></a></li>
      </ul>
    </li>

    <li class="level0 parent drop-menu"><a class="level-top" href="#"><span v-t="'misc.sale'"></span></a>
      <ul class="level1">
        <li>
          <a class="level-top" href='/sale/proven_service'><span>Sprawdzony Serwis</span></a></li>
        <li>
          <a class="level-top" href='/sale/authorized_used_car_dealer'>
            <span>Autoryzowany Sprzedawca Samochodów Używanych</span>
          </a>
        </li>
        <li>
          <a class="level-top" href='/sale/why_is_it_worth_buying_from_us'>
            <span>Dlaczego warto kupować u nas?</span>
          </a>
        </li>
      </ul>
    </li>

    <li><a class="level-top" href="/auction"><span v-t="'misc.auction'"></span></a></li>

  </ul>
</template>
<script>
import {getAccessToken} from "@/services/auth";

export default {
  name: 'NavBarMenuItems',
  computed:{

    is_logged: function () {
      try {
        if (getAccessToken()) {
          return true
        }
      } catch (e) {
        return false
      }

      return false
    }
  }
}
</script>