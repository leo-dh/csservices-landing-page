import Vue from 'vue';

interface pageDict {
  [name: string]: number;
}
export default Vue.extend({
  transition(to, from) {
    const routeIds: pageDict = {
      index: 0,
      services: 1,
      aboutus: 2,
      contactus: 3,
    };
    if (!(from?.name && to?.name)) {
      return 'page';
    }
    const fromVal = routeIds[from.name];
    const toVal = routeIds[to.name];
    if (fromVal < toVal) {
      return 'slide-left';
    } else if (fromVal > toVal) {
      return 'slide-right';
    } else {
      return 'page';
    }
  },
});
