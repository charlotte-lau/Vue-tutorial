var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!",
        seen: false,
        todos: [
            {text: "Learn JavaScript"},
            {text: "Learn Vue"},
            {text: "Become a web developer"}
        ]
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
});

app.todos.push({ text: "New item"})