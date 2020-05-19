<template>
    <div id="layout">
        <l-header></l-header>
        <l-content></l-content>
        <l-footer></l-footer>
    </div>
</template>

<script>
    import LHeader from "./lheader/index";
    import LContent from "./lcontent/index";
    import LFooter from "./lfooter/index";
    export default {
        name: "Layout",
        components: {LFooter, LContent, LHeader}
    }
</script>

<style scoped>

</style>