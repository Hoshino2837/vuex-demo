<template>
    <div>hhhhhh</div>
    <div>{{ $store.state.counter }}</div>
    <div>{{ getCount }}</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
    computed:{
        ...mapGetters(["getCount"])
    }
}
</script>