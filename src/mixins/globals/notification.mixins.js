export default {
    methods: {
        $notify (message, type, options) {
            const config = {
                title: ('error' === type ? 'Error' : 'Success'),
                autoHideDelay: 3000,
                variant: ('error' === type ? 'danger' : 'success'),
                ...options
            };
            
            this.$bvToast.toast(message, config);
        }
    }
};