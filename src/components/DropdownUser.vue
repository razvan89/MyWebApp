<template>
    <b-nav-item-dropdown :text="userMessage" right class="user-area">
        <b-dropdown-item href="/">Sign Out</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
    export default {
        computed: {
            userMessage: function () {
                return 'Welcome, ' + this.$root.username;
            }
        }
    }
</script>
