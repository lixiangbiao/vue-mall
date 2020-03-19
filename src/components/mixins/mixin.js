const myMixin = {
    data() {
        return {
            msg_mixins: 'mixins',
            msg: '123'
        }
    },
    created() {
        console.log('混入对象的钩子被调用')
    },
    methods: {
        foo: function () {
            console.log('foo')
        },
        conflicting: function () {
            console.log('from mixin')
        }
    }
}
export default myMixin