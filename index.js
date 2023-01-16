//Создаём Vue приложение
const app = Vue.createApp({
    data() {
        return {
            //Определяем все необходимые переменные
            last_name: '',
            name: '',
            profession: '',
            city: '',
            photo: '',
            phone: '',
            email: '',
            birthdate: '',
            education: '',
            salary: '',
            skills: '',
            about_yourself: '',
            educational_institution: '',
            faculty: '',
            specialization: '',
            graduation: '',
        }
    },
    methods: {

        validateMail() {
            this.erMail = '';
            if (!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,}$/.test(this.email))) {
                this.erMail += 'Введите почту корректно. Например example@mail.ru';
            }

        },

    }
})

//Завершаем инициализацию приложения
const vm = app.mount('#app')