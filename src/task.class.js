class Task{
    constructor(title, priority) {
        this.title = title;
        this.priority = priority;
        this.isChecked = false;
    }
    check(){
        this.isChecked = true
    }
};

export { Task };