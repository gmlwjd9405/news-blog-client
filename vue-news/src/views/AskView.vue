<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>


<script>
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
};

/*
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    // #4 -> in fetchedAsk (vuex의 getters 속성명과 동일)
    ...mapGetters([
      "fetchedAsk" // 배열 표기법
    ])

    // #3 -> in askItems
    // ...mapGetters({
    //   askItems: 'fetchedAsk' // 객체 표기법
    // }),

    // #2 -> in askItems
    // ...mapState({
    //   askItems: state => state.ask
    // }),

    // #1 -> in ask
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  }
};
*/
</script>