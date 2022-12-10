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

})

//Завершаем инициализацию приложения
const vm = app.mount('#app')