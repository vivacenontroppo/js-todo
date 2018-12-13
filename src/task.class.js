export class Task {
    constructor(title, priority, isChecked) {
        this.title = title;
        this.priority = priority;
        this.isChecked = isChecked
    }ż
    toggleCheck() {
        this.isChecked = !this.isChecked
    }
};
