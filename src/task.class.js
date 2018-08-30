class Task{
    constructor(title) {
        this.title = title;
        this.priority = 0;
        this.isChecked = false;
    }
    check(){
        this.isChecked = true
    }
};

export { Task };
