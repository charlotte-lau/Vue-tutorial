Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!",
        seen: false,
        todos: [
            {id:0, text: "Learn JavaScript"},
            {id:1, text: "Learn Vue"},
            {id:2, text: "Become a web developer"}
        ]
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
});
