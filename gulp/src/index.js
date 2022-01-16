new Vue({
    el: '#app',
    data(){
        return {
            text: 'this is a gulp demo'
        }
    },
    components: {
        JsxTest: {
            render(){
                return <div>this is a jsx demo</div>
            }
        }
    }
})