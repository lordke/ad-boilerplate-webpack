import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
// import { mapMutations } from 'node_modules/vuex/types/index';

export const authComputed = {
  ...mapState('auth', ['currentUser']),
  ...mapGetters('auth', ['loggedIn']),
}

export const testComputed = {
  ...mapState('test', [
    'amount',
    'people',
    'base_price',
    'real_price',
    'real_price',
    'add_price',
    'count_max',
    'count_min',
    'gender',
    'trade',
    'order_id',
    'total_fee',
    'sign',
  ]), // 总价
  ...mapGetters('test', ['time']),
}

export const authMethods = mapActions('auth', ['logIn', 'logOut'])
export const testMethods = mapMutations('test', [
  'setAmount',
  'setPeople',
  'setCountMax',
  'setCountMin',
  'setBasePrice',
  'setGender',
  'setRealPrice',
  'setAddPrice',
  'addLabel',
  'removeLabel',
  'setTrade',
  'setAdPay',
])
